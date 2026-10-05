import React from "react";
import { WorkCaseStudy } from "../../work";
import CaseStudySection from "./CaseStudySection";

/**
 * Outcome. Qualitative unless the data file holds real, measured results â€”
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
            className="flex items-baseline gap-6 border-t border-ink/15 py-5 last:border-b"
          >
            <span className="font-mono text-xs text-brand-blue shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-lg sm:text-xl font-semibold text-ink tracking-tight leading-snug">
              {outcome}
            </span>
          </li>
        ))}
      </ul>

      {study.testimonial && (
        <figure className="mt-14 max-w-3xl">
          <blockquote className="text-2xl sm:text-3xl font-semibold text-ink leading-snug tracking-tight">
            â€œ{study.testimonial.quote}â€
          </blockquote>
          <figcaption className="mt-6 text-sm text-graphite">
            <span className="font-bold text-ink">{study.testimonial.name}</span>
            {" â€” "}
            {study.testimonial.role}
          </figcaption>
        </figure>
      )}
    </CaseStudySection>
  );
}
