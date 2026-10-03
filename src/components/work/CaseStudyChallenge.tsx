import React from 'react';
import CaseStudySection from './CaseStudySection';

/** The business problem behind the project. Rendered only when it is known. */
export default function CaseStudyChallenge({ challenge }: { challenge: string[] }) {
  return (
    <CaseStudySection eyebrow="The challenge" heading="What needed solving">
      <div className="space-y-6 max-w-3xl">
        {challenge.map((paragraph) => (
          <p key={paragraph} className="text-lg sm:text-xl text-slate-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </CaseStudySection>
  );
}
