import React from 'react';

/**
 * Standard case-study block: label and heading in a narrow left column, content
 * on the right. Every text section on a case study uses this so the page keeps
 * one rhythm.
 */
export default function CaseStudySection({
  eyebrow,
  heading,
  children,
  dark = false,
}: {
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={dark ? 'bg-slate-900 text-white' : ''}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 sm:py-24 ${
            dark ? '' : 'border-t border-slate-200'
          }`}
        >
          <div className="lg:col-span-4 space-y-4">
            <p className={`text-[11px] font-mono uppercase tracking-widest ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              {eyebrow}
            </p>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1] ${dark ? 'text-white' : 'text-slate-900'}`}>
              {heading}
            </h2>
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
