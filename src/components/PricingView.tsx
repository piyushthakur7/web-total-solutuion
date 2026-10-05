import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { STARTUP_PACKAGES } from "../siteContent";
import { PageIntro, SectionLabel, TextLink } from "./StudioPrimitives";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";

const questions = [
  {
    question: "What does the starting price cover?",
    answer:
      "The starting price covers a focused project with the services listed in its package. On our discovery call, we agree the pages, features, content responsibilities and delivery schedule. You receive the full scope and a fixed written quote before work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A focused landing page typically takes 1–2 weeks, and a business website with 5–10 pages usually takes 2–4 weeks. Custom platforms take longer depending on their features. Your delivery schedule is confirmed in writing, with time for your feedback and approvals.",
  },
  {
    question: "What about content, hosting and ongoing costs?",
    answer:
      "We discuss copywriting, brand assets, hosting, domain costs and any paid integrations while scoping your project. The written quote makes clear what is included and what needs a separate budget, so you can plan the total investment.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every website includes 30 days of post-launch support for fixes, small content changes and technical assistance. Ongoing maintenance can be scoped separately. You own your source code, content, domain and hosting account.",
  },
];

export default function PricingView() {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        label="Investment / Built around your next stage"
        title={
          <>
            Good design.
            <br />
            Clear investment.
          </>
        }
        description="Three ways to work together. Each combines strategy, custom design and development, with a fixed written quote before we begin."
      >
        <TextLink href="/contact">Find the right fit</TextLink>
      </PageIntro>
      <section className="studio-container">
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {STARTUP_PACKAGES.map((pkg, index) => (
            <article
              key={pkg.name}
              className={`flex flex-col rounded-[24px] border p-7 sm:p-9 ${pkg.highlight ? "border-deep bg-deep text-paper" : "border-ink/15 bg-white"}`}
            >
              <div className="flex min-h-7 items-center justify-between gap-2">
                <span
                  className={`font-mono text-[10px] uppercase tracking-[.15em] ${pkg.highlight ? "text-white/60" : "text-graphite"}`}
                >
                  0{index + 1} / {["Launch", "Grow", "Scale"][index]}
                </span>
                {pkg.highlight && (
                  <span className="rounded-full bg-marker px-3 py-1.5 text-[10px] font-semibold text-ink">
                    For funded startups
                  </span>
                )}
              </div>
              <h2 className="mt-7 font-display text-[30px] leading-[1.12]">
                {pkg.name}
              </h2>
              <p
                className={`mt-4 min-h-[4.5rem] text-sm leading-relaxed ${pkg.highlight ? "text-white/65" : "text-graphite"}`}
              >
                {pkg.audience}
              </p>
              <div className="py-7">
                <p
                  className={`text-xs ${pkg.highlight ? "text-white/65" : "text-graphite"}`}
                >
                  Starting from
                </p>
                <p className="mt-2 font-display text-[clamp(2.8rem,4vw,3.65rem)] leading-none tracking-[-.055em]">
                  ${pkg.from.toLocaleString("en-US")}
                </p>
                <p
                  className={`mt-3 text-xs ${pkg.highlight ? "text-white/65" : "text-graphite"}`}
                >
                  USD / {pkg.priceNote}
                </p>
              </div>
              <ul
                className={`flex-1 space-y-4 border-t pt-7 text-[13px] ${pkg.highlight ? "border-white/20" : "border-ink/15"}`}
              >
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 size-3.5 shrink-0 ${pkg.highlight ? "text-marker" : "text-brand-blue"}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?type=${encodeURIComponent(pkg.projectType)}&details=${encodeURIComponent(`I am interested in the ${pkg.name}. Here is a bit about my startup:`)}`}
                className={`btn mt-9 w-full ${pkg.highlight ? "btn-accent" : "btn-ink"}`}
              >
                {pkg.cta}
                <ArrowUpRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-7 flex flex-col justify-between gap-3 text-xs leading-relaxed text-graphite sm:flex-row">
          <p>
            Starting prices in USD. Your final investment is confirmed after we
            agree the scope.
          </p>
          <p className="shrink-0">Full code ownership. No hidden fees.</p>
        </div>
        <div className="my-16 grid items-center gap-8 rounded-[24px] border border-ink/15 px-7 py-10 sm:my-24 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel>A different kind of project?</SectionLabel>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl">
              Let&apos;s scope it properly.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-graphite">
              Complex integrations, a customer portal, or a complete web
              application? We will map the requirements together and quote the
              work around them.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/contact?type=SaaS%20%2F%20Web%20Application"
              className="btn btn-ink"
            >
              Discuss your project
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <FAQSection
        faqs={questions}
        heading="Before we begin."
        intro="The practical details that make your investment easier to plan."
        background="slate"
      />
      <FinalCTA headline="A good website starts with a good conversation." />
    </div>
  );
}
