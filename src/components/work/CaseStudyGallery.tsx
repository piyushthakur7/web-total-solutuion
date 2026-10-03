import React from 'react';
import Image from 'next/image';
import { WorkGalleryImage } from '../../work';

/**
 * Key screens. `full` images span the page, `half` and `mobile` images sit in
 * a two- or three-up grid on desktop, and everything stacks on mobile. Rendered
 * only when a case study has real screenshots in `gallery`.
 */
export default function CaseStudyGallery({ images }: { images: WorkGalleryImage[] }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="reveal max-w-3xl space-y-4">
        <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
          Visual design
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
          Key screens
        </h2>
      </div>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-6 gap-6 sm:gap-8">
        {images.map((image) => (
          <figure
            key={image.src}
            className={`reveal ${
              image.layout === 'full'
                ? 'md:col-span-6'
                : image.layout === 'half'
                  ? 'md:col-span-3'
                  : 'md:col-span-2'
            }`}
          >
            <div
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-100 ${
                image.layout === 'mobile' ? 'aspect-[9/19] max-w-xs mx-auto' : 'aspect-[16/10]'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  image.layout === 'full'
                    ? '(min-width: 1280px) 1216px, 100vw'
                    : image.layout === 'half'
                      ? '(min-width: 768px) 50vw, 100vw'
                      : '(min-width: 768px) 33vw, 320px'
                }
                className="object-cover object-top"
              />
            </div>
            {image.caption && (
              <figcaption className="mt-3 text-sm text-slate-500">{image.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
