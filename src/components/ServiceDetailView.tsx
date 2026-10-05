import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ServiceData } from "../services";
import { CTA, getPackage, formatUsd } from "../siteContent";
import { contactHref } from "../lead";
import { PageIntro, SectionHeading, TextLink } from "./StudioPrimitives";
import EvidenceBlock from "./EvidenceBlock";
import FAQSection from "./FAQSection";
import LeadForm from "./LeadForm";

export default function ServiceDetailView({
  service,
}: {
  service: ServiceData;
}) {
  const pkg = getPackage(service.package);
  const enquiry = contactHref({
    package: service.package,
    type: service.projectType,
  });

  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        compact
        label={service.secondary ? "Additional service" : "Service"}
        title={service.title}
        image={service.heroImage}
        description={service.lead}
      >
        <Link href="#enquiry" className="btn btn-paper">
          {CTA.discuss}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
        <Link
          href="/services"
          className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4"
        >
          Explore all services
        </Link>
      </PageIntro>

      <EvidenceBlock evidence={service.evidence} />

      <section className="studio-container grid gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading heading={service.fit.heading} />
          <ul className="mt-6">
            {service.fit.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-t border-ink/15 py-3.5 text-[15px] leading-relaxed last:border-b"
              >
                <Check
                  className="mt-1 size-4 shrink-0 text-brand-blue"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <SectionHeading heading={service.deliverables.heading} />
          <ol className="mt-6">
            {service.deliverables.items.map((item, index) => (
              <li
                key={item.title}
                className="flex gap-4 border-t border-ink/15 py-4 last:border-b"
              >
                <span className="w-4 shrink-0 text-sm font-semibold text-brand-blue">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold">{item.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-graphite">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-deep py-14 text-paper sm:py-20">
        <div className="studio-container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading heading={service.scope.heading} light />
            <div className="mt-5 space-y-4">
              {service.scope.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[60ch] text-[16px] leading-relaxed text-white/75"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-5">
              <TextLink href="/pricing" light>
                Website packages and terms
              </TextLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[20px] border border-white/20 p-6 sm:p-7">
              {pkg ? (
                <>
                  <p className="text-sm text-white/70">Related package</p>
                  <p className="mt-1 font-display text-2xl">{pkg.name}</p>
                  <p className="mt-3 text-[15px] text-white/75">
                    From{" "}
                    <span className="font-display text-3xl text-white">
                      {formatUsd(pkg.from)}
                    </span>{" "}
                    USD
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {pkg.scope}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-display text-2xl">Quoted per project</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    There is no package price for this service. You receive a
                    written quote after a scope review, with the timeline
                    agreed at the same time.
                  </p>
                </>
              )}
              <Link href={enquiry} className="btn btn-accent mt-6 w-full">
                {CTA.discuss}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={service.faqs}
        heading={`${service.shortName}: common questions`}
        intro="Scope, ownership and what we will not promise."
      />

      <section
        id="enquiry"
        className="studio-container grid scroll-mt-28 items-start gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-5">
          <SectionHeading
            heading={CTA.discuss}
            intro="Tell us what you are planning. We reply within one working day, agree the scope with you and send a written quote."
          />
        </div>
        <div className="lg:col-span-7">
          <LeadForm
            defaultProjectType={service.projectType}
            defaultPackage={service.package}
            source={`Service page: /services/${service.slug}`}
          />
        </div>
      </section>
    </div>
  );
}
