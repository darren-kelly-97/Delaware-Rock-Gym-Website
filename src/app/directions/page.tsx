import type { Metadata } from "next";
import { ArrowUpRightIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import { Notice, PageHeader } from "@/components/ui";
import { business, og } from "@/lib/site";

export const metadata: Metadata = {
  title: "Directions to 520 Carson Dr, Bear, DE",
  description:
    "The Delaware Rock Gym is in the Porter Road Business Center, about 3/4 mile south of Rt. 40 on Porter Road in Bear, DE. Directions via I-95, Route 1 and Route 896.",
  alternates: { canonical: "/directions/" },
  openGraph: og("/directions/", "Directions | Delaware Rock Gym"),
};

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.713224012473!2d-75.69162592021077!3d39.61114214581188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c707bd71c8f4bf%3A0xf82446f43fe9a804!2sDelaware%20Rock%20Gym%20Inc.!5e0!3m2!1sen!2sus!4v1628264103489!5m2!1sen!2sus";
const MAP_LARGER =
  "http://maps.google.com/maps?hl=en&q=520+carson+drive,+bear,+de&ie=UTF8&ll=39.620103,-75.685244&spn=0.00734,0.013969&t=h&z=14&g=520+carson+drive,+bear,+de&source=embed";

const ARRIVE = [
  "Travel approx. 0.75 miles and turn left onto Carson Dr. in the Porter Road Business Center.",
  "We are located in the back left of the park at 520 Carson Dr.",
];

const routes: { title: string; steps: string[] }[] = [
  {
    title: "From Points North Via I-95",
    steps: [
      "From I-95 South Take exit 4A to Route 1 South.",
      "From Route 1 South take exit 160 to Route 40 West.",
      "Travel approx. 3 Miles on Route 40 West and turn left onto Porter Rd. (Look for Wawa and 7-11 on the corners).",
      ...ARRIVE,
    ],
  },
  {
    title: "From Points South Via I-95",
    steps: [
      "From I-95 North Take exit 1 to Route 896 South.",
      "Travel approx. 3 miles on Route 896 South and turn left onto Route 40 East.",
      "Travel approx. 3 Miles on Route 40 East and turn right onto Porter Rd. (Look for Wawa and 7-11 on the corners).",
      ...ARRIVE,
    ],
  },
  {
    title: "From Points South Via Route 1",
    steps: [
      "From Route 1 North take exit 160 to Route 40 West.",
      "Travel approx. 3 Miles on Route 40 West and turn left onto Porter Rd. (Look for Wawa and 7-11 on the corners).",
      ...ARRIVE,
    ],
  },
  {
    title: "From Points North Via Route 896",
    steps: [
      "From Route 896 South travel south past Newark, DE.",
      "Turn left onto Route 40 East (approx. 3 miles South of Newark).",
      "Travel approx. 3 Miles on Route 40 East and turn right onto Porter Rd. (Look for Wawa and 7-11 on the corners).",
      ...ARRIVE,
    ],
  },
];

export default function Directions() {
  return (
    <>
      <PageHeader
        title="Directions"
        lead="The Delaware Rock Gym is located in The Porter Road Business Center, approximately 3/4 of a mile South of Rt. 40 on Porter Road in Bear, DE."
      />
      <div className="container-site pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="space-y-6">
            <div>
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl">
                <MapPinIcon aria-hidden size={22} className="text-link" /> Physical Location
              </h2>
              <address className="mt-3 text-lg not-italic">
                {business.name}
                <br />
                520 Carson Drive
                <br />
                Bear, DE 19701
              </address>
            </div>
            <Notice>
              <p className="font-semibold">GPS directions note</p>
              <p>
                If 520 Carson Dr. isn’t recognized, use 1150 Porter Rd. Bear, DE which will lead you to the entrance of our
                business park.
              </p>
            </Notice>
            <a href={MAP_LARGER} target="_blank" rel="noopener" className="btn btn-secondary">
              View Larger Map <ArrowUpRightIcon aria-hidden size={18} />
            </a>
          </div>
          <div className="relative aspect-[4/3] w-full bg-surface-2">
            <p className="absolute inset-0 grid place-items-center text-muted">Loading map</p>
            <iframe
              src={MAP_EMBED}
              title="Map of The Delaware Rock Gym, 520 Carson Dr, Bear, DE"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>

        <h2 className="mt-16 text-4xl md:text-5xl md:mt-20">Driving directions</h2>
        <div className="mt-8 grid gap-x-12 gap-y-12 border-t-2 border-text pt-8 md:grid-cols-2">
          {routes.map((r) => (
            <section key={r.title} aria-label={`Directions ${r.title}`}>
              <h3 className="text-xl font-bold">Directions {r.title}</h3>
              <ol className="mt-4 space-y-3">
                {r.steps.map((s, i) => (
                  <li key={s} className="grid grid-cols-[1.75rem_1fr] gap-2">
                    <span className="font-semibold tabular-nums text-link">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
