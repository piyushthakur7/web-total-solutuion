import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { WorkCaseStudy } from "../../work";

const STAGES = [
  { key: "problem", label: "Problem" },
  { key: "decision", label: "UX decision" },
  { key: "result", label: "Resulting experience" },
] as const;

/**
 * UX / information architecture, shown as problem â†’ decision â†’ result rows.
 * Columns on desktop, a vertical chain on mobile.
 */
export default function CaseStudyFlow({
  flows,
}: {
  flows: NonNullable<WorkCaseStudy["ux"]>;
}) {
  return (
    <section className="bg-paper">
      <div className="studio-container py-16 sm:py-24">
        <div className="reveal max-w-3xl space-y-4">
          <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
            UX &amp; information architecture
          </p>
          <h2 className="text-3xl sm:text-4xl font-display leading-[1.1] text-ink">
            From problem to interface decision
          </h2>
        </div>

        <div className="mt-12 sm:mt-16 space-y-6">
          {flows.map((flow, index) => (
            <div
              key={flow.problem}
              className="reveal grid grid-cols-1 lg:grid-cols-3 bg-white border border-ink/15 rounded-3xl overflow-hidden"
            >
              {STAGES.map((stage, stageIndex) => (
                <div
                  key={stage.key}
                  className={`relative p-7 sm:p-9 ${
                    stageIndex > 0
                      ? "border-t lg:border-t-0 lg:border-l border-ink/15"
                      : ""
                  } ${stage.key === "result" ? "bg-deep text-white" : ""}`}
                >
                  {stageIndex > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute -top-3.5 left-7 lg:top-9 lg:-left-3.5 w-7 h-7 rounded-full bg-white border border-ink/15 text-slate-500 flex items-center justify-center"
                    >
                      <ArrowDown className="w-3.5 h-3.5 lg:hidden" />
                      <ArrowRight className="w-3.5 h-3.5 hidden lg:block" />
                    </span>
                  )}
                  <p
                    className={`text-[11px] font-mono uppercase tracking-widest ${stage.key === "result" ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {String(index + 1).padStart(2, "0")} Â· {stage.label}
                  </p>
                  <p
                    className={`mt-4 text-base sm:text-lg leading-relaxed ${stage.key === "result" ? "text-white font-semibold" : stage.key === "decision" ? "text-ink font-semibold" : "text-graphite"}`}
                  >
                    {flow[stage.key]}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
