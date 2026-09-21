import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '../src/data';
import { LANDING_PAGE_SLUGS } from '../src/landingPages';
import { getBlogSitemapEntries } from '../src/utils/insforge/blogs';

// Blog entries come from InsForge; refresh the sitemap hourly.
export const revalidate = 3600;

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
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Our own product line. Priority matches the landing pages: /projects is a
  // launch target in its own right, not a secondary static page.
  const productRoutes = [
    {
      url: `${baseUrl}/projects`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Conversion landing pages — high priority, they are the paid-traffic targets.
  const landingRoutes = LANDING_PAGE_SLUGS.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const serviceRoutes = Object.keys(SERVICES_DATA).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Uses the anonymous client, so this stays statically renderable — the old
  // Supabase client read cookies and forced the whole sitemap to be dynamic.
  const blogRoutes = (await getBlogSitemapEntries()).map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...landingRoutes, ...serviceRoutes, ...blogRoutes];
}
