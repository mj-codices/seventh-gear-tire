"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Chevrons from "../ui/Chevrons";

// Sample tire brands to populate the loop
const brands = [
  { name: "FALKEN", style: "font-sans tracking-widest font-black" },
  { name: "SAMSON", style: "font-serif tracking-wider font-extrabold italic" },
  { name: "MICHELIN", style: "font-sans tracking-tight font-black uppercase" },
  { name: "GOODYEAR", style: "font-sans tracking-wide font-extrabold italic" },
  { name: "TOYO", style: "font-sans tracking-widest font-bold" },
];

export default function BrandMarquee() {
  return (
    // Bottom Layer: The deeper base background
    <div className="relative w-full bg-stone-900 pb-15 sm:pb-25 pt-1 overflow-hidden z-0">
      {/* 1. Added a wrapper with a horizontal fade mask */}
      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        }}
      >
        <motion.div
          className="flex whitespace-nowrap w-max pt-4.5 sm:pt-10 md:pt-10"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {/* First Loop Pass */}
          <div className="flex items-center gap-20 sm:gap-25 md:gap-30 pr-20 sm:pr-30 md:pr-30 flex-shrink-0">
            {brands.map((brand, idx) => (
              <span
                key={`track1-${idx}`}
                className={`${brand.style} text-3xl sm:text-[38px] text-stone-500 select-none`}
              >
                {brand.name}
              </span>
            ))}
          </div>

          {/* Second Loop Pass */}
          <div
            className="flex items-center gap-20 sm:gap-25 md:gap-30 pr-20 sm:pr-30 md:pr-30 flex-shrink-0"
            aria-hidden="true"
          >
            {brands.map((brand, idx) => (
              <span
                key={`track2-${idx}`}
                className={`${brand.style} text-3xl sm:text-[38px] text-stone-500`}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-13 sm:mt-25 md:mt-20 w-[calc(100%-4.5rem)] sm:w-[calc(100%-7rem)] md:w-[calc(100%-9rem)] rounded-2xl bg-stone-950 px-6 pt-3 md:pt-15 pb-12 sm:pb-20 md:pb-20 border-1 border-stone-700/50 drop-shadow-xl lg:drop-shadow-3xl">
        {/* Inner Card Container (added overflow-hidden for rounded corner clipping) */}
        <div className="relative mx-auto mt-13 sm:mt-25 md:mt-5 w-[calc(100%-4rem)] sm:w-[calc(100%-6rem)] md:w-[calc(100%-4rem)] rounded-2xl bg-stone-950 px-6 pt-9 sm:pt-15 md:pt-18 pb-12 sm:pb-20 md:pb-15 drop-shadow-xl lg:drop-shadow-3xl overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/marquee.jpeg"
              alt=""
              fill
              className="object-cover object-[center_50%] opacity-20 mix-blend-luminosity" // Swapped object-center to object-bottom
              priority={false}
              loading="eager"
            />
            {/* Gradient Overlay to ensure readable contrast on top of the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-800/10" />
          </div>

          {/* Content Wrapper (placed z-10 above background image) */}
          <div className="relative z-10">
            {/* Header Block */}
            <div className="hidden sm:flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl sm:text-[37px] md:text-[40px] font-bold text-white/80 leading-12 tracking-wider">
                Cut lead times. Save rotation.{" "}
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-stone-200 via-stone-400 to-stone-500 bg-clip-text text-transparent">
                  Rapid hub dispatch and zero staging delay.
                </span>
              </h2>

              <p className="px-6 mt-6 text-base sm:text-lg text-stone-400 max-w-2xl font-normal leading-9 mx-auto">
                We support factory spec fitments across all major commercial
                platforms. By maintaining direct Tier-1 supply partnerships, we
                cut lead times down to minutes, getting your asset back in
                rotation immediately.
              </p>
            </div>

            {/* Feature Grid Divider */}
            {/* Feature Grid Divider */}
            <div className="mx-auto border-2 w-full max-w-[300px] h-[3px] border-red-800 my-10 sm:mb-18 sm:mt-10 hidden sm:block" />

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-5 sm:p-6 rounded-xl bg-stone-900/50 border border-stone-800/60 backdrop-blur-sm">
                <p className="max-[400px]:text-xl text-2xl font-semibold text-stone-100 font-mono">
                  100%
                </p>
                <p className="text-sm font-medium text-stone-300 mt-1">
                  OEM Spec Match
                </p>
                <p className="text-xs text-stone-500 mt-2">
                  Guaranteed fitment standards straight from factory engineering
                  guidelines.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-stone-900/50 border border-stone-800/60 backdrop-blur-sm">
                <p className="max-[400px]:text-xl text-2xl font-semibold text-stone-100 font-mono">
                  Regional
                </p>
                <p className="text-sm font-medium text-stone-300 mt-1">
                  Fleet Dispatch
                </p>
                <p className="text-xs text-stone-500 mt-2">
                  Rapid deployment units routed directly to active operational
                  hubs.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-stone-900/50 border border-stone-800/60 backdrop-blur-sm">
                <p className="max-[400px]:text-xl text-2xl font-semibold text-stone-100 font-mono">
                  Direct
                </p>
                <p className="text-sm font-medium text-stone-300 mt-1">
                  Tier-1 Supply
                </p>
                <p className="text-xs text-stone-500 mt-2">
                  Immediate inventory access directly backed by top manufacturer
                  partners.
                </p>
              </div>

              {/* 4th Card Link Wrapper */}
              <Link href="/contact" className="block h-full w-full">
                <div className="group h-full w-full p-5 sm:p-6 rounded-xl bg-stone-900/50 hover:bg-stone-900/70 border border-stone-800/60 hover:border-stone-800 backdrop-blur-sm transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center">
                  <p className="font-display tracking-wider uppercase text-stone-200 group-hover:text-white transition-colors max-[400px]:text-sm text-base sm:text-lg">
                    Spec your <br className="hidden md:inline" />
                    <span className="inline-flex items-center gap-1.5">
                      fleet
                      <span className="transform translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500 ease-in-out text-amber-400">
                        <Chevrons />
                      </span>
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-stone-800">
          {/* Optional bottom items */}
        </div>
      </div>
    </div>
  );
}
