import { SERVICES_DATA } from '../../../src/data';
import ServiceDetailView from '../../../src/components/ServiceDetailView';
import JsonLd, { breadcrumbSchema, serviceSchema } from '../../../src/components/JsonLd';
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

  const url = `https://www.webtotalsolution.com/services/${resolvedParams.slug}`;
  // Meta descriptions read better as a real sentence than a tagline.
  const description = `${service.subtitle}. ${service.content.overview}`.slice(0, 158);

  return {
    title: service.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Web Total Solution`,
      description,
      url,
      siteName: 'Web Total Solution',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: '/logo_new.png', width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Web Total Solution`,
      description,
      images: ['/logo_new.png'],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  const url = `https://www.webtotalsolution.com/services/${resolvedParams.slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.content.overview,
            url,
          }),
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.webtotalsolution.com/' },
            { name: 'Services', url: 'https://www.webtotalsolution.com/services' },
            { name: service.title, url },
          ]),
        ]}
      />
      <ServiceDetailView service={service} />
    </>
  );
}
