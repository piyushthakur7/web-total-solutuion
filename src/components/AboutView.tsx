import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { CLIENT_COMMITMENTS, OFFICES } from '../siteContent';
import FounderSection from './FounderSection';
import ProcessSection from './ProcessSection';
import FinalCTA from './FinalCTA';

/**
 * About page: who runs the agency, how a project runs, where we are and what
 * is put in writing. Every claim here is drawn from siteContent.
 */
export default function AboutView() {
  return (
    <div className="pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="text-center pt-16 pb-8 space-y-5 max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full text-brand-blue text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Us</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          About Web Total Solution
        </h1>
        <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
          We are a web development agency with offices in Kolkata and Delhi, building fast,
          SEO-optimised business websites that help companies attract customers, build trust and
          grow online.
        </p>
      </section>

      {/* Founder */}
      <FounderSection />

      {/* How we work */}
      <ProcessSection />

      {/* Offices */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
              Where We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="bg-white border border-slate-100 rounded-3xl p-7 sm:p-9 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{office.city} Office</h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {office.lines[0]},<br />
                  {office.lines[1]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-blue hover:underline"
            >
              <span>Maps, phone and email on the contact page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What we put in writing on every project. */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 w-72 h-72 bg-brand-blue/15 rounded-full filter blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">What every client gets in writing</h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {CLIENT_COMMITMENTS.map((commitment) => (
                  <li key={commitment} className="flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-px" />
                    <span className="text-sm text-slate-300 leading-relaxed">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-10 pt-6 border-t border-white/10">
              <Link
                href="/portfolio"
                className="inline-flex items-center space-x-2 text-sm font-bold text-white hover:text-brand-blue transition-colors"
              >
                <span>See the live client websites we have built</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
