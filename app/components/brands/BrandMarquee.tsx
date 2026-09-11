"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CalendarClock,
  Layers,
  ChevronsRight,
} from "lucide-react";

const categories = [
  "Commercial Truck & Trailer",
  "Scheduled Mobile Installation",
  "Agricultural & Heavy Equipment",
  "Shop Tire & Light Mechanical",
  "Light Commercial & Hotshot Rigs",
  "Direct Fleet Supply & Sourcing",
  "Off-Road & OTR Applications",
];

const PROMISES = [
  {
    tag: "Spec",
    title: "Verified Fitment",
    desc: "Application-matched tread options aligned with factory weight ratings and load specs.",
    icon: ShieldCheck,
  },
  {
    tag: "Flex",
    title: "Coordinated Dispatch",
    desc: "Scheduled deployment and route routing aligned directly with active fleet timelines.",
    icon: CalendarClock,
  },
  {
    tag: "Multi",
    title: "Channel Sourcing",
    desc: "Sourced through regional distributor networks with real-time stock and lead-time confirmation.",
    icon: Layers,
  },
];

export default function BrandMarquee() {
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Standard scroll listener for dot placement tracking
  const handleScroll = () => {
    const el = scrollTrackRef.current;
    if (!el) return;

    const cardWidth = el.scrollWidth / PROMISES.length;
    const scrollPos = el.scrollLeft;

    // Calculate active dot index (0, 1, or 2)
    const rawIndex = Math.round(scrollPos / cardWidth);
    const computedIndex = Math.min(Math.max(rawIndex, 0), PROMISES.length - 1);

    if (computedIndex !== activeIndex) {
      setActiveIndex(computedIndex);
    }
  };

  return (
    // Base Section Container (stone-900)
    <div className="relative w-full bg-stone-900 pb-10 md:pb-15 pt-1 overflow-hidden z-0">
      {/* 1. Category Marquee Track */}
      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
        }}
      >
        <motion.div
          className="flex whitespace-nowrap w-max pt-4.5 sm:pt-10 md:pt-10"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 55,
            repeat: Infinity,
          }}
        >
          {/* First Loop Pass */}
          <div className="flex items-center gap-12 sm:gap-16 flex-shrink-0 mr-12 sm:mr-16">
            {categories.map((category, idx) => (
              <div
                key={`track1-${idx}`}
                className="flex items-center gap-12 sm:gap-16"
              >
                <span className="font-display tracking-widest uppercase text-2xl font-bold text-stone-400/90 select-none">
                  {category}
                </span>
                <span
                  className="w-2 h-2 rounded-full bg-red-800 flex-shrink-0"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          {/* Second Loop Pass */}
          <div
            className="flex items-center gap-12 sm:gap-16 flex-shrink-0 mr-12 sm:mr-16"
            aria-hidden="true"
          >
            {categories.map((category, idx) => (
              <div
                key={`track2-${idx}`}
                className="flex items-center gap-12 sm:gap-16"
              >
                <span className="font-display tracking-widest uppercase text-2xl font-bold text-stone-400/90 select-none">
                  {category}
                </span>
                <span className="w-2 h-2 rounded-full bg-red-800 flex-shrink-0" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* MOBILE DISPLAY: Pure Card Track directly on stone-900 background */}
      <div className="block lg:hidden mt-10 w-screen relative left-1/2 -translate-x-1/2">
        {/* Full-bleed scroll track spanning 100vw */}
        <div
          ref={scrollTrackRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 md:gap-8 pl-6 sm:pl-10 md:pl-13 pb-4 scroll-pl-10 md:scroll-pl-14 after:content-[''] after:w-10 after:flex-shrink-0"
        >
          {PROMISES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="snap-start flex-shrink-0 w-[75vw] max-w-[320px] p-8 md:p-10 rounded-2xl bg-stone-950 border border-stone-800/80 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-olive-600 font-display tracking-wider">
                      {item.tag}
                    </span>
                    <div className="p-2 pt-6 rounded-lg text-stone-400">
                      <IconComponent className="w-10 h-10 text-olive-500" />
                    </div>
                  </div>
                  <p className="text-base font-bold text-stone-200 -mt-4">
                    {item.title}
                  </p>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Divider Line */}
                <div className="mt-6 pt-3 border-t border-stone-800/60" />
              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {PROMISES.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-6 bg-red-900" : "w-2 bg-stone-700/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP DISPLAY: Desktop Outer Shell with Background Image & Feature Grid */}
      <div className="hidden lg:block relative mx-auto mt-25 md:mt-20 sm:w-[calc(100%-7rem)] md:w-[calc(100%-9rem)] rounded-2xl bg-stone-950 px-6 pt-3 md:pt-15 pb-20 md:pb-20 border border-stone-700/50 drop-shadow-xl lg:drop-shadow-3xl">
        {/* Inner Card Container */}
        <div className="relative mx-auto mt-25 md:mt-5 sm:w-[calc(100%-6rem)] md:w-[calc(100%-4rem)] rounded-2xl bg-stone-950 px-6 sm:pt-15 md:pt-18 sm:pb-20 md:pb-15 drop-shadow-xl lg:drop-shadow-3xl overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/marquee.jpeg"
              alt=""
              fill
              sizes="(max-width: 1200px) 90vw, 1200px"
              className="object-cover object-[center_50%] opacity-20 mix-blend-luminosity"
              priority={false}
              loading="eager"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-800/10" />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10">
            {/* Header Block */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl xl:text-4xl font-bold text-white/80 leading-12 tracking-wider">
                <span className="bg-gradient-to-r from-stone-200 via-stone-400 to-stone-500 bg-clip-text text-transparent">
                  Streamlined sourcing, realistic availability, and coordinated
                  scheduling.
                </span>
              </h2>

              <p className="px-6 mt-6 text-base sm:text-lg text-stone-400 max-w-2xl font-normal leading-9 mx-auto">
                7th Gear Tire Works sources commercial and specialty tires
                through established distribution channels. Available brands and
                models vary by size, application, supplier inventory, customer
                preference, and lead time. Our team will present suitable
                options and confirm final availability with each quote.
              </p>
            </div>

            {/* Feature Grid Divider */}
            <div className="mx-auto border-2 w-full max-w-[300px] h-[3px] border-red-800 my-10 sm:mb-18 sm:mt-10" />

            {/* Feature Grid: Changed grid-cols to 4 on lg breakpoints */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="p-5 sm:p-6 rounded-xl bg-stone-900/50 border border-stone-800/60 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <p className="text-2xl font-semibold text-olive-600 font-display tracking-wider">
                    Spec
                  </p>
                  <p className="text-sm lg:text-base font-extrabold text-stone-200 mt-1 lg:mt-3">
                    Verified Fitment
                  </p>
                  <p className="text-xs lg:text-sm text-stone-400 mt-2 leading-relaxed">
                    Application-matched tread options aligned with factory
                    weight ratings and load specs.
                  </p>
                </div>
                <div className="lg:hidden mt-6 pt-3 border-t border-stone-800/60" />
              </div>

              {/* Card 2 */}
              <div className="p-5 sm:p-6 rounded-xl bg-stone-900/50 border border-stone-800/60 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <p className="text-2xl font-semibold text-olive-600 font-display tracking-wider">
                    Flex
                  </p>
                  <p className="text-sm lg:text-base font-extrabold text-stone-200 mt-1 lg:mt-3">
                    Coordinated Dispatch
                  </p>
                  <p className="text-x lg:text-sm text-stone-400 mt-2 leading-relaxed">
                    Scheduled deployment and route routing aligned directly with
                    active fleet timelines.
                  </p>
                </div>
                <div className="lg:hidden mt-6 pt-3 border-t border-stone-800/60" />
              </div>

              {/* Card 3 */}
              <div className="p-5 sm:p-6 rounded-xl bg-stone-900/50 border border-stone-800/60 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <p className="text-2xl font-semibold text-olive-600 font-display tracking-wider">
                    Multi
                  </p>
                  <p className="text-sm lg:text-base font-extrabold text-stone-200 mt-1 lg:mt-3">
                    Channel Sourcing
                  </p>
                  <p className="text-xs lg:text-sm text-stone-400 mt-2 leading-relaxed">
                    Sourced through regional distributor networks with real-time
                    stock and lead-time confirmation.
                  </p>
                </div>
                <div className="lg:hidden mt-6 pt-3 border-t border-stone-800/60" />
              </div>

              {/* Card 4: Interactive Link Card (Desktop Only via lg:grid-cols-4) */}
              <Link href="/contact" className="block h-full w-full">
                <div className="group h-full w-full p-5 sm:p-6 rounded-xl bg-stone-900/50 hover:bg-stone-900/70 border border-stone-800/60 hover:border-stone-800 backdrop-blur-sm transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center min-h-[180px]">
                  <p className="font-display tracking-wider uppercase text-stone-200 group-hover:text-white transition-colors max-[400px]:text-sm text-base sm:text-lg">
                    Spec your <br className="hidden md:inline" />
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                      <span>fleet</span>
                      <span className="transform translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500 ease-in-out text-red-800">
                        <ChevronsRight className="w-5 h-5" />
                      </span>
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
