"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "Studio", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Insights", path: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const home = pathname === "/";
  const reducedMotion = useReducedMotion();
  const toggle = useRef<HTMLButtonElement>(null);
  const active = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  // Opening the menu moves focus into it; Escape returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    document
      .querySelector<HTMLAnchorElement>("#mobile-navigation a")
      ?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header
      className={
        home
          ? "site-header-home absolute inset-x-0 top-0 z-50 text-white"
          : "sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-xl"
      }
    >
      <div
        className={`studio-container flex items-center justify-between gap-6 ${home ? "home-header-row" : "h-20 sm:h-24"}`}
      >
        <Link
          href="/"
          aria-label="Web Total Solution home"
          onClick={() => setOpen(false)}
        >
          <Logo size={home ? "sm" : "md"} theme={home ? "dark" : "light"} />
        </Link>
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              aria-current={active(link.path) ? "page" : undefined}
              className={`relative py-3 text-[13px] font-medium transition-colors ${home ? "text-white/85 hover:text-white" : active(link.path) ? "text-ink" : "text-graphite hover:text-ink"}`}
            >
              {link.label}
              {active(link.path) && (
                <span
                  className={`absolute inset-x-0 bottom-1.5 h-0.5 rounded-full ${home ? "bg-white" : "bg-brand-blue"}`}
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {home ? (
            <Link
              href="/contact"
              className="impact-nav-cta hidden sm:inline-flex"
            >
              Start a project
              <span aria-hidden="true">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          ) : (
            <Link
              href="/contact"
              className="btn btn-ink hidden min-h-11 px-5 sm:inline-flex"
            >
              Start a project
              <ArrowUpRight className="size-4" />
            </Link>
          )}
          <button
            ref={toggle}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
            className={`flex size-11 items-center justify-center rounded-full border lg:hidden ${home ? "border-white/35 text-white" : "border-ink/20"}`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
            className={`overflow-hidden border-t lg:hidden ${home ? "border-white/15 bg-[#05356e] text-white" : "border-ink/10 bg-paper"}`}
          >
            <div className="studio-container max-h-[calc(100dvh-11rem)] overflow-y-auto pb-7 pt-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  aria-current={active(link.path) ? "page" : undefined}
                  className={`flex items-center justify-between border-b py-4 font-display text-3xl ${home ? "border-white/15" : "border-ink/10"}`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    className={`size-5 ${home ? "text-white/60" : "text-graphite"}`}
                    aria-hidden="true"
                  />
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={`btn mt-6 w-full ${home ? "btn-paper" : "btn-ink"}`}
              >
                Request a discovery call
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
