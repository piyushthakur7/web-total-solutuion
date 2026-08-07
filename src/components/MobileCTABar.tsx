import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../siteContent';

/**
 * Sticky bottom action bar on mobile only. Most ad traffic is on a phone, and a
 * persistent call/WhatsApp/quote row removes the need to scroll back to a CTA.
 * Desktop keeps the floating WhatsApp button instead.
 */
export default function MobileCTABar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_20px_rgba(15,23,43,0.08)] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 gap-2 p-2.5">
        <a
          href="tel:+916291519364"
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-slate-100 text-slate-800 active:scale-95 transition-transform"
          aria-label="Call Web Total Solution"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wide mt-1">Call</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-[#25D366] text-white active:scale-95 transition-transform"
          aria-label="Chat with us on WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wide mt-1">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-2 rounded-xl bg-brand-blue text-white active:scale-95 transition-transform"
        >
          <span className="text-sm font-extrabold leading-none">Free</span>
          <span className="text-[10px] font-bold uppercase tracking-wide mt-1">Consultation</span>
        </Link>
      </div>
    </div>
  );
}
