import Link from "next/link";
import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { NAV, business, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto overflow-hidden border-t border-line bg-surface">
      <div className="container-site grid gap-10 pb-10 pt-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.4fr_0.8fr]">
        <div>
          <p className="text-lg font-bold">{business.name}</p>
          <address className="mt-2 not-italic text-muted">
            {business.street} {business.city}, {business.region} {business.postal}
            <br />
            Tel:{" "}
            <a href={business.phoneHref} className="link">
              {business.phoneDisplay}
            </a>
          </address>
          <p className="mt-3">
            <Link href={nav("Contact Us")} className="link">
              Contact Us
            </Link>
          </p>
        </div>

        <div>
          <p className="font-semibold">Operating Hours</p>
          <dl className="mt-2 space-y-1 text-muted">
            {business.hours.map((h) => (
              <div key={h.days} className="flex flex-wrap gap-x-3">
                <dt>{h.days}</dt>
                <dd className="font-medium text-text tabular-nums">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <nav aria-label="Footer">
          <p className="font-semibold">Explore</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-muted transition-colors hover:text-link">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-semibold">Follow</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href={business.instagram} target="_blank" rel="noopener" className="flex items-center gap-2 text-muted hover:text-link">
                <InstagramLogoIcon aria-hidden size={20} /> Instagram
              </a>
            </li>
            <li>
              <a href={business.facebook} target="_blank" rel="noopener" className="flex items-center gap-2 text-muted hover:text-link">
                <FacebookLogoIcon aria-hidden size={20} /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Closing signature: the name set at wall scale, stretched to the container's exact width. */}
      <div aria-hidden className="container-site select-none pb-3">
        <svg viewBox="0 0 1000 118" className="block w-full text-surface-2">
          <text
            x="0"
            y="112"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            style={{ fontFamily: "var(--font-archivo)", fontStretch: "75%", fontWeight: 800, fontSize: "150px" }}
          >
            DELAWARE ROCK GYM
          </text>
        </svg>
      </div>
    </footer>
  );
}
