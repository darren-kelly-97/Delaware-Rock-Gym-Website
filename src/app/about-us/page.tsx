import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { nav, og, asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Delaware Rock Gym is the only public indoor climbing facility in the state: 11,300+ sq. ft. of climbing surface, 54 top ropes, lead lines and a dedicated bouldering area.",
  alternates: { canonical: "/about-us/" },
  openGraph: og("/about-us/", "About Us | Delaware Rock Gym"),
};

const highlights: { group: string; items: React.ReactNode[] }[] = [
  {
    group: "People and programs",
    items: [
      "Knowledgeable and friendly staff",
      "Family friendly establishment",
      "Dedicated areas for birthday parties, team fun/bonding, and other occasions",
      "Small class sizes emphasizing knowledge and responsibility",
      "Pro Shop carries product lines from leading climbing vendors",
    ],
  },
  {
    group: "The facility",
    items: [
      <>
        Convenient hours and{" "}
        <Link href={nav("Directions")} className="link">
          location.
        </Link>
      </>,
      "Heat and air conditioning",
      "Plenty of natural light and fresh air.",
      "Clean, spacious bathrooms with changing area.",
      "Free WIFI Internet access",
      "Member of the Climbing Wall Association",
    ],
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        lead="The Delaware Rock Gym has been open since April 2007 and is the only public indoor climbing facility in the state."
      />
      <div className="container-site pb-20">
        <Image
          src={asset("/images/front.webp")}
          alt="The main climbing walls at The Delaware Rock Gym"
          width={760}
          height={250}
          priority
          className="aspect-[3/1] w-full object-cover"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="max-w-[62ch] space-y-4 text-lg">
            <p>
              We offer roped climbing and bouldering (short, unroped climbing) to all ages and ability levels. In addition
              to individual climbing, we offer group events for birthday parties, corporate groups, and team-fun.
            </p>
            <p>
              The Delaware Rock Gym features 11,300+ sqft. of climbing surface, including 54 top ropes, numerous lead
              lines, and a dedicated bouldering area. Consistent route setting provides for new climbs upon each visit.
            </p>
          </div>
          <section id="hours" aria-labelledby="hours-h" className="border-t-2 border-text pt-6 lg:border-l-2 lg:border-t-0 lg:pl-8 lg:pt-0">
            <h2 id="hours-h" className="text-2xl md:text-3xl">
              Regular Hours of Operation
            </h2>
            <dl className="mt-3 space-y-1">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Monday - Friday</dt>
                <dd className="font-semibold tabular-nums">12pm - 10pm</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Saturday &amp; Sunday</dt>
                <dd className="font-semibold tabular-nums">10am - 8pm</dd>
              </div>
            </dl>
            <h3 className="mt-6 font-semibold">Yearly Holiday Closures</h3>
            <p className="mt-1 text-muted">
              Memorial Day, Independence Day, Labor Day, Thanksgiving Day, and Christmas Day
            </p>
            <h3 className="mt-4 font-semibold">Yearly Early Closures</h3>
            <p className="mt-1 text-muted">Christmas Eve and New Year’s Eve</p>
          </section>
        </div>

        <h2 className="mt-16 text-4xl md:text-5xl md:mt-20">Other Highlights of the gym</h2>
        <div className="mt-8 grid gap-10 border-t-2 border-text pt-8 md:grid-cols-2 md:gap-16">
          {highlights.map((g) => (
            <div key={g.group}>
              <h3 className="text-lg font-semibold text-muted">{g.group}</h3>
              <ul className="mt-4 space-y-3">
                {g.items.map((it, i) => (
                  <li key={i} className="border-l-2 border-brand pl-4">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <figure>
            <Image
              src={asset("/images/open_air.webp")}
              alt="Open bay doors bringing natural light and fresh air into the seating area"
              width={506}
              height={759}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-2 text-[0.9375rem] text-muted">Plenty of natural light and fresh air.</figcaption>
          </figure>
          <figure>
            <Image
              src={asset("/images/restrooms.webp")}
              alt="Clean, spacious bathrooms with changing area"
              width={508}
              height={766}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-2 text-[0.9375rem] text-muted">Clean, spacious bathrooms with changing area.</figcaption>
          </figure>
        </div>

        <a href="http://www.climbingwallindustry.org/" target="_blank" rel="noopener" className="mt-12 inline-block bg-white p-3">
          <Image src={asset("/images/cwa.webp")} alt="Climbing Wall Association" width={383} height={53} className="w-52" />
        </a>
      </div>
    </>
  );
}
