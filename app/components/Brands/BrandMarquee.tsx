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
    <div className="relative w-full bg-stone-900 pb-20 pt-1 overflow-hidden">
      {/* 1. Added w-max to force the container to be as wide as both rows combined */}
      <motion.div
        className="flex whitespace-nowrap w-max pt-10"
        animate={{ x: [0, "-50%"] }} // 2. Changed from -100% to -50%
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {/* First Loop Pass - Added flex-shrink-0 */}
        <div className="flex items-center gap-20 pr-20 flex-shrink-0">
          {brands.map((brand, idx) => (
            <span
              key={`track1-${idx}`}
              className={`${brand.style} text-3xl text-stone-500 select-none transition-colors duration-300 hover:text-stone-300`}
            >
              {brand.name}
            </span>
          ))}
        </div>

        {/* Second Loop Pass - Added flex-shrink-0 */}
        <div
          className="flex items-center gap-20 pr-20 flex-shrink-0"
          aria-hidden="true"
        >
          {brands.map((brand, idx) => (
            <span
              key={`track2-${idx}`}
              className={`${brand.style} text-3xl text-stone-500 select-none transition-colors duration-300 hover:text-stone-300`}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 
        Top Layer: The main card container. 
        Instead of a fixed height, we let content dictate it to prevent text clipping on small screens.
      */}
      <div className="relative mx-auto mt-20 w-[calc(100%-3rem)] rounded-md bg-stone-950 px-10 py-20 border-l border-r border-stone-800/40 drop-shadow-xl">
        <div className="grid grid-cols-2 border-stone-800">
          {/* Top Left Item */}
          <div className="p-2 border-r border-b border-stone-900/60 space-y-1 mt-2">
            <div className="text-white/85 mx-auto pl-4" aria-hidden="true">
              {/* Truck Icon */}
              <Truck />
            </div>
            <h5 className="pr-3 font-sans text-xs font-bold text-stone-400/80 text-center leading-relaxed tracking-wide">
              Focused on light, medium, and heavy-duty fleets.
            </h5>
          </div>

          {/* Top Right Item */}
          <div className="p-2 border-b border-stone-900/60 pl-6 pb-5 flex flex-col items-center justify-start gap-2.5">
            {/* The Icon Wrapper: Forces explicit sizing and centering for the custom component */}
            <div
              className="text-white/85 w-11 h-11 flex items-center justify-center flex-none mt-1.5 mr-1"
              aria-hidden="true"
            >
              {/* Highway Route Icon */}
              <SunShield />
            </div>

            {/* The Text Block */}
            <h5 className="font-sans text-xs font-bold text-stone-400/80 text-center leading-relaxed tracking-wide">
              Sourcing tires optimized for rough Texas roads.
            </h5>
          </div>

          {/* Bottom Left Item */}

          <div className="p-5 pt-8 pl-2 border-r border-stone-900/60 flex flex-col items-center justify-start gap-2">
            {/* The Icon Wrapper: force explicit sizing and flex compression protection */}
            <div
              className="text-white/80 w-11 h-11 flex items-center justify-center flex-none mr-1.5"
              aria-hidden="true"
            >
              {/* Clock / Speed Icon Placeholder */}
              <Time />
            </div>

            {/* The Text Block */}
            <h5 className="font-sans text-xs font-bold text-stone-400/80 text-center leading-relaxed tracking-wide">
              No waiting rooms or dealership lineups.
            </h5>
          </div>

          {/* Bottom Right Item */}
          <div className="border-stone-800/50 pt-10 pl-1.5 flex items-center">
            <Link
              href="/contact"
              className="group inline-block text-center text-white/90 max-w-[180px]"
            >
              {/* The heading wrapper is styled as an inline container */}
              <h5 className="font-display uppercase leading-normal inline">
                Spec your fleet
                {/* The Chevron span sits natively INSIDE the inline text flow */}
                <span
                  className="flex translate-x-20.5 -translate-y-5"
                  aria-hidden="true"
                >
                  <Chevrons />
                </span>
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
