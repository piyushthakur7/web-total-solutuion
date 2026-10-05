import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "../siteContent";
import { SectionLabel } from "./StudioPrimitives";

export default function FinalCTA({
  headline = "Your next chapter starts here.",
  text = "Tell us where your business is headed. We will help you work out what your website needs to do next.",
  contactHref = "/contact",
}: {
  headline?: string;
  text?: string;
  contactHref?: string;
}) {
  return (
    <section className="studio-container">
      <div className="relative overflow-hidden rounded-[24px] bg-marker p-8 sm:p-12 lg:p-16">
        <div className="relative z-10 grid items-end gap-9 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel>Have something in mind?</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-display text-display">
              {headline}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/75">
              {text}
            </p>
            <p className="mt-7 font-mono text-[9px] uppercase tracking-[.12em] text-ink/70">
              A conversation first. A clear proposal next.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
            <Link href={contactHref} className="btn btn-ink">
              Let&apos;s talk about it
              <ArrowUpRight className="size-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
            >
              Or say hello on WhatsApp
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
        <span
          className="pointer-events-none absolute -right-24 -top-36 size-[420px] rounded-full border border-ink/10"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-52 -right-44 size-[540px] rounded-full border border-ink/10"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
