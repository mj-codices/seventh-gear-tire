import Link from "next/link";
import Chevrons from "../ui/Chevrons";
import Image from "next/image";

export default function Services() {
  return (
    <section className="relative bg-stone-950 px-9 sm:px-15 md:px-20 xl:px-33 pt-10 sm:pt-30 pb-15 md:pb-20 xl:pb-35 space-y-15 z-10 drop-shadow-xl lg:drop-shadow-4xl">
      {/* Section Header */}
      <h2 className="font-display text-4xl sm:text-[40px] md:text-[50px] text-white/90 leading-11 pb-4 sm:pb-6 md:pb-12 sm:max-w-lg md:max-w-2xl xl:max-w-3xl">
        Uptime solutions engineered for your fleet.
      </h2>

      {/* Services Stack: Changed xl: prefixes to lg: so the side-by-side configuration triggers earlier */}
      <div className="flex flex-col space-y-10 md:space-y-12 lg:space-y-0 lg:grid lg:grid-cols-[auto_1fr] lg:gap-x-16 xl:gap-x-20 lg:items-start">
        {/* LEFT COLUMN: Image Wrapper */}
        <div className="relative flex flex-col w-full max-w-md sm:max-w-lg lg:max-w-[520px] mr-3.5 pr-3 pb-3 lg:mr-0 lg:pr-0">
          {/* Inner Layer */}
          <div className="w-full h-80 sm:h-84 lg:aspect-[5/4] rounded-xl overflow-hidden mb-2 relative after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)] after:pointer-events-none after:z-10">
            <Image
              src="/services.jpeg"
              alt="Working on tire"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover opacity-90"
            />
          </div>

          {/* 3. The Top-Right SVG */}
          <svg
            className="absolute -top-7.5 sm:-top-12.5 sm:-right-6 -right-3 lg:h-31 lg:w-31 lg:-right-8 lg:-top-8 w-30 h-30 sm:w-45 sm:h-45 text-stone-500/60 pointer-events-none"
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

          {/* 4. The Bottom-Left Geometric Slab SVG */}
          <div className="absolute bottom-2 sm:bottom-0.5 left-0 sm:-left-5 lg:-left-3.5 text-red-800 -translate-x-4 pointer-events-none">
            <svg
              className="w-60 sm:w-85 md:w-95 lg:w-80 h-6.5 sm:h-10"
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

        {/* RIGHT COLUMN: The Services Content Stack */}
        {/* Swapped xl: values out for lg: to handle spatial distribution and centering alongside the image block */}
        <div className="flex flex-col space-y-10 md:space-y-12 lg:space-y-10 lg:justify-center lg:h-full">
          {/* Service 1 */}
          <Link href="/services/" className="group block">
            <div className="space-y-4 sm:space-y-6">
              {/* Heading with Racing Sweep Animation */}
              <h3 className="relative inline-block text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-10 text-white/70 overflow-hidden">
                {/* Base Text (Muted white/70) */}
                <span>On-Site Tire Replacement</span>

                {/* Solid White Overlay (Wipes in from left to right on hover) */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 text-white flex items-center whitespace-nowrap [clip-path:polygon(0_0,0_0,0_100%,0_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-[clip-path] duration-400 ease-in-out pointer-events-none select-none"
                >
                  On-Site Tire Replacement
                </span>
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-stone-400 max-w-md sm:max-w-lg md:max-w-2xl leading-7.5 md:leading-10">
                Commercial-grade mounting, precision computer balancing, and
                fresh rubber delivered directly to your home base or warehouse
                yard.
              </p>
            </div>

            <div className="ml-1 mt-5 flex items-center gap-1.5">
              {/* Learn More (Restored to simple color fade) */}
              <p className="font-display tracking-wider uppercase text-stone-200 group-hover:text-white transition-colors duration-300 sm:text-lg">
                Learn More
              </p>
              <span className="transform translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500 ease-in-out text-amber-400">
                <Chevrons />
              </span>
            </div>
          </Link>

          {/* THE STRUCTURAL DIVIDER */}
          <div
            className="border-t border-stone-900 w-full"
            aria-hidden="true"
          />

          {/* Service 2 */}
          <Link href="/services/" className="group block">
            <div className="space-y-4 sm:space-y-6">
              {/* Heading with Racing Sweep Animation */}
              <h3 className="relative inline-block text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-10 text-white/75 overflow-hidden">
                {/* Base Text (Muted white/75) */}
                <span>Commercial Curation &amp; Sourcing</span>

                {/* Solid White Overlay (Wipes in from left to right on hover) */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 text-white flex items-center whitespace-nowrap [clip-path:polygon(0_0,0_0,0_100%,0_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-[clip-path] duration-400 ease-in-out pointer-events-none select-none"
                >
                  Commercial Curation &amp; Sourcing
                </span>
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-stone-400 max-w-md sm:max-w-lg md:max-w-2xl leading-7.5 md:leading-10">
                Whether you demand closed-shoulder drive tires for maximum
                highway efficiency, or lugs engineered for rugged job sites, we
                match your weight margins with top-tier inventory.
              </p>
            </div>

            <div className="ml-1 mt-5 flex items-center gap-1.5">
              {/* Learn More (Clean color fade) */}
              <p className="font-display tracking-wider uppercase text-stone-200 group-hover:text-white transition-colors duration-300 sm:text-lg">
                Learn More
              </p>
              <span className="transform translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500 ease-in-out">
                <Chevrons />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
