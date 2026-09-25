import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { THEME_SCRIPT } from "@/components/ThemeToggle";
import { IS_PREVIEW, SITE_URL, asset, og } from "@/lib/site";

const outfit = localFont({
  src: "./fonts/outfit-latin-wght-normal.woff2",
  variable: "--font-outfit",
  weight: "100 900",
  display: "swap",
});

const archivo = localFont({
  src: "./fonts/archivo-latin-standard-normal.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Delaware Rock Gym | Indoor Rock Climbing and Bouldering in Bear, DE",
    template: "%s | Delaware Rock Gym",
  },
  description:
    "The Delaware Rock Gym in Bear, DE is the only public indoor climbing facility in the state: roped climbing, bouldering, classes and parties for all ages.",
  icons: { icon: asset("/drgmountain.ico") },
  openGraph: og("/", "The Delaware Rock Gym"),
  twitter: { card: "summary_large_image" },
  ...(IS_PREVIEW ? { robots: { index: false, follow: false } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#2446f0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" data-theme="light" className={`${outfit.variable} ${archivo.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Apply the saved theme before first paint (light by default). */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:bg-surface focus:px-4 focus:py-2"
          style={{ zIndex: 60 }}
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
