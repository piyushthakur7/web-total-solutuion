import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WORK_CASE_STUDIES, WorkCaseStudy } from '../../work';
import WorkVisual from './WorkVisual';

/** Text block shared by every feature layout on the Work page. */
function FeatureCopy({
  study,
  index,
  dark = false,
}: {
  study: WorkCaseStudy;
  index: number;
  dark?: boolean;
}) {
  return (
    <div className="space-y-6">
      <div className={`flex items-center gap-4 text-[11px] font-mono uppercase tracking-widest ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
        <span>0{index + 1}</span>
        <span className={`h-px w-8 ${dark ? 'bg-white/20' : 'bg-slate-300'}`} aria-hidden="true" />
        <span>{study.category}</span>
      </div>

      <div className="space-y-4">
        <p className={`text-sm font-extrabold uppercase tracking-[0.2em] ${dark ? 'text-brand-blue' : 'text-brand-blue'}`}>
          {study.name}
        </p>
        <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.1] ${dark ? 'text-white' : 'text-slate-900'}`}>
          {study.headline}
        </h2>
      </div>

      <p className={`text-base leading-relaxed max-w-xl ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
        {study.summary}
      </p>

      <span
        className={`inline-flex items-center gap-2 text-sm font-bold border-b pb-1 transition-colors ${
          dark
            ? 'text-white border-white/30 group-hover:border-white'
            : 'text-slate-900 border-slate-300 group-hover:border-slate-900'
        }`}
      >
        <span>View Case Study</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
      </span>
    </div>
  );
}

/**
 * /work — four curated case studies in alternating editorial layouts, rather
 * than a grid of every project we have delivered.
 */
export default function WorkView() {
  const [first, second, third, fourth] = WORK_CASE_STUDIES;

  return (
    <div className="pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
          Selected Work
        </p>
        <h1 className="mt-6 text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl">
          Digital experiences built for ambitious companies.
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
          A selection of products and websites where strategy, design and engineering came
          together to solve meaningful business problems.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 01 — visual left, copy right */}
        <article className="reveal border-t border-slate-200 py-16 sm:py-24">
          <Link
            href={`/work/${first.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            <div className="lg:col-span-7">
              <WorkVisual study={first} sizes="(min-width: 1024px) 720px, 100vw" priority />
            </div>
            <div className="lg:col-span-5">
              <FeatureCopy study={first} index={0} />
            </div>
          </Link>
        </article>

        {/* 02 — copy left, visual right */}
        <article className="reveal border-t border-slate-200 py-16 sm:py-24">
          <Link
            href={`/work/${second.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            <div className="lg:col-span-7 lg:order-2">
              <WorkVisual study={second} sizes="(min-width: 1024px) 720px, 100vw" />
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <FeatureCopy study={second} index={1} />
            </div>
          </Link>
        </article>

        {/* 03 — full-width feature */}
        <article className="reveal border-t border-slate-200 py-16 sm:py-24">
          <Link href={`/work/${third.slug}`} className="group block space-y-10 sm:space-y-14">
            <WorkVisual study={third} sizes="(min-width: 1280px) 1216px, 100vw" />
            <div className="max-w-3xl">
              <FeatureCopy study={third} index={2} />
            </div>
          </Link>
        </article>

        {/* 04 — product showcase on a dark panel */}
        <article className="reveal border-t border-slate-200 pt-16 sm:pt-24">
          <Link
            href={`/work/${fourth.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-slate-900 rounded-3xl px-6 py-12 sm:p-14 lg:p-20"
          >
            <div className="lg:col-span-6">
              <FeatureCopy study={fourth} index={3} dark />
            </div>
            <div className="lg:col-span-6">
              <WorkVisual study={fourth} sizes="(min-width: 1024px) 560px, 100vw" />
            </div>
          </Link>
        </article>
      </div>

      {/* CTA */}
      <section className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-8">
        <div className="border-t border-slate-200 pt-16 sm:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-5">
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
              Have an ambitious product to launch?
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
              Let&apos;s build something people remember.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-brand-blue text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-colors"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors py-2"
            >
              See what we do
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
