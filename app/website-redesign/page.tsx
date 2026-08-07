import { Metadata } from 'next';
import LandingPageView from '../../src/components/LandingPageView';
import JsonLd, { breadcrumbSchema, faqSchema, serviceSchema } from '../../src/components/JsonLd';
import { LANDING_PAGES } from '../../src/landingPages';

const config = LANDING_PAGES['website-redesign'];
const url = `https://www.webtotalsolution.com/${config.slug}`;

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
    images: [{ url: '/logo_new.png', width: 1200, height: 630, alt: config.h1 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.meta.title,
    description: config.meta.description,
    images: ['/logo_new.png'],
  },
};

export default function WebsiteRedesignPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Website Redesign Services',
            description: config.meta.description,
            url,
          }),
          faqSchema(config.faqs),
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.webtotalsolution.com/' },
            { name: 'Website Redesign', url },
          ]),
        ]}
      />
      <LandingPageView config={config} />
    </>
  );
}
