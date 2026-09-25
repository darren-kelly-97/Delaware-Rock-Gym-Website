import type { Metadata } from "next";
import {
  ClockIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { EmailLink } from "@/components/EmailLink";
import { PageHeader } from "@/components/ui";
import { business, nav, og } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Call The Delaware Rock Gym at 302-838-5850, email us, or find us at 520 Carson Dr., Bear, DE 19701.",
  alternates: { canonical: "/contact-us/" },
  openGraph: og("/contact-us/", "Contact Us | Delaware Rock Gym"),
};

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <div className="container-site pb-20">
        <div className="grid gap-px border-y-2 border-text bg-line md:grid-cols-2">
          <div className="bg-bg py-8 md:pr-10">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-muted">
              <PhoneIcon aria-hidden size={18} /> Phone
            </h2>
            <a href={business.phoneHref} className="display mt-2 block text-5xl tabular-nums text-link md:text-6xl">
              {business.phoneDisplay}
            </a>
            <p className="mt-2 text-muted">Call to make a reservation for Trial Climbs and Classes.</p>
          </div>
          <div className="bg-bg py-8 md:pl-10">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-muted">
              <EnvelopeSimpleIcon aria-hidden size={18} /> Email
            </h2>
            <EmailLink className="mt-2 inline-block text-3xl font-bold text-link underline decoration-1 underline-offset-4 md:text-4xl">
              Click here to Email Us
            </EmailLink>
          </div>
          <div className="bg-bg py-8 md:pr-10">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-muted">
              <ClockIcon aria-hidden size={18} /> Operating Hours
            </h2>
            <dl className="mt-3 space-y-1 text-lg">
              {business.hours.map((h) => (
                <div key={h.days} className="flex max-w-sm justify-between gap-4">
                  <dt>{h.days}</dt>
                  <dd className="font-semibold tabular-nums">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bg-bg py-8 md:pl-10">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-muted">
              <MapPinIcon aria-hidden size={18} /> Address
            </h2>
            <address className="mt-3 text-lg not-italic">
              {business.name}
              <br />
              {business.street} {business.city}, {business.region} {business.postal}
            </address>
            <Link href={nav("Directions")} className="link mt-2 inline-block">
              Directions
            </Link>
          </div>
        </div>

        <h2 className="mt-14 text-3xl md:text-4xl">Links</h2>
        <ul className="mt-5 flex flex-wrap gap-4">
          <li>
            <a href={business.instagram} target="_blank" rel="noopener" className="btn btn-secondary">
              <InstagramLogoIcon aria-hidden size={20} /> Instagram
            </a>
          </li>
          <li>
            <a href={business.facebook} target="_blank" rel="noopener" className="btn btn-secondary">
              <FacebookLogoIcon aria-hidden size={20} /> Facebook
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
