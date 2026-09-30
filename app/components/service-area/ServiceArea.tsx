"use client";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import Image from "next/image";

export default function ServiceArea() {
  return (
    <section 
    id="service"
    className="scroll-mt-20 relative w-full bg-stone-950 py-15 md:pt-25 md:pb-15 overflow-hidden">
      {/* Background ambient accents */}

      <div className="relative w-full px-10.5 sm:px-17 md:px-21 lg:px-24 xl:px-33">
        {/* Section Header */}
        <div className="max-w-md mb-10 md:mb-4">
          <h2 className="text-base md:text-[27px] uppercase tracking-[.3rem] text-stone-400">
            Coverage
          </h2>
          <h3 className="mt-5 font-display text-[25px] leading-8 lg:leading-10 text-white/90 max-w-[330px]">
            Serving the greater Abilene, TX region.
          </h3>
        </div>
        <p className="mt-8 mb-3 text-xs font-mono text-stone-600">
          On-site service within a 90-minute dispatch radius from Abilene.
        </p>

        {/* Main Grid: Visual Map Slot (Left) + Region Data (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* MAP / VISUAL CONTAINER SLOT (OUTER SHELL) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-stone-900/20 rounded-2xl p-2.5 lg:p-4 border border-stone-900 max-w-md md:max-w-lg lg:max-w-2xl w-full"
          >
            {/* INNER MAP CONTAINER */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-full lg:min-h-[500px] rounded-xl overflow-hidden">
              {/* Mapbox Canvas */}
              <div

                className="absolute inset-0 z-0 w-full h-full"
              />
                <Image
                  src="/map.png"
                  alt="Service Area Map"
                  fill
                  className="object-cover"
                />
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-stone-950/40 z-10 pointer-events-none" />
            </div>
          </motion.div>

          {/* REGIONAL DATA & CARD SELECTOR (RIGHT) */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:ml-8 xl:pr-10">
            <p className="mt-8 md:mt-15 lg:-mt-30 text-xl font-bold text-white/90">
              Where your fleet works, we deliver.
            </p>

            {/* Property Types Split Bullet List */}
            <div className="ml-1 lg:ml-6 mt-4 font-sans">
              <ul className="flex flex-col gap-y-4 md:gap-y-6 font-bold text-xs md:text-base text-white/90">
                <li className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-red-700 shrink-0" />
                  <span>Fleet yards &amp; vehicle staging facilities</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-red-700 shrink-0" />
                  <span>Farms, ranches &amp; agricultural land</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-red-700 shrink-0" />
                  <span>Active construction &amp; job-site locations</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-red-700 shrink-0" />
                  <span>Logistics, freight &amp; distribution terminals</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-red-700 shrink-0" />
                  <span>Commercial transit &amp; delivery corridors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SERVICE AREA DISCLAIMER CARD (BOTTOM) */}
        <div className="ml-1.5 mt-6 md:mt-12 border-t lg:border-none border-stone-900 pt-6 md:pt-12 flex flex-col gap-4 font-sans text-xs md:text-sm lg:text-base text-stone-500">
          <div className="flex items-start gap-3 md:gap-6 max-w-2xl">
            <Info className="w-4 h-4 md:w-6 md:h-6 text-olive-500 flex-shrink-0 mt-0.5" />
            <p>
              <span className="font-semibold text-stone-300">
                Scheduled Service Scope:
              </span>{" "}
              Mobile installation and deliveries are scheduled in advance across
              our regional coverage area—not an emergency roadside response
              service.
            </p>
          </div>

          <div className="flex items-start gap-3 md:gap-6 max-w-2xl">
            <Info className="w-4 h-4 md:w-6 md:h-6 text-olive-500 flex-shrink-0 mt-0.5" />
            <p>
              <span className="font-semibold text-stone-300">
                Travel Fees & Rates:
              </span>{" "}
              Travel fees and minimum service charges depend on mileage, site
              conditions, and volume, fully itemized on your written quote
              before confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
