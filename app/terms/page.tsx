import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Web Total Solution',
  description: 'Terms of Service and usage conditions for Web Total Solution.',
};

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 prose-headings:text-slate-900 prose-a:text-brand-blue space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Web Total Solution website and services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, then you may not access the service. These terms apply to all visitors, 
              users, and others who access or use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, 
              functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, 
              the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or 
              licensed to us, and are protected by copyright and trademark laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>All registration and contact information you submit will be true, accurate, current, and complete.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              <li>Your use of the Site will not violate any applicable law or regulation.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">4. Services and Projects</h2>
            <p>
              When engaging Web Total Solution for digital projects, specific terms regarding deliverables, timelines, 
              costs, and maintenance will be outlined in a separate Statement of Work (SOW) or project agreement. 
              These Terms of Service govern the general usage of our public platforms and initial inquiries.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, 
              indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, 
              loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility 
              of such damages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">6. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, 
              please contact us at:
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
