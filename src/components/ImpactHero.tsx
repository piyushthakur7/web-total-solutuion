import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Layers3,
  LayoutTemplate,
  Rocket,
  Search,
  Workflow,
} from "lucide-react";
import { codeLines } from "./StudioPrimitives";

const services = [
  {
    title: "Web design",
    detail: "Distinctly your brand",
    icon: LayoutTemplate,
    href: "/services",
    position: "design",
  },
  {
    title: "Development",
    detail: "Built to perform",
    icon: Code2,
    href: "/nextjs-development-company-india",
    position: "development",
  },
  {
    title: "SEO foundations",
    detail: "Ready to be discovered",
    icon: Search,
    href: "/services/content-writing",
    position: "seo",
  },
  {
    title: "Landing pages",
    detail: "One clear offer",
    icon: Layers3,
    href: "/services/landing-pages",
    position: "landing",
  },
  {
    title: "Integrations",
    detail: "Everything, connected",
    icon: Workflow,
    href: "/services/saas-development",
    position: "integrations",
  },
  {
    title: "Launch & support",
    detail: "30 days included",
    icon: Rocket,
    href: "/contact",
    position: "launch",
  },
];

export default function ImpactHero() {
  return (
    <section
      id="home-hero"
      className="impact-hero"
      aria-labelledby="impact-heading"
    >
      <div className="impact-orbit impact-orbit-outer" aria-hidden="true" />
      <div className="impact-orbit impact-orbit-inner" aria-hidden="true" />
      <div className="impact-glow" aria-hidden="true" />
      <div className="impact-grain" aria-hidden="true" />
      {(["left", "right"] as const).map((side) => (
        <div
          key={side}
          className={`impact-code impact-code-${side}`}
          aria-hidden="true"
        >
          {codeLines.map((width, index) => (
            <span key={index} style={{ width: `${width}%` }} />
          ))}
        </div>
      ))}
      <div className="impact-content studio-container">
        <div className="impact-copy hero-enter">
          <h1 id="impact-heading" className="impact-title">
            Built to
            <br />
            stand out<span className="impact-period">.</span>
          </h1>
          <p className="impact-description">
            Strategy, design and development for startup websites
            <br /> that explain your product clearly and make the next step easy.
          </p>
          <div className="impact-actions">
            <Link href="#selected-work" className="impact-primary">
              View selected work
              <span aria-hidden="true">
                <ArrowDown className="size-4" />
              </span>
            </Link>
            <Link href="/contact" className="impact-secondary">
              Request a discovery call
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="impact-scene">
        <div className="impact-photo">
          <Image
            src="/images/hero/website-designer-cutout.png"
            alt="Illustrative scene of a website designer wearing headphones at a wide desk with three monitors showing website designs"
            fill
            priority
            sizes="(min-width: 1440px) 1320px, 100vw"
            unoptimized
            className="impact-scene-image"
          />
        </div>
      </div>
      <div className="impact-floor" aria-hidden="true" />
      <nav className="impact-services" aria-label="Explore our expertise">
        {services.map((service) => (
          <Link
            key={service.position}
            href={service.href}
            className={`impact-service impact-service-${service.position}`}
          >
            <service.icon className="impact-service-icon" aria-hidden="true" />
            <span>
              <span className="impact-service-title">{service.title}</span>
              <span className="impact-service-detail">{service.detail}</span>
            </span>
            <span className="impact-service-dot" aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </section>
  );
}
