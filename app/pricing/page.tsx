import { Metadata } from 'next';
import PricingView from '../../src/components/PricingView';

export const metadata: Metadata = {
  title: 'Pricing Plans | Web Total Solution',
  description: 'Transparent and competitive pricing for custom web development, SaaS solutions, E-commerce, and digital marketing packages.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/pricing',
  },
};

export default function Pricing() {
  return <PricingView />;
}
