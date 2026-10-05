import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  CARE_PLANS,
  CARE_PLAN_SCOPE_NOTE,
  CUSTOM_MANAGEMENT,
  formatUsd,
} from "../siteContent";
import { contactHref } from "../lead";

/** Enquiry link that names the plan, so the lead arrives with context. */
function planHref(name: string, price: string) {
  return contactHref({
    type: "Something else",
    details: `I'm interested in ${name} (${price}) for my website.`,
  });
}

/**
 * Website Care Plans, rendered from CARE_PLANS. Set on the dark surface so the
 * monthly plans read as a separate offer from the one-off website packages.
 */
export default function CarePlans() {
  return (
    <section
      id="care-plans"
      aria-labelledby="care-plans-heading"
      className="bg-deep py-16 text-paper sm:py-24 lg:py-28"
    >
      <div className="studio-container">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <h2
            id="care-plans-heading"
            className="font-display text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.05] lg:col-span-7"
          >
            Keep your website fast, secure &amp; working — every day
          </h2>
          <p className="max-w-[58ch] text-base leading-relaxed text-white/70 lg:col-span-5">
            Launching your website is only the beginning. Our Website Care
            Plans keep your website monitored, updated, secure, optimized, and
            supported after launch so your team can focus on growing the
            business.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {CARE_PLANS.map((plan) => {
            const lit = plan.highlight;
            const price = `${formatUsd(plan.monthly)}/month`;
            const muted = lit ? "text-graphite" : "text-white/65";
            const rule = lit ? "border-ink/12" : "border-white/12";
            return (
              <article
                key={plan.slug}
                className={`group relative flex flex-col rounded-[24px] border p-7 transition-[transform,border-color,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-1.5 sm:p-9 ${
                  lit
                    ? "border-white bg-white text-ink shadow-[0_0_0_6px_rgba(143,208,242,0.14),0_40px_90px_-40px_rgba(143,208,242,0.55)] hover:shadow-[0_0_0_6px_rgba(143,208,242,0.22),0_50px_110px_-40px_rgba(143,208,242,0.7)] lg:-my-5 lg:py-14"
                    : "border-white/12 bg-white/[0.035] hover:border-white/30"
                }`}
              >
                <div className="flex min-h-8 items-start justify-between gap-4">
                  <h3 className="font-display text-[26px] leading-tight">
                    {plan.name}
                  </h3>
                  {lit && (
                    <span className="shrink-0 rounded-full bg-brand-blue px-3.5 py-1.5 text-[13px] font-semibold leading-none text-white">
                      Most popular
                    </span>
                  )}
                </div>
                <p
                  className={`mt-3 text-[15px] leading-relaxed lg:min-h-[4.5em] ${muted}`}
                >
                  {plan.audience}
                </p>

                <p className="mt-7 flex items-baseline gap-2">
                  <span className="font-display text-[4rem] leading-none tracking-[-0.05em]">
                    {formatUsd(plan.monthly)}
                  </span>
                  <span className={`text-[15px] ${muted}`}>USD / month</span>
                </p>

                <dl
                  className={`mt-7 flex items-baseline justify-between gap-4 border-y py-4 text-sm ${rule}`}
                >
                  <dt className={muted}>Each month</dt>
                  <dd className="text-right font-semibold">
                    {plan.updateTime}
                  </dd>
                </dl>

                {plan.buildsOn && (
                  <p className="mt-6 text-sm font-semibold">
                    Everything in {plan.buildsOn}, plus
                  </p>
                )}
                <ul
                  className={`space-y-3 text-[15px] leading-snug ${plan.buildsOn ? "mt-4" : "mt-6"}`}
                >
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${lit ? "text-brand-blue" : "text-brand-sky"}`}
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-9">
                  <Link
                    href={planHref(plan.name, price)}
                    className={`btn w-full ${lit ? "btn-ink" : "btn-line-dark hover:bg-white hover:text-ink"}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/15 pt-10 lg:mt-24 lg:grid-cols-12 lg:items-center lg:gap-16 lg:pt-12">
          <div className="lg:col-span-6">
            <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight">
              Need more ongoing development?
            </h3>
            <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-white/70">
              {CUSTOM_MANAGEMENT.audience}
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:col-span-6">
            <div>
              <p className="text-[15px] font-semibold">
                {CUSTOM_MANAGEMENT.name}
              </p>
              <p className="mt-1.5 text-white/70">
                Starting at{" "}
                <span className="font-display text-[2rem] leading-none text-paper">
                  {formatUsd(CUSTOM_MANAGEMENT.from)}
                </span>
                /month
              </p>
            </div>
            <Link
              href={planHref(
                CUSTOM_MANAGEMENT.name,
                `starting at ${formatUsd(CUSTOM_MANAGEMENT.from)}/month`,
              )}
              className="btn btn-accent shrink-0"
            >
              {CUSTOM_MANAGEMENT.cta}
            </Link>
          </div>
        </div>

        <p className="mt-10 max-w-[78ch] text-sm leading-relaxed text-white/55">
          {CARE_PLAN_SCOPE_NOTE}
        </p>
      </div>
    </section>
  );
}
