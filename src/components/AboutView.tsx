import { HERO_IMAGES } from "../stockImages";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import {
  CLIENT_COMMITMENTS,
  FOUNDER,
  OFFICES,
  STUDIO_STATS,
  WORKING_HOURS,
} from "../siteContent";
import { PageIntro, SectionHeading, TextLink } from "./StudioPrimitives";
import FinalCTA from "./FinalCTA";

const working = [
  {
    title: "Who you work with",
    text: "Piyush leads every project: he runs the discovery conversation, makes the design decisions and writes or reviews the code. Your questions go to the person doing the work.",
  },
  {
    title: "How updates happen",
    text: "Progress is shared on preview links you can open on your own phone and laptop. Day-to-day messages run over email, with WhatsApp or Slack if you prefer, and calls are arranged when a decision needs a conversation.",
  },
  {
    title: "How decisions are approved",
    text: "There are three sign-offs: the written scope, the page structure and the design. Development starts only after the design is approved, so what gets built is what you agreed to.",
  },
];

export default function AboutView() {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        label="The studio"
        image={HERO_IMAGES.studio}
        title={
          <>
            Small enough to care.
            <br />
            Built to deliver.
          </>
        }
        description="Web Total Solution is a founder-led web studio in Kolkata and Delhi. We design and build startup websites, landing pages and product interfaces for clients in India and abroad."
      >
        <TextLink href="/work">See the work</TextLink>
      </PageIntro>

      <section className="studio-container grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading heading="Run by the person who builds the product" />
          {FOUNDER.photo && (
            <Image
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              width={160}
              height={160}
              className="mt-7 size-40 rounded-2xl object-cover"
            />
          )}
          <div className="mt-7 border-t border-ink/15 pt-5">
            <p className="font-display text-2xl">{FOUNDER.name}</p>
            <p className="mt-1 text-sm text-graphite">{FOUNDER.title}</p>
          </div>
        </div>
        <div className="space-y-5 text-[17px] leading-relaxed text-graphite lg:col-span-7">
          <p className="text-xl leading-snug text-ink sm:text-2xl">
            Piyush Thakur started Web Total Solution to build websites that do a
            specific job: explain what a business offers and make it easy to
            take the next step.
          </p>
          <p>
            In five years of web development the studio has delivered more
            than 100 websites across more than 30 industries, for service
            firms, manufacturers, clinics, schools and online stores. Live
            examples are listed, with links, on the work page.
          </p>
          <dl className="grid grid-cols-3 gap-5 border-y border-ink/15 py-5">
            {STUDIO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm leading-snug text-graphite">
                  {stat.label}
                </dt>
                <dd className="font-display text-2xl text-ink sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <p>
            Alongside client work, the studio builds and runs its own software
            product. WTS CRM is a subscription CRM for Indian service
            businesses that connects leads, follow-ups, quotations, projects,
            invoices and payments. Scoping it, designing its interface and
            keeping it running is why product interfaces are part of what we
            offer, and why we care about what happens after a launch.
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-1 pt-1">
            <TextLink href="/work/wts-crm">WTS CRM case study</TextLink>
            <TextLink href="/work">Client work</TextLink>
          </div>
        </div>
      </section>

      <section className="studio-section mt-16 bg-white sm:mt-24">
        <div className="studio-container">
          <SectionHeading heading="Working with the studio" />
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
            {working.map((item) => (
              <div key={item.title} className="border-t border-ink/15 pt-5">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <TextLink href="/pricing">Packages and what they include</TextLink>
          </div>
        </div>
      </section>

      <section className="studio-section">
        <div className="studio-container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              heading="What every client gets in writing"
              intro="The same six commitments apply to a landing page and to a full product website."
            />
          </div>
          <ul className="lg:col-span-7">
            {CLIENT_COMMITMENTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 border-t border-ink/15 py-4 text-[15px] leading-relaxed last:border-b"
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
      </section>

      <section className="studio-container pb-16 sm:pb-24">
        <SectionHeading
          heading="Where we are"
          intro={`Two offices in India. Most projects run remotely, and clients abroad are quoted and invoiced in USD. Hours: ${WORKING_HOURS}.`}
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {OFFICES.map((office) => (
            <address
              key={office.city}
              className="border-t border-ink/15 pt-5 not-italic"
            >
              <h3 className="font-display text-2xl">{office.city}</h3>
              <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-graphite">
                {office.lines.join(", ")}
              </p>
            </address>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
