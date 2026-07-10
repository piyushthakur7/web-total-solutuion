import { Metadata } from 'next';
import ServicesView from '../../src/components/ServicesView';

export const metadata: Metadata = {
  title: 'Our Services | Web Total Solution',
  description: 'Explore our comprehensive digital services including SaaS development, mobile applications, E-commerce platforms, and digital marketing strategies.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/services',
  },
};

export default function Services() {
  return <ServicesView />;
}
