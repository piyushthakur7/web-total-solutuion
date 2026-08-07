"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { HOME_FAQS } from '../siteContent';

interface FAQSectionProps {
  faqs?: { question: string; answer: string }[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
  /** `slate` places the section on the tinted background used between white sections. */
  background?: 'white' | 'slate';
}

export default function FAQSection({
  faqs = HOME_FAQS,
  eyebrow = 'Common Questions',
  heading = 'Frequently Asked Questions',
  intro = 'Straight answers on cost, timelines, SEO and support — so you can decide with full information.',
  background = 'white',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`py-24 ${background === 'slate' ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {heading}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
                  isOpen
                    ? 'shadow-md border-brand-blue/30 ring-1 ring-brand-blue/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    className="w-full px-5 sm:px-6 py-5 text-left flex justify-between items-center gap-4 cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span
                      className={`font-bold text-base sm:text-lg leading-snug ${
                        isOpen ? 'text-brand-blue' : 'text-slate-900'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-brand-blue' : ''
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
                  <p className="px-5 sm:px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-slate-600">
          Still have a question?{' '}
          <Link href="/contact" className="font-bold text-brand-blue hover:underline">
            Ask us directly in a free consultation
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
