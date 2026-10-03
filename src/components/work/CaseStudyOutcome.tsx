import React from 'react';
import { WorkCaseStudy } from '../../work';
import CaseStudySection from './CaseStudySection';

/**
 * Outcome. Qualitative unless the data file holds real, measured results —
 * nothing here is ever estimated. A testimonial renders only if a real one
 * has been added to the case study.
 */
export default function CaseStudyOutcome({ study }: { study: WorkCaseStudy }) {
  return (
    <CaseStudySection eyebrow="Outcome" heading="What was delivered">
      <ul>
        {study.outcomes.map((outcome, index) => (
          <li
            key={outcome}
            className="flex items-baseline gap-6 border-t border-slate-200 py-5 last:border-b"
          >
            <span className="font-mono text-xs text-brand-blue shrink-0">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight leading-snug">
              {outcome}
            </span>
          </li>
        ))}
      </ul>

      {study.testimonial && (
        <figure className="mt-14 max-w-3xl">
          <blockquote className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-snug tracking-tight">
            “{study.testimonial.quote}”
          </blockquote>
          <figcaption className="mt-6 text-sm text-slate-600">
            <span className="font-bold text-slate-900">{study.testimonial.name}</span>
            {' — '}
            {study.testimonial.role}
          </figcaption>
        </figure>
      )}
    </CaseStudySection>
  );
}
