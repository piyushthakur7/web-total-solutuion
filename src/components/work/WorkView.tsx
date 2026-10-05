import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WORK_CASE_STUDIES } from "../../work";
import { PageIntro, SectionLabel } from "../StudioPrimitives";
import FinalCTA from "../FinalCTA";
import WorkVisual from "./WorkVisual";

const order = ["faw-dubai", "wts-crm", "mechverses", "medara-labs"];
const studies = order.flatMap((slug) =>
  WORK_CASE_STUDIES.filter((study) => study.slug === slug),
);
const backgrounds = [
  "bg-[#ece8e1]",
  "bg-[#e2eaf1]",
  "bg-[#e3ecf7]",
  "bg-[#eee8f0]",
];

export default function WorkView() {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        label="Selected work / Ideas brought to life"
        title={
          <>
            Built with purpose.
            <br />
            Made to stand out.
          </>
        }
        description="A closer look at the websites and products we design and build. Different industries, distinct personalities, and the same care in every detail."
      />
      <div className="studio-container">
        {studies.map((study, index) => (
          <article
            key={study.slug}
            className="border-t border-ink/15 py-10 sm:py-16"
          >
            <Link
              href={`/work/${study.slug}`}
              className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <div
                className={`rounded-[24px] p-5 sm:p-8 lg:col-span-7 ${backgrounds[index]} ${index % 2 ? "lg:order-2" : ""}`}
              >
                <WorkVisual
                  study={study}
                  sizes="(min-width: 1024px) 640px, 90vw"
                  priority={index === 0}
                />
              </div>
              <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1" : ""}`}>
                <SectionLabel>
                  0{index + 1} / {study.category}
                </SectionLabel>
                <h2 className="mt-5 font-display text-4xl sm:text-5xl">
                  {study.name}
                </h2>
                <p className="mt-4 font-display text-2xl leading-tight">
                  {study.headline}
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-graphite">
                  {study.summary}
                </p>
                <span className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-ink/30 text-sm font-semibold group-hover:border-ink">
                  Explore the project
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-8 sm:mt-14">
        <FinalCTA headline="Your project could be next." />
      </div>
    </div>
  );
}
