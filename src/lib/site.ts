export const SITE_URL = "https://www.derockgym.com";

/** Sub-path when hosted somewhere other than the domain root (e.g. GitHub Pages: "/repo-name"). Empty in production. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/** Prefix a public file path (images, PDFs, icons) with the base path. Links via next/link get it automatically. */
export const asset = (path: string) => `${BASE_PATH}${path}`;
/** True for the client-preview build: pages are kept out of search engines. */
export const IS_PREVIEW = process.env.NEXT_PUBLIC_PREVIEW === "1";

export const business = {
  name: "The Delaware Rock Gym",
  street: "520 Carson Dr.",
  city: "Bear",
  region: "DE",
  postal: "19701",
  phoneDisplay: "302-838-5850",
  phoneHref: "tel:+13028385850",
  facebook: "http://www.facebook.com/Delaware-Rock-Gym-140613432652832/",
  instagram: "https://www.instagram.com/derockgym/",
  hours: [
    { days: "Monday - Friday", time: "12 PM - 10 PM" },
    { days: "Saturday, Sunday", time: "10 AM - 8 PM" },
  ],
} as const;

export type NavItem = { label: string; href: string; legacy: string };

/** Primary nav, labels and order unchanged from the original site. `legacy` is the old .php URL (301 source). */
export const NAV: NavItem[] = [
  { label: "Home", href: "/", legacy: "/index.php" },
  { label: "New To Climbing", href: "/new-to-climbing/", legacy: "/newto.php" },
  { label: "Climbing Overview", href: "/climbing-overview/", legacy: "/overview.php" },
  { label: "FAQs", href: "/faq/", legacy: "/FAQ.php" },
  { label: "Pricing", href: "/pricing/", legacy: "/pricing.php" },
  { label: "Classes", href: "/classes/", legacy: "/classes.php" },
  { label: "Parties & Groups", href: "/parties-and-groups/", legacy: "/party.php" },
  { label: "Directions", href: "/directions/", legacy: "/location.php" },
  { label: "Panorama Gallery", href: "/panorama-gallery/", legacy: "/gal_pans.php" },
  { label: "About Us", href: "/about-us/", legacy: "/aboutus.php" },
  { label: "Contact Us", href: "/contact-us/", legacy: "/contactus.php" },
  { label: "Release Forms", href: "/release-forms/", legacy: "/release.php" },
];

export const nav = (label: string) => {
  const item = NAV.find((n) => n.label === label);
  if (!item) throw new Error(`Unknown nav label: ${label}`);
  return item.href;
};

/** Shown inline on desktop; the rest sit under "More". */
export const NAV_INLINE = ["New To Climbing", "Pricing", "Classes", "Parties & Groups", "Directions"];

export const RELEASE_ESIGN =
  "https://app.rockgympro.com/waiver/esign/delawarerockgym/3bdd02a5-4f99-4bc6-af9d-9fa03c61bad0";
export const RELEASE_PRINT =
  "https://app.rockgympro.com/waiver/print/delawarerockgym/3bdd02a5-4f99-4bc6-af9d-9fa03c61bad0";

/** Full Open Graph block per page (Next.js replaces, not merges, openGraph across segments). */
export const og = (url: string, title: string) => ({
  url,
  title,
  type: "website" as const,
  siteName: "The Delaware Rock Gym",
  locale: "en_US",
  images: [{ url: "/images/hp_vert.jpg", width: 400, height: 603, alt: "Climbers on the roped walls at The Delaware Rock Gym" }],
});
