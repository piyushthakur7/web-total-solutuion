import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import {
  CTA,
  SUPPORT_TERM,
  WEBSITE_PACKAGES,
  formatUsd,
  revisionLabel,
} from "../siteContent";
import { contactHref } from "../lead";

/**
 * The three website packages, rendered from WEBSITE_PACKAGES.
 * `detailed` (the pricing page) lists every inclusion; the summary version
 * shows the audience, scope and starting price.
 */
export default function PackageCards({
  detailed = false,
  only,
}: {
  detailed?: boolean;
  /** Show a single package by slug, e.g. on a service page. */
  only?: string;
}) {
  const packages = only
    ? WEBSITE_PACKAGES.filter((pkg) => pkg.slug === only)
    : WEBSITE_PACKAGES;
  return (
    <div
      className={`grid items-stretch gap-5 ${packages.length > 1 ? "lg:grid-cols-3" : "max-w-xl"}`}
    >
      {packages.map((pkg) => {
        const dark = pkg.highlight && packages.length > 1;
        const muted = dark ? "text-white/70" : "text-graphite";
        const rule = dark ? "border-white/20" : "border-ink/15";
        return (
          <article
            key={pkg.slug}
            className={`flex flex-col rounded-[20px] border p-6 sm:p-8 ${dark ? "border-deep bg-deep text-paper" : "border-ink/15 bg-white"}`}
          >
            <h3 className="font-display text-[26px] leading-tight">
              {pkg.name}
            </h3>
            <p className={`mt-3 text-[15px] leading-relaxed ${muted}`}>
              {pkg.audience}
            </p>
            <p className="mt-6">
              <span className={`text-sm ${muted}`}>From </span>
              <span className="font-display text-[2.6rem] leading-none tracking-[-0.04em]">
                {formatUsd(pkg.from)}
              </span>
              <span className={`text-sm ${muted}`}> USD</span>
            </p>
            <p className={`mt-4 border-t pt-4 text-sm leading-relaxed ${rule}`}>
              {pkg.scope}
            </p>
            {detailed && (
              <>
                <ul className="mt-5 space-y-3 text-sm">
                  {[
                    ...pkg.includes,
                    revisionLabel(pkg),
                    SUPPORT_TERM,
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${dark ? "text-marker" : "text-brand-blue"}`}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className={`mt-5 text-sm leading-relaxed ${muted}`}>
                  <span className={dark ? "text-white" : "text-ink"}>
                    What raises the quote:{" "}
                  </span>
                  {pkg.quoteDrivers}
                </p>
              </>
            )}
            {!detailed && (
              <p className={`mt-3 text-sm ${muted}`}>
                {revisionLabel(pkg)}. {SUPPORT_TERM}.
              </p>
            )}
            <div className="mt-auto pt-7">
              <Link
                href={contactHref({ package: pkg.slug })}
                className={`btn w-full ${dark ? "btn-accent" : "btn-ink"}`}
              >
                {CTA.primary}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
