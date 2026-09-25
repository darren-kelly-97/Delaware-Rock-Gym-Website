import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon, ArrowUpRightIcon, MountainsIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { HeroCollage } from "@/components/HeroCollage";
import { OpenStatus } from "@/components/OpenStatus";
import { Reveal } from "@/components/Reveal";
import { AllClimbersMust } from "@/components/ui";
import { SITE_URL, business, nav, og, asset } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Delaware Rock Gym | Indoor Rock Climbing and Bouldering in Bear, DE" },
  alternates: { canonical: "/" },
  openGraph: og("/", "The Delaware Rock Gym"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "The Delaware Rock Gym",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/hp_vert.jpg`,
  telephone: "+1-302-838-5850",
  address: {
    "@type": "PostalAddress",
    streetAddress: "520 Carson Dr.",
    addressLocality: "Bear",
    addressRegion: "DE",
    postalCode: "19701",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 39.61114, longitude: -75.68968 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "12:00",
      closes: "22:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "10:00", closes: "20:00" },
  ],
  sameAs: [business.facebook, business.instagram],
};

const STATS = [
  ["11,300+ sq ft", "of climbing surface"],
  ["54", "top ropes"],
  ["21", "lead lines"],
  ["14 ft", "bouldering wall"],
  ["Since 2007", "in Bear, Delaware"],
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="wall-grid relative overflow-hidden">
        <div className="container-site pb-20 pt-10 md:pb-28 md:pt-14">
          <h1 className="text-[clamp(3.1rem,8.6vw,8rem)] leading-[0.86]">
            <span className="slide-up block">Rock climbing is</span>
            <span className="slide-up block text-brand [animation-delay:100ms]">for everyone.</span>
          </h1>
          <div className="mt-10 grid items-start gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-10">
            <div className="rise lg:col-span-5 [animation-delay:240ms]">
              <p className="max-w-[40ch] text-lg text-muted md:text-xl">
                Delaware’s only public indoor climbing gym. Roped climbing and bouldering for all ages and ability levels.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={nav("New To Climbing")} className="btn btn-primary">
                  New To Climbing <ArrowRightIcon aria-hidden size={18} />
                </Link>
                <Link href={nav("Pricing")} className="btn btn-secondary">
                  Pricing
                </Link>
              </div>
              <OpenStatus className="mt-8" />
            </div>
            <div className="rise lg:col-span-7 [animation-delay:320ms]">
              <HeroCollage />
            </div>
          </div>
        </div>
      </section>

      {/* STATS MARQUEE (the one marquee on the page) */}
      <section aria-label="The gym in numbers" className="marquee overflow-hidden bg-brand py-6 text-brand-ink md:py-8">
        <ul className="sr-only">
          {STATS.map(([n, l]) => (
            <li key={n}>
              {n} {l}
            </li>
          ))}
        </ul>
        <div aria-hidden className="marquee-track flex w-max">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {STATS.map(([n, l]) => (
                <span key={n} className="flex items-center gap-10 pr-10">
                  <span className="flex items-baseline gap-3">
                    <span className="display text-5xl md:text-7xl">{n}</span>
                    <span className="text-base opacity-85 md:text-lg">{l}</span>
                  </span>
                  <MountainsIcon size={30} className="opacity-60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* TWO WAYS UP */}
      <section className="container-site py-20 md:py-28">
        <Reveal>
          <h2 className="text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.88]">
            Boulder <span className="text-muted">or</span> rope up?
          </h2>
          <p className="mt-5 max-w-[52ch] text-lg text-muted">Both welcome beginners. Bouldering needs no belayer. Roped climbing needs a trained one.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Panel
              img="/images/bouldering1.webp"
              w={750}
              h={255}
              alt="Climbers bouldering above the padded landing surface while friends watch"
              title="Bouldering"
              text="Short, unroped climbing above a padded landing surface. Our bouldering wall is 14 feet tall."
              facts={[
                ["Day Pass", "$18"],
                ["Shoes", "$5"],
              ]}
              href={`${nav("Climbing Overview")}#bouldering`}
              cta="Climbing Overview"
              tall
            />
          </Reveal>
          <Reveal className="lg:col-span-5">
            <Panel
              img="/images/kp_horiz.webp"
              w={800}
              h={544}
              alt="Looking down a roped wall at a climber and belayers below"
              title="Roped climbing"
              text="Trial Climbs are 3 top-rope climbs, belayed by one of our courteous staff members."
              facts={[
                ["Trial Climbs", "$25"],
                ["Intro to Belaying", "$40"],
              ]}
              href={nav("Classes")}
              cta="Classes"
              tall
            />
          </Reveal>
        </div>
      </section>

      {/* YOUR FIRST VISIT: a real sequence, drawn as a route */}
      <section className="border-y border-line bg-surface">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.88]">
              Your first <span className="text-brand">visit</span>
            </h2>
            <p className="mt-5 max-w-[36ch] text-lg text-muted">Three moves from the parking lot to the top of the wall.</p>
          </div>
          <ol className="relative lg:col-span-7">
            <span aria-hidden className="absolute bottom-3 left-[1.15rem] top-3 w-[3px] bg-line" />
            <span aria-hidden className="route-fill absolute bottom-3 left-[1.15rem] top-3 w-[3px] bg-brand" />
            {[
              {
                title: "Sign the release",
                body: <AllClimbersMust />,
                cta: (
                  <Link href={nav("Release Forms")} className="btn btn-primary mt-5">
                    Release Forms
                  </Link>
                ),
              },
              {
                title: "Choose how to climb",
                body: (
                  <p>
                    Trial Climbs run Saturdays and Sundays, 10 AM to 5 PM, by reservation. A Day Pass gets you bouldering all
                    day. Reservations are recommended for Trial Climbs and Classes.
                  </p>
                ),
                cta: (
                  <a href={business.phoneHref} className="link mt-4 inline-flex items-center gap-2 font-semibold">
                    <PhoneIcon aria-hidden size={18} /> {business.phoneDisplay}
                  </a>
                ),
              },
              {
                title: "Climb",
                body: <p>Athletic shoes or sneakers are required, and you should wear comfortable athletic clothing.</p>,
                cta: null,
              },
            ].map((s, i) => (
              <li key={s.title} className="reveal relative grid grid-cols-[2.5rem_1fr] gap-5 pb-14 last:pb-0">
                <span className="relative grid h-10 w-10 place-items-center bg-brand font-display text-lg font-extrabold text-brand-ink">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="display text-3xl md:text-4xl">{s.title}</h3>
                  <div className="mt-3 max-w-[56ch] space-y-2">{s.body}</div>
                  {s.cta}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PARTIES: cobalt duotone band */}
      <section className="relative isolate overflow-hidden bg-brand">
        <Image
          src={asset("/images/front.webp")}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-50 mix-blend-multiply grayscale"
        />
        <div className="container-site grid gap-10 py-20 text-brand-ink md:py-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.88]">Parties &amp; Groups</h2>
            <p className="mt-5 max-w-[46ch] text-lg">
              Birthday parties, camp day trips, sports teams and corporate groups. The gym staff will instruct, guide, and
              belay the climbers.
            </p>
            <Link href={nav("Parties & Groups")} className="btn btn-on-media mt-8">
              Parties &amp; Groups
            </Link>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:self-end">
            <dl className="grid grid-cols-3 border-t-2 border-white/70">
              {[
                ["$240", "up to 10 climbers"],
                ["$360", "11-15 climbers"],
                ["$480", "16-20 climbers"],
              ].map(([p, l]) => (
                <div key={p} className="border-r border-white/30 pr-3 pt-5 last:border-r-0 sm:pr-6 [&:not(:first-child)]:pl-3 sm:[&:not(:first-child)]:pl-6">
                  <dt className="sr-only">{l}</dt>
                  <dd>
                    <span className="display block text-4xl md:text-6xl">{p}</span>
                    <span className="mt-1 block text-sm opacity-90 md:text-base">{l}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* VISIT */}
      <section className="wall-grid">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.88]">Come climb</h2>
            <OpenStatus className="mt-5" />
            <p className="mt-5 text-lg text-muted">
              Notices: we will be closed 9/7/26 for Labor Day. Gift cards may be purchased in any amount at the gym or by
              phone and sent via USPS.
            </p>
          </Reveal>
          <Reveal className="grid gap-px self-start border-y-2 border-text bg-line sm:grid-cols-2 lg:col-span-7">
            <div className="bg-bg py-6 sm:pr-8">
              <h3 className="text-sm font-semibold text-muted">Current Operating Hours</h3>
              <dl className="mt-3 space-y-1.5 text-lg">
                {business.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt>{h.days}</dt>
                    <dd className="font-semibold tabular-nums">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <Link href={`${nav("About Us")}#hours`} className="link mt-3 inline-block text-[0.9375rem]">
                Holiday closures
              </Link>
            </div>
            <div className="bg-bg py-6 sm:pl-8">
              <h3 className="text-sm font-semibold text-muted">Find us</h3>
              <address className="mt-3 text-lg not-italic">
                {business.street}
                <br />
                {business.city}, {business.region} {business.postal}
              </address>
              <Link href={nav("Directions")} className="link mt-3 inline-flex items-center gap-1 text-[0.9375rem]">
                Directions <ArrowUpRightIcon aria-hidden size={14} />
              </Link>
            </div>
            <div className="bg-bg py-6 sm:col-span-2">
              <h3 className="text-sm font-semibold text-muted">Call to reserve Trial Climbs and Classes</h3>
              <a href={business.phoneHref} className="display mt-2 block text-5xl text-link md:text-6xl">
                {business.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Panel(props: {
  img: string;
  w: number;
  h: number;
  alt: string;
  title: string;
  text: string;
  facts: [string, string][];
  href: string;
  cta: string;
  tall?: boolean;
}) {
  return (
    <Link href={props.href} className="group relative block h-[30rem] overflow-hidden bg-text md:h-[36rem]">
      <Image
        src={asset(props.img)}
        alt={props.alt}
        width={props.w}
        height={props.h}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#070b18]/90 via-[#070b18]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-on-media md:p-8">
        <h3 className="display text-5xl md:text-6xl">{props.title}</h3>
        <p className="mt-3 max-w-[40ch] text-lg">{props.text}</p>
        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/30 pt-4">
          {props.facts.map(([k, v]) => (
            <div key={k}>
              <dt className="text-sm opacity-80">{k}</dt>
              <dd className="display text-3xl">{v}</dd>
            </div>
          ))}
        </dl>
        <span className="mt-5 inline-flex items-center gap-2 font-semibold">
          {props.cta}
          <ArrowRightIcon aria-hidden size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
