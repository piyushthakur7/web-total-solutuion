import React from "react";

/**
 * Standard case-study block: label and heading in a narrow left column, content
 * on the right. Every text section on a case study uses this so the page keeps
 * one rhythm.
 */
export default function CaseStudySection({
  eyebrow,
  heading,
  children,
  dark = false,
}: {
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-deep text-white" : ""}>
      <div className="studio-container">
        <div
          className={`reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 sm:py-24 ${
            dark ? "" : "border-t border-ink/15"
          }`}
        >
          <div className="lg:col-span-4 space-y-4">
            <p
              className={`text-[11px] font-mono uppercase tracking-widest ${dark ? "text-slate-400" : "text-slate-500"}`}
            >
              {eyebrow}
            </p>
            <h2
              className={`font-display text-3xl sm:text-4xl leading-[1.1] ${dark ? "text-white" : "text-ink"}`}
            >
              {heading}
            </h2>
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
