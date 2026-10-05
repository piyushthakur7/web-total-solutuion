import React from "react";
import { PROCESS_STEPS } from "../siteContent";
import { SectionHeading } from "./StudioPrimitives";

interface Step {
  step: string;
  title: string;
  description: string;
  output?: string;
  yourPart?: string;
}

/** The five project stages, with what is produced and what the client does. */
export default function ProcessSection({
  steps = PROCESS_STEPS,
  heading = "Five stages, each with something to approve",
  intro = "Each stage ends with something you can review. The timeline for all five is agreed after the scope review, because it depends on the page count and on how quickly content and feedback come back.",
  background = "white",
  children,
}: {
  steps?: Step[];
  heading?: string;
  intro?: string;
  background?: "white" | "paper";
  children?: React.ReactNode;
}) {
  return (
    <section
      className={`studio-section ${background === "paper" ? "bg-paper" : "bg-white"}`}
    >
      <div className="studio-container">
        <SectionHeading heading={heading} intro={intro} />
        <ol className="mt-10 border-b border-ink/15">
          {steps.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-x-8 gap-y-3 border-t border-ink/15 py-6 md:grid-cols-12"
            >
              <div className="flex items-baseline gap-4 md:col-span-4">
                <span className="w-5 shrink-0 text-sm font-semibold text-brand-blue">
                  {index + 1}
                </span>
                <h3 className="font-display text-xl sm:text-2xl">
                  {item.title}
                </h3>
              </div>
              <p className="pl-9 text-[15px] leading-relaxed text-graphite md:col-span-4 md:pl-0">
                {item.description}
              </p>
              {(item.output || item.yourPart) && (
                <dl className="space-y-2 pl-9 text-sm leading-relaxed md:col-span-4 md:pl-0">
                  {item.output && (
                    <div>
                      <dt className="inline font-semibold">You get: </dt>
                      <dd className="inline text-graphite">{item.output}</dd>
                    </div>
                  )}
                  {item.yourPart && (
                    <div>
                      <dt className="inline font-semibold">From you: </dt>
                      <dd className="inline text-graphite">{item.yourPart}</dd>
                    </div>
                  )}
                </dl>
              )}
            </li>
          ))}
        </ol>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
