import React from 'react';
import Link from 'next/link';
import LeadForm from './LeadForm';
import WhatsAppIcon from './WhatsAppIcon';
import { EMAIL, OFFICES, PHONE_DISPLAY, WHATSAPP_URL } from '../siteContent';

const SOCIALS = [
  { href: 'https://www.instagram.com/webtotalsolution/?hl=en', label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/web-total-solutions/', label: 'LinkedIn' },
  { href: 'https://www.youtube.com/channel/UCNlUYW1RyevmpKY1xUQKatA', label: 'YouTube' },
  { href: 'https://x.com/webtotalindia', label: 'X (Twitter)' },
];

/** What happens after the form is sent, in order. */
const NEXT_STEPS = [
  {
    title: 'We reply within 24 hours',
    description: 'A person from the team reads your request and replies on working days.',
  },
  {
    title: 'A free discovery call',
    description:
      'We ask about the business and what the website has to achieve. You get honest advice, even if that means you do not need us.',
  },
  {
    title: 'A fixed written quote',
    description:
      'Scope, timeline and price in writing before any work begins. No obligation to go ahead.',
  },
];

const textLink =
  'font-semibold text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink';

export default function ContactView() {
  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pt-20">
        <h1 className="max-w-5xl font-display text-hero">Tell us what you are building.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite sm:text-xl">
          Send a few details and we will come back within 24 hours with a recommended approach
          and a fixed written quote.
        </p>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          {/* Form — first on mobile, right on desktop */}
          <div className="lg:sticky lg:top-28 lg:order-2 lg:col-span-7">
            <LeadForm source="Contact page" submitLabel="Send request" currency="USD" />
          </div>

          <div className="space-y-12 lg:order-1 lg:col-span-5 lg:pr-6">
            {/* Numbered because these happen in this order. */}
            <section aria-labelledby="next-steps">
              <h2 id="next-steps" className="font-display text-3xl">
                What happens next
              </h2>
              <ol className="mt-6 border-t border-ink/15">
                {NEXT_STEPS.map((step, index) => (
                  <li key={step.title} className="flex gap-5 border-b border-ink/15 py-5">
                    <span className="w-7 shrink-0 font-display text-4xl leading-none text-brand-blue">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{step.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-graphite">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="talk-now" className="rounded-lg bg-deep p-7 text-white sm:p-8">
              <h2 id="talk-now" className="font-display text-3xl">
                Prefer to talk now?
              </h2>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-paper"
                >
                  <WhatsAppIcon className="size-4" />
                  <span>Message us on WhatsApp</span>
                </a>
                <a href="tel:+916291519364" className="btn btn-line-dark">
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <p className="mt-5 text-[15px] text-white/75">
                Monday to Saturday, 10:00 AM to 7:00 PM IST
              </p>
            </section>

            <section aria-labelledby="direct">
              <h2 id="direct" className="font-display text-3xl">
                Email and offices
              </h2>
              <dl className="mt-6 space-y-5 border-t border-ink/15 pt-6 text-base">
                <div>
                  <dt className="text-[15px] text-graphite">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${EMAIL}`} className={`${textLink} break-all`}>
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                {OFFICES.map((office) => (
                  <div key={office.city}>
                    <dt className="text-[15px] text-graphite">{office.city} office</dt>
                    <dd className="mt-1 leading-relaxed">
                      {office.lines[0]},
                      <br />
                      {office.lines[1]}
                    </dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
                {SOCIALS.map(({ href, label }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className={textLink}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Real maps for each office; lazy so they cost nothing until scrolled to. */}
        <div className="mt-16 grid gap-6 border-t border-ink/15 pt-10 md:grid-cols-2 lg:mt-24">
          {OFFICES.map((office) => (
            <figure key={office.city}>
              <div className="overflow-hidden rounded-lg border border-ink/15 bg-white">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&z=15&output=embed`}
                  title={`Web Total Solution ${office.city} office — ${office.lines.join(', ')}`}
                  className="block aspect-video w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <figcaption className="mt-3 text-[15px] text-graphite">{office.city} office</figcaption>
            </figure>
          ))}
        </div>

        {/* Internal links for crawl depth */}
        <nav
          aria-label="Related pages"
          className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-ink/15 pt-8 text-[15px]"
        >
          {[
            { href: '/business-website-development', label: 'Business Website Development' },
            { href: '/website-redesign', label: 'Website Redesign' },
            { href: '/ecommerce-development', label: 'E-Commerce Development' },
            { href: '/work', label: 'Our Work' },
            { href: '/pricing', label: 'Pricing' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className={textLink}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
