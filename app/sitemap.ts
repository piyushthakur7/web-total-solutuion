import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '../src/services';
import { LANDING_PAGE_SLUGS } from '../src/landingPages';
import { WORK_SLUGS } from '../src/work';
import { getBlogSitemapEntries } from '../src/utils/insforge/blogs';

// Blog entries come from InsForge; refresh the sitemap hourly.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.webtotalsolution.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/work',
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

  // The international landing page and our own product line. Priority matches
  // the landing pages: both are launch targets, not secondary static pages.
  const productRoutes = [
    {
      url: `${baseUrl}/law-firm-websites`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
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

  const workRoutes = WORK_SLUGS.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
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

  return [...staticRoutes, ...productRoutes, ...landingRoutes, ...workRoutes, ...serviceRoutes, ...blogRoutes];
}
