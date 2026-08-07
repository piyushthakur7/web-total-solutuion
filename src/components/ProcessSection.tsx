import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../siteContent';

/**
 * Five-step delivery process. Reduces perceived risk before the final CTA,
 * which is where most high-ticket enquiries are won or lost.
 */
export default function ProcessSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            A Simple, Transparent 5-Step Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            You always know what is happening, what is next, and what it costs. No surprises between
            the first call and go-live.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {PROCESS_STEPS.map((item, index) => (
            <li key={item.step} className="relative group">
              {/* Connector line between steps on desktop */}
              {index < PROCESS_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] right-[-1rem] h-[2px] bg-gradient-to-r from-slate-200 to-slate-100"
                />
              )}

              <div className="h-full bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-blue/30 transition-all duration-300 flex flex-col text-center lg:text-left">
                <span className="w-14 h-14 rounded-2xl bg-slate-900 text-white font-mono font-extrabold text-lg flex items-center justify-center mx-auto lg:mx-0 shrink-0 group-hover:bg-brand-blue transition-colors duration-300 relative z-10">
                  {item.step}
                </span>
                <h3 className="mt-5 text-base font-bold text-slate-900 leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Start With a Free Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
