import React from 'react';
import { Metadata } from 'next';
import LegalPage from '../../src/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and data handling practices for Web Total Solution.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="What information this website collects, why, and who it is shared with."
      lastUpdated="5 October 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        Web Total Solution respects your privacy. This policy explains what information we collect when you visit this
        website or send us an enquiry, and how we use it.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Information you send us:</strong> your name and email address, and, if you choose to give them, your
          phone or WhatsApp number, company or website, budget range and a description of your project. You provide
          this when you use an enquiry form or contact us by email, phone or WhatsApp.
        </li>
        <li>
          <strong>Technical information:</strong> information our hosting and backend providers record automatically
          when the site is accessed, such as IP address, browser type, the pages requested and the time of the
          request.
        </li>
      </ul>

      <h2>3. How we use it</h2>
      <ul>
        <li>To reply to your enquiry and prepare a scope and quote.</li>
        <li>To carry out a project if you become a client.</li>
        <li>To keep the website running and secure, and to understand how it is used.</li>
      </ul>
      <p>We do not sell your information.</p>

      <h2>4. Who we share it with</h2>
      <ul>
        <li>
          <strong>Service providers:</strong> companies that host this website and store enquiries on our behalf, and
          the email and messaging services we use to reply to you.
        </li>
        <li>
          <strong>Embedded maps:</strong> the contact page can show a Google map of our offices. The map loads only
          when you choose to open it, and Google then receives the request under its own privacy policy.
        </li>
        <li>
          <strong>Legal requirements:</strong> where disclosure is required by law or needed to protect our rights or
          the safety of others.
        </li>
      </ul>

      <h2>5. Security</h2>
      <p>
        We take reasonable administrative and technical measures to protect your information. No method of
        transmission or storage is completely secure, so we cannot guarantee absolute security.
      </p>

      <h2>6. Your choices</h2>
      <p>
        You can ask us what information we hold about you, or ask us to correct or delete it, by writing to the email
        address below.
      </p>
    </LegalPage>
  );
}
