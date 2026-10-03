import Link from 'next/link';
import React from 'react';
import { Check } from 'lucide-react';
import { STARTUP_PACKAGES } from '../siteContent';

/**
 * Investment page. Positioned for startups: packages are sold on strategy,
 * design and engineering rather than page count, and priced in USD.
 */

export default function PricingView() {
  return (
    <div className="overflow-x-hidden bg-paper pb-16 text-ink sm:pb-24">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <h1 className="max-w-6xl font-display text-hero">
          Built for startups that care about conversion, not just aesthetics.
        </h1>
        <div className="mt-8 grid gap-7 lg:mt-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <p className="max-w-xl text-lg leading-relaxed text-graphite sm:text-xl lg:col-span-7">
            Strategy, UI/UX and high-performance Next.js development, from first wireframe to
            production launch.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Link href="/contact" className="btn btn-ink">
              Book a strategy call
            </Link>
            <Link href="/work" className="btn btn-line">
              See the work
            </Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {STARTUP_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col justify-between rounded-lg p-7 sm:p-9 ${
                pkg.highlight ? 'bg-deep text-white' : 'border border-ink/15 bg-white'
              }`}
            >
              <div>
                <h2 className="font-display text-4xl leading-none">{pkg.name}</h2>
                {pkg.highlight && (
                  <p className="mt-3 text-[15px] font-semibold text-brand-sky">
                    Best for funded startups
                  </p>
                )}
                <p
                  className={`mt-3 text-base leading-relaxed ${
                    pkg.highlight ? 'text-white/75' : 'text-graphite'
                  }`}
                >
                  {pkg.audience}
                </p>

                <p className="mt-8 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <span className={`text-base ${pkg.highlight ? 'text-white/75' : 'text-graphite'}`}>
                    From
                  </span>
                  <span className="font-display text-6xl leading-none">
                    ${pkg.from.toLocaleString('en-US')}
                  </span>
                  <span className={`text-base ${pkg.highlight ? 'text-white/75' : 'text-graphite'}`}>
                    {pkg.priceNote}
                  </span>
                </p>

                <ul
                  className={`mt-8 space-y-3.5 border-t pt-8 text-base ${
                    pkg.highlight ? 'border-white/25' : 'border-ink/15'
                  }`}
                >
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`mt-1 size-4 shrink-0 ${
                          pkg.highlight ? 'text-brand-sky' : 'text-brand-blue'
                        }`}
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/contact?type=${encodeURIComponent(pkg.projectType)}&details=${encodeURIComponent(
                  `I am interested in the ${pkg.name}. Here is a bit about my startup:`
                )}`}
                className={`btn mt-10 w-full ${pkg.highlight ? 'btn-paper' : 'btn-ink'}`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-graphite">
          Prices are starting points in USD. Your final quote is fixed in writing after the call,
          with no hidden fees, and you own the code and content outright.
        </p>
      </section>

      {/* Custom builds */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="grid gap-8 border-t border-ink/15 pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-display">
              Need a custom platform, integration or web application?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite">
              We build custom booking systems, customer portals, CRM integrations and secure web
              applications. Tell us the problem and we will scope the solution.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link href="/contact?type=SaaS%20%2F%20Web%20Application" className="btn btn-line">
              Discuss a custom project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
