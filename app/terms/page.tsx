import React from 'react';
import { Metadata } from 'next';
import LegalPage from '../../src/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service and usage conditions for Web Total Solution.',
  alternates: {
    canonical: 'https://www.webtotalsolution.com/terms',
  },
};

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      summary="The terms for using this website. Client projects are governed by their own written agreement."
      lastUpdated="5 October 2026"
    >
      <h2>1. Agreement to these terms</h2>
      <p>
        By using the Web Total Solution website you agree to these Terms of Service. If you do not agree with any part
        of them, please do not use the site. They apply to all visitors and to anyone who sends us an enquiry through
        the site.
      </p>

      <h2>2. This website’s content</h2>
      <p>
        Unless stated otherwise, the content of this website, including its text, design, graphics, source code and
        the Web Total Solution name and logo, is owned by or licensed to Web Total Solution and is protected by
        copyright and trademark law. Screenshots and names of client websites are shown to describe our work and
        remain the property of their owners.
      </p>

      <h2>3. Work we deliver to clients</h2>
      <p>
        Section 2 is about this website. It does not describe who owns work we are commissioned to produce. Ownership
        of a client’s deliverables, including the domain, hosting account, content and source code of the delivered
        website, is set out in the written project agreement for that engagement.
      </p>

      <h2>4. Services and projects</h2>
      <p>
        Prices on this website are starting prices and are not an offer to deliver any scope for a fixed fee. The
        deliverables, timeline, cost, payment milestones and support for a project are set out in a separate written
        quote or project agreement. Where that agreement and these terms differ, the agreement applies to the project.
      </p>

      <h2>5. Using the site</h2>
      <p>By using the site, you confirm that:</p>
      <ul>
        <li>The contact information you send us is accurate and is your own or sent with permission.</li>
        <li>You will not use the site for any unlawful purpose.</li>
        <li>You will not try to disrupt the site or gain access to parts of it that are not public.</li>
      </ul>

      <h2>6. Our own products</h2>
      <p>
        WTS CRM is a separate product with its own website, pricing and terms at wtscrm.com. Those terms, not these,
        govern use of WTS CRM.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the extent permitted by law, we and our directors, employees and agents are not liable to you or any third
        party for indirect, consequential, incidental, special or punitive damages, including lost profit, lost
        revenue or loss of data, arising from your use of this website.
      </p>
    </LegalPage>
  );
}
