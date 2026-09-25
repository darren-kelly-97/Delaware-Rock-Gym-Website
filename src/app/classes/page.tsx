import Link from "next/link";
import type { Metadata } from "next";
import { Notice, PageHeader, ReleaseRequirement } from "@/components/ui";
import { nav, og } from "@/lib/site";

export const metadata: Metadata = {
  title: "Climbing Classes: Belaying, Sport and Outdoor",
  description:
    "Intro to Belaying, Intro to Sport Climbing and Indoor to Outdoor Sport Climbing classes at The Delaware Rock Gym. Class size is limited; pre-registration recommended.",
  alternates: { canonical: "/classes/" },
  openGraph: og("/classes/", "Classes | Delaware Rock Gym"),
};

type Klass = {
  id: string;
  name: string;
  price: string;
  facts: [string, string][];
  body: string[];
};

const classes: Klass[] = [
  {
    id: "Intro",
    name: "Intro to Belaying",
    price: "$40",
    facts: [
      ["Length", "2 hours of instruction"],
      ["Schedule", "Sat & Sun at 11:00 AM, weekdays by appointment"],
      ["Minimum age", "14"],
    ],
    body: [
      "Intro to Belaying teaches how to top-rope belay, basic climbing knots, proper harness use, and climbing communication. The class includes 2 hours of instruction, climbing equipment for the day, and a Day Pass for the rest of the day. Plan to stay and climb after the class to make the most of the included Day Pass.",
      "This class is regularly held Saturday and Sunday at 11:00 AM, but classes may be scheduled during the week by appointment. Class size is limited and pre-registration is highly recommended. Participants must be at least 14 years old. Please call us to pre-register or to schedule a class for an alternate day.",
    ],
  },
  {
    id: "Sport",
    name: "Intro to Sport Climbing",
    price: "$80",
    facts: [
      ["Length", "Two 2-hour sessions, two weeks apart"],
      ["Prerequisite", "Top-rope belay test passed here; comfortable on 5.9 top rope"],
      ["Minimum age", "14"],
    ],
    body: [
      "Intro to Sport Climbing covers the skills needed to sport climb in a climbing gym. This class covers lead belaying, lead climbing, clipping techniques, rope management, and more. The class is composed of two sessions; the sessions are two hours long and are held two weeks apart. Participants must attend both sessions consecutively. Please speak to a staff member regarding the next available class dates.",
      "Participants must be at least 14 years old, have passed the top-rope belay test here, and should be able to comfortably climb 5.9 on top rope.",
    ],
  },
  {
    id: "Outdoor",
    name: "Indoor to Outdoor Sport Climbing",
    price: "$60",
    facts: [
      ["Length", "Approximately 3 hours of instruction"],
      ["Prerequisite", "Intro to Sport Climbing, or lead climb and lead belay test passed here"],
      ["Minimum age", "14"],
    ],
    body: [
      "Indoor to Outdoor Sport Climbing class is designed for sport climbers looking to transition from sport climbing indoors to outdoors. This class includes approximately 3 hours of instruction covering knowledge and skills needed to begin Sport climbing outdoors. Some topics covered are proper equipment usage and placement, various cleaning techniques, basic rappelling skills, and commands.",
      "Participants must be at least 14 years old, have taken our Intro to Sport Climbing class or have passed the lead climb and lead belay test with us.",
    ],
  },
];

export default function Classes() {
  return (
    <>
      <PageHeader title="Classes" lead="Detailed descriptions of the classes we offer.">
        <div className="mt-6 max-w-2xl">
          <Notice>
            <p className="font-semibold">Reservations are recommended for Trial Climbs and Classes.</p>
          </Notice>
        </div>
      </PageHeader>

      <div className="container-site pb-20">
        <ol className="border-t-2 border-text">
          {classes.map((c) => (
            <li key={c.id} id={c.id} className="grid gap-6 border-b border-line py-10 md:py-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl">{c.name}</h2>
                <p className="display mt-3 text-5xl tabular-nums text-link">{c.price}</p>
                <Link href={`${nav("Pricing")}#Classes`} className="link mt-1 inline-block text-[0.9375rem]">
                  Class pricing
                </Link>
                <dl className="mt-6 space-y-3">
                  {c.facts.map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-sm text-muted">{k}</dt>
                      <dd className="font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="max-w-[62ch] space-y-4 text-lg">
                {c.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <p className="max-w-[52ch]">
            For more detailed information on our climbing options, please refer to our{" "}
            <Link href={nav("Climbing Overview")} className="link">
              Climbing Overview
            </Link>
            .
          </p>
          <div className="border-l-4 border-brand pl-6">
            <h2 className="text-3xl md:text-4xl">Signed Release Agreement</h2>
            <div className="mt-3 max-w-[56ch]">
              <ReleaseRequirement />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
