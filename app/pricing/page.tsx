import { LANDING_PAGE_PACKAGE, STARTUP_GROWTH_PACKAGE, CUSTOM_PRODUCT_PACKAGE, formatUsd } from '../../src/siteContent';
import { Metadata } from 'next';
import PricingView from '../../src/components/PricingView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';

export const metadata: Metadata = {
  title: 'Startup Website Pricing | Landing Pages & Marketing Sites',
  description:
    `Website packages with starting prices in USD: Landing Page Sprint from ${formatUsd(LANDING_PAGE_PACKAGE.from)}, Startup Growth Site from ${formatUsd(STARTUP_GROWTH_PACKAGE.from)}, Custom Product Website from ${formatUsd(CUSTOM_PRODUCT_PACKAGE.from)}. Written quote after scope review.`,
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
      'Three website packages with starting prices in USD. The written quote follows a scope review.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Web Total Solution pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Website Pricing | Web Total Solution',
    description:
      'Three website packages with starting prices in USD. The written quote follows a scope review.',
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
