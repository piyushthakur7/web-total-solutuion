import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, SectionLabel, TextLink } from "./StudioPrimitives";
import ProcessSection from "./ProcessSection";
import FinalCTA from "./FinalCTA";

const services = [
  {
    name: "Startup & marketing websites",
    description:
      "A digital presence that explains your product clearly, builds confidence and gives visitors a reason to take the next step.",
    details: [
      "Positioning & page strategy",
      "Custom responsive UI",
      "CMS & blog integration",
      "SEO & conversion tracking",
    ],
    href: "/business-website-development",
    label: "Establish your presence",
    number: "01",
  },
  {
    name: "Landing pages",
    description:
      "One offer. One clear story. A focused page designed around the audience, the campaign and the action you want them to take.",
    details: [
      "Conversion research",
      "UX wireframes",
      "Campaign-focused design",
      "Analytics setup",
    ],
    href: "/services/landing-pages",
    label: "Launch your next offer",
    number: "02",
  },
  {
    name: "Website redesign",
    description:
      "Bring your website up to the standard of your business, with clearer messaging, better journeys and a distinctive new visual direction.",
    details: [
      "Website & UX audit",
      "Information architecture",
      "Visual design refresh",
      "Performance & SEO foundations",
    ],
    href: "/website-redesign",
    label: "Move your website forward",
    number: "03",
  },
  {
    name: "Product interfaces & web apps",
    description:
      "Thoughtful interfaces for complex workflows. We connect product strategy, interaction design and development in one team.",
    details: [
      "Product strategy & UX",
      "Dashboards & modules",
      "API integrations",
      "Custom development",
    ],
    href: "/services/saas-development",
    label: "Build your product experience",
    number: "04",
  },
];

export default function ServicesView() {
  return (
    <div className="bg-paper pb-16 text-ink sm:pb-24">
      <PageIntro
        label="Our expertise / From first idea to launch"
        title={
          <>
            One studio.
            <br />
            The whole journey.
          </>
        }
        description="We bring strategy, design and development together to create websites with a clear purpose and a distinctive point of view."
      >
        <TextLink href="/contact">Tell us what you have in mind</TextLink>
      </PageIntro>
      <section className="studio-container">
        {services.map((service) => (
          <article
            key={service.number}
            className="grid gap-6 border-t border-ink/15 py-10 sm:py-14 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-1">
              <span className="font-mono text-xs text-brand-blue">
                /{service.number}
              </span>
            </div>
            <div className="lg:col-span-5">
              <h2 className="max-w-md font-display text-3xl leading-tight sm:text-4xl">
                {service.name}
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-graphite">
                {service.description}
              </p>
              <div className="mt-5">
                <TextLink href={service.href}>{service.label}</TextLink>
              </div>
            </div>
            <ul className="self-center lg:col-span-6 lg:pl-12">
              {service.details.map((detail, i) => (
                <li
                  key={detail}
                  className="flex items-center gap-5 border-b border-ink/10 py-4 text-sm"
                >
                  <span className="font-mono text-[9px] text-graphite">
                    0{i + 1}
                  </span>
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
        <div className="mb-16 grid gap-7 rounded-[24px] bg-marker px-7 py-10 sm:mb-24 sm:p-10 lg:grid-cols-2">
          <div>
            <SectionLabel>More ways we can help</SectionLabel>
            <h2 className="mt-5 font-display text-3xl">
              The details around the website matter, too.
            </h2>
          </div>
          <div className="flex flex-wrap content-center gap-3">
            {[
              { name: "E-commerce", href: "/ecommerce-development" },
              { name: "Content & SEO", href: "/services/content-writing" },
              {
                name: "Digital marketing",
                href: "/services/digital-marketing",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="btn btn-line border-ink/30 bg-white/20"
              >
                {item.name}
                <ArrowUpRight className="size-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection heading="A clear path from idea to live." />
      <div className="mt-16 sm:mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
