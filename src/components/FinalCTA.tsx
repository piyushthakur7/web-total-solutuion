import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
      <div className="bg-slate-900 text-white rounded-3xl max-w-7xl mx-auto px-6 sm:px-10 py-14 md:py-20 text-center relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-blue/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.15]">
            {headline}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed max-w-xl mx-auto">{text}</p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
            <Link
              href={contactHref}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold tracking-wide px-8 py-4 rounded-xl shadow-lg shadow-brand-blue/25 hover:shadow-xl transition-all inline-flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold tracking-wide px-8 py-4 rounded-xl shadow-lg transition-all inline-flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 pt-4">
            {HERO_TRUST_BADGES.map((badge) => (
              <li key={badge} className="flex items-center space-x-1.5 text-xs font-semibold text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{badge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
