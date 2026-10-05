"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Faq, HOME_FAQS } from "../siteContent";

interface FAQSectionProps {
  faqs?: Faq[];
  heading?: string;
  intro?: string;
  background?: "white" | "paper";
}

export default function FAQSection({
  faqs = HOME_FAQS,
  heading = "Questions before you start",
  intro = "Fit, scope, timing, content, ownership and support.",
  background = "white",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();
  return (
    <section
      className={`studio-section ${background === "paper" ? "bg-paper" : "bg-white"}`}
    >
      <div className="studio-container grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.1]">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-graphite">{intro}</p>
          <Link
            href="/contact"
            className="text-link mt-6 inline-flex min-h-11 items-center text-sm"
          >
            Ask something else
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
                    className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left"
                  >
                    <span className="font-display text-lg leading-snug sm:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${open ? "bg-marker" : "border border-ink/20"}`}
                      aria-hidden="true"
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
                  <p className="max-w-[62ch] pb-6 pr-8 text-[15px] leading-relaxed text-graphite">
                    {faq.answer}
                    {faq.link && (
                      <>
                        {" "}
                        <Link
                          href={faq.link.href}
                          className="text-link text-brand-blue"
                        >
                          {faq.link.label}
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
