import React from "react";
import Image from "next/image";
import { WTS_CRM } from "../../projects";
import { WorkCaseStudy } from "../../work";

/**
 * The lead visual for a case study: a framed screenshot, or — for WTS CRM,
 * which has no screenshots in the repo yet — the product's real workflow.
 * `priority` is for the one above-the-fold instance on a page.
 */
export default function WorkVisual({
  study,
  sizes,
  priority = false,
  detailed = false,
}: {
  study: WorkCaseStudy;
  sizes: string;
  priority?: boolean;
  /** Workflow visual only: also show each step's description. */
  detailed?: boolean;
}) {
  if (study.visual.type === "screenshot") {
    return (
      <div className="project-frame">
        <div className="browser-bar">
          <span className="browser-dot" aria-hidden="true" />
          <span className="browser-dot" aria-hidden="true" />
          <span className="browser-dot" aria-hidden="true" />
          <span className="ml-3 text-[9px] font-mono text-graphite truncate">
            {study.websiteLabel}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={study.visual.src}
            alt={study.visual.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-950/40 p-6 sm:p-8">
      <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
        Enquiry to payment
      </p>
      <ol
        className={`mt-6 grid gap-x-8 ${detailed ? "sm:grid-cols-2 lg:grid-cols-3 gap-y-8" : "gap-y-0"}`}
      >
        {WTS_CRM.workflow.map((step, index) => (
          <li
            key={step.label}
            className={
              detailed
                ? "border-t border-white/10 pt-4"
                : "flex items-baseline gap-5 border-t border-white/10 py-3.5"
            }
          >
            <span className="font-mono text-xs text-brand-blue">
              0{index + 1}
            </span>
            <span
              className={`font-bold tracking-tight text-white ${detailed ? "block mt-2 text-xl" : "text-lg sm:text-xl"}`}
            >
              {step.label}
            </span>
            {detailed && (
              <span className="block mt-2 text-sm text-slate-400 leading-relaxed">
                {step.description}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
