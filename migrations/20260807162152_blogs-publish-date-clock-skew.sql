-- Fix: "Publish Immediately" could produce a post invisible to the public.
--
-- The app stamps `publish_date` using the Next.js server's clock, but the RLS
-- policy gates visibility on the *database* clock (`publish_date <= NOW()`).
-- When the app server runs even slightly ahead of Postgres — measured at ~1.8s
-- on the current host — a freshly published post stays hidden until the
-- database clock catches up. On a host with worse drift the gap is larger.
--
-- Rather than trusting any app clock, the database now stamps the publish time
-- itself whenever the intent is "publish now". A genuine future schedule (more
-- than a minute out) is preserved exactly as entered, so scheduled posts still
-- stay private until their time arrives.

CREATE OR REPLACE FUNCTION public.blogs_normalise_publish_date()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.published AND NEW.publish_date IS NOT NULL THEN
    -- Anything at, before, or within a minute of now means "publish now".
    -- The one-minute window absorbs clock skew between the app and database
    -- without ever revealing a real scheduled post early, since scheduling is
    -- always minutes or hours out.
    IF NEW.publish_date <= NOW() + INTERVAL '1 minute' THEN
      NEW.publish_date := NOW();
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS blogs_normalise_publish_date ON public.blogs;

CREATE TRIGGER blogs_normalise_publish_date
  BEFORE INSERT OR UPDATE OF published, publish_date ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION public.blogs_normalise_publish_date();
