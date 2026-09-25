import type { ReactNode } from "react";

/**
 * Fade-and-rise as a section enters the viewport (hierarchy: brings each section in as the reader arrives).
 * Pure CSS scroll-driven animation (see .reveal in globals.css): content is visible by default,
 * the effect is progressive enhancement, and it is disabled under prefers-reduced-motion.
 */
export function Reveal({ children, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
