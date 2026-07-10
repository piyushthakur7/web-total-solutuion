import { SERVICES_DATA } from '../../../src/data';
import ServiceDetailView from '../../../src/components/ServiceDetailView';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];
  
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} | Web Total Solution`,
    description: service.subtitle,
    alternates: {
      canonical: `https://www.webtotalsolution.com/services/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${service.title} | Web Total Solution`,
      description: service.subtitle,
      url: `https://www.webtotalsolution.com/services/${resolvedParams.slug}`,
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}
