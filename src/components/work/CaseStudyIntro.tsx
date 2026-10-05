import React from "react";
import { ArrowUpRight } from "lucide-react";
import { WorkCaseStudy } from "../../work";
import CaseStudySection from "./CaseStudySection";

/** Project overview: who it is for, what was built, and the live link. */
export default function CaseStudyIntro({ study }: { study: WorkCaseStudy }) {
  return (
    <CaseStudySection eyebrow="Overview" heading="The project">
      <div className="space-y-6 max-w-3xl">
        {study.overview.map((paragraph, index) => (
          <p
            key={paragraph}
            className={
              index === 0
                ? "text-xl sm:text-2xl font-semibold text-ink leading-snug tracking-tight"
                : "text-base sm:text-lg text-graphite leading-relaxed"
            }
          >
            {paragraph}
          </p>
        ))}

        <a
          href={study.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-ink border-b border-slate-300 hover:border-slate-900 pb-1 transition-colors"
        >
          <span>Visit {study.websiteLabel}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </CaseStudySection>
  );
}
