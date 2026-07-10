import { Metadata } from 'next';
import HomeView from '../src/components/HomeView';

export const metadata: Metadata = {
  title: 'Web Total Solution | Premier Web Development Agency',
  description: 'Elevate your brand with Web Total Solution. We build high-performance websites, scalable SaaS platforms, and enterprise E-commerce solutions.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com',
  },
};

export default function Home() {
  return <HomeView />;
}
