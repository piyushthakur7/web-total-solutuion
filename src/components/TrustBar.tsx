import React from 'react';
import { CAPABILITY_SIGNALS, TRUST_STATS } from '../siteContent';
import { CheckCircle2 } from 'lucide-react';

/**
 * Premium social-proof strip placed directly beneath the hero so proof is
 * visible before the visitor makes a scroll decision.
 */
export default function TrustBar({ className = '' }: { className?: string }) {
  return (
    <section className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="bg-white/90 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-xl shadow-slate-900/5 overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="px-5 py-7 sm:px-8 sm:py-9 text-center">
              <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="block mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-brand-blue">
                {stat.label}
              </span>
              <span className="block mt-1.5 text-[11px] sm:text-xs text-slate-500 leading-snug">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
            {CAPABILITY_SIGNALS.map((signal) => (
              <li key={signal} className="flex items-center space-x-1.5 text-[11px] sm:text-xs font-semibold text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
