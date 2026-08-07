import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '../src/data';
import { LANDING_PAGE_SLUGS } from '../src/landingPages';
import { createClient } from '../src/utils/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.webtotalsolution.com';

  const staticRoutes = [
    '',
    '/services',
    '/portfolio',
    '/pricing',
    '/contact',
    '/terms',
    '/privacy',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Conversion landing pages — high priority, they are the paid-traffic targets.
  const landingRoutes = LANDING_PAGE_SLUGS.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const serviceRoutes = Object.keys(SERVICES_DATA).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Fetch blogs dynamically
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const supabase = await createClient();
    const { data: blogs } = await supabase
      .from('blogs')
      .select('slug, created_at')
      .eq('published', true);

    if (blogs) {
      blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  return [...staticRoutes, ...landingRoutes, ...serviceRoutes, ...blogRoutes];
}
