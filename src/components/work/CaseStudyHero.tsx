import React from 'react';
import Link from 'next/link';
import { WorkCaseStudy } from '../../work';
import WorkVisual from './WorkVisual';

/** Hero: project name, positioning line, project facts and the lead visual. */
export default function CaseStudyHero({ study }: { study: WorkCaseStudy }) {
  const dark = study.visual.type === 'workflow';

  const facts = [
    { label: 'Industry', value: study.industry },
    { label: 'Services', value: study.services.join(', ') },
    // Only shown once the real timeline is known.
    ...(study.timeline ? [{ label: 'Timeline', value: study.timeline }] : []),
    { label: 'Platform', value: study.platform },
  ];

  return (
    <section className={dark ? 'bg-slate-900 text-white' : ''}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-24">
        <nav aria-label="Breadcrumb" className={`text-[11px] font-mono uppercase tracking-widest ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          <Link href="/work" className={`inline-block py-2 transition-colors ${dark ? 'hover:text-white' : 'hover:text-slate-900'}`}>
            Work
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span>{study.category}</span>
        </nav>

        <h1 className="mt-10 sm:mt-14 max-w-5xl">
          <span className="block text-sm font-extrabold uppercase tracking-[0.2em] text-brand-blue">
            {study.name}
          </span>
          <span className={`block mt-5 text-[2.25rem] leading-[1.08] sm:text-6xl lg:text-7xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
            {study.positioning}
          </span>
        </h1>

        <dl className={`mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 border-t pt-8 ${dark ? 'border-white/10' : 'border-slate-200'}`}>
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className={`text-[11px] font-mono uppercase tracking-widest ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                {fact.label}
              </dt>
              <dd className={`mt-2 text-sm font-semibold leading-relaxed ${dark ? 'text-slate-100' : 'text-slate-900'}`}>
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 sm:mt-16">
          <WorkVisual study={study} sizes="(min-width: 1280px) 1216px, 100vw" priority detailed />
        </div>
      </div>
    </section>
  );
}
