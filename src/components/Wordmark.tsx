import { asset } from "@/lib/site";
/* Brand lockup: the original Delaware-outline mark (unmodified GIF) on a white tile, plus a live-text wordmark. */
export function Wordmark({ size = "md" }: { size?: "md" | "lg" }) {
  const lg = size === "lg";
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span className={`grid shrink-0 place-items-center bg-[#fcfcfe] ${lg ? "h-16 w-16 p-1.5" : "h-11 w-11 p-1"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/images/drg_logo.gif")} alt="" width={106} height={89} className="h-auto w-full" />
      </span>
      <span className={`display whitespace-nowrap leading-none tracking-tight ${lg ? "text-4xl" : "text-[1.4rem] sm:text-[1.6rem]"}`}>
        Delaware <span className="text-brand">Rock</span> Gym
      </span>
    </span>
  );
}
