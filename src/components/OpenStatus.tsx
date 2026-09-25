"use client";

import { useSyncExternalStore } from "react";

/* Regular hours (America/New_York). Holiday closures are listed on About Us and not modelled here. */
const HOURS: Record<number, [number, number]> = {
  0: [10, 20],
  1: [12, 22],
  2: [12, 22],
  3: [12, 22],
  4: [12, 22],
  5: [12, 22],
  6: [10, 20],
};
const fmt = (h: number) => `${h % 12 === 0 ? 12 : h % 12} ${h < 12 || h === 24 ? "AM" : "PM"}`;

function compute(): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.find((p) => p.type === "weekday")!.value);
  const h = Number(parts.find((p) => p.type === "hour")!.value) + Number(parts.find((p) => p.type === "minute")!.value) / 60;
  const [open, close] = HOURS[wd];
  if (h >= open && h < close) return `open|Open now until ${fmt(close)}`;
  if (h < open) return `closed|Closed now. Opens today at ${fmt(open)}`;
  return `closed|Closed now. Opens tomorrow at ${fmt(HOURS[(wd + 1) % 7][0])}`;
}

function subscribe(cb: () => void) {
  const id = setInterval(cb, 60_000);
  return () => clearInterval(id);
}

/** Live open/closed indicator. The dot carries real state (open or closed), so it is not decoration. */
export function OpenStatus({ className = "" }: { className?: string }) {
  const value = useSyncExternalStore(subscribe, compute, () => "");
  if (!value) return <span data-open-status className={`inline-block h-7 ${className}`} aria-hidden />;
  const [state, label] = value.split("|");
  const open = state === "open";
  return (
    <span className={`inline-flex items-center gap-2 text-[0.9375rem] font-medium ${className}`} role="status">
      <span className="relative flex h-2.5 w-2.5">
        {open && <span className="absolute inset-0 animate-ping rounded-full bg-ok opacity-60" />}
        <span className={`relative h-2.5 w-2.5 rounded-full ${open ? "bg-ok" : "bg-muted"}`} />
      </span>
      {label}
    </span>
  );
}
