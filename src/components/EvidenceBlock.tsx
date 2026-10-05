import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_ITEMS } from "../data";
import { getWorkCaseStudy } from "../work";
import { TextLink } from "./StudioPrimitives";
import WorkVisual from "./work/WorkVisual";

export interface Evidence {
  heading: string;
  body: string;
  /** Slug of a case study in src/work.ts. */
  study?: string;
  /** Ids of live client sites in the portfolio. */
  portfolioIds?: string[];
  points?: { title: string; text: string }[];
  note?: string;
}

/**
 * Real work shown as proof on service and campaign pages: a case study, live
 * client sites, annotated decisions, or a plain statement of what there is to
 * show. Used directly under the hero so evidence comes before the pitch.
 */
export default function EvidenceBlock({ evidence }: { evidence: Evidence }) {
  const study = evidence.study ? getWorkCaseStudy(evidence.study) : undefined;
  const sites = (evidence.portfolioIds ?? []).flatMap((id) =>
    PORTFOLIO_ITEMS.filter((item) => item.id === id),
  );

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="studio-container">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
          <div className={study ? "lg:col-span-5" : "lg:col-span-7"}>
            <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.25rem)] leading-[1.12]">
              {evidence.heading}
            </h2>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-graphite">
              {evidence.body}
            </p>
            {study && (
              <div className="mt-4 flex flex-wrap gap-x-7 gap-y-1">
                <TextLink href={`/work/${study.slug}`}>
                  Read the {study.name} case study
                </TextLink>
                <TextLink href={study.websiteUrl}>
                  Visit {study.websiteLabel}
                </TextLink>
              </div>
            )}
            {evidence.note && (
              <p className="mt-6 max-w-[60ch] border-l-2 border-brand-blue pl-4 text-sm leading-relaxed text-graphite">
                {evidence.note}
              </p>
            )}
          </div>
          {study && (
            <figure className="lg:col-span-7">
              <Link
                href={`/work/${study.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className="block"
              >
                <WorkVisual
                  image={study.cover}
                  label={study.websiteLabel}
                  sizes="(min-width: 1024px) 700px, 92vw"
                  priority
                />
              </Link>
              <figcaption className="mt-3 text-sm text-graphite">
                {study.ownProduct
                  ? `${study.name}, our own product. `
                  : `${study.name}, client project. `}
                {study.cover.caption}
              </figcaption>
            </figure>
          )}
        </div>

        {sites.length > 0 && (
          <ul className="mt-9 grid gap-6 sm:grid-cols-2">
            {sites.map((site) => (
              <li key={site.id}>
                <a
                  href={site.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="project-frame">
                    <div className="relative aspect-[16/10] bg-paper">
                      <Image
                        src={site.imageUrl}
                        alt={`${site.title} website`}
                        fill
                        sizes="(min-width: 640px) 46vw, 92vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <p className="mt-4 flex items-center gap-2 font-display text-xl group-hover:underline">
                    {site.title}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </p>
                </a>
                <p className="mt-1 max-w-[52ch] text-[15px] leading-relaxed text-graphite">
                  {site.description}
                </p>
              </li>
            ))}
          </ul>
        )}

        {evidence.points && evidence.points.length > 0 && (
          <dl className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {evidence.points.map((point) => (
              <div key={point.title} className="border-t border-ink/15 py-5">
                <dt className="text-[15px] font-semibold">{point.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-graphite">
                  {point.text}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
