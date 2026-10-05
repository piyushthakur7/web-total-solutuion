import { Metadata } from 'next';
import AboutView from '../../src/components/AboutView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';

export const metadata: Metadata = {
  title: 'About the Studio',
  description:
    'Web Total Solution is a founder-led web studio in Kolkata and Delhi, run by Piyush Thakur. Who you work with, how decisions are approved and what you get in writing.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/about',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.webtotalsolution.com/about',
    siteName: 'Web Total Solution',
    title: 'About the Studio | Web Total Solution',
    description:
      'A founder-led web studio in Kolkata and Delhi. Who you work with and what you get in writing.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Web Total Solution' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About the Studio | Web Total Solution',
    description:
      'A founder-led web studio in Kolkata and Delhi. Who you work with and what you get in writing.',
    images: ['/og-image.png'],
  },
};

export default function About() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.webtotalsolution.com/' },
          { name: 'About', url: 'https://www.webtotalsolution.com/about' },
        ])}
      />
      <AboutView />
    </>
  );
}
