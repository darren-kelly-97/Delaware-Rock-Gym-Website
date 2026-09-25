"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaretDownIcon, ListIcon, PhoneIcon, XIcon } from "@phosphor-icons/react";
import { NAV, NAV_INLINE, business, nav } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";

const inline = NAV.filter((n) => NAV_INLINE.includes(n.label));
const more = NAV.filter((n) => !NAV_INLINE.includes(n.label));

export function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close menus on route change (state adjusted during render).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMoreOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMoreOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const isActive = (href: string) => pathname === href || (href !== "/" && !!pathname?.startsWith(href));
  const moreActive = more.some((m) => isActive(m.href));
  const panel = reduce
    ? { initial: false as const, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <header
      className="sticky top-0 border-b border-line bg-surface/85 backdrop-blur-md"
      style={{ zIndex: "var(--z-nav)" }}
    >
      <div className="container-site flex h-[4.5rem] items-center gap-6">
        <Link href="/" aria-label="The Delaware Rock Gym, home" className="min-w-0 shrink">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden h-full xl:block">
          <ul className="flex h-full items-center">
            {inline.map((item) => (
              <li key={item.href} className="h-full">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative flex h-full items-center px-3.5 text-[0.98rem] font-medium transition-colors hover:text-link aria-[current=page]:text-link after:absolute after:inset-x-3.5 after:bottom-0 after:h-[3px] after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="relative h-full">
              <div ref={moreRef} className="h-full">
                <button
                  type="button"
                  aria-expanded={moreOpen}
                  aria-controls="more-menu"
                  onClick={() => setMoreOpen((v) => !v)}
                  className={`flex h-full items-center gap-1.5 px-3.5 text-[0.98rem] font-medium transition-colors hover:text-link ${
                    moreActive ? "text-link" : ""
                  }`}
                >
                  More
                  <CaretDownIcon aria-hidden size={14} className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {moreOpen && (
                    <motion.ul
                      id="more-menu"
                      {...panel}
                      className="absolute right-0 top-full min-w-60 border border-line bg-surface py-2 shadow-[0_24px_48px_-20px_rgb(13_18_38/0.35)]"
                      style={{ zIndex: "var(--z-menu)" }}
                    >
                      {more.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className="block px-5 py-2.5 transition-colors hover:bg-surface-2 hover:text-link aria-[current=page]:font-semibold aria-[current=page]:text-link"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-2">
          <ThemeToggle />
          <Link href={nav("Release Forms")} className="btn btn-primary btn-sm hidden md:inline-flex">
            Release Forms
          </Link>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border border-line xl:hidden"
          >
            {mobileOpen ? <XIcon aria-hidden size={22} /> : <ListIcon aria-hidden size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            {...panel}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-line bg-surface xl:hidden"
            style={{ zIndex: "var(--z-menu)" }}
          >
            <nav aria-label="Mobile" className="container-site py-4">
              <ul className="grid grid-cols-1 sm:grid-cols-2">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className="display flex min-h-14 items-center border-b border-line text-3xl transition-colors hover:text-link aria-[current=page]:text-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a href={business.phoneHref} className="mt-5 inline-flex items-center gap-2 font-semibold text-link">
                <PhoneIcon aria-hidden size={20} /> {business.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
