import { HERO_IMAGES } from "../stockImages";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  CTA,
  Faq,
  OWNERSHIP_TERM,
  SUPPORT_DETAIL,
  WEBSITE_PACKAGES,
  formatUsd,
} from "../siteContent";
import { contactHref } from "../lead";
import { PageIntro, SectionHeading } from "./StudioPrimitives";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import PackageCards from "./PackageCards";

const [sprint, growth, custom] = WEBSITE_PACKAGES;

/** Also emitted as FAQPage schema by the route. */
export const PRICING_FAQS: Faq[] = [
  {
    question: "What does a starting price cover?",
    answer: `It covers the package as listed, at its smallest sensible scope. The Landing Page Sprint starts at ${formatUsd(sprint.from)}, the Startup Growth Site at ${formatUsd(growth.from)} and the Custom Product Website at ${formatUsd(custom.from)}, all in USD. After a scope review you receive a written quote, which can be higher than the starting price and says why.`,
  },
  {
    question: "How long does a project take?",
    answer:
      "The timeline is agreed after the scope review and written into the quote. It depends on the number of page templates and on how quickly content and approvals come back, so we set it per project instead of publishing one number for every case.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payment milestones are set out in the written quote, alongside the scope and timeline. International projects are quoted and invoiced in USD.",
  },
  {
    question: "Is a web application or dashboard included in the $5,000 package?",
    answer:
      "No. The Custom Product Website is a scoped product or marketing website. A production SaaS application, an internal dashboard or a mobile app is a different kind of project and is scoped and quoted separately.",
    link: { label: "How we scope product work", href: "/services/saas-development" },
  },
  {
    question: "What happens after launch?",
    answer: `${SUPPORT_DETAIL} ${OWNERSHIP_TERM}`,
  },
];

const scopeFactors = [
  {
    title: "Content",
    text: "If you supply final copy and images, the quote covers structure, design and build. Copywriting can be added and is listed as its own line.",
  },
  {
    title: "CMS",
    text: "A blog or editable pages add content types to design and build. The quote names each one, so you know what your team will be able to edit.",
  },
  {
    title: "Integrations",
    text: "Forms into a CRM, analytics, payments or a product API are scoped individually. Third-party subscription fees are paid to the provider.",
  },
  {
    title: "Custom features",
    text: "Interactive product demos, calculators or account areas are estimated on their own. Anything that behaves like an application is quoted as product work.",
  },
];

const separateCosts = [
  "Domain registration and hosting, billed by the provider to your account",
  "Paid plugins, fonts, stock media and third-party subscriptions",
  "Copywriting, where it is not in the agreed scope",
  "Ongoing maintenance after the included support period",
  "Web applications, dashboards and mobile apps",
];

export default function PricingView() {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        compact
        label="Pricing"
        image={HERO_IMAGES.planning}
        title="Three website packages, with starting prices in USD"
        description="Each package combines strategy, design and development. The price you pay is set in a written quote after we have reviewed the scope together."
      />
      <section className="studio-container pt-10 sm:pt-14">
        <PackageCards detailed />
        <p className="mt-5 text-sm leading-relaxed text-graphite">
          Starting prices in USD. Timeline agreed after scope review. Design is
          approved before development begins.
        </p>
      </section>

      <section className="studio-section">
        <div className="studio-container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              heading="What changes the quote"
              intro="A starting price assumes a small, clear scope. These four things move it."
            />
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {scopeFactors.map((item) => (
              <div key={item.title} className="border-t border-ink/15 py-5">
                <dt className="font-display text-xl">{item.title}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-graphite">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="studio-container grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              heading="Quoted separately"
              intro="These are not hidden in a package price. Where they apply, they appear as their own lines in the quote."
            />
            <ul className="mt-6">
              {separateCosts.map((item) => (
                <li
                  key={item}
                  className="border-t border-ink/15 py-3.5 text-[15px] leading-relaxed last:border-b"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[20px] border border-ink/15 bg-paper p-6 sm:p-9">
            <h2 className="font-display text-[28px] leading-tight">
              Building a product, not a website?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-graphite">
              Dashboards, customer portals and SaaS products start with a
              discovery phase: users and roles, the data model and the first
              version worth shipping. They are quoted from that scope, not from
              a package.
            </p>
            <Link
              href={contactHref({ type: "SaaS / Web Application" })}
              className="btn btn-ink mt-7"
            >
              {CTA.discuss}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={PRICING_FAQS}
        heading="Pricing questions"
        intro="Starting prices, timing, payments and what is not included."
        background="paper"
      />
      <FinalCTA headline="Not sure which package fits?" />
    </div>
  );
}
