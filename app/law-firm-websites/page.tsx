import { Metadata } from 'next';
import InternationalView from '../../src/components/InternationalView';
import JsonLd, { breadcrumbSchema, faqSchema, serviceSchema } from '../../src/components/JsonLd';
import { LAW_FIRM_PAGE } from '../../src/lawFirmPage';

const page = LAW_FIRM_PAGE;
const url = `https://www.webtotalsolution.com/${page.slug}`;

export const metadata: Metadata = {
  title: { absolute: page.meta.title },
  description: page.meta.description,
  alternates: { canonical: url },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    siteName: 'Web Total Solution',
    title: page.meta.ogTitle,
    description: page.meta.ogDescription,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: page.h1 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: page.meta.ogTitle,
    description: page.meta.ogDescription,
    images: ['/og-image.png'],
  },
};

export default function LawFirmWebsitesPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: page.serviceName,
            description: page.meta.description,
            url,
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'United Kingdom' },
              { '@type': 'Country', name: 'United Arab Emirates' },
            ],
          }),
          faqSchema(page.faqs),
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.webtotalsolution.com/' },
            { name: page.serviceName, url },
          ]),
        ]}
      />
      <InternationalView />
    </>
  );
}
