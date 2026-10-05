import React from "react";
import Image from "next/image";

export default function Logo({
  className = "",
  size = "md",
  theme = "light",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
}) {
  const frames = {
    sm: "h-13 w-40",
    md: "h-15 w-48",
    lg: "h-18 w-56",
  };
  const imageWidths = { sm: 196, md: 224, lg: 272 };

  return (
    <span
      className={`relative block shrink-0 overflow-hidden ${frames[size]} ${className}`}
    >
      <Image
        src="/bhaskar_logo_1.png"
        alt="Web Total Solution"
        width={320}
        height={320}
        sizes={`${imageWidths[size]}px`}
        priority={theme === "light"}
        className="absolute left-1/2 top-1/2 h-auto max-w-none -translate-x-1/2 -translate-y-1/2"
        style={{
          width: imageWidths[size],
          filter: theme === "dark" ? "brightness(0) invert(1)" : undefined,
        }}
      />
    </span>
  );
}
