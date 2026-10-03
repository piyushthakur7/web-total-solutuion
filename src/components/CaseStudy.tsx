import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudyData } from '../caseStudies';

/**
 * One case study card. Problem / build / outcome blocks render only when the
 * data file has them, so an incomplete study never shows placeholder copy.
 */
export default function CaseStudy({ study }: { study: CaseStudyData }) {
  const details = [
    { label: 'The problem', text: study.problem },
    { label: 'What we built', text: study.built },
    { label: 'Outcome', text: study.outcome },
  ].filter((detail) => detail.text);

  return (
    <article className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col">
      <div className="relative aspect-video bg-slate-100 border-b border-slate-100">
        <Image
          src={study.image}
          alt={`${study.client} website`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="p-7 sm:p-9 flex flex-col flex-grow">
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{study.client}</h3>

        {details.length > 0 && (
          <dl className="mt-5 space-y-4 flex-grow">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className="text-[11px] uppercase tracking-widest font-extrabold text-brand-blue">
                  {detail.label}
                </dt>
                <dd className="mt-1.5 text-sm text-slate-600 leading-relaxed">{detail.text}</dd>
              </div>
            ))}
          </dl>
        )}

        {study.websiteUrl && (
          <a
            href={study.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center space-x-1.5 text-sm font-bold text-brand-blue hover:underline self-start"
          >
            <span>Visit the live website</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
}
