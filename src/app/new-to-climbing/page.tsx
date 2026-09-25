import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { PageHeader, ReleaseRequirement } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { nav, og, asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "New To Climbing",
  description:
    "Never climbed before? Start with Trial Climbs, 3 top-rope climbs belayed by our staff, or boulder with a Day Pass at The Delaware Rock Gym in Bear, DE.",
  alternates: { canonical: "/new-to-climbing/" },
  openGraph: og("/new-to-climbing/", "New To Climbing | Delaware Rock Gym"),
};

export default function NewToClimbing() {
  return (
    <>
      <PageHeader
        title="Welcome! So you want to start rock climbing?"
        lead="This page is meant to get you started by pointing you in the right direction."
      />

      <div className="container-site space-y-16 pb-20 md:space-y-24">
        {/* Option 1 */}
        <Reveal>
          <section aria-labelledby="trial" className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <h2 id="trial" className="text-4xl md:text-5xl">
                Trial Climbs
              </h2>
              <p className="mt-4 max-w-[58ch] text-lg">
                <strong className="font-semibold">The first option we recommend is our Trial Climbs service.</strong> Structured for those who have not climbed before, Trial Climbs are a set of 3 top-roped climbs that are
                geared to the individual, during which you will be belayed by one of our courteous staff members.
              </p>
              <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-5">
                <div>
                  <dt className="text-sm text-muted">Trial Climbs</dt>
                  <dd className="display text-3xl tabular-nums">$25 / Person</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Offered</dt>
                  <dd className="text-lg font-semibold">Sat &amp; Sun, 10 AM - 5 PM, by reservation</dd>
                </div>
              </dl>
              <Link href={`${nav("Pricing")}#trial-climbs`} className="link mt-6 inline-flex items-center gap-1.5 font-semibold">
                Trial Climbs pricing <ArrowRightIcon aria-hidden size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={asset("/images/tc1.webp")}
                alt="A first-time climber on the wall with a staff member belaying"
                width={276}
                height={450}
                className="aspect-[3/4] w-full object-cover"
              />
              <Image
                src={asset("/images/tc2.webp")}
                alt="Staff member belaying a climber during Trial Climbs"
                width={304}
                height={450}
                className="mt-10 aspect-[3/4] w-full object-cover"
              />
            </div>
          </section>
        </Reveal>

        {/* Option 2 */}
        <Reveal>
          <section aria-labelledby="boulder" className="border-t border-line pt-14">
            <h2 id="boulder" className="text-4xl md:text-5xl">
              Bouldering with a Day Pass
            </h2>
            <Image
              src={asset("/images/bouldering1.webp")}
              alt="Climbers bouldering above the padded landing surface while others watch"
              width={750}
              height={255}
              className="mt-8 aspect-[3/1] w-full object-cover"
            />
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <p className="max-w-[60ch] text-lg">
                <strong className="font-semibold">Beginners may also choose to boulder, by purchasing a Day Pass.</strong>{" "}
                Bouldering is short, unroped climbing above a fixed padded landing surface. Bouldering does not require
                belay training or additional equipment (though climbing shoes do help). Bouldering starts at a more
                difficult level than roped climbing.
              </p>
              <dl className="flex flex-wrap content-start gap-x-10 gap-y-4 lg:border-l lg:border-line lg:pl-8">
                <div>
                  <dt className="text-sm text-muted">Day Pass</dt>
                  <dd className="display text-3xl tabular-nums">$18</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Climbing Shoes</dt>
                  <dd className="display text-3xl tabular-nums">$5</dd>
                </div>
              </dl>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="next" className="grid gap-10 border-t border-line pt-14 lg:grid-cols-2">
            <div>
              <h2 id="next" className="text-3xl md:text-4xl">
                Want more detail?
              </h2>
              <p className="mt-3 max-w-[52ch]">
                For more detailed information on our climbing options, please refer to our{" "}
                <Link href={nav("Climbing Overview")} className="link">
                  Climbing Overview
                </Link>
                .
              </p>
            </div>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="text-3xl md:text-4xl">Signed Release Agreement</h2>
              <div className="mt-3 max-w-[56ch]">
                <ReleaseRequirement />
              </div>
              <Link href={nav("Release Forms")} className="btn btn-primary mt-6">
                Release Forms
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
