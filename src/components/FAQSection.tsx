"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to build a custom website?",
    answer: "The timeline depends on the scale of the project. A high-conversion landing page can be deployed in just 1-2 weeks, while a comprehensive corporate or informative website typically takes 2-4 weeks. We ensure a swift delivery without compromising on quality."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular security updates, performance monitoring, content updates, and technical assistance to ensure your platform runs flawlessly."
  },
  {
    question: "Will my website be mobile-friendly and SEO optimized?",
    answer: "Absolutely. Every project we build is mobile-first, ensuring it looks and performs beautifully across all devices. We also integrate technical SEO best practices, including fast load times and proper semantic structure, from day one."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer transparent, project-based pricing tailored to your specific requirements. After our initial discovery call, we provide a detailed proposal outlining the scope, timeline, and exact costs with no hidden fees."
  },
  {
    question: "Can you help with digital marketing after launch?",
    answer: "Yes! Beyond development, we offer comprehensive digital marketing services including SEO, PPC campaigns, and content strategy to help you drive targeted traffic and convert visitors into loyal customers."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
            Important FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Everything you need to know about our web development process, pricing, and how we ensure your digital success.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-brand-blue/30 ring-1 ring-brand-blue/10' : 'hover:border-slate-300'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-blue' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180 text-brand-blue' : ''}`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
