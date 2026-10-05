import { Metadata } from 'next';
import ContactView from '../../src/components/ContactView';
import JsonLd, { breadcrumbSchema } from '../../src/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact: Request a Discovery Call',
  description:
    'Tell Web Total Solution about your website or product project. We reply within one working day, agree the scope with you and send a written quote.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.webtotalsolution.com/contact',
    siteName: 'Web Total Solution',
    title: 'Contact | Web Total Solution',
    description:
      'Tell us about the project. We reply within one working day and send a written quote after a scope review.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Web Total Solution' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Web Total Solution',
    description:
      'Tell us about the project. We reply within one working day and send a written quote after a scope review.',
    images: ['/og-image.png'],
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
            name: 'Contact Web Total Solution',
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
