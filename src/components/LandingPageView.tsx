import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LandingPageConfig } from "../landingPages";
import {
  CTA,
  NEXT_STEPS,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
} from "../siteContent";
import { PageIntro, SectionHeading, TextLink } from "./StudioPrimitives";
import EvidenceBlock from "./EvidenceBlock";
import FAQSection from "./FAQSection";
import LeadForm from "./LeadForm";

const related = [
  { href: "/website-development-company-india", label: "Website development in India" },
  { href: "/website-development-company-kolkata", label: "Website development in Kolkata" },
  { href: "/website-development-company-delhi", label: "Website development in Delhi" },
  { href: "/nextjs-development-company-india", label: "Next.js development" },
  { href: "/business-website-development", label: "Business website development" },
  { href: "/website-redesign", label: "Website redesign" },
  { href: "/ecommerce-development", label: "E-commerce development" },
  { href: "/services", label: "All services" },
  { href: "/work", label: "Selected work" },
  { href: "/pricing", label: "Pricing" },
];

/**
 * Renders a service, location or technology page from a LandingPageConfig:
 * hero, evidence, intro, page-specific sections, quote guidance, FAQ and one
 * enquiry form.
 */
export default function LandingPageView({
  config,
}: {
  config: LandingPageConfig;
}) {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        compact
        label={config.label}
        title={config.h1}
        image={config.heroImage}
        description={config.lead}
        facts={config.facts}
      >
        <Link href="#enquiry" className="btn btn-paper">
          {CTA.quote}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
        <Link
          href="/work"
          className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4"
        >
          {CTA.work}
        </Link>
      </PageIntro>

      <EvidenceBlock evidence={config.evidence} />

      <section className="studio-container grid gap-8 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading heading={config.intro.heading} />
        </div>
        <div className="space-y-5 lg:col-span-7">
          {config.intro.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-[62ch] text-[17px] leading-relaxed text-graphite"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {config.sections.map((section, sectionIndex) => (
        <section
          key={section.heading}
          className={`py-14 sm:py-20 ${sectionIndex % 2 === 0 ? "bg-white" : ""}`}
        >
          <div className="studio-container">
            <SectionHeading heading={section.heading} intro={section.intro} />
            <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
              {section.items.map((item) => {
                const external = item.href?.startsWith("http");
                const title = item.href ? (
                  external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link inline-flex items-center gap-1.5"
                    >
                      {item.title}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-link inline-flex items-center gap-1.5"
                    >
                      {item.title}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  )
                ) : (
                  item.title
                );
                return (
                  <li key={item.title} className="border-t border-ink/15 py-5">
                    <h3 className="text-[17px] font-semibold">{title}</h3>
                    <p className="mt-1.5 max-w-[56ch] text-[15px] leading-relaxed text-graphite">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ul>
            {section.note && (
              <p className="mt-5 max-w-[70ch] text-sm leading-relaxed text-graphite">
                {section.note}
              </p>
            )}
          </div>
        </section>
      ))}

      {config.groups && (
        <section className="studio-container py-14 sm:py-20">
          <SectionHeading
            heading={config.groups.heading}
            intro={config.groups.intro}
          />
          <dl className="mt-7 space-y-5">
            {config.groups.items.map((group) => (
              <div
                key={group.title}
                className="grid gap-3 border-t border-ink/15 pt-5 sm:grid-cols-12"
              >
                <dt className="text-[15px] font-semibold sm:col-span-3">
                  {group.title}
                </dt>
                <dd className="sm:col-span-9">
                  <ul className="flex flex-wrap gap-2">
                    {group.values.map((value) => (
                      <li
                        key={value}
                        className="rounded-full border border-ink/20 bg-white px-3.5 py-1.5 text-sm"
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="bg-deep py-14 text-paper sm:py-20">
        <div className="studio-container grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading heading={config.quote.heading} light />
          </div>
          <div className="space-y-4 lg:col-span-7">
            {config.quote.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[60ch] text-[16px] leading-relaxed text-white/75"
              >
                {paragraph}
              </p>
            ))}
            <TextLink href="/pricing" light>
              Website packages and terms
            </TextLink>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={config.faqs}
        heading={config.faqHeading}
        intro="Cost, timing, ownership and support."
      />

      <section
        id="enquiry"
        className="studio-container grid scroll-mt-28 items-start gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-5">
          <SectionHeading
            heading={CTA.quote}
            intro="Describe the project in a few lines. The written quote follows a scope review, so nothing is priced on guesswork."
          />
          <ol className="mt-6">
            {NEXT_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 border-t border-ink/15 py-3.5 text-[15px] last:border-b"
              >
                <span className="w-4 shrink-0 text-sm font-semibold text-brand-blue">
                  {index + 1}
                </span>
                {step.title}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[15px] leading-relaxed text-graphite">
            Prefer to talk?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Message on WhatsApp
            </a>{" "}
            or call{" "}
            <a href={PHONE_HREF} className="text-link whitespace-nowrap">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
        <div className="lg:col-span-7">
          <LeadForm
            defaultProjectType={config.projectType}
            defaultPackage={config.package}
            source={`Page: /${config.slug}`}
            submitLabel="Send quote request"
          />
        </div>
      </section>

      <nav
        aria-label="Related pages"
        className="studio-container border-t border-ink/15 pt-8"
      >
        <h2 className="text-sm font-semibold">Related pages</h2>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
          {related
            .filter((link) => link.href !== `/${config.slug}`)
            .map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm text-graphite underline-offset-4 hover:text-ink hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
