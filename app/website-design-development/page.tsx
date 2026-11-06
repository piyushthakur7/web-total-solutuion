import { getPricingMarket } from '../../src/pricing.server';
import { localizeWebsiteContent } from '../../src/pricing';
import type { Metadata } from 'next';
import CampaignPage from '../../src/components/ads/CampaignPage';
import { ADS_PATH } from '../../src/adsLanding';
import { SITE_URL, LANDING_PAGE_PACKAGE, formatUsd } from '../../src/siteContent';

const title = `Website Design & Development from ${formatUsd(LANDING_PAGE_PACKAGE.from)} USD`;
const description = 'A professional, mobile-friendly website for your business. Explore real projects and request a free consultation from Web Total Solution. Final scope confirmed in writing.';
export async function generateMetadata(): Promise<Metadata> {
  return localizeWebsiteContent({
  title, description, alternates: { canonical: `${SITE_URL}${ADS_PATH}` },
  // Paid campaign destination: keep the main service pages as organic search targets.
  robots: { index: false, follow: true },
  openGraph: { title, description, url: `${SITE_URL}${ADS_PATH}`, images: ['/og-image.png'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
  }, await getPricingMarket());
}

export default function WebsiteCampaignPage() {
  const mode = process.env.WEBSITE_ENQUIRY_MODE || (process.env.NODE_ENV === 'production' ? 'live' : 'mock');
  return <CampaignPage preview={mode !== 'live'} />;
}
