import { Metadata } from 'next';
import PricingView from '../../src/components/PricingView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';

export const metadata: Metadata = {
  title: 'Startup Website Pricing | Landing Pages & Marketing Sites',
  description:
    'Strategy, UI/UX and Next.js development for startups. Landing page sprints from $1,200, startup marketing sites from $2,500, custom product websites from $5,000.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/pricing',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.webtotalsolution.com/pricing',
    siteName: 'Web Total Solution',
    title: 'Startup Website Pricing | Web Total Solution',
    description:
      'Strategy, UI/UX and high-performance Next.js development for startups — from first wireframe to production launch.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Web Total Solution pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Website Pricing | Web Total Solution',
    description:
      'Strategy, UI/UX and high-performance Next.js development for startups — from first wireframe to production launch.',
    images: ['/og-image.png'],
  },
};

export default function Pricing() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.webtotalsolution.com/' },
          { name: 'Pricing', url: 'https://www.webtotalsolution.com/pricing' },
        ])}
      />
      <PricingView />
    </>
  );
}
