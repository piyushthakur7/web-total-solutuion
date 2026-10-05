import React from "react";
import { WorkCaseStudy, getNextWorkCaseStudy } from "../../work";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyIntro from "./CaseStudyIntro";
import CaseStudyChallenge from "./CaseStudyChallenge";
import CaseStudyList from "./CaseStudyList";
import CaseStudyFlow from "./CaseStudyFlow";
import CaseStudyGallery from "./CaseStudyGallery";
import CaseStudyTechnology from "./CaseStudyTechnology";
import CaseStudyOutcome from "./CaseStudyOutcome";
import NextCaseStudy from "./NextCaseStudy";

/**
 * One case study, assembled from the data in src/work.ts. Sections whose
 * content is not known yet are skipped rather than padded out.
 */
export default function CaseStudyView({ study }: { study: WorkCaseStudy }) {
  // Editors see what is still missing; visitors never do.
  const showContentNeeded =
    process.env.NODE_ENV !== "production" && study.contentNeeded.length > 0;

  return (
    <div className="pb-20 overflow-x-hidden">
      {showContentNeeded && (
        <aside className="bg-amber-50 border-b border-amber-200 text-amber-900">
          <div className="studio-container py-4 text-sm">
            <p className="font-bold">
              Content still needed (visible in development only)
            </p>
            <ul className="mt-2 space-y-1 font-mono text-xs">
              {study.contentNeeded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      )}

      <CaseStudyHero study={study} />
      <CaseStudyIntro study={study} />
      {study.challenge && <CaseStudyChallenge challenge={study.challenge} />}
      {study.approach && (
        <CaseStudyList
          eyebrow="Our approach"
          heading="How we worked"
          items={study.approach}
        />
      )}
      {study.ux && <CaseStudyFlow flows={study.ux} />}
      {study.sections?.map((section) => (
        <CaseStudyList key={section.heading} {...section} />
      ))}
      {study.gallery && study.gallery.length > 0 && (
        <CaseStudyGallery images={study.gallery} />
      )}
      <CaseStudyTechnology study={study} />
      <CaseStudyOutcome study={study} />
      <NextCaseStudy study={getNextWorkCaseStudy(study.slug)} />
    </div>
  );
}
