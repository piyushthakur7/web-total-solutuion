import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  PROJECT_PAGE_FAQS,
  PROJECT_PAGE_FEATURES,
  WTS_CRM,
} from "../projects";
import { getWorkCaseStudy } from "../work";
import { contactHref } from "../lead";
import { PageIntro, SectionHeading, TextLink } from "./StudioPrimitives";
import FinalCTA from "./FinalCTA";
import WorkVisual from "./work/WorkVisual";

/**
 * /projects — the product Web Total Solution builds and runs itself. A short
 * overview: what it is, the one workflow it is built around, what the
 * interface looks like and what it costs. The detail lives in the case study
 * and on wtscrm.com.
 */
export default function ProjectsView() {
  const product = WTS_CRM;
  const study = getWorkCaseStudy("wts-crm");
  const dashboard = study?.decisions[0].image;

  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        compact
        label="Own product, built and run by Web Total Solution"
        title="WTS CRM"
        description={product.positioning}
        facts={[
          { label: "What it is", value: "Subscription web application" },
          { label: "Built for", value: "Indian service businesses" },
          { label: "Status", value: "Live, with a free 3-day trial" },
          { label: "Our role", value: "Scope, design, engineering, operations" },
        ]}
      >
        {/* Followed link — no nofollow — so crawlers reach wtscrm.com from here.
            `noreferrer` is deliberately omitted: it would strip the Referer
            header and hide this traffic from wtscrm.com analytics. */}
        <a
          href={product.siteUrl}
          target="_blank"
          rel="noopener"
          className="btn btn-paper"
        >
          Visit {product.siteLabel}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href="/work/wts-crm"
          className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4"
        >
          Read the case study
        </a>
      </PageIntro>

      {dashboard && (
        <section className="bg-white py-12 sm:py-16">
          <div className="studio-container grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <figure className="lg:col-span-7">
              <WorkVisual
                image={dashboard}
                label={product.siteLabel}
                sizes="(min-width: 1024px) 700px, 92vw"
                priority
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-graphite">
                {dashboard.caption}
              </figcaption>
            </figure>
            <div className="lg:col-span-5">
              <SectionHeading
                heading="Why we built it"
                intro="A small service business tracks enquiries in WhatsApp and a spreadsheet, and the next step depends on someone remembering it. WTS CRM connects the whole path in one workspace, for one person or a team."
              />
              <p className="mt-4 text-[15px] leading-relaxed text-graphite">
                {product.supportingCopy}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="studio-container py-14 sm:py-20">
        <SectionHeading
          heading="One workflow, from enquiry to payment"
          intro="The product is scoped around these six stages. Each one hands over to the next."
        />
        <ol className="mt-9 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {product.workflow.map((step, index) => (
            <li key={step.label} className="border-t border-ink/15 py-5">
              <p className="flex items-baseline gap-3">
                <span className="text-sm font-semibold text-brand-blue">
                  {index + 1}
                </span>
                <span className="font-display text-2xl">{step.label}</span>
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-graphite">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="studio-container">
          <SectionHeading heading="What it does at each stage" />
          <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
            {PROJECT_PAGE_FEATURES.map((feature) => (
              <li key={feature.title} className="border-t border-ink/15 py-5">
                <h3 className="text-[17px] font-semibold">{feature.title}</h3>
                <p className="mt-1.5 max-w-[56ch] text-[15px] leading-relaxed text-graphite">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <TextLink href={product.siteUrl ?? "/work/wts-crm"}>
              Full feature list on {product.siteLabel}
            </TextLink>
          </div>
        </div>
      </section>

      <section className="studio-container py-14 sm:py-20">
        <SectionHeading
          heading="WTS CRM subscription prices"
          intro="Monthly prices in Indian rupees for the CRM product. These are separate from our website project pricing, which is quoted in USD."
        />
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
            <caption className="sr-only">
              WTS CRM subscription plans and monthly prices in INR
            </caption>
            <thead>
              <tr className="border-b border-ink/25 text-sm text-graphite">
                <th scope="col" className="py-3 pr-4 font-semibold">
                  Plan
                </th>
                <th scope="col" className="py-3 pr-4 font-semibold">
                  Price (INR)
                </th>
                <th scope="col" className="py-3 font-semibold">
                  Best for
                </th>
              </tr>
            </thead>
            <tbody>
              {product.plans.map((plan) => (
                <tr key={plan.name} className="border-b border-ink/15">
                  <th scope="row" className="py-4 pr-4 font-display text-xl">
                    {plan.name}
                  </th>
                  <td className="whitespace-nowrap py-4 pr-4 font-semibold">
                    {plan.price}
                    {plan.cadence && (
                      <span className="font-normal text-graphite">
                        {" "}
                        {plan.cadence}
                      </span>
                    )}
                  </td>
                  <td className="py-4 text-graphite">{plan.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-graphite">
          {product.trialNote} {product.notFor[0]}
        </p>
        <div className="mt-3">
          <TextLink href={product.siteUrl ?? "/work/wts-crm"}>
            Plan details and trial on {product.siteLabel}
          </TextLink>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="studio-container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              heading="Common questions"
              intro="The product’s own site has the full FAQ."
            />
          </div>
          <dl className="lg:col-span-8">
            {PROJECT_PAGE_FAQS.map((faq) => (
              <div key={faq.question} className="border-t border-ink/15 py-5">
                <dt className="font-display text-xl">{faq.question}</dt>
                <dd className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-graphite">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="pt-14 sm:pt-20">
        <FinalCTA
          headline="Planning a product of your own?"
          text="We design and build product interfaces and web applications as separately scoped projects. Tell us who uses it and what it has to do."
          contactHref={contactHref({ type: "SaaS / Web Application" })}
        />
      </div>
    </div>
  );
}
