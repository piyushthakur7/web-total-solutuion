import React from "react";
import Image from "next/image";
import { WorkGalleryImage } from "../../work";

/**
 * Key screens. `full` images span the page, `half` and `mobile` images sit in
 * a two-up grid on desktop; on mobile, wide images stack and phone screens stay
 * side by side. Rendered only when a case study has real screenshots in
 * `gallery`.
 */
export default function CaseStudyGallery({
  images,
}: {
  images: WorkGalleryImage[];
}) {
  return (
    <section className="studio-container py-16 sm:py-24">
      <div className="reveal max-w-3xl space-y-4">
        <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
          Visual design
        </p>
        <h2 className="text-3xl sm:text-4xl font-display leading-[1.1] text-ink">
          Key screens
        </h2>
      </div>

      <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-8 sm:gap-8">
        {images.map((image) => (
          <figure
            key={image.src}
            className={`reveal ${
              image.layout === "full"
                ? "col-span-2 md:col-span-6"
                : image.layout === "half"
                  ? "col-span-2 md:col-span-3"
                  : "col-span-1 md:col-span-3"
            }`}
          >
            <div
              className={`relative overflow-hidden bg-slate-100 ${
                image.layout === "mobile"
                  ? "aspect-[390/844] max-w-[300px] mx-auto rounded-[1.75rem] sm:rounded-[2.5rem] border-4 sm:border-8 border-slate-900 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.5)]"
                  : "aspect-[16/10] rounded-2xl sm:rounded-3xl border border-ink/15 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  image.layout === "full"
                    ? "(min-width: 1280px) 1216px, 100vw"
                    : image.layout === "half"
                      ? "(min-width: 768px) 50vw, 100vw"
                      : "(min-width: 640px) 300px, 45vw"
                }
                className="object-cover object-top"
              />
            </div>
            {image.caption && (
              <figcaption
                className={`mt-4 text-sm text-slate-500 ${image.layout === "mobile" ? "text-center" : ""}`}
              >
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
