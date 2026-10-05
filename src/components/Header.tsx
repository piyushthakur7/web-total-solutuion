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

/**
 * One header for every page. It sits over the blue hero each page opens with,
 * and takes a solid blue background once the page is scrolled so it stays
 * readable over the content below.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const toggle = useRef<HTMLButtonElement>(null);
  // The blog admin has no hero, so the header is solid there and takes up space.
  const admin = pathname.startsWith("/blog/admin");
  const solid = scrolled || open || admin;
  const active = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

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
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 text-white ${solid ? "site-header-solid" : ""}`}
      >
        <div className="studio-container site-header-row flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Web Total Solution home"
            onClick={() => setOpen(false)}
          >
            <Logo size="sm" theme="dark" />
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
                className={`relative py-3 text-[13px] font-medium transition-colors hover:text-white ${active(link.path) ? "text-white" : "text-white/85"}`}
              >
                {link.label}
                {active(link.path) && (
                  <span
                    className="absolute inset-x-0 bottom-1.5 h-0.5 rounded-full bg-white"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="impact-nav-cta hidden sm:inline-flex"
            >
              Start a project
              <span aria-hidden="true">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
            <button
              ref={toggle}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen(!open)}
              className="flex size-11 items-center justify-center rounded-full border border-white/35 text-white lg:hidden"
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
              className="overflow-hidden border-t border-white/15 lg:hidden"
            >
              <div className="studio-container max-h-[calc(100dvh-11rem)] overflow-y-auto pb-7 pt-2">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setOpen(false)}
                    aria-current={active(link.path) ? "page" : undefined}
                    className="flex items-center justify-between border-b border-white/15 py-4 font-display text-3xl"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className="size-5 text-white/60"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-paper mt-6 w-full"
                >
                  Request a discovery call
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      {admin && <div className="site-header-row" aria-hidden="true" />}
    </>
  );
}
