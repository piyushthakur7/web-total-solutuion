import { Metadata } from 'next';
import ServicesView from '../../src/components/ServicesView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';

export const metadata: Metadata = {
  title: 'Web Development Services',
  description:
    'Business website development, website redesign, e-commerce stores, SEO copywriting and digital marketing — built to help your business generate more leads.',
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
      'Business websites, redesigns, e-commerce stores and digital marketing built around business results.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Web Total Solution services' }],
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
