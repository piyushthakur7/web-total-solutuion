import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { EMAIL, OFFICES, PHONE_DISPLAY, WHATSAPP_URL } from "../siteContent";

const studioLinks = [
  { href: "/work", label: "Selected work" },
  { href: "/about", label: "The studio" },
  { href: "/pricing", label: "Investment" },
  { href: "/projects", label: "Our products" },
  { href: "/blog", label: "Insights" },
];
const serviceLinks = [
  { href: "/business-website-development", label: "Marketing websites" },
  { href: "/services/landing-pages", label: "Landing pages" },
  { href: "/website-redesign", label: "Website redesign" },
  { href: "/services/saas-development", label: "Product UI & web apps" },
  { href: "/ecommerce-development", label: "E-commerce" },
];

export default function Footer() {
  return (
    <footer className="bg-deep pb-7 pt-14 text-paper sm:pt-20">
      <div className="studio-container">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Web Total Solution home">
              <Logo theme="dark" />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Strategy, design and development for ambitious businesses. Based
              in India. Building for what comes next.
            </p>
            <div className="mt-5 flex gap-5 text-xs">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/webtotalsolution/",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/web-total-solutions/",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-white/70 hover:text-marker"
                >
                  {link.label}
                  <ArrowUpRight className="size-3" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="font-mono text-[10px] uppercase tracking-[.15em] text-white/45">
              Explore
            </h2>
            <ul className="mt-5 space-y-1">
              {studioLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-2 text-[13px] text-white/75 transition-colors hover:text-marker"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className="font-mono text-[10px] uppercase tracking-[.15em] text-white/45">
              Expertise
            </h2>
            <ul className="mt-5 space-y-1">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-2 text-[13px] text-white/75 transition-colors hover:text-marker"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h2 className="font-mono text-[10px] uppercase tracking-[.15em] text-white/45">
              Say hello
            </h2>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 block break-words text-[13px] text-white/85 hover:text-marker"
            >
              {EMAIL}
            </a>
            <a
              href="tel:+916291519364"
              className="mt-4 inline-block text-[13px] text-white/70 hover:text-marker"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex min-h-11 items-center gap-2 text-xs text-marker"
            >
              Talk on WhatsApp
              <ArrowUpRight className="size-3.5" />
            </a>
            <details className="mt-3 text-xs text-white/60">
              <summary className="cursor-pointer py-2">
                Kolkata & Delhi offices
              </summary>
              <div className="mt-3 space-y-4 leading-relaxed">
                {OFFICES.map((office) => (
                  <p key={office.city}>
                    <span className="text-white">{office.city}</span>
                    <br />
                    {office.lines.join(", ")}
                  </p>
                ))}
              </div>
            </details>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-white/15 py-5 text-[10px] text-white/50">
          {[
            {
              href: "/website-development-company-india",
              label: "Website development India",
            },
            { href: "/website-development-company-kolkata", label: "Kolkata" },
            { href: "/website-development-company-delhi", label: "Delhi" },
            {
              href: "/nextjs-development-company-india",
              label: "Next.js development",
            },
            { href: "/law-firm-websites", label: "Law firm websites" },
            { href: "/services/content-writing", label: "Content & SEO" },
            { href: "/services/digital-marketing", label: "Digital marketing" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-[10px] text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Web Total Solution</p>
          <p>Designed with purpose. Developed with care.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
