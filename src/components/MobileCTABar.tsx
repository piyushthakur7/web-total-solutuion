"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_URL } from "../siteContent";

export default function MobileCTABar() {
  const pathname = usePathname();
  const [heroPassed, setHeroPassed] = useState(false);

  useEffect(() => {
    setHeroPassed(false);
    if (pathname !== "/") return;
    const hero = document.getElementById("home-hero");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      setHeroPassed(
        !entry.isIntersecting && entry.boundingClientRect.bottom <= 0,
      );
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  // The contact page is the destination, so the bar would link to itself.
  if (pathname === "/contact") return null;
  if (pathname === "/" && !heroPassed) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
      <div className="flex items-center gap-3 px-5 py-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Talk on WhatsApp"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink"
        >
          <WhatsAppIcon className="size-5" />
        </a>
        <Link href="/contact" className="btn btn-ink min-h-11 flex-1">
          Request a discovery call
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
