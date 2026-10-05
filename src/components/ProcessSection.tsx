import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROCESS_STEPS } from "../siteContent";
import { SectionLabel } from "./StudioPrimitives";

export default function ProcessSection({
  steps = PROCESS_STEPS,
  heading = "A clear path from idea to launch.",
  intro = "You always know what is happening, what comes next and what it costs. A collaborative process with clear approvals along the way.",
  ctaHref = "/contact",
  ctaLabel = "Start with a discovery call",
  ctaNote,
}: {
  steps?: { step: string; title: string; description: string }[];
  heading?: string;
  intro?: string;
  ctaHref?: string;
  ctaLabel?: string;
  ctaNote?: React.ReactNode;
}) {
  return (
    <section className="studio-section bg-white">
      <div className="studio-container">
        <SectionLabel>How we work</SectionLabel>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <h2 className="max-w-xl font-display text-display">{heading}</h2>
          <p className="max-w-md text-base leading-relaxed text-graphite lg:justify-self-end">
            {intro}
          </p>
        </div>
        <ol className="mt-10 grid gap-7 sm:mt-14 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item) => (
            <li key={item.step} className="border-t border-ink/15 pt-6">
              <span className="flex size-10 items-center justify-center rounded-full border border-ink/20 font-mono text-xs text-brand-blue">
                {item.step}
              </span>
              <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-graphite">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Link
            href={ctaHref}
            {...(ctaHref.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="btn btn-line"
          >
            {ctaLabel}
            <ArrowUpRight className="size-4" />
          </Link>
          {ctaNote && <div className="mt-4">{ctaNote}</div>}
        </div>
      </div>
    </section>
  );
}
