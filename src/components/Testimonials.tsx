import React from "react";
import { ArrowUpRight, Check, Star } from "lucide-react";
import {
  GOOGLE_REVIEWS_URL,
  CLIENT_COMMITMENTS,
  GOOGLE_RATING,
} from "../siteContent";
import { SectionLabel } from "./StudioPrimitives";

export default function Testimonials({
  heading = "Work you can see. Trust you can check.",
  intro = "Explore our live projects, read the public reviews, and see exactly what we put in writing.",
}: {
  heading?: string;
  eyebrow?: string;
  intro?: string;
}) {
  return (
    <section className="studio-section bg-paper">
      <div className="studio-container">
        <SectionLabel>Proof & peace of mind</SectionLabel>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <h2 className="max-w-xl font-display text-display">{heading}</h2>
          <p className="max-w-md text-base leading-relaxed text-graphite lg:justify-self-end">
            {intro}
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-[24px] bg-white p-8 sm:p-10 lg:col-span-4"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.12em] text-graphite">
                Client reviews / Google
              </p>
              <div className="mt-9 flex items-end gap-4">
                <span className="font-display text-8xl leading-none">
                  {GOOGLE_RATING}
                </span>
                <span className="pb-2 text-sm text-graphite">out of 5</span>
              </div>
              <div
                className="mt-5 flex gap-1 text-brand-blue"
                aria-label={`${GOOGLE_RATING} out of 5 stars`}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${i < Math.round(GOOGLE_RATING) ? "fill-current" : "opacity-30"}`}
                  />
                ))}
              </div>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-graphite">
                Real feedback from people we have worked with. Read it on our
                public Google listing.
              </p>
            </div>
            <span className="mt-8 flex items-center justify-between border-t border-ink/15 pt-5 text-sm font-semibold">
              Read our Google reviews
              <ArrowUpRight className="size-5" />
            </span>
          </a>
          <div className="rounded-[24px] border border-ink/15 p-8 sm:p-10 lg:col-span-8">
            <h3 className="font-display text-3xl">
              Clarity is part of the service.
            </h3>
            <p className="mt-3 text-sm text-graphite">
              What every client gets in writing.
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {CLIENT_COMMITMENTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[13px] leading-relaxed"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
