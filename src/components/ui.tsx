import Link from "next/link";
import type { ReactNode } from "react";
import { InfoIcon, WarningIcon } from "@phosphor-icons/react/dist/ssr";
import { nav } from "@/lib/site";

export function PageHeader({ title, lead, children }: { title: string; lead?: ReactNode; children?: ReactNode }) {
  return (
    <div className="wall-grid border-b border-line">
      <div className="container-site pb-10 pt-12 md:pb-14 md:pt-20">
        <span aria-hidden className="rise mb-6 block h-1.5 w-16 bg-brand" />
        <h1 className="slide-up max-w-[22ch] text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.88] [animation-delay:80ms]">{title}</h1>
        {lead && <p className="rise mt-6 max-w-[60ch] text-lg text-muted md:text-xl [animation-delay:160ms]">{lead}</p>}
        {children}
      </div>
    </div>
  );
}

export function Notice({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "important" }) {
  const Icon = tone === "important" ? WarningIcon : InfoIcon;
  return (
    <div className="flex gap-3 border-l-4 border-brand bg-notice px-4 py-3.5">
      <Icon aria-hidden size={22} className="mt-0.5 shrink-0 text-link" />
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export type Price = { item: ReactNode; price: ReactNode; note?: ReactNode };

/** Grouped price rows: no per-row borders, one divider above the group. */
export function PriceList({ rows }: { rows: Price[] }) {
  return (
    <dl className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-4 border-t-2 border-text pt-5">
      {rows.map((r, i) => (
        <div key={i} className="contents">
          <dt>
            <span className="font-medium">{r.item}</span>
            {r.note && <span className="mt-0.5 block text-[0.9375rem] text-muted">{r.note}</span>}
          </dt>
          <dd className="display text-right text-2xl tabular-nums">{r.price}</dd>
        </div>
      ))}
    </dl>
  );
}

/** In-page section links: horizontal scroll row on mobile, sticky list on desktop. */
export function InPageNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-20 lg:self-start">
      <p className="mb-3 hidden text-sm font-semibold text-muted lg:block">On this page</p>
      <ul className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:block lg:space-y-1 lg:overflow-visible lg:px-0">
        {items.map((i) => (
          <li key={i.id} className="snap-start">
            <a
              href={`#${i.id}`}
              className="block whitespace-nowrap border border-line px-3 py-1.5 text-[0.9375rem] transition-colors hover:border-brand hover:text-link lg:border-0 lg:border-l-2 lg:border-line lg:py-1 lg:pl-3"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Legal copy, verbatim from the original site (typo "Delware" corrected, approved). */
export function ReleaseRequirement() {
  return (
    <p>
      Any person who wants to climb, belay, or take a class at The Delaware Rock Gym must complete{" "}
      <Link href={nav("Release Forms")} className="link">
        The Delaware Rock Gym Release Agreement.
      </Link>{" "}
      If the participant is under 18 then their parent or court-appointed legal guardian must sign our release agreement on
      their behalf.
    </p>
  );
}

/** Legal copy, verbatim from the original home and pricing pages (typo corrected, approved). */
export function AllClimbersMust() {
  return (
    <>
      <p className="font-semibold">
        All climbers must complete{" "}
        <Link href={nav("Release Forms")} className="link">
          The Delaware Rock Gym Release Agreement.
        </Link>
      </p>
      <p className="font-semibold">
        All climbers under the age of 18 must have their Parent or Court appointed legal guardian complete{" "}
        <Link href={nav("Release Forms")} className="link">
          The Delaware Rock Gym Release Agreement.
        </Link>
      </p>
    </>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
