import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CLIENT_COMMITMENTS, OFFICES } from "../siteContent";
import { PageIntro, SectionLabel, TextLink } from "./StudioPrimitives";
import FounderSection from "./FounderSection";
import ProcessSection from "./ProcessSection";
import FinalCTA from "./FinalCTA";

export default function AboutView() {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        label="The studio / Web Total Solution"
        title={
          <>
            Small enough to care.
            <br />
            Built to deliver.
          </>
        }
        description="An independent design and development studio in Kolkata and Delhi. We work with ambitious businesses in India and beyond to build a stronger presence online."
      >
        <TextLink href="/work">Get to know our work</TextLink>
      </PageIntro>
      <section className="studio-container">
        <div className="grid overflow-hidden rounded-[24px] bg-deep text-paper lg:grid-cols-12">
          <div className="relative flex min-h-80 flex-col justify-between border-b border-white/15 p-8 sm:p-12 lg:col-span-7 lg:border-b-0 lg:border-r">
            <SectionLabel light>Our way of working</SectionLabel>
            <p className="my-10 font-display text-[clamp(3.5rem,7vw,6rem)] leading-[1]">
              Think clearly.
              <br />
              Design carefully.
              <br />
              <span className="text-marker">Build properly.</span>
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[.15em] text-white/50">
              Strategy / Design / Development
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-5">
            <p className="font-display text-3xl leading-tight">
              A website is a business decision.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">
              It shapes the first impression, answers the important questions
              and helps someone decide whether to trust you. We give those
              details the attention they deserve.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">
              The same team takes your project from planning and design through
              development and launch. Clear communication, considered decisions,
              and work we can stand behind.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7 py-12 sm:py-16 md:grid-cols-4">
          {[
            ["100+", "Websites delivered"],
            ["30+", "Industries served"],
            ["Kolkata + Delhi", "Our home base"],
            ["Design to launch", "One connected team"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-2xl sm:text-3xl">{value}</p>
              <p className="mt-2 text-xs text-graphite">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <FounderSection />
      <section className="studio-section">
        <div className="studio-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Trust, put in writing</SectionLabel>
            <h2 className="mt-5 font-display text-display">
              Clear expectations.
              <br />
              From day one.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-graphite">
              The practical commitments behind a good working relationship.
            </p>
          </div>
          <ul className="lg:col-span-7">
            {CLIENT_COMMITMENTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border-t border-ink/15 py-5 text-[15px] leading-relaxed"
              >
                <Check className="mt-1 size-4 shrink-0 text-brand-blue" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ProcessSection heading="Good work starts with a clear process." />
      <section className="studio-section">
        <div className="studio-container">
          <SectionLabel>Based in India / Working across borders</SectionLabel>
          <div className="mt-7 grid gap-8 md:grid-cols-2">
            {OFFICES.map((office) => (
              <div key={office.city} className="border-t border-ink/15 pt-7">
                <h2 className="font-display text-3xl">{office.city}</h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-graphite">
                  {office.lines.join(", ")}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold"
                >
                  Get in touch
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
