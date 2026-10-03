import React from 'react';
import CaseStudySection from './CaseStudySection';

/**
 * Numbered two-column list of titled points. Used for "Our approach" and for
 * any extra `sections` a case study defines, such as a product's modules.
 */
export default function CaseStudyList({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: { title: string; description: string }[];
}) {
  return (
    <CaseStudySection eyebrow={eyebrow} heading={heading}>
      {intro && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-10">
          {intro}
        </p>
      )}
      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
        {items.map((item, index) => (
          <li key={item.title} className="border-t border-slate-200 py-6">
            <span className="font-mono text-xs text-brand-blue">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 text-lg font-bold text-slate-900 tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
          </li>
        ))}
      </ol>
    </CaseStudySection>
  );
}
