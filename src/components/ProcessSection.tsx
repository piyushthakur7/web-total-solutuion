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
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Layered blue waves behind the step cards */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[65%] pointer-events-none text-brand-blue"
      >
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,96C840,85,960,107,1080,128C1200,149,1320,171,1380,181.3L1440,192L1440,320L0,320Z"
            fill="currentColor"
            fillOpacity="0.06"
          />
          <path
            d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128L1440,320L0,320Z"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path
            d="M0,224L90,218.7C180,213,360,203,540,208C720,213,900,235,1080,234.7C1260,235,1350,213,1395,202.7L1440,192L1440,320L0,320Z"
            fill="currentColor"
            fillOpacity="0.16"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
