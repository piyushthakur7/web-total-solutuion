import React from "react";
import { Check } from "lucide-react";
import { CLIENT_COMMITMENTS, GOOGLE_REVIEWS_URL } from "../siteContent";
import { SectionHeading, TextLink } from "./StudioPrimitives";

/**
 * Written commitments and the public review listing.
 *
 * No testimonial, rating or review count is rendered here: a named quote is
 * added only when a client has supplied one, and a rating only when it can be
 * read from the listing itself.
 */
export default function ProofSection({
  heading = "What you get in writing",
  intro = "These are the terms every project runs on. Hold us to them.",
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="studio-section bg-paper">
      <div className="studio-container grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading heading={heading} intro={intro} />
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-graphite">
            Client reviews are public on our Google Business listing. Read them
            there, where they cannot be edited by us.
          </p>
          <div className="mt-3">
            <TextLink href={GOOGLE_REVIEWS_URL}>Read reviews on Google</TextLink>
          </div>
        </div>
        <ul className="lg:col-span-7">
          {CLIENT_COMMITMENTS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 border-t border-ink/15 py-4 text-[15px] leading-relaxed last:border-b"
            >
              <Check
                className="mt-1 size-4 shrink-0 text-brand-blue"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
