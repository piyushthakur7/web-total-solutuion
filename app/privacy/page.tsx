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
      lastUpdated="26 October 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        Web Total Solution respects your privacy. This policy explains what information we collect when you visit this
        website or send us an enquiry, and how we use it.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Information you send us:</strong> your name and email address, phone or WhatsApp number where requested,
          and any optional business name, business type, current website, requested website type, budget, timeline and project details. You provide
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

      <h2>Campaign measurement and your choices</h2>
      <p>
        Our website design campaign page can use Google Analytics and Google Ads to measure visits, successful enquiries
        and clicks on phone or WhatsApp links. Where configured, these tags load only after you choose to allow measurement.
        You can decline or change your choice using Measurement preferences on the campaign page. The enquiry form works
        without measurement. Contact details and project descriptions are not sent to Google as measurement events.
      </p>
      <p>
        If you allow measurement, campaign parameters and advertising click identifiers from your visit may be saved in
        session storage for up to 30 minutes and included with your enquiry to help us understand its source. Google may
        use cookies for measurement. Your measurement preference is saved in local storage. A temporary enquiry confirmation
        is kept in session storage so the next-steps page can confirm a submission. Phone and WhatsApp clicks show interest;
        they do not establish that an enquiry or qualified lead was received.
      </p>

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
