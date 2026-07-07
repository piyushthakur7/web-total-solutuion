import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Web Total Solution',
  description: 'Privacy Policy and data handling practices for Web Total Solution.',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 prose-headings:text-slate-900 prose-a:text-brand-blue space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p>
              At Web Total Solution, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or use our services. Please read this privacy policy carefully. If you do not agree 
              with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, 
                email address, and telephone number that you voluntarily give to us when requesting a quote or contacting us.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, 
                such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. 
              Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to your product and customer service requests.</li>
              <li>Deliver targeted advertising, coupons, newsletters, and other information regarding our website to you.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. 
              While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
              that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission 
              can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">6. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p><strong>Web Total Solution</strong></p>
              <p>Pachpota, Garia</p>
              <p>Kolkata, West Bengal 700152</p>
              <p>Email: <a href="mailto:info@webtotalsolution.com" className="font-medium hover:underline">info@webtotalsolution.com</a></p>
              <p>Phone: +91 6291 519 364</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
