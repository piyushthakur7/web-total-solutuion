import React from "react";
import Link from "next/link";
import { ServiceData } from "../types";
import { ArrowUpRight, Check } from "lucide-react";
import { WHATSAPP_URL } from "../siteContent";
import { PageIntro, SectionLabel } from "./StudioPrimitives";
import FinalCTA from "./FinalCTA";

export default function ServiceDetailView({
  service,
}: {
  service: ServiceData;
}) {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        label="Services / Our expertise"
        title={service.title}
        description={service.subtitle}
      >
        <Link
          href="/services"
          className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold underline decoration-ink/25 underline-offset-4"
        >
          Explore all services
          <ArrowUpRight className="size-3.5" />
        </Link>
      </PageIntro>
      <section className="studio-container pb-16 sm:pb-24">
        <div className="grid items-start gap-10 border-t border-ink/15 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-12 lg:col-span-8">
            <div>
              <SectionLabel>The approach</SectionLabel>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl">
                Built around your business.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite">
                {service.content.overview}
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl">
                A considered way to build.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-graphite">
                {service.content.whyChooseUs}
              </p>
            </div>
            <div className="rounded-[24px] bg-white p-7 sm:p-9">
              <SectionLabel>What we can help with</SectionLabel>
              <ul className="mt-7 grid gap-x-7 gap-y-5 sm:grid-cols-2">
                {service.content.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel>The foundation</SectionLabel>
              <h2 className="mt-5 font-display text-3xl">
                Made to perform. Ready to grow.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-graphite">
                The technology behind a fast, secure website that you can extend
                as your business grows.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.content.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-ink/20 px-4 py-2 font-mono text-[10px]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="rounded-[24px] bg-deep p-7 text-paper sm:p-8 lg:sticky lg:top-32 lg:col-span-4">
            <SectionLabel light>Your next step</SectionLabel>
            <h2 className="mt-5 font-display text-3xl">
              Let&apos;s talk about your project.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Tell us what you need. We will discuss the right approach and
              confirm the scope, timeline and investment in writing.
            </p>
            <ul className="mt-6 space-y-3 text-xs text-white/75">
              {[
                "Free discovery call",
                "Fixed written quote",
                "Full code ownership",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-3 text-marker" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={`/contact?details=${encodeURIComponent(`I would like a quote for: ${service.title}.`)}`}
              className="btn btn-accent mt-8 w-full"
            >
              Discuss your project
              <ArrowUpRight className="size-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex min-h-11 items-center justify-center text-xs text-white/75 underline underline-offset-4"
            >
              Or message on WhatsApp
            </a>
          </aside>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
