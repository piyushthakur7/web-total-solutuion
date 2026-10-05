import { SERVICES_DATA } from '../../../src/services';
import ServiceDetailView from '../../../src/components/ServiceDetailView';
import JsonLd, { breadcrumbSchema, faqSchema, serviceSchema } from '../../../src/components/JsonLd';
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
  const description = service.metaDescription;

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
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Web Total Solution`,
      description,
      images: ['/og-image.png'],
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
            description: service.lead,
            url,
          }),
          // The same questions are rendered visibly on the page.
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.webtotalsolution.com/' },
            { name: 'Services', url: 'https://www.webtotalsolution.com/services' },
            { name: service.shortName, url },
          ]),
        ]}
      />
      <ServiceDetailView service={service} />
    </>
  );
}
