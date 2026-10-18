-- Remove Spellzee from the portfolio (8 October 2026).
--
-- ALREADY APPLIED by the site owner on 8 October 2026 (first unpublished, then
-- deleted). Kept so the migration history matches the live database.
--
-- We do not have Spellzee's permission to show its site as our work. The
-- bundled PORTFOLIO_ITEMS entry and the image in public/portfolio are removed
-- in the same change; this removes the row the live site serves from InsForge.

DELETE FROM public.portfolio_projects
WHERE slug = 'spellzee';
