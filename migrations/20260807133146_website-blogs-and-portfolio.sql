-- Web Total Solution marketing site: blog + portfolio content tables.
-- Replaces the previous Supabase-backed `blogs` table and the hardcoded
-- PORTFOLIO_ITEMS array in src/data.ts.

-- ---------------------------------------------------------------------------
-- Admin allow-list
-- ---------------------------------------------------------------------------
-- Signup is open on this project, so "authenticated" is NOT a safe proxy for
-- "site admin" — anyone who registers could otherwise publish to the website.
-- Writes are gated on explicit membership in this table instead.
CREATE TABLE IF NOT EXISTS public.site_admins (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.site_admins ENABLE ROW LEVEL SECURITY;

-- SECURITY DEFINER so RLS policies on other tables can call it without
-- recursing back through site_admins' own policies.
CREATE OR REPLACE FUNCTION public.is_site_admin()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public, auth, pg_catalog
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.site_admins WHERE user_id = auth.uid()
  );
$$;

REVOKE ALL ON public.site_admins FROM anon, authenticated;
GRANT SELECT ON public.site_admins TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_site_admin() TO anon, authenticated;

CREATE POLICY site_admins_read_self ON public.site_admins
  FOR SELECT TO authenticated
  USING (user_id = auth.uid());

-- ---------------------------------------------------------------------------
-- Blogs
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT,
  image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT FALSE,
  publish_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS blogs_public_listing_idx
  ON public.blogs (published, publish_date DESC);

ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.blogs FROM anon, authenticated;
GRANT SELECT ON public.blogs TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.blogs TO authenticated;

-- Visitors only ever see posts that are published and past their publish date.
CREATE POLICY blogs_public_read ON public.blogs
  FOR SELECT TO anon
  USING (published = TRUE AND publish_date <= NOW());

-- Admins see everything (including drafts and scheduled posts) so the
-- dashboard can list them; other signed-in users get the public view.
CREATE POLICY blogs_authenticated_read ON public.blogs
  FOR SELECT TO authenticated
  USING (public.is_site_admin() OR (published = TRUE AND publish_date <= NOW()));

CREATE POLICY blogs_admin_insert ON public.blogs
  FOR INSERT TO authenticated
  WITH CHECK (public.is_site_admin());

CREATE POLICY blogs_admin_update ON public.blogs
  FOR UPDATE TO authenticated
  USING (public.is_site_admin())
  WITH CHECK (public.is_site_admin());

CREATE POLICY blogs_admin_delete ON public.blogs
  FOR DELETE TO authenticated
  USING (public.is_site_admin());

CREATE TRIGGER blogs_updated_at
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION system.update_updated_at();

-- ---------------------------------------------------------------------------
-- Portfolio projects
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.portfolio_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Stable, human-readable key. Matches the old PortfolioItem.id values so
  -- existing links and anchors keep working.
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL
    CHECK (category IN ('SaaS', 'E-Commerce', 'Corporate', 'Landing Page')),
  description TEXT NOT NULL,
  highlight TEXT,
  image_url TEXT NOT NULL,
  website_url TEXT,
  tech_stack TEXT[] NOT NULL DEFAULT '{}',
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS portfolio_projects_listing_idx
  ON public.portfolio_projects (published, sort_order, created_at DESC);

CREATE INDEX IF NOT EXISTS portfolio_projects_category_idx
  ON public.portfolio_projects (category)
  WHERE published = TRUE;

ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.portfolio_projects FROM anon, authenticated;
GRANT SELECT ON public.portfolio_projects TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.portfolio_projects TO authenticated;

CREATE POLICY portfolio_public_read ON public.portfolio_projects
  FOR SELECT TO anon
  USING (published = TRUE);

CREATE POLICY portfolio_authenticated_read ON public.portfolio_projects
  FOR SELECT TO authenticated
  USING (public.is_site_admin() OR published = TRUE);

CREATE POLICY portfolio_admin_insert ON public.portfolio_projects
  FOR INSERT TO authenticated
  WITH CHECK (public.is_site_admin());

CREATE POLICY portfolio_admin_update ON public.portfolio_projects
  FOR UPDATE TO authenticated
  USING (public.is_site_admin())
  WITH CHECK (public.is_site_admin());

CREATE POLICY portfolio_admin_delete ON public.portfolio_projects
  FOR DELETE TO authenticated
  USING (public.is_site_admin());

CREATE TRIGGER portfolio_projects_updated_at
  BEFORE UPDATE ON public.portfolio_projects
  FOR EACH ROW
  EXECUTE FUNCTION system.update_updated_at();
