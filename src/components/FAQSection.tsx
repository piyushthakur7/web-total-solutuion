"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { HOME_FAQS } from "../siteContent";
import { SectionLabel } from "./StudioPrimitives";

interface FAQSectionProps {
  faqs?: {
    question: string;
    answer: string;
    link?: { label: string; href: string };
  }[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
  background?: "white" | "slate";
}

export default function FAQSection({
  faqs = HOME_FAQS,
  eyebrow = "A few things you might be wondering",
  heading = "Good questions. Clear answers.",
  intro = "The practical details, from timelines and ownership to what happens after launch.",
  background = "white",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();
  return (
    <section
      className={`studio-section ${background === "slate" ? "bg-paper" : "bg-white"}`}
    >
      <div className="studio-container grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h2 className="mt-6 font-display text-display">{heading}</h2>
          <p className="mt-5 text-sm leading-relaxed text-graphite">{intro}</p>
          <Link
            href="/contact"
            className="mt-7 inline-block min-h-11 py-2 text-sm font-semibold underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
          >
            Ask us directly
          </Link>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((faq, index) => {
            const open = index === openIndex;
            return (
              <div
                key={faq.question}
                className="border-t border-ink/15 last:border-b"
              >
                <h3>
                  <button
                    type="button"
                    id={`${id}-trigger-${index}`}
                    aria-expanded={open}
                    aria-controls={`${id}-panel-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="font-display text-xl leading-snug sm:text-2xl">
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${open ? "bg-marker" : "border border-ink/15"}`}
                    >
                      <Plus
                        className={`size-4 transition-transform ${open ? "rotate-45" : ""}`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={`${id}-panel-${index}`}
                  role="region"
                  aria-labelledby={`${id}-trigger-${index}`}
                  hidden={!open}
                >
                  <p className="max-w-2xl pb-7 pr-8 text-[15px] leading-relaxed text-graphite">
                    {faq.answer}
                    {faq.link && (
                      <>
                        {" "}
                        <Link
                          href={faq.link.href}
                          className="font-semibold text-brand-blue underline underline-offset-4"
                        >
                          {faq.link.label} →
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
