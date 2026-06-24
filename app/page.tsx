import Link from "next/link";
import Image from "next/image";
import Sparkmark from "@/components/Sparkmark";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:h-[calc(100vh-65px)] min-h-[640px] md:min-h-[780px]">
      {/* Left side — Career */}
      <Link
        href="/career"
        className="group relative flex-1 flex flex-col items-center justify-center gap-5 bg-graphite bg-noise border-b md:border-b-0 md:border-r border-graphite-line px-8 py-20 md:py-0 overflow-hidden transition-colors hover:bg-graphite-soft"
      >
        <Sparkmark
          animate
          delayMs={120}
          className="reveal h-8 w-20 text-amber transition-colors group-hover:text-amber-soft"
        />
        <span className="reveal font-display text-4xl sm:text-5xl text-bone" style={{ animationDelay: "80ms" }}>
          Career
        </span>
        <span
          className="reveal font-mono-data text-xs uppercase tracking-[0.2em] text-bone-dim"
          style={{ animationDelay: "160ms" }}
        >
          Sales Ops · Ads · Product
        </span>
        <span
          className="reveal mt-2 inline-flex items-center gap-2 text-sm text-amber transition-transform duration-300 group-hover:translate-x-1"
          style={{ animationDelay: "240ms" }}
        >
          See my path →
        </span>
      </Link>

      {/* Right side — Articles, with background photo */}
      <Link
        href="/articles"
        className="group relative flex-1 flex flex-col items-center justify-center gap-5 px-8 py-20 min-h-[520px] md:min-h-0 md:py-0 overflow-hidden"
      >
        <Image
          src="/ze-pierno.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-center grayscale brightness-[0.55] transition-all duration-500 group-hover:brightness-[0.7] group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-graphite/35" />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <Sparkmark
            animate
            delayMs={320}
            className="reveal h-8 w-20 text-teal-data"
            style={{ animationDelay: "280ms" }}
          />
          <span
            className="reveal font-display text-4xl sm:text-5xl text-bone"
            style={{ animationDelay: "280ms" }}
          >
            Articles
          </span>
          <span
            className="reveal font-mono-data text-xs uppercase tracking-[0.2em] text-bone-dim"
            style={{ animationDelay: "360ms" }}
          >
            Weekly notes · behind the scenes
          </span>
          <span
            className="reveal mt-2 inline-flex items-center gap-2 text-sm text-bone transition-transform duration-300 group-hover:translate-x-1"
            style={{ animationDelay: "420ms" }}
          >
            Read articles →
          </span>
        </div>
      </Link>
    </div>
  );
}
