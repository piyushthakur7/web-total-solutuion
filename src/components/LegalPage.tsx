import React from "react";
import { EMAIL, OFFICES, PHONE_DISPLAY, PHONE_HREF } from "../siteContent";
import { PageIntro } from "./StudioPrimitives";

/** Shared layout for the terms and privacy pages. */
export default function LegalPage({
  title,
  summary,
  lastUpdated,
  children,
}: {
  title: string;
  summary: string;
  /** A fixed, real revision date. Never computed at render time. */
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro compact label="Legal" title={title} description={summary} />
      <div className="studio-container pt-10 sm:pt-14">
        <p className="text-sm text-graphite">Last updated: {lastUpdated}</p>
        <div className="long-form mt-6">
          {children}
          <h2>Contact</h2>
          <p>Questions about this page can be sent to:</p>
          <address className="not-italic">
            <strong>Web Total Solution</strong>
            {OFFICES.map((office) => (
              <span key={office.city} className="mt-2 block">
                {office.lines.join(", ")}
              </span>
            ))}
            <span className="mt-2 block">
              Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </span>
            <span className="block">
              Phone: <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            </span>
          </address>
        </div>
      </div>
    </div>
  );
}
