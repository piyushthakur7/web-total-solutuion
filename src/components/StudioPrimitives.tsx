import React from "react";
import Image from "next/image";
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
    <p className={`section-label ${light ? "text-white/70" : "text-graphite"}`}>
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

/**
 * Opening hero for inner pages, in the same blue as the home hero.
 *
 * The default is the centred statement hero used by the studio's main pages.
 * `compact` is the shorter, left-aligned version for service, case-study,
 * campaign and editorial pages, with optional key facts under the copy.
 */
export function PageIntro({
  label,
  title,
  description,
  children,
  compact = false,
  facts,
  image,
}: {
  label?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
  compact?: boolean;
  facts?: { label: string; value: React.ReactNode }[];
  /** Illustrative photograph shown behind the copy, tinted blue. */
  image?: { src: string; alt: string };
}) {
  // Sentence-length titles on the centred hero are set smaller.
  const long = !compact && typeof title === "string" && title.length > 34;
  return (
    <section className={`page-hero ${compact ? "page-hero-compact" : ""}`}>
      {image && (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={60}
            className="page-hero-image"
            aria-hidden="true"
          />
          <div className="page-hero-shade" aria-hidden="true" />
        </>
      )}
      <div className="impact-grain" aria-hidden="true" />
      {!compact && (
        <>
          <div
            className="impact-orbit page-hero-orbit-outer"
            aria-hidden="true"
          />
          <div
            className="impact-orbit page-hero-orbit-inner"
            aria-hidden="true"
          />
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
        </>
      )}
      <div className="page-hero-copy studio-container">
        {label && <p className="page-hero-label">{label}</p>}
        <h1
          className={`page-hero-title ${long ? "page-hero-title-long" : ""}`}
        >
          {title}
        </h1>
        <p className="page-hero-description">{description}</p>
        {children && <div className="page-hero-actions">{children}</div>}
        {facts && facts.length > 0 && (
          <dl className="page-hero-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
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
  const external = href.startsWith("http");
  const className = `group inline-flex min-h-11 items-center gap-2 border-b py-2 text-sm font-semibold transition-colors ${light ? "border-white/40 text-white hover:border-white" : "border-ink/30 text-ink hover:border-ink"}`;
  const content = (
    <>
      {children}
      <ArrowUpRight
        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

/** Heading block used at the top of a content section. */
export function SectionHeading({
  label,
  heading,
  intro,
  light = false,
}: {
  label?: string;
  heading: React.ReactNode;
  intro?: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {label && <SectionLabel light={light}>{label}</SectionLabel>}
      <h2
        className={`font-display text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.1] ${label ? "mt-4" : ""}`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed ${light ? "text-white/70" : "text-graphite"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
