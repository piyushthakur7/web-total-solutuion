-- Content corrections for the marketing site (5 October 2026).
--
-- NOT YET APPLIED. This changes rows the live website reads, so it is left for
-- the site owner to run after reviewing the preview.
--
-- 1. Rewrites the one published blog article. The URL (slug) and publish date
--    are unchanged; `updated_at` moves to the time this runs, which is the
--    real revision date shown on the page as "Updated".
-- 2. Replaces three portfolio descriptions that described the wrong business:
--    FAW Dubai is a wedding design brand (not automotive or e-commerce),
--    Mechverses is a ceramic-machinery catalogue (not 3D simulation), and
--    Medara Labs is a pharmaceutical company (not a diagnostics portal).
--    The same values are in PORTFOLIO_ITEMS in src/data.ts.

-- ---------------------------------------------------------------------------
-- 1. Blog article
-- ---------------------------------------------------------------------------
-- `published` and `publish_date` are not touched, so the
-- blogs_normalise_publish_date trigger does not fire and the original
-- publication date is preserved.
UPDATE public.blogs
SET
  title = $title$Why a fast, clear website matters for a business$title$,
  excerpt = $excerpt$What “high performance” means for a business website: speed, a clear message, pages that are easy to use and an obvious next step, with practical checks for each.$excerpt$,
  author = 'Web Total Solution',
  content = $body$<p>For many businesses, the website is the first place a customer meets them. Before a call or a visit, someone has usually looked the company up, opened the site on a phone and decided in a few seconds whether to keep reading.</p>
<p>“High performance” is often used to mean speed alone. Speed matters, but a website performs when it does four things well: it loads quickly, it says clearly what the business offers, it is easy to use, and it makes the next step obvious. This article looks at each in turn, with a check you can run on your own site.</p>
<h2>1. It loads quickly, especially on a phone</h2>
<p>A slow page loses people before they have read anything. The effect is strongest on mobile connections, where a page that feels fine on office wifi can take several seconds to appear.</p>
<p>The usual causes are simple: images far larger than the space they are shown in, fonts and scripts loaded on every page whether or not they are used, and layouts that jump around as late content arrives.</p>
<p><strong>A check you can run:</strong> open your home page on your phone using mobile data, not wifi. Count the seconds before you can read the headline. Then run the address through Google’s PageSpeed Insights, which reports where the time goes.</p>
<h2>2. It says what you do in the first screen</h2>
<p>A fast page with a vague message still fails. A visitor should be able to answer three questions without scrolling: what does this business offer, who is it for, and what can I do here?</p>
<p>Compare two headlines for the same company. “Innovative solutions for a changing world” could belong to anyone. “Payroll software for restaurants with hourly staff” tells the right visitor they are in the right place, and tells the wrong one early, which is also useful.</p>
<p><strong>A check you can run:</strong> show the top of your home page to someone outside the business for five seconds, then ask them what the company does. If they cannot say, the message needs work before the design does.</p>
<h2>3. It is easy to use</h2>
<p>Usability is mostly the absence of small obstacles. Navigation labels that match what people are looking for. Text large enough to read on a phone. Buttons that are easy to tap. Forms that ask only for what is needed, and say plainly what went wrong when something is missed.</p>
<p>For many businesses, most visits now come from phones, so it makes sense to design the small screen first and then expand the layout for larger ones. A page planned for a wide monitor and squeezed down afterwards rarely works as well.</p>
<p><strong>A check you can run:</strong> try to complete the most important task on your site, such as sending an enquiry, using only your phone and one thumb. Note every point where you had to zoom, hunt or retype.</p>
<h2>4. It makes the next step obvious</h2>
<p>Every page should lead somewhere. For most businesses that is one main action: request a quote, book a demo, start a trial or get in touch. When a page offers five equally loud options, visitors often choose none of them.</p>
<p>A clear conversion path means one primary action per page, repeated where a reader is likely to be ready for it, with the reassurance they need placed next to it: what happens after they submit, how quickly they will hear back, and what it will cost them to ask.</p>
<p><strong>A check you can run:</strong> open each of your main pages and name its primary action. If you cannot, or if the answer is different every time you look, your visitors have the same problem.</p>
<h2>What about search engines?</h2>
<p>Search engines can only rank what they can read and load. Clean page structure, descriptive titles, a sitemap and pages that load reliably give a site a sound technical base, and Google does use page experience signals as one factor among many.</p>
<p>That is a foundation, not a guarantee. Where a page ranks also depends on how useful its content is and how strong the competition is. Be cautious of anyone who promises a position.</p>
<h2>Where to start</h2>
<p>If you only have time for one thing, fix the first screen: make the headline say what you offer and for whom, and give it one clear action. Then compress the images on that page. Those two changes are cheap, and they address the two most common reasons a visitor leaves early.</p>
<p>None of this guarantees more customers. A website cannot fix an offer people do not want. What a fast, clear site does is remove the avoidable reasons for someone to give up before they have understood what you do.</p>
<p>Web Total Solution designs and builds websites for startups and growing businesses. If you would like a second opinion on your own site, <a href="/contact">tell us about it</a>.</p>$body$
WHERE slug = 'know-the-importance-of-high-performance-business-websites-in-today-s-era';

-- ---------------------------------------------------------------------------
-- 2. Portfolio descriptions
-- ---------------------------------------------------------------------------
UPDATE public.portfolio_projects
SET
  category = 'Corporate',
  description = 'Brand website for Frozen Apple Weddings, a luxury wedding design company, led by full-screen photography with a direct route to booking a consultation.',
  highlight = 'Photography First',
  tech_stack = ARRAY['React', 'Tailwind CSS', 'Consultation Booking']
WHERE slug = 'fawdubai';

UPDATE public.portfolio_projects
SET
  description = 'Catalogue website for a company trading verified second-hand machinery for the ceramic industry, built around searching the inventory and making an enquiry.',
  highlight = 'Search-Led Catalogue',
  tech_stack = ARRAY['React', 'Tailwind CSS', 'Inventory Search']
WHERE slug = 'mechverses';

UPDATE public.portfolio_projects
SET
  description = 'Business website for a pharmaceutical marketing and distribution company, organised around its product range, quality standards and enquiries.',
  highlight = 'Products and Quality',
  tech_stack = ARRAY['React', 'Tailwind CSS', 'Product Filters']
WHERE slug = 'medaralabs';
