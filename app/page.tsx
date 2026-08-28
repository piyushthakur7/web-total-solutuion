import { Metadata } from 'next';
import HomeView from '../src/components/HomeView';
import JsonLd, { faqSchema } from '../src/components/JsonLd';
import { HOME_FAQS } from '../src/siteContent';

const title = 'Professional Business Website Development | Web Total Solution';
const description =
  'We build fast, modern, SEO-optimised business websites that help businesses attract customers, build trust and generate more leads. Book a free consultation.';

// Portfolio content is served from InsForge; re-check every 5 minutes.
export const revalidate = 300;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://www.webtotalsolution.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.webtotalsolution.com',
    siteName: 'Web Total Solution',
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Total Solution — professional business website development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <HomeView />
    </>
  );
}
