import { Metadata } from 'next';
import LandingPageView from '../../src/components/LandingPageView';
import JsonLd, { breadcrumbSchema, faqSchema, serviceSchema } from '../../src/components/JsonLd';
import { LANDING_PAGES } from '../../src/landingPages';

const config = LANDING_PAGES['website-development-company-kolkata'];
const url = `https://www.webtotalsolution.com/${config.slug}`;

// Portfolio content is served from InsForge; re-check every 5 minutes.
export const revalidate = 300;

export const metadata: Metadata = {
  title: { absolute: config.meta.title },
  description: config.meta.description,
  keywords: config.meta.keywords,
  alternates: { canonical: url },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url,
    siteName: 'Web Total Solution',
    title: config.meta.title,
    description: config.meta.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: config.h1 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.meta.title,
    description: config.meta.description,
    images: ['/og-image.png'],
  },
};

export default function WebsiteDevelopmentKolkataPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: config.serviceName,
            description: config.meta.description,
            url,
            areaServed: [
              {
                '@type': 'City',
                name: 'Kolkata',
                containedInPlace: { '@type': 'State', name: 'West Bengal' },
              },
            ],
          }),
          faqSchema(config.faqs),
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.webtotalsolution.com/' },
            { name: config.serviceName, url },
          ]),
        ]}
      />
      <LandingPageView config={config} />
    </>
  );
}
