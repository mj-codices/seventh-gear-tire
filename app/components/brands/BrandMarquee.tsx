"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Chevrons from "../ui/Chevrons";
import Truck from "../ui/Truck";
import Time from "../ui/Time";
import SunShield from "../ui/SunShield";

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
                className={`${brand.style} text-3xl sm:text-4xl md:text-5xl text-stone-500 select-none`}
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
                className={`${brand.style} text-3xl sm:text-4xl md:text-5xl text-stone-500`}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-13 sm:mt-25 md:mt-20 w-[calc(100%-4rem)] sm:w-[calc(100%-6rem)] md:w-[calc(100%-8rem)] rounded-2xl bg-stone-950 px-6 pt-9 sm:pt-15 md:pt-12 pb-12 sm:pb-20 md:pb-20 border-1 border-stone-700/50 drop-shadow-xl lg:drop-shadow-3xl">
        {/* Inner Card Container (added overflow-hidden for rounded corner clipping) */}
        <div className="relative mx-auto mt-13 sm:mt-25 md:mt-5 w-[calc(100%-4rem)] sm:w-[calc(100%-6rem)] md:w-[calc(100%-4rem)] rounded-2xl bg-stone-950 px-6 pt-9 sm:pt-15 md:pt-18 pb-12 sm:pb-20 md:pb-15 border border-stone-700/50 drop-shadow-xl lg:drop-shadow-3xl overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/marquee.png"
              alt=""
              fill
              className="object-cover object-bottom opacity-20 mix-blend-luminosity" // Swapped object-center to object-bottom
              priority={false}
            />
            {/* Gradient Overlay to ensure readable contrast on top of the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/10" />
          </div>

          {/* Content Wrapper (placed z-10 above background image) */}
          <div className="relative z-10">
            {/* Header Block */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl sm:text-[40px] font-bold text-stone-100 leading-12 tracking-wider">
                Every make. Every model. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-stone-200 via-stone-400 to-stone-500 bg-clip-text text-transparent">
                  Nationwide coverage across major OEMs.
                </span>
              </h2>

              <p className="px-6 mt-6 text-base sm:text-lg text-stone-400 max-w-2xl font-normal leading-9">
                From heavy commercial fleets to light-duty transports, we
                support full factory spec fitments and regional service
                guarantees across all primary manufacturers.
              </p>
            </div>

            {/* Feature Grid Divider */}
            <div className="mx-auto w-[300px] border-2 max-w-md h-px my-10 sm:mb-18 sm:mt-10 border-red-800" />

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-5 sm:p-6 rounded-xl bg-stone-900/50 border border-stone-800/60 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-stone-100 font-mono">
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
                <p className="text-2xl font-semibold text-stone-100 font-mono">
                  24/7
                </p>
                <p className="text-sm font-medium text-stone-300 mt-1">
                  Class 1–8 Support
                </p>
                <p className="text-xs text-stone-500 mt-2">
                  Full vehicle spectrum readiness for duty requirements across
                  all sizes.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-stone-900/50 border border-stone-800/60 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-stone-100 font-mono">
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
                <p className="text-2xl font-semibold text-stone-100 font-mono">
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
