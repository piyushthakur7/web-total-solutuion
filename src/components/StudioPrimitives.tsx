import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`section-label ${light ? "text-white/60" : "text-graphite"}`}>
      <span
        className={`size-1.5 rounded-full ${light ? "bg-marker" : "bg-brand-blue"}`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}

/** Line widths, in %, for the skeleton code at either edge of a hero. */
export const codeLines = [46, 82, 64, 100, 72, 38, 90, 56, 76, 30];

/** Opening hero for every inner page, in the same blue as the home hero. */
export function PageIntro({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) {
  // Sentence-length titles (case studies, service pages) are set smaller.
  const long = typeof title === "string" && title.length > 34;
  return (
    <section className="page-hero">
      <div className="impact-orbit page-hero-orbit-outer" aria-hidden="true" />
      <div className="impact-orbit page-hero-orbit-inner" aria-hidden="true" />
      <div className="impact-grain" aria-hidden="true" />
      {(["left", "right"] as const).map((side) => (
        <div
          key={side}
          className={`impact-code impact-code-${side}`}
          aria-hidden="true"
        >
          {codeLines.map((width, index) => (
            <span key={index} style={{ width: `${width}%` }} />
          ))}
        </div>
      ))}
      <div className="page-hero-copy studio-container hero-enter">
        <p className="page-hero-label">{label}</p>
        <h1
          className={`page-hero-title ${long ? "page-hero-title-long" : ""}`}
        >
          {title}
        </h1>
        <p className="page-hero-description">{description}</p>
        {children && <div className="page-hero-actions">{children}</div>}
      </div>
    </section>
  );
}

export function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center gap-3 border-b py-2 text-sm font-semibold transition-colors ${light ? "border-white/30 text-white hover:border-marker" : "border-ink/25 text-ink hover:border-ink"}`}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
