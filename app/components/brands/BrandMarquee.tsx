"use client";
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
      {/* 1. Added w-max to force the container to be as wide as both rows combined */}
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
          className="flex whitespace-nowrap w-max pt-4.5 sm:pt-10 md:pt-15"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {/* First Loop Pass */}
          <div className="flex items-center gap-20 sm:gap-25 md:gap-30 xl:gap-40 pr-20 sm:pr-30 md:pr-35 flex-shrink-0">
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
            className="flex items-center gap-20 sm:gap-25 md:gap-30 xl:gap-40 pr-20 sm:pr-30 md:pr-35 flex-shrink-0"
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

      <div className="relative mx-auto mt-13 sm:mt-25 md:mt-30 w-[calc(100%-4rem)] sm:w-[calc(100%-6rem)] md:w-[calc(100%-10rem)] rounded-2xl bg-stone-950 px-6 pt-9 sm:pt-15 md:pt-20 pb-12 sm:pb-20 md:pb-25 border-1 border-stone-700/50 drop-shadow-xl lg:drop-shadow-3xl">
        {/* Changed xl:grid-cols-4 to lg:grid-cols-4 to snap into a single row at 1024px */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-stone-800">
          {/* 1. First Item */}
          {/* Swapped xl: values out for lg: variants */}
          <div className="px-3 sm:px-10 md:px-20 lg:px-6 xl:px-16 pt-4 xl:pt-5 pb-8 lg:py-4 border-r border-b border-stone-900 lg:border-b-0 flex flex-col items-center justify-center">
            <div className="text-stone-200" aria-hidden="true">
              <Truck />
            </div>
            <h5 className="font-sans text-xs sm:text-base font-bold text-stone-400/90 text-center leading-relaxed tracking-wide">
              Light, medium, and heavy-duty fleet focus.
            </h5>
          </div>

          {/* 2. Second Item */}
          {/* Swapped xl: values out for lg: variants */}
          <div className="px-4 sm:px-12 md:px-20 lg:px-6 xl:px-16 pt-4 md:pt-7 pb-8 lg:py-4 border-b border-stone-900 lg:border-b-0 lg:border-r border-stone-900 flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-2">
            <div
              className="text-stone-200 flex items-center justify-center"
              aria-hidden="true"
            >
              <SunShield />
            </div>
            <h5 className="font-sans text-xs sm:text-base font-bold text-stone-400/90 text-center leading-relaxed tracking-wide">
              Tires optimized for rough Texas roads.
            </h5>
          </div>

          {/* 3. Third Item (Time Quadrant) */}
          {/* Swapped xl: values out for lg: variants, and stripped out the extra mobile border-b tracking entirely */}
          <div className="pt-2 sm:pt-5 lg:pt-3 pb-8 lg:py-4 border-r border-stone-900 lg:border-b-0 flex flex-col items-center justify-center gap-1 pr-2 sm:pr-0 sm:px-6">
            <div
              className="text-stone-200/90 flex items-center justify-center"
              aria-hidden="true"
            >
              <Time />
            </div>
            <h5 className="font-sans text-xs sm:text-base font-bold text-stone-400/90 text-center leading-relaxed tracking-wide">
              No waiting rooms or dealership lineups.
            </h5>
          </div>

          {/* 4. Fourth Item */}
          {/* Remove the outer layout padding from this wrapper so it doesn't create dead zones */}
          <div className="flex items-center justify-center ml-1 sm:ml-0 mt-3 sm:mt-6 md:mt-10 lg:mt-10">
            <Link
              href="/contact"
              className="group flex items-center justify-center w-full h-full p-5 text-center text-stone-200 rounded-xl transition-colors hover:text-white active:bg-white/5 lg:p-6"
            >
              <h5 className="font-display uppercase leading-normal tracking-wider text-center sm:text-lg">
                Spec your{" "}
                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                  fleet
                  <span
                    className="group-hover:translate-x-1 transition-transform duration-500 mt-1"
                    aria-hidden="true"
                  >
                    <Chevrons />
                  </span>
                </span>
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
