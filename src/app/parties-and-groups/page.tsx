import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { Notice, PageHeader } from "@/components/ui";
import { business, nav, og, asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "Birthday Parties and Group Events",
  description:
    "Birthday parties and group events at The Delaware Rock Gym: $240 for up to 10 climbers, 2 hours of roped climbing, staff belaying and harness rental included.",
  alternates: { canonical: "/parties-and-groups/" },
  openGraph: og("/parties-and-groups/", "Parties & Groups | Delaware Rock Gym"),
};

export default function Parties() {
  return (
    <>
      <PageHeader
        title="Parties & Groups"
        lead="The Delaware Rock Gym hosts many groups for parties and team-fun, including birthday parties, camp day trips, sports teams, extended family get-togethers, corporate groups, and others."
      />

      <div className="container-site pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="max-w-[60ch] text-lg">
              Tables and chairs are setup for groups to serve food, which you may bring or order from local restaurants.
              Athletic shoes or sneakers are required and you should wear comfortable athletic clothing.
            </p>
            <p className="mt-4 max-w-[60ch] text-lg">
              The gym staff will instruct, guide, and belay the climbers for the duration of the group event.
            </p>

            <h2 className="mt-12 text-4xl md:text-5xl">Birthday Party or Group Event</h2>
            <dl className="mt-6 grid grid-cols-1 gap-6 border-t-2 border-text pt-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
              {[
                ["$240", "for up to 10 climbers"],
                ["$360", "for 11-15 climbers"],
                ["$480", "for 16-20 climbers"],
              ].map(([p, l]) => (
                <div key={p} className="sm:px-6 sm:first:pl-0">
                  <dt className="sr-only">{l}</dt>
                  <dd>
                    <span className="block text-4xl font-bold tabular-nums text-link">{p}</span>
                    <span className="text-muted">{l}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-10 text-lg font-semibold">Includes</h3>
            <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {[
                "2 hours of roped climbing (no bouldering)",
                "Access to all top roped climbs",
                "DRG Staff for Belaying",
                "Harness Rental",
                "Seating area with tables and chairs. Food and refreshments are welcome.",
              ].map((i) => (
                <li key={i} className="flex gap-2.5">
                  <CheckIcon aria-hidden size={20} className="mt-1 shrink-0 text-link" />
                  {i}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={business.phoneHref} className="btn btn-primary">
                <PhoneIcon aria-hidden size={18} /> {business.phoneDisplay}
              </a>
              <Link href={nav("Release Forms")} className="link font-semibold">
                Printable Invitation &amp; Release Agreement.
              </Link>
            </div>
          </div>

          <div className="grid content-start gap-4">
            <Image
              src={asset("/images/kp_horiz.webp")}
              alt="A group climbing the roped walls, viewed from above"
              width={800}
              height={544}
              className="w-full object-cover"
            />
            <div className="grid grid-cols-[1fr_auto] items-end gap-4">
              <Image
                src={asset("/images/kp_vert.webp")}
                alt="Young climbers on the wall with DRG staff belaying"
                width={400}
                height={614}
                className="aspect-[4/5] w-full object-cover"
              />
              <Image
                src={asset("/images/BOD_winner.webp")}
                alt="Best of Delaware 2011 winner"
                width={135}
                height={137}
                className="w-28"
              />
            </div>
          </div>
        </div>

        <section aria-labelledby="booking" className="mt-16 grid gap-8 border-t border-line pt-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="booking" className="text-3xl md:text-4xl">
              Booking
            </h2>
            <p className="mt-3 max-w-[60ch] font-semibold">
              Group Reservations require 2 weeks minimum notice, but we recommend booking 4-6 weeks in advance to obtain
              your desired date and time. A credit card is required to hold the reservation. Cancellation fee is based on
              the number of climbers scheduled. Fee for no show is full price based on climbers scheduled.
            </p>
          </div>
          <Notice tone="important">
            <p>
              One extremely important preparation that will make any group go smoothly is that: All participants in any
              activity at our facility must complete{" "}
              <Link href={nav("Release Forms")} className="link">
                The Delaware Rock Gym Release Agreement
              </Link>
              . Anyone under 18 MUST have the form signed by their parent or Court appointed legal guardian. To save time
              groups are encouraged to complete E-sign forms or bring completed forms. This is the same form in the
              invitation above.
            </p>
          </Notice>
        </section>
      </div>
    </>
  );
}
