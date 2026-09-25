import type { Metadata } from "next";
import { ArrowUpRightIcon, FilePdfIcon, PrinterIcon, SignatureIcon } from "@phosphor-icons/react/dist/ssr";
import { Notice, PageHeader } from "@/components/ui";
import { RELEASE_ESIGN, RELEASE_PRINT, og, asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "Release Forms",
  description:
    "All participants must complete a DE Rock Gym release agreement. Sign online with E-Sign, print and sign, or download the PDF forms.",
  alternates: { canonical: "/release-forms/" },
  openGraph: og("/release-forms/", "Release Forms | Delaware Rock Gym"),
};

const pdfs = [
  { href: "/assets/DRG-Release.pdf", label: "Release", desc: "Print, sign & hand-in standard form." },
  { href: "/assets/DRG-Release-Invite.pdf", label: "Party / Invite Release", desc: "Print, sign & hand-in invite form." },
  {
    href: "/assets/DRG-Release-Invite-Plain.pdf",
    label: "Plain Party / Invite Release",
    desc: "Print, sign & hand-in invite form.",
  },
  { href: "/assets/DRG-Rules.pdf", label: "Rules", desc: "View gym rules and regulations." },
];

export default function Release() {
  return (
    <>
      <PageHeader title="All participants must complete a DE Rock Gym release agreement." />

      <div className="container-site pb-20">
        <div className="grid gap-10 pt-12 md:grid-cols-2 md:gap-16">
          <section>
            <h2 className="text-2xl md:text-3xl">Who has to sign a release?</h2>
            <p className="mt-2 max-w-[56ch]">
              Any person who wants to climb, belay or take a class at The DE Rock Gym, must sign a DE Rock Gym release
              agreement. If the participant is under 18 then their parent or court-appointed legal guardian must sign the
              release agreement on their behalf.
            </p>
          </section>
          <section>
            <h2 className="text-2xl md:text-3xl">Who may sign a release?</h2>
            <p className="mt-2 max-w-[56ch]">
              Participants over 18 years of age or a parent or court-appointed legal guardian for a minor.
            </p>
            <p className="mt-2 font-semibold">
              NOT: Host families for exchange students, Aunts/Uncles, Grandfathers/Grandmothers, Etc.
            </p>
          </section>
        </div>

        <section aria-labelledby="online" className="mt-16">
          <h2 id="online" className="text-4xl md:text-5xl">
            Online Release Forms
          </h2>
          <div className="mt-5 max-w-3xl">
            <Notice tone="important">
              <p>You must be 18 or older (an adult) to complete any of these forms.</p>
              <p>The validating email address must belong to the adult signer (must be parent for minor) of the form.</p>
            </Notice>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
            <a
              href={RELEASE_ESIGN}
              target="_blank"
              rel="noopener"
              className="group flex flex-col border-2 border-brand bg-surface p-6 transition-colors hover:bg-notice md:p-8"
            >
              <SignatureIcon aria-hidden size={36} className="text-link" />
              <span className="mt-4 display flex items-center gap-2 text-4xl">
                Online E-Sign
                <ArrowUpRightIcon aria-hidden size={22} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              <span className="mt-3 max-w-[48ch]">
                Follow on-screen prompts to complete form. With this method, a printed copy is NOT required. Over 18 years of
                age, be prepared to present ID. Minors: Parental phone may be called for verification.
              </span>
            </a>
            <a
              href={RELEASE_PRINT}
              target="_blank"
              rel="noopener"
              className="group flex flex-col border border-line bg-surface p-6 transition-colors hover:border-brand md:p-8"
            >
              <PrinterIcon aria-hidden size={36} className="text-link" />
              <span className="mt-4 display flex items-center gap-2 text-4xl">
                Online Print &amp; Sign
                <ArrowUpRightIcon aria-hidden size={22} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              <span className="mt-3 max-w-[48ch]">
                Follow on-screen prompts to complete form. Print, sign and bring form with you to the gym. Over 18 years of
                age, be prepared to present ID.
              </span>
            </a>
          </div>
        </section>

        <section aria-labelledby="pdf" className="mt-16">
          <h2 id="pdf" className="text-4xl md:text-5xl">
            Downloadable PDF forms
          </h2>
          <p className="mt-3 font-semibold">You must be 18 or older (an adult) to complete any of these forms.</p>
          <ul className="mt-6 grid gap-x-10 gap-y-5 border-t-2 border-text pt-6 md:grid-cols-2">
            {pdfs.map((p) => (
              <li key={p.href}>
                <a href={asset(p.href)} target="_blank" rel="noopener" className="group flex gap-3">
                  <FilePdfIcon aria-hidden size={26} className="mt-0.5 shrink-0 text-link" />
                  <span>
                    <span className="font-semibold text-link underline decoration-1 underline-offset-4 group-hover:decoration-2">
                      {p.label}
                    </span>
                    <span className="block text-muted">{p.desc}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
