import React from 'react';
import Image from 'next/image';
import { AlertTriangle, Quote, Star, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '../siteContent';

/**
 * True while `siteContent.ts` still holds the shipped placeholder entries.
 * Drives an unmissable editor warning so dummy names can never reach production
 * unnoticed — it disappears on its own once real quotes replace them.
 */
const HAS_PLACEHOLDERS = TESTIMONIALS.some((item) => item.name === 'Client Name');

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/**
 * Premium testimonial grid. Content lives in `siteContent.ts` — see the warning
 * there before publishing; the shipped entries are placeholders.
 */
export default function Testimonials({
  heading = 'What Our Clients Say',
  eyebrow = 'Client Results',
  intro = 'Businesses across manufacturing, professional services, retail and hospitality trust us with the platform their customers see first.',
}: {
  heading?: string;
  eyebrow?: string;
  intro?: string;
}) {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute top-10 right-0 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-blue">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {heading}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{intro}</p>
        </div>

        {HAS_PLACEHOLDERS && (
          <div className="mb-10 max-w-3xl mx-auto flex items-start space-x-3 bg-amber-50 border-2 border-amber-300 rounded-2xl px-5 py-4 text-left">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong className="font-bold">Placeholder content — do not publish.</strong> Replace
              the entries in <code className="font-mono text-xs bg-amber-100 px-1.5 py-0.5 rounded">src/siteContent.ts</code>{' '}
              with real client quotes (your Google Reviews are a good source). This warning
              disappears automatically once they are replaced.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <figure
              key={index}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-brand-blue/20 shrink-0" fill="currentColor" />

              <div className="flex items-center space-x-0.5 mt-5" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-4 h-4 ${
                      starIndex < item.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'
                    }`}
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-slate-700 text-sm leading-relaxed flex-grow">
                “{item.quote}”
              </blockquote>

              <div className="mt-6 flex items-start space-x-2.5 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-bold text-emerald-800 leading-snug">{item.result}</span>
              </div>

              <figcaption className="mt-6 pt-6 border-t border-slate-100 flex items-center space-x-3.5">
                {item.photo ? (
                  <Image
                    src={item.photo}
                    alt={`${item.name}, ${item.company}`}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border border-slate-100 shrink-0"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="w-12 h-12 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0"
                  >
                    {initials(item.name)}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-slate-900 truncate">{item.name}</span>
                  <span className="block text-xs text-slate-500 truncate">
                    {item.role} · {item.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://share.google/na7XhIzRCjwcQnh9J"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-bold text-brand-blue hover:underline"
          >
            <span>Read our verified Google Reviews</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
