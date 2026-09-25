import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="container-site py-24">
      <h1 className="text-4xl font-bold md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-[52ch] text-lg text-muted">
        That page has moved or no longer exists. The main pages are listed at the bottom of this page.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Home
      </Link>
    </div>
  );
}
