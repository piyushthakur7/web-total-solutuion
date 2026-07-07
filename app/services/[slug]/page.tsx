import { SERVICES_DATA } from '../../../src/data';
import ServiceDetailView from '../../../src/components/ServiceDetailView';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];
  
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} | Web Total Solution`,
    description: service.subtitle,
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
