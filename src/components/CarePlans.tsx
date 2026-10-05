import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
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
 * The three Website Care Plans, rendered from CARE_PLANS. The cards match
 * PackageCards so the monthly plans read as part of the same price list.
 */
export default function CarePlans() {
  return (
    <div id="care-plans">
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {CARE_PLANS.map((plan) => {
          const dark = plan.highlight;
          const muted = dark ? "text-white/70" : "text-graphite";
          const rule = dark ? "border-white/20" : "border-ink/15";
          return (
            <article
              key={plan.slug}
              className={`flex flex-col rounded-[20px] border p-6 sm:p-8 ${dark ? "border-deep bg-deep text-paper" : "border-ink/15 bg-white"}`}
            >
              <h3 className="font-display text-[26px] leading-tight">
                {plan.name}
              </h3>
              <p className={`mt-3 text-[15px] leading-relaxed ${muted}`}>
                {plan.audience}
              </p>
              <p className="mt-6">
                <span className="font-display text-[2.6rem] leading-none tracking-[-0.04em]">
                  {formatUsd(plan.monthly)}
                </span>
                <span className={`text-sm ${muted}`}> USD / month</span>
              </p>
              <p
                className={`mt-4 border-t pt-4 text-sm leading-relaxed ${rule}`}
              >
                {plan.updateTime} each month.
              </p>
              {plan.buildsOn && (
                <p className="mt-5 text-sm font-semibold">
                  Everything in {plan.buildsOn}, plus
                </p>
              )}
              <ul
                className={`space-y-3 text-sm ${plan.buildsOn ? "mt-3" : "mt-5"}`}
              >
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${dark ? "text-marker" : "text-brand-blue"}`}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <Link
                  href={planHref(
                    plan.name,
                    `${formatUsd(plan.monthly)}/month`,
                  )}
                  className={`btn w-full ${dark ? "btn-accent" : "btn-ink"}`}
                >
                  Enquire now
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col gap-5 rounded-[20px] border border-ink/15 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h3 className="font-display text-xl">
            {CUSTOM_MANAGEMENT.name}, from {formatUsd(CUSTOM_MANAGEMENT.from)}{" "}
            USD / month
          </h3>
          <p className="mt-2 max-w-[64ch] text-[15px] leading-relaxed text-graphite">
            {CUSTOM_MANAGEMENT.audience}
          </p>
        </div>
        <Link
          href={planHref(
            CUSTOM_MANAGEMENT.name,
            `from ${formatUsd(CUSTOM_MANAGEMENT.from)}/month`,
          )}
          className="btn btn-ink shrink-0"
        >
          Enquire now
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <p className="mt-5 max-w-[78ch] text-sm leading-relaxed text-graphite">
        {CARE_PLAN_SCOPE_NOTE}
      </p>
    </div>
  );
}
