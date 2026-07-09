"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Chevrons from "../UI/Chevrons";
import Truck from "../UI/Truck";
import Time from "../UI/Time";
import SunShield from "../UI/SunShield";

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
      <motion.div
        className="flex whitespace-nowrap w-max pt-4.5 sm:pt-10"
        animate={{ x: [0, "-50%"] }} // 2. Changed from -100% to -50%
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {/* First Loop Pass - Added flex-shrink-0 */}
        <div className="flex items-center gap-20 sm:gap-25 pr-20 sm:pr-30 flex-shrink-0">
          {brands.map((brand, idx) => (
            <span
              key={`track1-${idx}`}
              className={`${brand.style} text-3xl sm:text-4xl text-stone-500 select-none transition-colors duration-300 hover:text-stone-300`}
            >
              {brand.name}
            </span>
          ))}
        </div>

        {/* Second Loop Pass - Added flex-shrink-0 */}
        <div
          className="flex items-center gap-20 sm:gap-25 pr-20 sm:pr-30 flex-shrink-0"
          aria-hidden="true"
        >
          {brands.map((brand, idx) => (
            <span
              key={`track2-${idx}`}
              className={`${brand.style} text-3xl sm:text-4xl text-stone-500 select-none transition-colors duration-300 hover:text-stone-300`}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="relative mx-auto mt-13 sm:mt-25 w-[calc(100%-3rem)] sm:w-[calc(100%-6rem)] rounded-md bg-stone-950 px-6 pt-9 sm:pt-15 pb-12 sm:pb-20 border-l border-r border-stone-800/40 drop-shadow-xl">
        {/* grid-cols-2 naturally splits the space 50/50 dynamically */}
        <div className="grid grid-cols-2 border-stone-800">
          {/* 1. Top Left Item */}
          <div className="px-4 sm:px-10 pt-4 pb-8 border-r border-b border-stone-900 flex flex-col items-center justify-center gap-1">
            <div className="text-white" aria-hidden="true">
              <Truck />
            </div>
            <h5 className="font-sans text-xs sm:text-base font-bold text-white/90 text-center leading-relaxed tracking-wide">
              Light, medium, and heavy-duty fleet focus.
            </h5>
          </div>

          {/* 2. Top Right Item */}
          <div className="px-4 sm:px-12 pt-4 pb-8 border-b border-stone-900 flex flex-col items-center justify-center gap-2">
            <div
              className="text-white w-11 h-11 flex items-center justify-center"
              aria-hidden="true"
            >
              <SunShield />
            </div>
            <h5 className="font-sans text-xs sm:text-base font-bold text-white/90 text-center leading-relaxed tracking-wide">
              Tires optimized for rough Texas roads.
            </h5>
          </div>

          {/* 3. Bottom Left Item */}
          {/* Stripped w-35 and negative translates so it expands evenly with the grid */}
          <div className="pt-2 sm:pt-5 border-r border-stone-900 flex flex-col items-center justify-center gap-1 px-3 sm:px-5">
            <div
              className="text-white/90 w-11 h-11 flex items-center justify-center"
              aria-hidden="true"
            >
              <Time />
            </div>
            <h5 className="font-sans text-xs sm:text-base font-bold text-white/90 text-center leading-relaxed tracking-wide">
              No waiting rooms or dealership lineups.
            </h5>
          </div>

          {/* 4. Bottom Right Item */}
          {/* Replaced static padding with perfect flex centering */}
          <div className="p-4 flex items-center justify-center mt-6">
            <Link
              href="/contact"
              className="group text-center text-white/90 w-full"
            >
              <h5 className="font-display uppercase leading-normal tracking-wide text-center sm:text-lg">
                Spec your{" "}
                {/* This span ensures "fleet" and the icon stay glued together no matter what */}
                <span className="inline-flex items-center gap-1 whitespace-nowrap">
                  fleet
                  <span
                    className="text-white/70 group-hover:translate-x-1 transition-transform duration-200 mt-1"
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
