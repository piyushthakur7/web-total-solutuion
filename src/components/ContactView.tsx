import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Clock, Instagram, Linkedin, Youtube, Twitter, CheckCircle2 } from 'lucide-react';
import LeadForm from './LeadForm';
import WhatsAppIcon from './WhatsAppIcon';
import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from '../siteContent';

const SOCIALS = [
  { href: 'https://www.instagram.com/webtotalsolution/?hl=en', label: 'Instagram', Icon: Instagram },
  { href: 'https://www.linkedin.com/company/web-total-solutions/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://www.youtube.com/channel/UCNlUYW1RyevmpKY1xUQKatA', label: 'YouTube', Icon: Youtube },
  { href: 'https://x.com/webtotalindia', label: 'X (Twitter)', Icon: Twitter },
];

const REASSURANCE = [
  'A free consultation with no obligation to proceed',
  'A fixed written quote — never an open-ended estimate',
  'Honest advice, even if that means you do not need us',
  'You own the domain, hosting, content and source code',
];

export default function ContactView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
          Free Consultation
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Let&apos;s Build Something That Grows Your Business
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Tell us about your business and what you want the website to achieve. We will come back
          within 24 hours with a recommended approach and a clear, fixed quote.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Form */}
        <div className="lg:col-span-7">
          <LeadForm source="Contact page" submitLabel="Get My Free Consultation" />
        </div>

        {/* Direct channels & reassurance */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 space-y-5 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-blue/15 rounded-full filter blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-5">
              <h2 className="text-lg font-bold tracking-tight">Prefer to Talk Right Now?</h2>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center space-x-2.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+916291519364"
                className="w-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center"
              >
                Call {PHONE_DISPLAY}
              </a>
              <p className="flex items-center justify-center space-x-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon–Sat, 10:00 AM – 7:00 PM IST</span>
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 space-y-5">
            <h2 className="text-lg font-bold text-slate-950 tracking-tight">What You Can Expect</h2>
            <ul className="space-y-3">
              {REASSURANCE.map((item) => (
                <li key={item} className="flex items-start space-x-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-px" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 space-y-5">
            <h2 className="text-lg font-bold text-slate-950 tracking-tight">Direct Channels</h2>

            <div className="flex items-start space-x-4">
              <span className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                <Mail className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-[11px] text-slate-400 uppercase tracking-widest font-bold">
                  Email
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm font-semibold text-slate-800 hover:text-brand-blue hover:underline break-all"
                >
                  {EMAIL}
                </a>
              </span>
            </div>

            <div className="flex items-start space-x-4">
              <span className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                <MapPin className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-[11px] text-slate-400 uppercase tracking-widest font-bold">
                  Office
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  Pachpota, Garia,
                  <br />
                  Kolkata, West Bengal 700152
                </span>
              </span>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <span className="block text-[11px] text-slate-400 uppercase tracking-widest font-bold mb-3">
                Follow Us
              </span>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors flex items-center space-x-1.5"
                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Location visual */}
          <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm relative group aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
              alt="Web Total Solution office location in Kolkata"
              className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              width={800}
              height={450}
              loading="lazy"
              quality={60}
              sizes="(max-width: 1024px) 100vw, 400px"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-[48%] left-[51%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="w-3.5 h-3.5 bg-brand-blue border-2 border-white rounded-full inline-block animate-ping absolute" />
              <span className="w-3.5 h-3.5 bg-brand-blue border-2 border-white rounded-full inline-block relative z-10" />
              <span className="bg-slate-900 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-md mt-1 font-mono uppercase tracking-wide">
                WTS Kolkata
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Internal links for crawl depth */}
      <nav className="border-t border-slate-200 pt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm justify-center">
        {[
          { href: '/business-website-development', label: 'Business Website Development' },
          { href: '/website-redesign', label: 'Website Redesign' },
          { href: '/ecommerce-development', label: 'E-Commerce Development' },
          { href: '/portfolio', label: 'Portfolio' },
          { href: '/pricing', label: 'Pricing' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-semibold text-slate-600 hover:text-brand-blue transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
