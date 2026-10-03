import { Metadata } from 'next';
import AboutView from '../../src/components/AboutView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Our Web Development Agency',
  description:
    'Who runs Web Total Solution, how a project runs from discovery call to launch, our Kolkata and Delhi offices, and what every client gets in writing.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/about',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.webtotalsolution.com/about',
    siteName: 'Web Total Solution',
    title: 'About Our Web Development Agency | Web Total Solution',
    description:
      'Who we are, how we work, where our offices are and what every client gets in writing.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Web Total Solution' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Our Web Development Agency | Web Total Solution',
    description:
      'Who we are, how we work, where our offices are and what every client gets in writing.',
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
