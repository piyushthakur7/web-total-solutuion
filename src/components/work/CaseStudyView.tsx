import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { WorkCaseStudy, getNextWorkCaseStudy } from "../../work";
import { CTA } from "../../siteContent";
import { contactHref } from "../../lead";
import { PageIntro, SectionHeading, TextLink } from "../StudioPrimitives";
import FinalCTA from "../FinalCTA";
import WorkVisual from "./WorkVisual";

/**
 * One case study, assembled from the data in src/work.ts. Sections whose
 * content is not known yet are skipped rather than padded out.
 */
export default function CaseStudyView({ study }: { study: WorkCaseStudy }) {
  // Editors see what is still missing; visitors never do.
  const showContentNeeded =
    process.env.NODE_ENV !== "production" && study.contentNeeded.length > 0;
  const next = getNextWorkCaseStudy(study.slug);

  const facts = [
    { label: study.ownProduct ? "Product" : "Client", value: study.client },
    { label: "Sector", value: study.sector },
    { label: "Our role", value: study.role },
    study.timeline
      ? { label: "Timeline", value: study.timeline }
      : { label: "Type", value: study.projectType },
  ];

  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      {showContentNeeded && (
        <aside className="border-b border-amber-200 bg-amber-50 text-amber-900">
          <div className="studio-container py-4 text-sm">
            <p className="font-bold">
              Content still needed (visible in development only)
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {study.contentNeeded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      )}

      <PageIntro
        compact
        label={
          study.ownProduct
            ? "Own product, built and run by Web Total Solution"
            : `Case study: ${study.name}`
        }
        title={study.statement}
        description={study.summary}
        facts={facts}
      >
        <a
          href={study.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-paper"
        >
          Visit {study.websiteLabel}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <Link
          href="/work"
          className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4"
        >
          All selected work
        </Link>
      </PageIntro>

      <div className="studio-container -mt-px pt-8 sm:pt-12">
        <figure>
          <WorkVisual
            image={study.cover}
            label={study.websiteLabel}
            sizes="(min-width: 1320px) 1224px, 92vw"
            priority
          />
          <figcaption className="mt-3 text-sm text-graphite">
            {study.cover.caption}
          </figcaption>
        </figure>
      </div>

      <section className="studio-container grid gap-8 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading heading="Starting point" />
          {!study.ownProduct && (
            <p className="mt-4 text-sm leading-relaxed text-graphite">
              Written by us from the finished website. It describes the
              reasoning behind the design, not a client brief or research
              findings.
            </p>
          )}
        </div>
        <div className="space-y-5 lg:col-span-8">
          {study.situation.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "max-w-[60ch] text-xl leading-snug text-ink sm:text-2xl"
                  : "max-w-[62ch] text-[17px] leading-relaxed text-graphite"
              }
            >
              {paragraph}
            </p>
          ))}
          <div className="pt-2">
            <p className="text-sm font-semibold">Delivered scope</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {study.scope.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-ink/20 bg-white px-3.5 py-1.5 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="studio-container">
          <SectionHeading
            heading="Design decisions"
            intro="What was chosen, where you can see it, and why it suits this project."
          />
          <ol className="mt-10 space-y-14 sm:space-y-20">
            {study.decisions.map((decision, index) => (
              <li
                key={decision.title}
                className={`grid items-start gap-7 lg:grid-cols-12 lg:gap-14 ${decision.image ? "" : "lg:max-w-none"}`}
              >
                <div
                  className={
                    decision.image
                      ? `lg:col-span-5 ${index % 2 ? "lg:order-2" : ""}`
                      : "lg:col-span-8"
                  }
                >
                  <p className="text-sm font-semibold text-brand-blue">
                    Decision {index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight sm:text-[28px]">
                    {decision.title}
                  </h3>
                  <p className="mt-4 max-w-[58ch] text-[16px] leading-relaxed text-graphite">
                    {decision.body}
                  </p>
                </div>
                {decision.image && (
                  <figure
                    className={`lg:col-span-7 ${index % 2 ? "lg:order-1" : ""}`}
                  >
                    <WorkVisual
                      image={decision.image}
                      label={study.websiteLabel}
                      sizes="(min-width: 1024px) 700px, 92vw"
                    />
                    <figcaption className="mt-3 text-sm leading-relaxed text-graphite">
                      {decision.image.caption}
                    </figcaption>
                  </figure>
                )}
              </li>
            ))}
          </ol>
          {study.imageNote && (
            <p className="mt-12 max-w-[70ch] border-l-2 border-brand-blue pl-4 text-sm leading-relaxed text-graphite">
              {study.imageNote}
            </p>
          )}
        </div>
      </section>

      {study.mobile && (
        <section className="studio-container py-14 sm:py-20">
          <SectionHeading heading="On mobile" intro={study.mobile.intro} />
          <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-10 lg:max-w-3xl">
            {study.mobile.images.map((image) => (
              <figure key={image.src}>
                <WorkVisual
                  image={image}
                  sizes="(min-width: 640px) 280px, 45vw"
                  phone
                />
                <figcaption className="mx-auto mt-4 max-w-[280px] text-sm leading-relaxed text-graphite">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="bg-deep py-14 text-paper sm:py-20">
        <div className="studio-container grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading heading="Engineering" light />
            <div className="mt-6 space-y-4">
              {study.engineering.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[58ch] text-[16px] leading-relaxed text-white/75"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <ul
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Technology used"
            >
              {study.technology.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/25 px-3.5 py-1.5 text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading heading="What was delivered" light />
            <ul className="mt-6">
              {study.delivered.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-t border-white/15 py-4 text-[16px] leading-relaxed last:border-b"
                >
                  <Check
                    className="mt-1 size-4 shrink-0 text-marker"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              These are deliverables. We do not publish traffic, enquiry or
              revenue figures{" "}
              {study.ownProduct
                ? "for the product."
                : "for client projects unless the client has shared and approved them."}
            </p>
          </div>
        </div>
      </section>

      {study.testimonial && (
        <section className="studio-container py-14 sm:py-20">
          <figure className="max-w-3xl">
            <blockquote className="font-display text-2xl leading-snug sm:text-3xl">
              “{study.testimonial.quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm text-graphite">
              <span className="font-semibold text-ink">
                {study.testimonial.name}
              </span>
              , {study.testimonial.role}
            </figcaption>
          </figure>
        </section>
      )}

      <section className="studio-container py-14 sm:py-20">
        <div className="grid items-center gap-8 rounded-[24px] border border-ink/15 bg-white p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-graphite">Next project</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              {next.name}
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-graphite">
              {next.summary}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              <TextLink href={`/work/${next.slug}`}>
                Read the {next.name} case study
              </TextLink>
            </div>
          </div>
          <Link
            href={`/work/${next.slug}`}
            className="block lg:col-span-7"
            tabIndex={-1}
            aria-hidden="true"
          >
            <WorkVisual
              image={next.cover}
              label={next.websiteLabel}
              sizes="(min-width: 1024px) 660px, 92vw"
            />
          </Link>
        </div>
      </section>

      <FinalCTA
        headline={
          study.ownProduct
            ? "Planning a product of your own?"
            : "Have a similar project?"
        }
        text={
          study.ownProduct
            ? "Product interfaces and web applications are scoped individually. Tell us what the product has to do and who uses it."
            : "Tell us about the business and what the website needs to do. You will get the scope, price and timeline in writing."
        }
        contactHref={contactHref({
          type: study.ownProduct
            ? "SaaS / Web Application"
            : "Startup Marketing Website",
          details: `I saw the ${study.name} case study.`,
        })}
        ctaLabel={CTA.discuss}
      />
    </div>
  );
}
