import { Metadata } from 'next';
import ContactView from '../../src/components/ContactView';

export const metadata: Metadata = {
  title: 'Contact Us | Web Total Solution',
  description: 'Get in touch with Web Total Solution. We are here to help you build, scale, and optimize your digital presence. Reach out for a free consultation.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/contact',
  },
};

export default function Contact() {
  return <ContactView />;
}
