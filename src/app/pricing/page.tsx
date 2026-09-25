import Link from "next/link";
import type { Metadata } from "next";
import { AllClimbersMust, InPageNav, Notice, PageHeader, PriceList } from "@/components/ui";
import { nav, og } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing: Day Passes, Memberships and Classes",
  description:
    "Day Pass $18, 10-Visit Day Pass, monthly EFT memberships, Trial Climbs from $25, equipment rental and class prices at The Delaware Rock Gym in Bear, DE.",
  alternates: { canonical: "/pricing/" },
  openGraph: og("/pricing/", "Pricing | Delaware Rock Gym"),
};

const sections = [
  { id: "passes", label: "Passes" },
  { id: "trial-climbs", label: "Trial Climbs" },
  { id: "memberships", label: "Memberships" },
  { id: "equipment", label: "Equipment" },
  { id: "Classes", label: "Classes" },
  { id: "groups", label: "Party & Group Rates" },
];

export default function Pricing() {
  return (
    <>
      <PageHeader title="Pricing">
        <div className="mt-6 max-w-2xl">
          <Notice>
            <p className="font-semibold">Reservations are recommended for Trial Climbs and Classes.</p>
          </Notice>
        </div>
      </PageHeader>

      <div className="container-site grid grid-cols-[minmax(0,1fr)] gap-10 pb-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
        <InPageNav items={sections} />
        <div className="max-w-3xl space-y-16 md:space-y-20">
          <section id="passes" aria-labelledby="passes-h">
            <h2 id="passes-h" className="mb-6 text-4xl md:text-5xl">
              Passes
            </h2>
            <PriceList
              rows={[
                { item: "Day Pass", price: "$18" },
                { item: "10-Visit Day Pass", price: "$160" },
                { item: "Individual One Month Pass (30 days)", price: "$70 / Month" },
              ]}
            />
          </section>

          <section id="trial-climbs" aria-labelledby="trial-h">
            <h2 id="trial-h" className="mb-6 text-4xl md:text-5xl">
              Trial Climbs
            </h2>
            <PriceList
              rows={[
                { item: "Trial Climbs", price: "$25 / Person", note: "$5 additional climbs" },
                { item: "Trial Climb Package", price: "$35 / Person" },
              ]}
            />
            <div className="mt-6 space-y-3">
              <p>
                Trial Climbs are an easy way to try rock climbing. This service is a set of 3 top-rope climbs during which you
                will be belayed by one of our courteous staff members. Trial Climbs are offered on Saturdays and Sundays by
                reservation beginning at 10 AM and ending at 5 PM. Please call us to make an appointment or to check
                availability. Athletic shoes or sneakers are required, and you should wear comfortable athletic clothing.
                Climbing shoes are available for a fee.
              </p>
              <p>
                The Trial Climb package is the same as the Trial Climbs and also includes 1 hour of access to the Bouldering
                wall and climbing shoes. The roped climbs come first, followed by the bouldering.
              </p>
              <p className="font-semibold">
                Gift cards may be purchased in any amount at the front desk or by phone and sent via USPS.
              </p>
            </div>
          </section>

          <section id="memberships" aria-labelledby="mem-h">
            <h2 id="mem-h" className="mb-6 text-4xl md:text-5xl">
              Memberships
            </h2>
            <PriceList
              rows={[
                { item: "Individual Monthly EFT (Auto EFT payment)", price: "$60 / Month" },
                {
                  item: "Family Monthly EFT (Auto EFT payment)",
                  price: "See below",
                  note: "Family Monthly EFT pricing is available to immediate family living in the same household only.",
                },
                { item: "Additional adult family members may be added for", price: "$60 each / month" },
                { item: "Additional minors (under 18 yo) may be added for", price: "$30 each / month" },
              ]}
            />
            <div className="mt-6 space-y-3">
              <p>Funds are drawn from a single bank account.</p>
              <p className="font-semibold">
                Monthly EFT (Electronic Fund Transfer) memberships utilize convenient electronic billing at the beginning of
                each month. There is no long-term contract, but a written contract is required by the State of Delaware. At
                the start of the membership, you pay the pro-rated amount for the remainder of the current month and the dues
                for the following month. EFT billing would start at the beginning of the 2nd full month. When you decide to
                change the status (e.g. freeze or cancel) of your Monthly EFT membership, you must notify us before the end
                of the month.
              </p>
            </div>
            <h3 className="mt-8 text-lg font-semibold">Member benefits</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "EFT Members receive a 10% discount on gear purchases.",
                "EFT Members receive a discount of $20 on all D.R.G. classes.",
                "EFT Members may charge purchases to their account once their billing is validated.",
                "EFT Members may use 2 Guest Passes per visit for people who have not been to the gym before.",
              ].map((b) => (
                <li key={b} className="border-l-2 border-brand bg-surface px-4 py-3">
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section id="equipment" aria-labelledby="eq-h">
            <h2 id="eq-h" className="mb-6 text-4xl md:text-5xl">
              Equipment
            </h2>
            <PriceList
              rows={[
                { item: "Climbing Shoes", price: "$5" },
                { item: "Harness", price: "$5" },
                { item: "Belay Device w/ Locking Carabiner", price: "$2" },
                { item: "Chalk Ball", price: "$2" },
                { item: "Equipment Package", price: "$12", note: "Includes all items" },
              ]}
            />
            <p className="mt-6 font-semibold">
              In our gear shop we sell harnesses, shoes, chalk, chalk bags, hardware, and much more.
            </p>
            <p className="mt-2">The staff are happy to assist you with questions, fitment, and trying out equipment.</p>
          </section>

          <section id="Classes" aria-labelledby="cl-h">
            <h2 id="cl-h" className="mb-6 text-4xl md:text-5xl">
              Classes
            </h2>
            <PriceList
              rows={[
                {
                  item: (
                    <Link href={`${nav("Classes")}#Intro`} className="link">
                      Intro to Belaying
                    </Link>
                  ),
                  note: "Learn to top-rope belay",
                  price: "$40",
                },
                {
                  item: (
                    <Link href={`${nav("Classes")}#Sport`} className="link">
                      Intro to Sport Climbing
                    </Link>
                  ),
                  note: "Learn to lead/sport belay",
                  price: "$80",
                },
                {
                  item: (
                    <Link href={`${nav("Classes")}#Outdoor`} className="link">
                      Indoor to Outdoor
                    </Link>
                  ),
                  note: "Transition to sport climb outside",
                  price: "$60",
                },
              ]}
            />
          </section>

          <section id="groups" aria-labelledby="gr-h">
            <h2 id="gr-h" className="text-4xl md:text-5xl">
              Party &amp; Group Rates
            </h2>
            <p className="mt-3">
              See{" "}
              <Link href={nav("Parties & Groups")} className="link">
                Parties &amp; Groups
              </Link>{" "}
              for rates and what is included.
            </p>
            <p className="mt-3">We accept payments in the form of cash and major credit cards.</p>
          </section>

          <section aria-label="Release agreement" className="space-y-2 border-l-4 border-brand pl-6">
            <AllClimbersMust />
          </section>
        </div>
      </div>
    </>
  );
}
