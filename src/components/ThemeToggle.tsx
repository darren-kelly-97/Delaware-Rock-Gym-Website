"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

const KEY = "drg-theme";

function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
}
const getTheme = () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

/** Light by default; the visitor's choice is remembered (see the inline script in layout.tsx). */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.dataset.theme = next;
        try {
          localStorage.setItem(KEY, next);
        } catch {}
      }}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={`grid h-10 w-10 place-items-center border border-line text-text transition-colors hover:border-brand hover:text-link ${className}`}
    >
      {theme === "dark" ? <SunIcon aria-hidden size={20} /> : <MoonIcon aria-hidden size={20} />}
    </button>
  );
}

export const THEME_SCRIPT = `try{var t=localStorage.getItem("${KEY}");document.documentElement.dataset.theme=t==="dark"?"dark":"light"}catch(e){document.documentElement.dataset.theme="light"}`;
