"use client";

import type { ReactNode } from "react";

/** Keeps the original anti-scrape approach: the address is only assembled on click. */
export function EmailLink({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <a
      href="mailto:contactATderockgymDOTcom"
      className={className}
      onClick={(e) => {
        e.currentTarget.href = e.currentTarget.href.replace("AT", "@").replace("DOT", ".");
      }}
    >
      {children}
    </a>
  );
}
