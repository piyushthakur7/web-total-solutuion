import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTA, PACKAGE_TERMS } from "../siteContent";
import { PORTFOLIO_ITEMS } from "../data";
import { WORK_CASE_STUDIES } from "../work";
import { SectionHeading, SectionLabel, TextLink } from "./StudioPrimitives";
import ProcessSection from "./ProcessSection";
import ProofSection from "./ProofSection";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import ImpactHero from "./ImpactHero";
import PackageCards from "./PackageCards";
import WorkVisual from "./work/WorkVisual";

/** Capability statements. Only the portfolio count is a number, and it is counted. */
const glance = [
  {
    value: "Strategy, design and build",
    label: "Done together, in one studio",
  },
  {
    value: "WTS CRM",
    label: "Our own SaaS product, live and maintained",
  },
  {
    value: `${PORTFOLIO_ITEMS.length} live client websites`,
    label: "Listed with links on the work page",
  },
  {
    value: "Kolkata and Delhi",
    label: "Working with clients in India and abroad",
  },
];

const stages = [
  {
    name: "Strategy",
    text: "Who the page is for, what they need to understand and the one action it should lead to.",
    outputs: ["Messaging and page structure", "Sitemap", "Wireframes"],
  },
  {
    name: "Design",
    text: "The approved structure becomes an interface with its own visual identity, on desktop and mobile.",
    outputs: ["Approved UI for each page", "Mobile layouts", "Reusable components"],
  },
  {
    name: "Development",
    text: "The approved design is built, tested and handed over with the accounts in your name.",
    outputs: [
      "Responsive Next.js build",
      "CMS, where scoped",
      "QA, launch and handover",
    ],
  },
];

export default function HomeView() {
  const [featured, ...others] = WORK_CASE_STUDIES;
  return (
    <div className="bg-paper text-ink">
      <ImpactHero />

      <section
        className="studio-container py-9 sm:py-11"
        aria-label="Studio at a glance"
      >
        <dl className="grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4">
          {glance.map((item) => (
            <div key={item.value} className="flex flex-col-reverse">
              <dt className="mt-1.5 text-sm text-graphite">{item.label}</dt>
              <dd className="font-display text-xl leading-tight sm:text-2xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="selected-work" className="studio-section bg-white">
        <div className="studio-container">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              heading="Selected work"
              intro="One product we built for ourselves, and three websites built for clients."
            />
            <TextLink href="/work">All selected work</TextLink>
          </div>

          <article className="mt-10 grid items-center gap-7 rounded-[24px] bg-[#e2eaf1] p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
            <Link
              href={`/work/${featured.slug}`}
              className="block lg:col-span-7"
              tabIndex={-1}
              aria-hidden="true"
            >
              <WorkVisual
                image={featured.cover}
                label={featured.websiteLabel}
                sizes="(min-width: 1024px) 660px, 88vw"
              />
            </Link>
            <div className="lg:col-span-5">
              <p className="flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-full bg-ink px-3 py-1 font-semibold text-white">
                  Own product
                </span>
                <span className="text-graphite">
                  {featured.category}, built and run by us
                </span>
              </p>
              <h3 className="mt-4 font-display text-4xl sm:text-5xl">
                <Link
                  href={`/work/${featured.slug}`}
                  className="underline-offset-4 hover:underline"
                >
                  {featured.name}
                </Link>
              </h3>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-graphite">
                A CRM that follows one enquiry to a paid invoice. We scoped it,
                designed the interface and engineered it, which is the same work
                a startup product needs.
              </p>
              <div className="mt-5">
                <TextLink href={`/work/${featured.slug}`}>
                  Read the WTS CRM case study
                </TextLink>
              </div>
            </div>
          </article>

          <div className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-3">
            {others.map((study) => (
              <article key={study.slug}>
                <Link
                  href={`/work/${study.slug}`}
                  className="block"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <WorkVisual
                    image={study.cover}
                    label={study.websiteLabel}
                    sizes="(min-width: 768px) 400px, 92vw"
                  />
                </Link>
                <p className="mt-4 text-sm text-graphite">
                  {study.category}, {study.projectType.toLowerCase()}
                </p>
                <h3 className="mt-1 font-display text-2xl">
                  <Link
                    href={`/work/${study.slug}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {study.name}
                  </Link>
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-graphite">
                  {study.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section bg-deep text-paper">
        <div className="studio-container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              light
              heading="Strategy, design and development as one job"
              intro="The message is settled before anything is styled. Structure is agreed before design, and design is approved before development."
            />
            <div className="mt-8 rounded-[20px] border border-white/15 p-6">
              <SectionLabel light>A decision from our own product</SectionLabel>
              <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                The WTS CRM dashboard opens on what is due today, not on
                totals. Each figure carries its exception, such as “3 overdue”,
                because the first thing a user needs is the next action.
              </p>
              <div className="mt-3">
                <TextLink href="/work/wts-crm" light>
                  See the decision on screen
                </TextLink>
              </div>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {stages.map((item, index) => (
              <li
                key={item.name}
                className="border-t border-white/20 py-6 last:border-b"
              >
                <div className="flex items-baseline gap-4">
                  <span className="w-4 text-sm font-semibold text-marker">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-[26px]">{item.name}</h3>
                </div>
                <p className="ml-8 mt-2 max-w-lg text-[15px] leading-relaxed text-white/70">
                  {item.text}
                </p>
                <ul className="ml-8 mt-3 flex flex-wrap gap-2">
                  {item.outputs.map((output) => (
                    <li
                      key={output}
                      className="rounded-full border border-white/25 px-3 py-1 text-sm text-white/90"
                    >
                      {output}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="list-none pt-6">
              <TextLink href="/services" light>
                All services and what each includes
              </TextLink>
            </li>
          </ol>
        </div>
      </section>

      <section className="studio-section">
        <div className="studio-container">
          <SectionHeading
            heading="Three packages, priced from"
            intro="Each has a starting price in USD. The written quote follows a scope review and depends on page templates, content, CMS and integrations."
          />
          <div className="mt-10">
            <PackageCards />
          </div>
          <div className="mt-6 flex flex-col justify-between gap-3 text-sm leading-relaxed text-graphite sm:flex-row sm:items-center">
            <p className="max-w-2xl">{PACKAGE_TERMS[7]}</p>
            <TextLink href="/pricing">What each package includes</TextLink>
          </div>
        </div>
      </section>

      <ProcessSection>
        <Link href="/contact" className="btn btn-line">
          {CTA.primary}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </ProcessSection>
      <ProofSection />
      <FAQSection />
      <div className="bg-white pb-16 sm:pb-24">
        <FinalCTA />
      </div>
    </div>
  );
}
