import { Metadata } from 'next';
import PricingView from '../../src/components/PricingView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';

export const metadata: Metadata = {
  title: 'Website Development Pricing & Custom Quotes',
  description:
    'Transparent, project-based pricing for professional business websites, redesigns and online stores. Every quote is fixed in writing after a free consultation.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/pricing',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.webtotalsolution.com/pricing',
    siteName: 'Web Total Solution',
    title: 'Website Development Pricing | Web Total Solution',
    description:
      'Project-based pricing scoped to your business, with the full cost confirmed in writing before work begins.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Web Total Solution pricing' }],
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
