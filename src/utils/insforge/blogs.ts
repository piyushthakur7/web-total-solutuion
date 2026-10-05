import { createInsForgePublicClient, isInsForgeConfigured } from './server';

export interface BlogRow {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  author: string | null;
  image_url: string | null;
  published: boolean;
  publish_date: string;
  created_at: string;
  updated_at: string;
}

/** Columns safe and cheap to fetch for list views — omits the full `content` body. */
const LIST_COLUMNS =
  'id, title, slug, excerpt, author, image_url, published, publish_date, created_at, updated_at';

export type BlogListItem = Pick<
  BlogRow,
  'id' | 'title' | 'slug' | 'excerpt' | 'author' | 'image_url' | 'published' | 'publish_date' | 'created_at' | 'updated_at'
>;

/**
 * Published posts, newest first.
 *
 * RLS already restricts anonymous callers to published posts whose publish date
 * has passed, so scheduled posts stay hidden until their time arrives without
 * the query having to filter on it.
 */
export async function getPublishedBlogs(): Promise<BlogListItem[]> {
  if (!isInsForgeConfigured) return [];

  const insforge = createInsForgePublicClient();
  const { data, error } = await insforge.database
    .from('blogs')
    .select(LIST_COLUMNS)
    .eq('published', true)
    .order('publish_date', { ascending: false });

  if (error) {
    console.error('[blogs] Failed to load posts from InsForge:', error);
    return [];
  }

  return (data ?? []) as BlogListItem[];
}

/** A single published post by slug, or null when missing / not yet live. */
export async function getBlogBySlug(slug: string): Promise<BlogRow | null> {
  if (!isInsForgeConfigured) return null;

  const insforge = createInsForgePublicClient();
  const { data, error } = await insforge.database
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    console.error(`[blogs] Failed to load post "${slug}":`, error);
    return null;
  }

  return (data as BlogRow) ?? null;
}

/** Slug + timestamp pairs for the sitemap. */
export async function getBlogSitemapEntries(): Promise<{ slug: string; updated_at: string }[]> {
  if (!isInsForgeConfigured) return [];

  const insforge = createInsForgePublicClient();
  const { data, error } = await insforge.database
    .from('blogs')
    .select('slug, updated_at')
    .eq('published', true);

  if (error) {
    console.error('[blogs] Failed to load sitemap entries:', error);
    return [];
  }

  return (data ?? []) as { slug: string; updated_at: string }[];
}

const STUDIO_BYLINE = 'Web Total Solution';

/**
 * The byline to show for a post. A named author is used as entered; an empty
 * field or a CMS role label such as "Admin" is not a person, so those posts
 * are credited to the studio.
 */
export function blogByline(author: string | null): { name: string; isPerson: boolean } {
  const name = author?.trim() ?? '';
  if (!name || /^(admin|administrator|editor)$/i.test(name) || name === STUDIO_BYLINE) {
    return { name: STUDIO_BYLINE, isPerson: false };
  }
  return { name, isPerson: true };
}

/** True when a post was revised at least a day after it was published. */
export function wasRevised(blog: { publish_date: string; updated_at?: string }) {
  if (!blog.updated_at) return false;
  return new Date(blog.updated_at).getTime() - new Date(blog.publish_date).getTime() > 24 * 60 * 60 * 1000;
}

export function formatBlogDate(value: string) {
  return new Date(value).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Kolkata',
  });
}
