import Image from "next/image";
import { asset } from "@/lib/site";

/**
 * Three real gym photos drifting at different speeds as the page scrolls (storytelling: depth of the wall).
 * Pure CSS scroll-driven animation (.drift-slow / .drift-fast in globals.css); static where unsupported or reduced motion.
 */
export function HeroCollage() {
  return (
    <div className="relative grid grid-cols-[1.05fr_1fr] gap-3 sm:gap-4">
      <div aria-hidden className="absolute -right-4 top-10 bottom-[-2rem] left-[22%] bg-brand md:-right-8" />
      <div className="drift-slow relative">
        <Image
          src={asset("/images/hp_vert.webp")}
          alt="Climbers on the tall roped walls above the blue floor at The Delaware Rock Gym"
          width={400}
          height={603}
          priority
          className="aspect-[2/3] w-full object-cover shadow-[0_30px_60px_-30px_rgb(13_18_38/0.6)]"
        />
      </div>
      <div className="drift-fast relative mt-14 grid content-start gap-3 sm:gap-4">
        <Image
          src={asset("/images/boulder2.webp")}
          alt="The bouldering wall and its padded landing surface"
          width={800}
          height={464}
          priority
          className="aspect-[4/3] w-full object-cover shadow-[0_30px_60px_-30px_rgb(13_18_38/0.6)]"
        />
        <Image
          src={asset("/images/tc2.webp")}
          alt="A staff member belaying a first-time climber"
          width={304}
          height={450}
          className="aspect-[4/3] w-full object-cover object-[center_30%] shadow-[0_30px_60px_-30px_rgb(13_18_38/0.6)]"
        />
      </div>
    </div>
  );
}
