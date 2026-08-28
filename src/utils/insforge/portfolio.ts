import { PORTFOLIO_ITEMS } from '../../data';
import { PortfolioItem } from '../../types';
import { createInsForgePublicClient, isInsForgeConfigured } from './server';

/** Shape of a row in `public.portfolio_projects`. */
export interface PortfolioProjectRow {
  id: string;
  slug: string;
  title: string;
  category: PortfolioItem['category'];
  description: string;
  highlight: string | null;
  image_url: string;
  website_url: string | null;
  tech_stack: string[];
  featured: boolean;
  sort_order: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

/**
 * Maps a database row onto the `PortfolioItem` shape the UI components already
 * use, so the switch from hardcoded data to the backend is transparent to them.
 */
function toPortfolioItem(row: PortfolioProjectRow): PortfolioItem {
  return {
    id: row.slug,
    title: row.title,
    category: row.category,
    description: row.description,
    highlight: row.highlight ?? '',
    imageUrl: row.image_url,
    techStack: row.tech_stack ?? [],
    websiteUrl: row.website_url ?? undefined,
  };
}

/**
 * Loads published portfolio projects from InsForge.
 *
 * The database is the source of truth, but it is not allowed to take the
 * portfolio page down with it: if the backend is unconfigured, erroring or
 * simply has no published rows, we serve the bundled `PORTFOLIO_ITEMS` instead.
 * That list ships with local screenshots, so a visitor never lands on an empty
 * "no projects" page during an outage. The reason is always logged.
 */
export async function getPortfolioProjects(): Promise<PortfolioItem[]> {
  if (!isInsForgeConfigured) {
    console.warn('[portfolio] InsForge is not configured; serving bundled projects.');
    return PORTFOLIO_ITEMS;
  }

  const insforge = createInsForgePublicClient();

  const { data, error } = await insforge.database
    .from('portfolio_projects')
    .select(
      'id, slug, title, category, description, highlight, image_url, website_url, tech_stack, featured, sort_order, published, created_at, updated_at'
    )
    .eq('published', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('[portfolio] Failed to load projects from InsForge:', error);
    return PORTFOLIO_ITEMS;
  }

  const projects = ((data ?? []) as PortfolioProjectRow[]).map(toPortfolioItem);

  if (projects.length === 0) {
    console.warn('[portfolio] Backend returned no published projects; serving bundled list.');
    return PORTFOLIO_ITEMS;
  }

  return projects;
}

/** Loads published projects limited to the given categories. */
export async function getPortfolioProjectsByCategory(
  categories: PortfolioItem['category'][]
): Promise<PortfolioItem[]> {
  const projects = await getPortfolioProjects();
  if (categories.length === 0) return projects;
  return projects.filter((project) => categories.includes(project.category));
}
