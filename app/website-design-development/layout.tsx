import CampaignMeasurement from '../../src/components/ads/CampaignMeasurement';

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<CampaignMeasurement /></>;
}
