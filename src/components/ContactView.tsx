import React from "react";
import { ArrowUpRight } from "lucide-react";
import LeadForm from "./LeadForm";
import { EMAIL, OFFICES, PHONE_DISPLAY, WHATSAPP_URL } from "../siteContent";
import { PageIntro, SectionLabel } from "./StudioPrimitives";

const steps = [
  {
    title: "First, a conversation.",
    text: "We learn about your business, your audience and what your website needs to achieve.",
  },
  {
    title: "Then, a clear proposal.",
    text: "You get a recommended approach, agreed scope, timeline and fixed written quote.",
  },
  {
    title: "Your decision, in your time.",
    text: "The discovery call is free. There is no obligation to go ahead.",
  },
];

export default function ContactView() {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        label="Start a conversation"
        title={
          <>
            Big plans?
            <br />
            We&apos;re listening.
          </>
        }
        description="Tell us a little about your business and the project you have in mind. Our team will reply within 24 hours on working days."
      />
      <div className="studio-container">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:order-2 lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[.12em] text-graphite">
                Your project details
              </span>
              <span className="h-px flex-1 bg-ink/15" />
            </div>
            <LeadForm
              source="Contact page"
              submitLabel="Send your project enquiry"
              currency="USD"
            />
          </div>
          <div className="lg:order-1 lg:col-span-5">
            <SectionLabel>What happens next</SectionLabel>
            <ol className="mt-6">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 border-t border-ink/15 py-6"
                >
                  <span className="mt-1 font-mono text-[10px] text-brand-blue">
                    0{i + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-xl">{step.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-graphite">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-7 rounded-[20px] bg-deep p-7 text-paper">
              <h2 className="font-display text-2xl">
                Prefer to say hello directly?
              </h2>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-6 flex min-h-11 items-center justify-between gap-2 break-all border-b border-white/20 pb-4 text-sm hover:text-marker"
              >
                {EMAIL}
                <ArrowUpRight className="size-4 shrink-0" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex min-h-11 items-center justify-between text-sm text-marker"
              >
                Message on WhatsApp
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="tel:+916291519364"
                className="mt-2 inline-block min-h-11 py-2 text-sm text-white/75"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="mt-4 text-[10px] leading-relaxed text-white/55">
                Monday–Saturday / 10:00 AM–7:00 PM IST
              </p>
            </div>
          </div>
        </div>
        <section className="mt-16 border-t border-ink/15 pt-9 sm:mt-24">
          <SectionLabel>Our home base</SectionLabel>
          <div className="mt-7 grid gap-8 md:grid-cols-2">
            {OFFICES.map((office) => (
              <div key={office.city}>
                <h2 className="font-display text-2xl">{office.city}</h2>
                <p className="mt-3 max-w-sm text-xs leading-relaxed text-graphite">
                  {office.lines.join(", ")}
                </p>
                <details className="mt-4">
                  <summary className="cursor-pointer py-3 text-xs font-semibold">
                    View office on the map
                  </summary>
                  <div className="mt-3 overflow-hidden rounded-2xl border border-ink/15">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&z=15&output=embed`}
                      title={`Web Total Solution ${office.city} office map`}
                      className="block aspect-video w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
