import React from "react";
import Link from "next/link";
import { WorkCaseStudy } from "../../work";
import WorkVisual from "./WorkVisual";
import { PageIntro } from "../StudioPrimitives";

export default function CaseStudyHero({ study }: { study: WorkCaseStudy }) {
  const facts = [
    { label: "Industry", value: study.industry },
    { label: "Services", value: study.services.join(", ") },
    ...(study.timeline ? [{ label: "Timeline", value: study.timeline }] : []),
    { label: "Platform", value: study.platform },
  ];
  return (
    <section>
      <PageIntro
        label={`Selected work / ${study.name}`}
        title={study.positioning}
        description={study.summary}
      >
        <Link
          href="/work"
          className="inline-block min-h-11 py-2 text-xs font-semibold underline decoration-ink/25 underline-offset-4"
        >
          ← Back to selected work
        </Link>
      </PageIntro>
      <div className="studio-container">
        <dl className="grid gap-x-10 gap-y-6 border-t border-ink/15 py-7 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[9px] uppercase tracking-[.12em] text-graphite">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 rounded-[24px] bg-[#e4edf6] p-4 sm:p-8 lg:p-10">
          <WorkVisual
            study={study}
            sizes="(min-width: 1280px) 1136px, 90vw"
            priority
            detailed
          />
        </div>
      </div>
    </section>
  );
}
