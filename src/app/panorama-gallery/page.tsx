import type { Metadata } from "next";
import { og } from "@/lib/site";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "360° Panorama Gallery",
  description: "Look around inside The Delaware Rock Gym with four 360° panoramas of the roped walls and bouldering area.",
  alternates: { canonical: "/panorama-gallery/" },
  openGraph: og("/panorama-gallery/", "Panorama Gallery | Delaware Rock Gym"),
};

const panos = [
  "https://www.google.com/maps/embed?pb=!4v1628263545422!6m8!1m7!1sCAoSLEFGMVFpcE5TakN4WVRQYzdRWHpYR2JZcVpUaVpKeW9EMTEzVEgweldNdEVz!2m2!1d39.611022!2d-75.6896758!3f359!4f0!5f0.7820865974627469",
  "https://www.google.com/maps/embed?pb=!4v1628263623016!6m8!1m7!1sCAoSLEFGMVFpcE9JMGJLNUpQTUJ1NExNNFJHNUo2b09rVFBwa0JyU0xnNlVNZ2M1!2m2!1d39.611022!2d-75.6896758!3f359!4f0!5f0.7820865974627469",
  "https://www.google.com/maps/embed?pb=!4v1628263652359!6m8!1m7!1sCAoSLEFGMVFpcE9iRjhMSDBRX3ZXelpjOXB5Qkc1bnBhR3o0ZVJPQWZqdWRidzhB!2m2!1d39.611022!2d-75.6896758!3f359!4f0!5f0.7820865974627469",
  "https://www.google.com/maps/embed?pb=!4v1628263668912!6m8!1m7!1sCAoSLEFGMVFpcFBYT0lodUxnVl9MNk5yUndjSVJkT0NGemdzSHRhOXQ4dzV0N0Vq!2m2!1d39.611022!2d-75.6896758!3f359!4f0!5f0.7820865974627469",
];

export default function Gallery() {
  return (
    <>
      <PageHeader title="Panorama Gallery" lead="Drag inside each view to look around the gym in 360°." />
      <div className="container-site grid gap-6 pb-20 md:grid-cols-2">
        {panos.map((src, i) => (
          <div key={src} className="relative aspect-[4/3] w-full bg-surface-2">
            <p className="absolute inset-0 grid place-items-center text-muted">Loading 360° view</p>
            <iframe
              src={src}
              title={`360° panorama of The Delaware Rock Gym, view ${i + 1} of ${panos.length}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        ))}
      </div>
    </>
  );
}
