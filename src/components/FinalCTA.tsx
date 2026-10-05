import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTA, NEXT_STEPS, WHATSAPP_URL } from "../siteContent";

/** Closing enquiry block: one action, and what happens after it. */
export default function FinalCTA({
  headline = "Tell us about the project.",
  text = "A few lines are enough to start. You will know the scope, price and timeline in writing before you commit to anything.",
  contactHref = "/contact",
  ctaLabel = CTA.primary,
}: {
  headline?: string;
  text?: string;
  contactHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="studio-container">
      <div className="rounded-[24px] bg-marker p-7 sm:p-12 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <h2 className="max-w-xl font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
              {headline}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/80">
              {text}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href={contactHref} className="btn btn-ink">
                {ctaLabel}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex min-h-11 items-center text-sm"
              >
                Or message on WhatsApp
              </a>
            </div>
          </div>
          <ol className="lg:col-span-6">
            {NEXT_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 border-t border-ink/20 py-4 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-4"
              >
                <span className="w-5 shrink-0 text-sm font-semibold text-ink/60">
                  {index + 1}
                </span>
                <div>
                  <p className="text-[15px] font-semibold">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/75">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
