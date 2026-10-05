import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WORK_CASE_STUDIES } from "../../work";
import { getPortfolioProjects } from "../../utils/insforge/portfolio";
import { PageIntro, SectionHeading } from "../StudioPrimitives";
import FinalCTA from "../FinalCTA";
import WorkVisual from "./WorkVisual";

/** Portfolio entries that already have a full case study above. */
const CASE_STUDY_PORTFOLIO_IDS = ["fawdubai", "mechverses", "medaralabs"];

function domain(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default async function WorkView() {
  const otherSites = (await getPortfolioProjects()).filter(
    (item) => item.websiteUrl && !CASE_STUDY_PORTFOLIO_IDS.includes(item.id),
  );

  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        label="Selected work"
        title={
          <>
            Four projects,
            <br />
            explained properly.
          </>
        }
        description="One product of our own and three client websites. Each case study says what the business does, what we were asked to build and what was delivered."
      />
      <div className="studio-container">
        {WORK_CASE_STUDIES.map((study, index) => (
          <article
            key={study.slug}
            className="grid items-center gap-7 border-t border-ink/15 py-10 first:border-t-0 first:pt-0 sm:py-14 lg:grid-cols-12 lg:gap-12"
          >
            <Link
              href={`/work/${study.slug}`}
              className={`block lg:col-span-7 ${index % 2 ? "lg:order-2" : ""}`}
              tabIndex={-1}
              aria-hidden="true"
            >
              <WorkVisual
                image={study.cover}
                label={study.websiteLabel}
                sizes="(min-width: 1024px) 700px, 92vw"
                priority={index === 0}
              />
            </Link>
            <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1" : ""}`}>
              <p className="flex flex-wrap items-center gap-2 text-sm text-graphite">
                {study.ownProduct && (
                  <span className="rounded-full bg-marker px-3 py-1 font-semibold text-ink">
                    Own product
                  </span>
                )}
                <span>
                  {study.category}, {study.projectType.toLowerCase()}
                </span>
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-[2.75rem]">
                <Link
                  href={`/work/${study.slug}`}
                  className="underline-offset-4 hover:underline"
                >
                  {study.name}
                </Link>
              </h2>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-graphite">
                {study.summary}
              </p>
              <dl className="mt-5 max-w-md space-y-2 text-sm">
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-graphite">Our role</dt>
                  <dd>{study.role}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-graphite">Delivered</dt>
                  <dd>{study.scope.join(", ")}</dd>
                </div>
              </dl>
              <Link
                href={`/work/${study.slug}`}
                className="text-link mt-6 inline-flex min-h-11 items-center gap-2 text-sm"
              >
                Read the {study.name} case study
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {otherSites.length > 0 && (
        <section className="mt-6 bg-white py-14 sm:py-20">
          <div className="studio-container">
            <SectionHeading
              heading="Other live client websites"
              intro={`${otherSites.length} more sites we have built, mostly for Indian businesses. They open on the client’s own domain, so you can judge them as they are today.`}
            />
            <ul className="mt-9 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {otherSites.map((site) => (
                <li key={site.id} className="border-t border-ink/15">
                  <a
                    href={site.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-14 items-center justify-between gap-4 py-3"
                  >
                    <span>
                      <span className="block text-[15px] font-semibold group-hover:underline">
                        {site.title}
                      </span>
                      <span className="block text-sm text-graphite">
                        {domain(site.websiteUrl ?? "")}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-graphite"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <div className="mt-14 sm:mt-20">
        <FinalCTA headline="Have a project like one of these?" />
      </div>
    </div>
  );
}
