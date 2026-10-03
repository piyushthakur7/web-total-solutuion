import React from 'react';
import Image from 'next/image';
import { FOUNDER } from '../siteContent';

/**
 * Founder block. Title, bio and photo render only once they are supplied in
 * siteContent — until then the section shows the name alone rather than
 * placeholder copy.
 */
export default function FounderSection() {
  const initials = FOUNDER.name
    .split(' ')
    .map((part) => part[0])
    .join('');

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {FOUNDER.photo ? (
            <Image
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              width={160}
              height={160}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover shrink-0"
            />
          ) : (
            // TODO(founder): replace with the real photo once FOUNDER.photo is set.
            <div
              aria-hidden="true"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-slate-900 text-white font-extrabold text-4xl flex items-center justify-center shrink-0"
            >
              {initials}
            </div>
          )}

          <div className="space-y-4 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
              Founder
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{FOUNDER.name}</h2>
            {FOUNDER.title && (
              <p className="text-sm font-bold text-slate-700">{FOUNDER.title}</p>
            )}
            {FOUNDER.bio.map((paragraph) => (
              <p key={paragraph} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
