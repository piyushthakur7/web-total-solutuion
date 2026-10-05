import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorkCaseStudy } from "../../work";
import WorkVisual from "./WorkVisual";

/** Closing link to the next study, plus routes to services and contact. */
export default function NextCaseStudy({ study }: { study: WorkCaseStudy }) {
  const dark = study.visual.type === "workflow";

  return (
    <section className="studio-container pt-16 sm:pt-24">
      <Link
        href={`/work/${study.slug}`}
        className={`reveal group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center rounded-3xl px-6 py-12 sm:p-14 ${
          dark ? "bg-deep" : "bg-paper border border-ink/15"
        }`}
      >
        <div className="lg:col-span-5 space-y-5">
          <p
            className={`text-[11px] font-mono uppercase tracking-widest ${dark ? "text-slate-400" : "text-slate-500"}`}
          >
            Next Case Study
          </p>
          <h2
            className={`text-4xl sm:text-5xl font-display leading-[1.05] ${dark ? "text-white" : "text-ink"}`}
          >
            {study.name}
          </h2>
          <p
            className={`text-base leading-relaxed ${dark ? "text-slate-300" : "text-graphite"}`}
          >
            {study.headline}
          </p>
          <span
            className={`inline-flex items-center gap-2 text-sm font-bold border-b pb-1 transition-colors ${
              dark
                ? "text-white border-white/30 group-hover:border-white"
                : "text-ink border-slate-300 group-hover:border-slate-900"
            }`}
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
          </span>
        </div>
        <div className="lg:col-span-7">
          <WorkVisual study={study} sizes="(min-width: 1024px) 660px, 100vw" />
        </div>
      </Link>

      <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-t border-ink/15 pt-8">
        <p className="text-lg font-semibold text-ink tracking-tight">
          Have an ambitious product to launch?
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-4">
          <Link
            href="/work"
            className="text-sm font-bold text-graphite hover:text-ink transition-colors py-2"
          >
            All selected work
          </Link>
          <Link
            href="/services"
            className="text-sm font-bold text-graphite hover:text-ink transition-colors py-2"
          >
            Our services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-deep hover:bg-brand-blue text-white px-7 py-3.5 rounded-xl font-bold tracking-wide transition-colors"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
