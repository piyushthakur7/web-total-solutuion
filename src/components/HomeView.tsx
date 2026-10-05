import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { STARTUP_PACKAGES } from "../siteContent";
import { WORK_CASE_STUDIES } from "../work";
import { SectionLabel, TextLink } from "./StudioPrimitives";
import ProcessSection from "./ProcessSection";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import ImpactHero from "./ImpactHero";

const workOrder = ["faw-dubai", "wts-crm", "mechverses", "medara-labs"];
const work = workOrder.flatMap((slug) =>
  WORK_CASE_STUDIES.filter((study) => study.slug === slug),
);
const surfaces: Record<string, string> = {
  "faw-dubai": "bg-[#ece8e1]",
  "wts-crm": "bg-[#e2eaf1]",
  mechverses: "bg-[#e3ecf7]",
  "medara-labs": "bg-[#eee8f0]",
};
const capabilities = [
  {
    name: "Strategy & direction",
    text: "Get the story, structure and customer journey right before design begins.",
    tags: "Positioning / Research / Wireframes",
  },
  {
    name: "Brand-led web design",
    text: "A distinctive visual identity, considered details and an experience that feels like you.",
    tags: "UI design / UX / Design systems",
  },
  {
    name: "Development & launch",
    text: "Fast, responsive Next.js websites, with the tools you need to manage and grow them.",
    tags: "Next.js / CMS / Integrations",
  },
];

export default function HomeView() {
  return (
    <div className="bg-paper text-ink">
      <ImpactHero />
      <section
        className="studio-container py-9 sm:py-11"
        aria-label="Studio at a glance"
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-4">
          {[
            ["100+", "Websites delivered"],
            ["30+", "Industries served"],
            ["Design + build", "One connected team"],
            ["India & beyond", "Working across borders"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-2xl sm:text-[28px]">{value}</p>
              <p className="mt-1.5 text-xs text-graphite">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="selected-work" className="studio-section bg-white">
        <div className="studio-container">
          <SectionLabel>01 / Selected work</SectionLabel>
          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl font-display text-display">
              Different businesses.
              <br />
              The same attention to detail.
            </h2>
            <TextLink href="/work">All selected work</TextLink>
          </div>
          <div className="mt-10 grid gap-x-7 gap-y-12 sm:mt-14 md:grid-cols-2">
            {work.map((study, index) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block"
              >
                <div
                  className={`relative rounded-[20px] p-5 sm:p-8 ${surfaces[study.slug]}`}
                >
                  <div className="project-frame">
                    <div className="relative aspect-[16/10]">
                      {study.visual.type === "screenshot" && (
                        <Image
                          src={study.visual.src}
                          alt={study.visual.alt}
                          fill
                          sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 90vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[.12em] text-graphite">
                      0{index + 1} / {study.category}
                    </p>
                    <h3 className="mt-2 font-display text-[28px]">
                      {study.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-graphite">
                      {study.headline}
                    </p>
                  </div>
                  <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section bg-deep text-paper">
        <div className="studio-container grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionLabel light>02 / What we do</SectionLabel>
            <h2 className="mt-6 font-display text-display">
              Good thinking.
              <br />
              Great design.
              <br />
              <span className="text-marker">Built together.</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/65">
              The people who shape your website are the people who build it. One
              team, one clear direction, from first conversation to launch.
            </p>
            <div className="mt-7">
              <TextLink href="/services" light>
                Explore our services
              </TextLink>
            </div>
          </div>
          <dl className="lg:col-span-7">
            {capabilities.map((item, index) => (
              <div
                key={item.name}
                className="border-t border-white/20 py-7 first:pt-6"
              >
                <dt className="flex items-baseline gap-5">
                  <span className="font-mono text-[10px] text-marker">
                    0{index + 1}
                  </span>
                  <span className="font-display text-[28px] sm:text-3xl">
                    {item.name}
                  </span>
                </dt>
                <dd className="ml-9 mt-3 max-w-lg text-[15px] leading-relaxed text-white/65">
                  {item.text}
                </dd>
                <dd className="ml-9 mt-4 font-mono text-[9px] uppercase tracking-[.1em] text-white/50">
                  {item.tags}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="studio-section">
        <div className="studio-container">
          <SectionLabel>03 / Ways to work together</SectionLabel>
          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <h2 className="font-display text-display">
              A clear starting point.
              <br />
              Room for your ambition.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-graphite lg:justify-self-end">
              From a focused launch page to a complete digital presence. Every
              project starts with a conversation and a fixed written scope.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {STARTUP_PACKAGES.map((pkg, i) => (
              <Link
                key={pkg.name}
                href="/pricing"
                className={`group flex flex-col rounded-[20px] border p-7 transition-colors ${pkg.highlight ? "border-ink bg-ink text-paper" : "border-ink/15 hover:bg-white"}`}
              >
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${pkg.highlight ? "text-marker" : "text-graphite"}`}
                >
                  0{i + 1} / {i === 0 ? "Launch" : i === 1 ? "Grow" : "Scale"}
                </span>
                <h3 className="mt-7 font-display text-[26px] leading-tight">
                  {pkg.name}
                </h3>
                <p
                  className={`mt-3 flex-1 text-sm leading-relaxed ${pkg.highlight ? "text-white/65" : "text-graphite"}`}
                >
                  {pkg.audience}
                </p>
                <div
                  className={`mt-8 flex items-center justify-between border-t pt-5 ${pkg.highlight ? "border-white/20" : "border-ink/15"}`}
                >
                  <span className="text-sm">
                    From{" "}
                    <strong className="ml-1 font-display text-3xl">
                      ${pkg.from.toLocaleString("en-US")}
                    </strong>
                  </span>
                  <ArrowUpRight
                    className={`size-5 ${pkg.highlight ? "text-marker" : ""}`}
                  />
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-xs text-graphite">
            Starting prices in USD. Final scope, timeline and investment
            confirmed before we begin.
          </p>
        </div>
      </section>
      <ProcessSection
        heading="Considered at every step."
        ctaLabel="Talk through your project"
      />
      <Testimonials heading="Confidence comes from clarity." />
      <FAQSection heading="Good questions. Clear answers." />
      <div className="pb-16 sm:pb-24">
        <FinalCTA />
      </div>
    </div>
  );
}
