import Link from "next/link";
import type { Metadata } from "next";
import { InPageNav, Notice, PageHeader, ReleaseRequirement } from "@/components/ui";
import { business, nav, og } from "@/lib/site";

export const metadata: Metadata = {
  title: "Climbing Overview: Roped Climbing, Bouldering and Trial Climbs",
  description:
    "Climbing options at The Delaware Rock Gym: Trial Climbs, roped climbing, sport lead climbing, a 14 foot bouldering wall, age rules and what to wear.",
  alternates: { canonical: "/climbing-overview/" },
  openGraph: og("/climbing-overview/", "Climbing Overview | Delaware Rock Gym"),
};

const sections = [
  { id: "ages", label: "Ages" },
  { id: "trial-climbs", label: "Trial Climbs" },
  { id: "roped-climbing", label: "Roped Climbing" },
  { id: "bouldering", label: "Bouldering" },
  { id: "intro-to-belaying", label: "Intro to Belaying Class" },
  { id: "what-to-wear", label: "What should I wear?" },
  { id: "release", label: "Signed Release Agreement" },
];

export default function ClimbingOverview() {
  return (
    <>
      <PageHeader
        title="Climbing Overview"
        lead="Rock climbing is for everyone, whether you are seeking a new workout or a new hobby, or a parent looking for an activity to do with your kids. The Delaware Rock Gym has something for all ability levels, and we welcome you to come give it a try."
      />
      <div className="container-site grid grid-cols-[minmax(0,1fr)] gap-10 pb-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
        <InPageNav items={sections} />
        <article className="prose-site">
          <h2 id="ages" className="!mt-0">
            Ages
          </h2>
          <p>
            There are no age restrictions on climbing, but kids are typically more comfortable to start rock climbing at age
            6 and above. We’ve had participants from ages 3 to 90 years old climb to the top of the wall.
          </p>
          <Notice tone="important">
            <p>Participants must be 14 years or older to belay or take the Intro to Belaying Class.</p>
            <p>Participants must be 14 years or older to climb unsupervised by an accompanying adult.</p>
          </Notice>

          <h2 id="trial-climbs">Trial Climbs</h2>
          <p>
            Trial Climbs are an easy way to become introduced to the sport of climbing, and is the service we recommend for
            beginners or for quick access to roped climbing. Trial Climbs are a set of 3 top-rope climbs that are geared to
            the individual, during which you will be belayed by one of our courteous staff members.
          </p>
          <p>
            Trial Climbs are offered on Saturdays and Sundays, beginning at 10 AM and ending at 5 PM by reservation only.
            Please call us to make an appointment. Athletic shoes or sneakers are required, and you should wear comfortable
            athletic clothing. Climbing shoes are available for a fee.
          </p>

          <h2 id="roped-climbing">Roped Climbing</h2>
          <p>
            Roped climbing involves two people: a climber and a belayer. The belayer stands at the bottom of the climb and
            takes the slack out of the rope as the climber moves up the wall. The belayer must be properly trained to
            protect the climber.
          </p>
          <p>
            To climb on rope at the Delaware Rock Gym you will need a belayer. If you have prior experience with belaying you
            may take our tie-in and belay test. If you do not have experience or know anyone who is properly trained as a
            belayer, you can either do Trial Climbs with a staff member or take the Intro to Belaying Class to learn the
            basic belaying skills.
          </p>
          <p>
            We also offer Sport Lead Climbing for those who are qualified. We offer an{" "}
            <Link href={`${nav("Classes")}#Sport`}>Intro to Sport Climbing Class</Link> for those interested.
          </p>
          <p>The Delaware Rock Gym has 54 top-ropes and 21 lead lines, all with multiple routes along each.</p>

          <h2 id="bouldering">Bouldering</h2>
          <p>
            Bouldering is short, unroped climbing above a fixed padded landing surface. Our bouldering wall is 14 feet tall.
            Because bouldering is unroped climbing, bouldering does not require belay training or additional equipment
            (though climbing shoes do help). Bouldering starts at a more difficult level than roped climbing.
          </p>

          <h2 id="intro-to-belaying">Intro to Belaying Class</h2>
          <p>
            Intro to Belaying teaches all the skills necessary for indoor top-rope climbing, including how to top-rope belay,
            basic climbing knots, proper harness use, and climbing communication. The class includes 2 hours of instruction,
            climbing equipment for the day, and a Day Pass for the rest of the day. Participants must be at least 14 years
            old. Because roped climbing is a two person system, it is recommended to take the class with a partner or in a
            group, but individuals are welcome.
          </p>

          <h2 id="what-to-wear">What should I wear?</h2>
          <p>Athletic shoes or sneakers are required, and you should wear comfortable athletic clothing.</p>

          <h2 id="release">Signed Release Agreement</h2>
          <ReleaseRequirement />

          <div className="!mt-12 border-t-2 border-text pt-6">
            <p className="text-xl font-bold">Now you are ready to climb!</p>
            <p className="mt-2">
              We hope this answers all of your questions and we hope to see you here. If you have any further questions check
              out our <Link href={nav("FAQs")}>FAQ section</Link> or give us a call at{" "}
              <a href={business.phoneHref}>(302) 838-5850</a>.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
