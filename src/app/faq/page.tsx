import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/ui";
import { business, nav, og } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions: who signs a release, trial climbs vs a day pass, belaying, bouldering vs roped climbing, age limits and payment at The Delaware Rock Gym.",
  alternates: { canonical: "/faq/" },
  openGraph: og("/faq/", "FAQs | Delaware Rock Gym"),
};

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Who has to sign a release?",
    a: (
      <p>
        Any person who wants to climb, belay or take a class at The Delaware Rock Gym, must complete{" "}
        <Link href={nav("Release Forms")} className="link">
          The Delaware Rock Gym Release Agreement
        </Link>
        . If the participant is under 18 then their parent or court-appointed legal guardian must sign the release
        agreement on their behalf.
      </p>
    ),
  },
  {
    q: "Who may sign a release?",
    a: (
      <>
        <p>Participants over 18 years of age or a parent or court-appointed legal guardian for a minor.</p>
        <p className="font-semibold">NOT: Host families for exchange students, Aunts/Uncles, Grandfathers/Grandmothers, Etc.</p>
      </>
    ),
  },
  {
    q: "What is the Difference between trial climbs and a day pass?",
    a: (
      <>
        <p>
          Trial climbs is a set of 3 roped climbs that includes a Delaware Rock Gym staff member for belaying and a harness.
          Climbing shoes are available for a fee, but not required. Please see the{" "}
          <Link href={nav("Pricing")} className="link">
            pricing page
          </Link>{" "}
          for further details.
        </p>
        <p>
          A Day Pass is entry to the gym all day. It does not include a Delaware Rock Gym Staff member to belay or any other
          equipment. You may leave and return to the gym within the same day under the day pass. This applies to your
          equipment rentals as well. Please see the pricing page for further details.
        </p>
      </>
    ),
  },
  {
    q: "Do I have to take the Intro to Belaying Class if I am new to climbing?",
    a: (
      <p>
        No. Anyone may climb in The Delaware Rock Gym. However, to belay or tie-in the participant must pass The Delaware
        Rock Gym Tie-in and Belay Test. It is recommended that beginners take the Intro to Belaying Class to learn the basic
        belaying skills. Participants must be at least 14 years old to take the Intro to Belaying Class. Classes can be
        scheduled at alternate times by appointment. Please call the gym to schedule.
      </p>
    ),
  },
  {
    q: "What is belaying?",
    a: (
      <>
        <p>
          Belaying is the act of controlling a rope to protect a climber. The person belaying takes up slack in the rope when
          someone is climbing, arrests the climber if they fall and lowers the climber to the ground when they are finished
          climbing.
        </p>
        <p>
          If you know how to belay you can meet other climbers in the gym and trade belays with them. If you do not know how
          to belay you may learn through the Intro to Belaying Class if you are over 14 years old. If you are under 14 years
          old a parent may take the Intro to Belaying Class to learn to belay for you.
        </p>
      </>
    ),
  },
  {
    q: "What is the difference between roped climbing and bouldering?",
    a: (
      <>
        <p>
          Bouldering is short non-roped climbing. You climb to a limited height and then either climb down or drop down to
          landing pads. Though bouldering is shorter climbing it begins at a more difficult level than roped climbing.
        </p>
        <p>
          Roped climbing is where you climb to a tall height where the use of ropes, harnesses and other equipment is
          required. In order to rope climb you need to either know how to belay or have someone to belay for you.
        </p>
      </>
    ),
  },
  {
    q: "Is there an age limit?",
    a: (
      <p>
        There is no age limit for someone to climb, but is usually around 5 or 6 years old that children are willing and
        able to climb. We do have children’s harnesses. However, there is an age limit on belaying. Participants must be at
        least 14 years old to belay or to take the Intro to Belaying Class.
      </p>
    ),
  },
  {
    q: "What payment methods do you accept?",
    a: <p>We accept payments in the form of cash, Visa, MasterCard, and Discover.</p>,
  },
  {
    q: "Can I have a party at the gym?",
    a: (
      <p>
        Yes. Please see the{" "}
        <Link href={nav("Parties & Groups")} className="link">
          Party
        </Link>{" "}
        page.
      </p>
    ),
  },
  {
    q: "What should I wear for rock climbing?",
    a: <p>Athletic shoes or sneakers are required, and you should wear comfortable athletic clothing.</p>,
  },
];

export default function Faq() {
  return (
    <>
      <PageHeader title="Frequently Asked Questions" />
      <div className="container-site grid gap-12 pb-20 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="border-t-2 border-text">
          {faqs.map((f, i) => (
            <details key={f.q} className="group border-b border-line" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-semibold transition-colors hover:text-link md:text-xl [&::-webkit-details-marker]:hidden">
                <span className="flex gap-4">
                  <span className="w-6 shrink-0 tabular-nums text-muted">{i + 1}.</span>
                  {f.q}
                </span>
                <CaretDownIcon
                  aria-hidden
                  size={20}
                 
                  className="mt-1 shrink-0 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="max-w-[62ch] space-y-3 pb-6 pl-10">{f.a}</div>
            </details>
          ))}
        </div>
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="border-l-4 border-brand pl-6">
            <h2 className="text-2xl md:text-3xl">Still have a question?</h2>
            <p className="mt-2 text-muted">Give us a call during operating hours.</p>
            <a href={business.phoneHref} className="mt-3 block display text-3xl tabular-nums text-link">
              {business.phoneDisplay}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
