import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTA } from "../siteContent";
import { SERVICES_DATA } from "../services";
import { contactHref } from "../lead";
import { PageIntro, SectionHeading, TextLink } from "./StudioPrimitives";
import ProcessSection from "./ProcessSection";
import FinalCTA from "./FinalCTA";

const services = [
  {
    name: "Startup and marketing websites",
    audience: "For a startup or growing company whose website has to explain a product and bring in enquiries.",
    problem: "The current site says too much, or too little, and visitors leave without understanding the offer.",
    deliverables: [
      "Messaging and page-by-page structure",
      "Wireframes, then custom UI",
      "Responsive build with CMS where scoped",
      "SEO foundation, analytics, QA and handover",
    ],
    href: "/business-website-development",
    linkLabel: "Marketing website service",
    study: { href: "/work/medara-labs", label: "Medara Labs case study" },
  },
  {
    name: "Landing pages",
    audience: "For a team launching a product, feature or campaign that needs one focused page.",
    problem: "Traffic arrives at a general page that does not match what the visitor was promised.",
    deliverables: [
      "Audience, offer and message hierarchy",
      "Wireframe",
      "Designed and built page",
      "Form, on-page SEO and analytics",
    ],
    href: "/services/landing-pages",
    linkLabel: "Landing page service",
    study: { href: "/work/wts-crm", label: "wtscrm.com, in the WTS CRM case study" },
  },
  {
    name: "Website redesign",
    audience: "For a business whose website no longer matches what it sells or how it wants to be seen.",
    problem: "The site is slow, hard to update or built for an earlier version of the business.",
    deliverables: [
      "Review of the existing site and its URLs",
      "New structure and design",
      "Rebuild with content and redirects carried across",
      "Launch checks",
    ],
    href: "/website-redesign",
    linkLabel: "Redesign service",
    study: { href: "/work", label: "Selected work (new builds, not redesigns)" },
  },
  {
    name: "Product interfaces and web applications",
    audience: "For a founder or team building a SaaS product, dashboard or portal.",
    problem: "The workflow is clear in someone’s head but not yet in an interface people can use.",
    deliverables: [
      "Discovery and written scope",
      "UX flows and data model",
      "Interface design",
      "Engineering, testing and handover",
    ],
    href: "/services/saas-development",
    linkLabel: "Product interface service",
    study: { href: "/work/wts-crm", label: "WTS CRM case study" },
  },
];

const additional = ["ecommerce-development", "content-writing", "digital-marketing", "app-development"];

export default function ServicesView() {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        label="Services"
        title={
          <>
            One studio.
            <br />
            The whole journey.
          </>
        }
        description="Strategy, design and development for startup websites, landing pages and product interfaces. Each service below says who it is for and what you receive."
      >
        <TextLink href="/contact">{CTA.primary}</TextLink>
      </PageIntro>

      <section className="studio-container">
        {services.map((service) => (
          <article
            key={service.name}
            className="grid gap-x-12 gap-y-6 border-t border-ink/15 py-10 first:border-t-0 first:pt-0 sm:py-14 lg:grid-cols-12"
          >
            <div className="lg:col-span-6">
              <h2 className="max-w-md font-display text-3xl leading-tight sm:text-4xl">
                {service.name}
              </h2>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink">
                {service.audience}
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-graphite">
                <span className="font-semibold text-ink">
                  The problem it addresses:{" "}
                </span>
                {service.problem}
              </p>
              <div className="mt-5 flex flex-col items-start gap-1">
                <TextLink href={service.href}>{service.linkLabel}</TextLink>
                <TextLink href={service.study.href}>
                  {service.study.label}
                </TextLink>
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold">What you receive</p>
              <ul className="mt-3">
                {service.deliverables.map((detail) => (
                  <li
                    key={detail}
                    className="border-t border-ink/15 py-3.5 text-[15px] last:border-b"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="studio-container pb-16 sm:pb-24">
        <div className="rounded-[24px] bg-white p-6 sm:p-10">
          <SectionHeading
            heading="Additional services"
            intro="Offered alongside a website or product project. Each is scoped and quoted on its own, and none is automatically included in a website package."
          />
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {additional.map((slug) => {
              const service = SERVICES_DATA[slug];
              return (
                <li key={slug} className="border-t border-ink/15">
                  <Link
                    href={`/services/${slug}`}
                    className="group flex min-h-16 items-center justify-between gap-4 py-4"
                  >
                    <span>
                      <span className="block font-display text-xl group-hover:underline">
                        {service.shortName}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-graphite">
                        {service.fit.items[0]}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-graphite"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ProcessSection>
        <Link href={contactHref()} className="btn btn-line">
          {CTA.primary}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </ProcessSection>
      <div className="mt-16 sm:mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
