"use client";

import Link from 'next/link';
import React from 'react';
import { Check, ArrowRight, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { STARTUP_PACKAGES } from '../siteContent';

/**
 * Investment page. Positioned for startups: packages are sold on strategy,
 * design and engineering rather than page count, and priced in USD.
 */

export default function PricingView() {
  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="text-center pt-16 space-y-5 max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3.5 py-1.5 rounded-full text-brand-blue text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Built for Startups</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Built for startups that care about conversion, not just aesthetics.
        </h1>
        <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
          Strategy, UI/UX and high-performance Next.js development — from first wireframe to
          production launch.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-brand-blue/20 transition-all inline-flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-7 py-4 rounded-xl font-bold tracking-wide transition-all inline-flex items-center justify-center cursor-pointer"
          >
            See Our Work
          </Link>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {STARTUP_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                pkg.highlight
                  ? 'bg-slate-900 text-white shadow-xl border-2 border-brand-blue relative lg:-translate-y-2'
                  : 'bg-slate-50/50 border border-slate-100 hover:border-slate-200'
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[11px] uppercase tracking-widest font-extrabold px-3.5 py-1 rounded-full shadow-sm flex items-center space-x-1.5 whitespace-nowrap">
                  <Star className="w-3 h-3 fill-white text-white" />
                  <span>Best for Funded Startups</span>
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h2 className={`text-xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.name}
                  </h2>
                  <p className={`text-xs mt-1.5 leading-relaxed ${pkg.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {pkg.audience}
                  </p>
                </div>

                <div className="flex items-baseline flex-wrap gap-x-2">
                  <span className={`text-xs font-bold uppercase tracking-widest ${pkg.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                    From
                  </span>
                  <span className={`text-4xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-slate-950'}`}>
                    ${pkg.from.toLocaleString('en-US')}
                  </span>
                  <span className={`text-xs ${pkg.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                    {pkg.priceNote}
                  </span>
                </div>

                <ul className={`space-y-3.5 text-xs pt-6 border-t ${pkg.highlight ? 'text-slate-300 border-white/10' : 'text-slate-600 border-slate-200/60'}`}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href={`/contact?type=${encodeURIComponent(pkg.projectType)}&details=${encodeURIComponent(
                    `I am interested in the ${pkg.name}. Here is a bit about my startup:`
                  )}`}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center space-x-2 ${
                    pkg.highlight
                      ? 'bg-brand-blue hover:bg-brand-blue/90 text-white shadow'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span>{pkg.cta}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-start justify-center space-x-2.5 text-xs text-slate-500 max-w-2xl mx-auto text-center">
          <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0 mt-px" />
          <p className="text-left sm:text-center">
            Prices shown are starting points in USD. Your final quote is fixed in writing after the
            call — no hidden fees, and you own the code and content outright.
          </p>
        </div>
      </section>

      {/* Enterprise callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/60 border border-slate-100 py-12 text-center rounded-3xl p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-950">
            Need a custom platform, integration or web application?
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
            We build custom booking systems, customer portals, CRM integrations and secure web
            applications. Tell us the problem and we will scope the solution.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?type=SaaS%20%2F%20Web%20Application"
              className="text-sm font-bold text-brand-blue hover:underline cursor-pointer"
            >
              Discuss a custom project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
