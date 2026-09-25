import React from 'react';

/**
 * Renders a structured-data block. Kept as a component so schema stays close to
 * the page it describes instead of being duplicated in the root layout.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Builds an FAQPage schema block from a question/answer list. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** Builds a BreadcrumbList schema block from an ordered path. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Builds a Service schema block for a service or landing page. */
export function serviceSchema({
  name,
  description,
  url,
  areaServed = [
    { '@type': 'Country', name: 'India' },
    { '@type': 'City', name: 'Kolkata' },
    { '@type': 'City', name: 'Delhi' },
  ],
}: {
  name: string;
  description: string;
  url: string;
  /** Override for location pages that should declare a narrower service area. */
  areaServed?: Record<string, unknown>[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    url,
    provider: {
      '@type': 'ProfessionalService',
      // Same @id as the root layout's Organization block, so both describe one entity.
      '@id': 'https://www.webtotalsolution.com/#organization',
      name: 'Web Total Solution',
      url: 'https://www.webtotalsolution.com/',
      telephone: '+91-6291519364',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pachpota, Garia',
        addressLocality: 'Kolkata',
        postalCode: '700152',
        addressCountry: 'IN',
      },
    },
    areaServed,
  };
}
