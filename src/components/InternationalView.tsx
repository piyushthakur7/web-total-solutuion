import { HERO_IMAGES } from "../stockImages";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Clock,
  DollarSign,
  FileText,
  KeyRound,
  MessageSquare,
} from "lucide-react";
import { EMAIL, FOUNDER, LAW_FIRM_WHATSAPP_URL } from "../siteContent";
import { PORTFOLIO_ITEMS } from "../data";
import { LAW_FIRM_PAGE } from "../lawFirmPage";
import { PageIntro, SectionHeading, TextLink } from "./StudioPrimitives";
import ProcessSection from "./ProcessSection";
import FAQSection from "./FAQSection";
import WhatsAppIcon from "./WhatsAppIcon";

const ABROAD_ICONS = {
  clock: Clock,
  dollar: DollarSign,
  message: MessageSquare,
  file: FileText,
  key: KeyRound,
};

/**
 * Landing page for international law firms. A specialised offer with its own
 * fixed framing, quoted in USD; the first conversation happens over WhatsApp
 * or email, so those are the actions here instead of the enquiry form.
 */
export default function InternationalView() {
  const page = LAW_FIRM_PAGE;
  const examples = page.examples.flatMap((example) =>
    PORTFOLIO_ITEMS.filter((item) => item.id === example.id).map((item) => ({
      ...example,
      item,
    })),
  );

  const actions = (
    <>
      <a
        href={LAW_FIRM_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-paper"
      >
        <WhatsAppIcon className="size-5" />
        Message us on WhatsApp
      </a>
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4"
      >
        Or email {EMAIL}
      </a>
    </>
  );

  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        compact
        label={page.eyebrow}
        image={HERO_IMAGES.law}
        title={page.h1}
        description={page.subheadline}
        facts={[
          { label: "Price", value: `${page.offer.price} USD` },
          { label: "Scope", value: page.offer.scope },
          { label: "Timeline", value: page.offer.timeline },
          { label: "Ownership", value: "Domain, hosting and code are yours" },
        ]}
      >
        {actions}
      </PageIntro>

      <section className="bg-white py-12 sm:py-16">
        <div className="studio-container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              heading="What the offer covers"
              intro={page.offer.timelineCondition}
            />
          </div>
          <div className="lg:col-span-7">
            <ul>
              {[
                `${page.offer.scope}, designed around your firm and practice areas`,
                "A written scope and fixed quote in USD before work begins",
                "Design approved by you before development",
                "30 days of post-launch support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-t border-ink/15 py-3.5 text-[15px] leading-relaxed"
                >
                  <Check
                    className="mt-1 size-4 shrink-0 text-brand-blue"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-2 rounded-[16px] border border-ink/15 bg-paper p-5">
              <p className="text-[15px] font-semibold">
                Optional care plan, {page.offer.carePlan.price}
              </p>
              <p className="mt-1 text-[15px] leading-relaxed text-graphite">
                {page.offer.carePlan.includes} It is separate from the project
                price and starts only if you choose it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-container py-14 sm:py-20">
        <SectionHeading
          heading={page.problems.heading}
          intro={page.problems.intro}
        />
        <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
          {page.problems.items.map((item) => (
            <li key={item.title} className="border-t border-ink/15 py-5">
              <h3 className="text-[17px] font-semibold">{item.title}</h3>
              <p className="mt-1.5 max-w-[56ch] text-[15px] leading-relaxed text-graphite">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="work" className="scroll-mt-28 bg-white py-14 sm:py-20">
        <div className="studio-container">
          <SectionHeading
            heading="Professional-services sites we have built"
            intro="One is a law firm. The other is not, and is labelled with its real sector. Both are live, so you can open them."
          />
          <ul className="mt-9 grid gap-8 sm:grid-cols-2">
            {examples.map(({ item, sector, description }) => (
              <li key={item.id}>
                <a
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="project-frame">
                    <div className="relative aspect-[16/10] bg-paper">
                      <Image
                        src={item.imageUrl}
                        alt={`${item.title} website`}
                        fill
                        sizes="(min-width: 640px) 46vw, 92vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-graphite">{sector}</p>
                  <p className="mt-1 flex items-center gap-2 font-display text-xl group-hover:underline">
                    {item.title}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </p>
                </a>
                <p className="mt-1.5 max-w-[52ch] text-[15px] leading-relaxed text-graphite">
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <TextLink href="/work">Case studies with design decisions</TextLink>
          </div>
        </div>
      </section>

      <section className="bg-deep py-14 text-paper sm:py-20">
        <div className="studio-container">
          <SectionHeading
            light
            heading={page.abroad.heading}
            intro={page.abroad.intro}
          />
          <ul className="mt-8 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
            {page.abroad.items.map((item) => {
              const Icon = ABROAD_ICONS[item.icon];
              return (
                <li key={item.title} className="border-t border-white/20 py-5">
                  <Icon className="size-5 text-marker" aria-hidden="true" />
                  <h3 className="mt-3 text-[17px] font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 max-w-[62ch] border-t border-white/20 pt-6 text-[15px] leading-relaxed text-white/75">
            The studio is led by {FOUNDER.name}, who runs the first
            conversation, makes the design decisions and builds the site.{" "}
            <Link href="/about" className="underline underline-offset-4">
              About the studio
            </Link>
          </p>
        </div>
      </section>

      <ProcessSection
        steps={page.processSteps}
        heading="From first message to launch"
        intro="Five stages. You know what is happening, what is next and what it costs at each one."
      />

      <FAQSection
        faqs={page.faqs}
        heading="Law firm websites: questions"
        intro="Price, timeline, communication, ownership and support."
        background="paper"
      />

      <section className="studio-container">
        <div className="rounded-[24px] bg-marker p-7 sm:p-12">
          <h2 className="max-w-xl font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Tell us about your firm.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/80">
            Send a message with your practice areas and current website. You
            will get a written scope and a fixed quote in USD.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={LAW_FIRM_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink"
            >
              <WhatsAppIcon className="size-5" />
              Message us on WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-link inline-flex min-h-11 items-center text-sm"
            >
              Or email {EMAIL}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
