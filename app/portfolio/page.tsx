import { Metadata } from 'next';
import PortfolioView from '../../src/components/PortfolioView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';
import { getPortfolioProjects } from '../../src/utils/insforge/portfolio';

// Portfolio content lives in the database; re-check for new work every 5 minutes.
export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Our Portfolio & Client Websites',
  description:
    'See live business websites, online stores and web platforms built by Web Total Solution for clients across manufacturing, legal, retail, hospitality and education.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/portfolio',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.webtotalsolution.com/portfolio',
    siteName: 'Web Total Solution',
    title: 'Our Portfolio & Client Websites | Web Total Solution',
    description: 'Live client websites built by Web Total Solution. See the quality for yourself.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Web Total Solution portfolio' }],
  },
};

export default async function Portfolio() {
  const projects = await getPortfolioProjects();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.webtotalsolution.com/' },
            { name: 'Portfolio', url: 'https://www.webtotalsolution.com/portfolio' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Web Total Solution Portfolio',
            url: 'https://www.webtotalsolution.com/portfolio',
            hasPart: projects.map((project) => ({
              '@type': 'CreativeWork',
              name: project.title,
              description: project.description,
              url: project.websiteUrl,
            })),
          },
        ]}
      />
      <PortfolioView projects={projects} />
    </>
  );
}
