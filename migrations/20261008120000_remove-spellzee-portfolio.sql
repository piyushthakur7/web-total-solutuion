-- Remove Spellzee from the portfolio (8 October 2026).
--
-- NOT YET APPLIED. This changes a row the live website reads, so it is left
-- for the site owner to run.
--
-- We do not have Spellzee's permission to show its site as our work. The
-- bundled PORTFOLIO_ITEMS entry and the image in public/portfolio are removed
-- in the same change; this hides the row the live site serves from InsForge.
-- The row is unpublished rather than deleted so it can be restored if
-- permission is given later. Replace the UPDATE with a DELETE to remove it
-- entirely.

UPDATE public.portfolio_projects
SET published = FALSE
WHERE slug = 'spellzee';
