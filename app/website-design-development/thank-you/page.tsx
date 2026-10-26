import type { Metadata } from 'next';
import CampaignThankYou from '../../../src/components/ads/CampaignThankYou';

export const metadata: Metadata = {
  title: 'Website Enquiry · Next Steps',
  robots: { index: false, follow: false },
};
export default function ThankYouPage() { return <CampaignThankYou />; }
