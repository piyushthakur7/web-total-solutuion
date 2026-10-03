"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { HOME_FAQS } from '../siteContent';

interface FAQSectionProps {
  faqs?: { question: string; answer: string; link?: { label: string; href: string } }[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
  /** `slate` places the section on the tinted background used between white sections. */
  background?: 'white' | 'slate';
}

export default function FAQSection({
  faqs = HOME_FAQS,
  heading = 'Frequently Asked Questions',
  intro = 'Straight answers on cost, timelines, SEO and support — so you can decide with full information.',
  background = 'white',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`py-16 text-ink sm:py-24 ${background === 'slate' ? 'bg-paper' : 'bg-white'}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-display text-display">{heading}</h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-graphite">{intro}</p>
            <p className="mt-8 text-sm text-graphite">
              Still have a question?{' '}
              <Link
                href="/contact"
                className="font-semibold text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
              >
                Ask us directly
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="border-t border-ink/15 lg:col-span-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border-b border-ink/15"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span
                      className="font-display text-2xl leading-snug decoration-2 underline-offset-4 group-hover:underline sm:text-[1.7rem]"
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-brand-blue' : 'text-ink/40'
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="max-w-2xl pb-7 text-base leading-relaxed text-graphite">
                    {faq.answer}
                    {faq.link && (
                      <>
                        {' '}
                        <Link href={faq.link.href} className="font-bold text-brand-blue hover:underline">
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
