import { Metadata } from 'next';
import ContactView from '../../src/components/ContactView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';

export const metadata: Metadata = {
  title: 'Free Website Consultation',
  description:
    'Book a free, no-obligation website consultation with Web Total Solution. Tell us about your business and get honest advice plus a fixed written quote within 24 hours.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.webtotalsolution.com/contact',
    siteName: 'Web Total Solution',
    title: 'Free Website Consultation | Web Total Solution',
    description:
      'Get honest advice and a fixed written quote within 24 hours. No obligation to proceed.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Web Total Solution' }],
  },
};

export default function Contact() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Free Website Consultation',
            url: 'https://www.webtotalsolution.com/contact',
            mainEntity: {
              '@type': 'ProfessionalService',
              name: 'Web Total Solution',
              telephone: '+91 6291 519 364',
              email: 'info@webtotalsolution.com',
              url: 'https://www.webtotalsolution.com/',
            },
          },
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.webtotalsolution.com/' },
            { name: 'Contact', url: 'https://www.webtotalsolution.com/contact' },
          ]),
        ]}
      />
      <ContactView />
    </>
  );
}
