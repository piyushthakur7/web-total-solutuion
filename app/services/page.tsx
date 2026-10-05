import { Metadata } from 'next';
import ServicesView from '../../src/components/ServicesView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';

export const metadata: Metadata = {
  title: 'Web Development Services',
  description:
    'Startup and marketing websites, landing pages, website redesign and product interfaces, with e-commerce, content and marketing as additional services.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.webtotalsolution.com/services',
    siteName: 'Web Total Solution',
    title: 'Web Development Services | Web Total Solution',
    description:
      'Startup websites, landing pages, redesigns and product interfaces. Who each service is for and what you receive.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Web Total Solution services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design & Development Services | Web Total Solution',
    description:
      'Startup websites, landing pages, redesigns and product interfaces. Who each service is for and what you receive.',
    images: ['/og-image.png'],
  },
};

export default function Services() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.webtotalsolution.com/' },
          { name: 'Services', url: 'https://www.webtotalsolution.com/services' },
        ])}
      />
      <ServicesView />
    </>
  );
}
