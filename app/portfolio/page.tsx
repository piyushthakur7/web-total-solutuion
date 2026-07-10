import { Metadata } from 'next';
import PortfolioView from '../../src/components/PortfolioView';

export const metadata: Metadata = {
  title: 'Our Portfolio & Case Studies | Web Total Solution',
  description: 'View our successful projects and case studies. See how Web Total Solution has transformed businesses with custom software and website development.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/portfolio',
  },
};

export default function Portfolio() {
  return <PortfolioView />;
}
