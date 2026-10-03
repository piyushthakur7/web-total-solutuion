import React from 'react';
import Link from 'next/link';
import { PROCESS_STEPS } from '../siteContent';

/**
 * Five-step delivery process. Reduces perceived risk before the final CTA,
 * which is where most high-ticket enquiries are won or lost.
 */
export default function ProcessSection({
  steps = PROCESS_STEPS,
  heading = 'A Simple, Transparent 5-Step Process',
  intro = 'You always know what is happening, what is next, and what it costs. No surprises between the first call and go-live.',
  ctaHref = '/contact',
  ctaLabel = 'Start With a Free Discovery Call',
  ctaNote,
}: {
  steps?: { step: string; title: string; description: string }[];
  heading?: string;
  intro?: string;
  ctaHref?: string;
  ctaLabel?: string;
  /** Optional secondary line rendered under the CTA button. */
  ctaNote?: React.ReactNode;
}) {
  return (
    <section className="bg-white py-16 text-ink sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 className="font-display text-display lg:col-span-7">{heading}</h2>
          <p className="max-w-md text-base leading-relaxed text-graphite lg:col-span-5 lg:justify-self-end">
            {intro}
          </p>
        </div>

        {/* Numbered because the steps really do happen in this order. */}
        <ol className="mt-10 grid gap-x-8 border-t border-ink/15 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5 lg:gap-x-6">
          {steps.map((item) => (
            <li key={item.step} className="border-b border-ink/15 py-7 lg:border-b-0 lg:py-9">
              <span className="font-display text-5xl text-brand-blue">
                {Number(item.step) || item.step}
              </span>
              <h3 className="mt-4 font-display text-2xl leading-tight">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-graphite">{item.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <Link
            href={ctaHref}
            {...(ctaHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="btn btn-ink"
          >
            {ctaLabel}
          </Link>
          {ctaNote && <div className="mt-4">{ctaNote}</div>}
        </div>
      </div>
    </section>
  );
}
