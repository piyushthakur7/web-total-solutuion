import React from "react";
import { WorkCaseStudy } from "../../work";
import CaseStudySection from "./CaseStudySection";

/** Engineering. The only place on a case study where technology is listed. */
export default function CaseStudyTechnology({
  study,
}: {
  study: WorkCaseStudy;
}) {
  return (
    <CaseStudySection
      eyebrow="Engineering"
      heading="From design to production."
      dark
    >
      <div className="space-y-6 max-w-3xl">
        {study.engineering.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-8 border-t border-white/10">
        {study.technology.map((tech) => (
          <li
            key={tech}
            className="border-b border-white/10 py-4 text-sm font-semibold text-white"
          >
            {tech}
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}
