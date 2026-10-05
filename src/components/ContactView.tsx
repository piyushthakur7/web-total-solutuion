import React from "react";
import LeadForm from "./LeadForm";
import {
  EMAIL,
  NEXT_STEPS,
  OFFICES,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
  WORKING_HOURS,
} from "../siteContent";
import { PageIntro, SectionHeading } from "./StudioPrimitives";

export default function ContactView() {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        compact
        label="Contact"
        title="Request a discovery call"
        description="Tell us about the project in a few lines. We reply within one working day, agree the scope with you and send a written quote."
      />
      <div className="studio-container pt-10 sm:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="sr-only">Project enquiry form</h2>
            <LeadForm source="Contact page" />
          </div>
          <div className="lg:col-span-5">
            <SectionHeading heading="What happens next" />
            <ol className="mt-5">
              {NEXT_STEPS.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 border-t border-ink/15 py-4 last:border-b"
                >
                  <span className="w-4 shrink-0 text-sm font-semibold text-brand-blue">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-graphite">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-[20px] bg-deep p-6 text-paper sm:p-7">
              <h2 className="font-display text-2xl">Or contact us directly</h2>
              <dl className="mt-5 space-y-4 text-[15px]">
                <div>
                  <dt className="text-sm text-white/60">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex min-h-11 items-center break-all underline decoration-white/40 underline-offset-4 hover:decoration-white"
                    >
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">WhatsApp</dt>
                  <dd>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center underline decoration-white/40 underline-offset-4 hover:decoration-white"
                    >
                      Message {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Phone</dt>
                  <dd>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex min-h-11 items-center underline decoration-white/40 underline-offset-4 hover:decoration-white"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                {WORKING_HOURS}
              </p>
            </div>
          </div>
        </div>

        <section className="mt-16 border-t border-ink/15 pt-10 sm:mt-24">
          <SectionHeading heading="Offices" />
          <div className="mt-7 grid gap-8 md:grid-cols-2">
            {OFFICES.map((office) => (
              <div key={office.city}>
                <h3 className="font-display text-2xl">{office.city}</h3>
                <address className="mt-2 max-w-sm text-[15px] not-italic leading-relaxed text-graphite">
                  {office.lines.join(", ")}
                </address>
                <details className="group mt-3">
                  <summary className="inline-flex min-h-11 cursor-pointer items-center text-sm font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
                    <span className="group-open:hidden">
                      Show the {office.city} office on a map
                    </span>
                    <span className="hidden group-open:inline">
                      Hide the {office.city} map
                    </span>
                  </summary>
                  <div className="mt-3 overflow-hidden rounded-2xl border border-ink/15">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&z=15&output=embed`}
                      title={`Map of the Web Total Solution ${office.city} office`}
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
