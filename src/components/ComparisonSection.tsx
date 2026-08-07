import React from 'react';
import Link from 'next/link';
import { COMPARISON_ROWS } from '../siteContent';
import { ArrowRight, Check, Minus, X } from 'lucide-react';

function Mark({ state }: { state: boolean | 'partial' }) {
  if (state === true) {
    return (
      <span className="inline-flex w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 items-center justify-center">
        <Check className="w-4 h-4" strokeWidth={3} />
      </span>
    );
  }
  if (state === 'partial') {
    return (
      <span className="inline-flex w-8 h-8 rounded-full bg-amber-500/15 text-amber-400 items-center justify-center">
        <Minus className="w-4 h-4" strokeWidth={3} />
      </span>
    );
  }
  return (
    <span className="inline-flex w-8 h-8 rounded-full bg-slate-500/15 text-slate-500 items-center justify-center">
      <X className="w-4 h-4" strokeWidth={3} />
    </span>
  );
}

/**
 * Premium positioning section. Frames the buying decision as agency vs.
 * freelancer rather than price vs. price — which is what lifts order value.
 */
export default function ComparisonSection() {
  return (
    <section className="bg-[#0F172B] py-24 sm:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-brand-blue/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Web Total Solution vs a Typical Freelancer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A website is a business asset, not a one-off deliverable. Here is what changes when it is
            built by a team that owns the outcome.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm overflow-hidden shadow-2xl">
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_140px_140px] gap-2 sm:gap-4 px-4 sm:px-8 py-5 border-b border-slate-700/50 bg-slate-900/50">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">
              What You Get
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-blue text-center px-2">
              Web Total<span className="hidden sm:inline"> Solution</span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 text-center px-2">
              Typical<span className="hidden sm:inline"> Freelancer</span>
            </span>
          </div>

          {COMPARISON_ROWS.map((row) => (
            <div
              key={row.feature}
              className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_140px_140px] gap-2 sm:gap-4 items-center px-4 sm:px-8 py-5 border-b border-slate-700/30 last:border-b-0 hover:bg-slate-800/40 transition-colors"
            >
              <div className="pr-2">
                <span className="block text-sm sm:text-base font-bold text-white leading-tight">
                  {row.feature}
                </span>
                <span className="block mt-1 text-xs text-slate-400 leading-relaxed">
                  {row.detail}
                </span>
              </div>
              <div className="flex justify-center">
                <Mark state={row.agency} />
              </div>
              <div className="flex justify-center">
                <Mark state={row.freelancer} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-brand-blue/20 transition-all cursor-pointer"
          >
            <span>Get Free Website Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-4 text-xs text-slate-500">
            No obligation. We will tell you honestly whether you need a new website or not.
          </p>
        </div>
      </div>
    </section>
  );
}
