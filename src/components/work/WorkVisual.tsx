import React from "react";
import Image from "next/image";
import { WorkImage } from "../../work";

/**
 * A project screenshot in a browser frame (or a phone frame). Every instance
 * reserves its aspect ratio, so lazy-loaded screens never shift the page.
 * `priority` is for the one above-the-fold instance on a page.
 */
export default function WorkVisual({
  image,
  label,
  sizes,
  priority = false,
  phone = false,
}: {
  image: WorkImage;
  /** Address shown in the browser bar. */
  label?: string;
  sizes: string;
  priority?: boolean;
  phone?: boolean;
}) {
  if (phone) {
    return (
      <div className="relative mx-auto aspect-[390/844] w-full max-w-[280px] overflow-hidden rounded-[2rem] border-[6px] border-ink bg-white">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    );
  }
  return (
    <div className="project-frame">
      <div className="browser-bar">
        <span className="browser-dot" aria-hidden="true" />
        <span className="browser-dot" aria-hidden="true" />
        <span className="browser-dot" aria-hidden="true" />
        {label && (
          <span className="ml-3 truncate text-xs text-graphite">
            {label}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-paper">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
