import React from 'react';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle2, Clock, DollarSign, FileText, KeyRound, MessageSquare, Sparkles,
} from 'lucide-react';
import { BOOKING_URL } from '../siteContent';
import { CASE_STUDIES } from '../caseStudies';
import { LAW_FIRM_PAGE } from '../lawFirmPage';
import CaseStudy from './CaseStudy';
import FounderSection from './FounderSection';
import ProcessSection from './ProcessSection';
import FAQSection from './FAQSection';
import FinalCTA from './FinalCTA';

const ABROAD_ICONS = {
  clock: Clock,
  dollar: DollarSign,
  message: MessageSquare,
  file: FileText,
  key: KeyRound,
};

/**
 * Landing page for international law firms. Deliberately separate from
 * <LandingPageView />: no INR pricing, no city wording and no freelancer
 * comparison — everything here is quoted in USD.
 */
export default function InternationalView() {
  const page = LAW_FIRM_PAGE;

  return (
    <div className="pb-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-14 lg:pt-20 pb-24 bg-slate-900">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full filter blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Message */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/25 px-3.5 py-1.5 rounded-full text-brand-blue text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>{page.eyebrow}</span>
              </div>

              <h1 className="text-[2.05rem] leading-[1.13] sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white">
                {page.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {page.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href={BOOKING_URL}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-4 rounded-xl font-bold tracking-wide shadow-lg shadow-brand-blue/25 hover:shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </Link>
                <a
                  href="#case-studies"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 px-7 py-4 rounded-xl font-bold tracking-wide backdrop-blur-sm transition-all flex items-center justify-center cursor-pointer"
                >
                  See Our Work
                </a>
              </div>
            </div>

            {/* Offer summary */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl border border-white/20 p-7 sm:p-9">
                <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
                  Starting from
                </span>
                <p className="mt-2 text-5xl font-extrabold text-slate-900 tracking-tight">
                  {page.offer.price.replace('From ', '')}
                  <span className="ml-2 text-base font-bold text-slate-500">USD</span>
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {[page.offer.scope, page.offer.timeline, 'Fixed written quote', 'Full code ownership'].map(
                    (item) => (
                      <li key={item} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>

                <div className="mt-7 pt-6 border-t border-slate-100">
                  <p className="text-sm font-bold text-slate-900">
                    Optional care plan — {page.offer.carePlan.price}
                  </p>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {page.offer.carePlan.includes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The problem we solve */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
              Why It Matters
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {page.problems.heading}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {page.problems.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {page.problems.items.map((item, index) => (
              <div
                key={item.title}
                className="bg-white border border-slate-100 rounded-3xl p-7 sm:p-9 shadow-sm"
              >
                <span className="font-mono text-sm font-extrabold text-brand-blue">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="bg-white py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Recent Client Work
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every site below is live — open it and judge the work for yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {CASE_STUDIES.map((study) => (
              <CaseStudy key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection
        steps={page.processSteps}
        heading="From First Call to Launch in 5 Steps"
        intro="You always know what is happening, what is next, and what it costs."
        ctaHref={BOOKING_URL}
        ctaLabel="Book an Intro Call"
      />

      {/* Founder */}
      <FounderSection />

      {/* Working with us from abroad */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
              Remote, Without the Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {page.abroad.heading}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {page.abroad.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.abroad.items.map((item) => {
              const Icon = ABROAD_ICONS[item.icon];
              return (
                <div
                  key={item.title}
                  className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-7"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/15 text-brand-blue flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={page.faqs}
        intro="Straight answers on pricing, timelines, communication, ownership and support."
      />

      <FinalCTA
        headline="Ready for a Website That Matches Your Firm?"
        text="Book a call and get a fixed written quote in USD for your firm's new website."
        contactHref={BOOKING_URL}
      />
    </div>
  );
}
