import React from 'react';
import Link from 'next/link';
import WhatsAppIcon from './WhatsAppIcon';
import { HERO_TRUST_BADGES, WHATSAPP_URL } from '../siteContent';

/**
 * Closing conversion block. Reused verbatim across the homepage and every
 * landing page so the final ask is consistent.
 */
export default function FinalCTA({
  headline = 'Ready to Grow Your Business Online?',
  text = 'Book a free consultation today and discover how a professional website can help you generate more customers.',
  contactHref = '/contact',
}: {
  headline?: string;
  text?: string;
  contactHref?: string;
}) {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-deep px-6 py-12 text-white sm:px-12 md:py-16 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <h2 className="font-display text-display">{headline}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{text}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
            <Link href={contactHref} className="btn btn-paper">
              Book a free consultation
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line-dark"
            >
              <WhatsAppIcon className="size-4" />
              <span>Message us on WhatsApp</span>
            </a>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/25 pt-6 text-sm text-white/75">
          {HERO_TRUST_BADGES.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
