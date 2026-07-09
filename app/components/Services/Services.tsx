import Link from "next/link";
import Chevrons from "../UI/Chevrons";

export default function Services() {
  return (
    <section className="relative bg-stone-950 px-9 sm:px-15 pt-5 pb-15 space-y-15 z-10">
      {/* Section Header */}

      <h2 className="font-display text-4xl sm:text-[40px] text-white/90 leading-11 sm:pb-4 sm:max-w-lg">
        Uptime solutions engineered for your fleet.
      </h2>

      {/* Services Stack - Pure vertical alignment for mobile viewports */}
      <div className="space-y-7 flex flex-col">
        {/* Service 1: Hot Shot & Goosenecks */}

        {/* Image Wrapper */}
        {/* 1. Outer Layer: Relative positioning ONLY. No overflow-hidden here, so the SVG can bleed out safely */}
        {/* 1. Outer Layer: Now controls the max-width boundary for the entire element ecosystem */}
        <div className="relative flex flex-col w-full max-w-md sm:max-w-lg mr-3.5 pr-3 pb-3">
          {/* 2. Inner Layer: Dedicated entirely to rounding and framing the image */}
          {/* Removed max-w-md from here so it simply fills the restricted parent */}
          <div className="w-full h-full rounded-xl overflow-hidden mb-2">
            <img
              className="w-full h-full object-cover brightness-110"
              src="/services.jpeg"
              alt="working on tire"
            />
          </div>

          {/* 3. The Top-Right SVG: Locked down because its relative anchor stops expanding at max-w-md */}
          <svg
            className="absolute -top-7.5 sm:-top-12.5 sm:-right-6 -right-3 w-30 h-30 sm:w-45 sm:h-45 text-stone-500/60 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 10 10 H 70 Q 90 10 90 30 V 90"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="butt"
              strokeDasharray="10 6"
            />
          </svg>

          {/* 4. The Bottom-Left Geometric Slab SVG: Pins flawlessly to the capped parent coordinates */}
          <div className="absolute bottom-2 left-0 text-red-800 -translate-x-4 pointer-events-none">
            <svg
              className="w-60 sm:w-85 h-6.5 sm:h-10"
              viewBox="0 0 320 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
            >
              <path
                d="
          M10 32L22 0H32L20 32H10Z
          M30 32L42 0H52L40 32H30Z
          M50 32L62 0H72L60 32H50Z
          M70 32L82 0H92L80 32H70Z
          M90 32L102 0H112L100 32H90Z
          M110 32L122 0H132L120 32H110Z
          M130 32L142 0H152L140 32H130Z
          M150 32L162 0H172L160 32H150Z
          M170 32L182 0H192L180 32H170Z
          M190 32L202 0H212L200 32H190Z
          M210 32L222 0H232L220 32H210Z
          M230 32L242 0H252L240 32H230Z
          M250 32L262 0H272L260 32H250Z
          M270 32L282 0H292L280 32H270Z
          M290 32L302 0H312L300 32H290Z
        "
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <Link href="/services/">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-lg sm:text-2xl font-extrabold text-white/90 tracking-tight">
              On-Site Tire Replacement
            </h3>
            <p className="text-base sm:text-lg text-stone-400 max-w-md sm:max-w-lg leading-8">
              Commercial-grade mounting, precision computer balancing, and fresh
              rubber delivered directly to your home base or warehouse yard.
              Engineered for light to medium-duty trucks, box trucks, and
              regional delivery vans.
            </p>
          </div>
          <div className="ml-1 mt-5 flex row gap-1.5">
            <p className="font-display tracking-wide uppercase text-white/90 sm:text-lg">
              Learn More
            </p>
            <span className="mt-1 sm:mt-1.5">
              <Chevrons />
            </span>
          </div>
        </Link>

        {/* 
          THE STRUCTURAL MOBILE DIVIDER 
          By adding self-center, it sits beautifully right in the middle 
          of your massive space-y-25 margin gap, creating a premium anchor.
        */}

        <div className="border-t border-stone-900 w-full" aria-hidden="true" />
        <Link href="/services/">
          {/* Service 2: Box Trucks & Delivery */}

          {/* Added flex and flex-col to match the physical structural stacking style of card one */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-2xl font-extrabold text-white/90 tracking-tight">
              Commercial Curation & Sourcing
            </h3>
            <p className="text-base sm:text-lg text-stone-400 max-w-md sm:max-w-lg leading-8">
              Whether your fleet demands closed-shoulder drive tires for maximum
              Texas highway efficiency, or aggressive lugs engineered for rugged
              regional job sites, we match your weight margins with top-tier
              inventory.
            </p>
          </div>
          <div className="ml-1 mt-5 flex row gap-1.5">
            <p className="font-display uppercase text-white/90 sm:text-lg">Learn More</p>
            <span className="mt-1 sm:mt-1.5">
              <Chevrons />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
