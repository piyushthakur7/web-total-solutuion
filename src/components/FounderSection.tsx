import React from "react";
import Image from "next/image";
import { FOUNDER } from "../siteContent";
import { SectionLabel, TextLink } from "./StudioPrimitives";

export default function FounderSection() {
  return (
    <section className="studio-section bg-white">
      <div className="studio-container grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionLabel>The person behind the studio</SectionLabel>
          <h2 className="mt-6 font-display text-display">
            A builder&apos;s mindset.
            <br />A personal commitment.
          </h2>
          <div className="mt-7">
            <TextLink href="/contact">Talk to our team</TextLink>
          </div>
        </div>
        <div className="lg:col-span-7">
          {FOUNDER.photo && (
            <Image
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              width={128}
              height={128}
              className="mb-7 size-32 rounded-2xl object-cover"
            />
          )}
          {FOUNDER.bio.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-2xl text-lg leading-relaxed text-graphite sm:text-xl"
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-8 border-t border-ink/15 pt-6">
            <p className="font-display text-3xl">{FOUNDER.name}</p>
            <p className="mt-2 text-xs text-graphite">{FOUNDER.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
