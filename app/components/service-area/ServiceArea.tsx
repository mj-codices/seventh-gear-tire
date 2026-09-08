"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Tractor, HardHat, Container, Info } from "lucide-react";
import Image from "next/image";

// Mock data structure for primary zones
const SERVICE_ZONES = [
  {
    id: "primary",
    name: "Primary Hub & Shop Zone",
    radius: "0 – 30 Miles",
    description:
      "Includes Abilene city limits and immediate surrounding metro areas. Standard shop rates and direct delivery.",
    locations: ["Abilene", "Potosi", "Eula", "Tye", "Hawley"],
    highlight: true,
  },
  {
    id: "extended",
    name: "Extended Mobile & Fleet Zone",
    radius: "30 – 75+ Miles",
    description:
      "Scheduled job-site, farm, ranch, and fleet yard mobile installations. Travel fees may apply based on mileage.",
    locations: [
      "Sweetwater",
      "Anson",
      "Clyde",
      "Baird",
      "Breckenridge",
      "Ballinger",
    ],
    highlight: false,
  },
];

const PROPERTY_TYPES = [
  {
    icon: Truck,
    title: "Fleet Yards & Staging",
    desc: "Scheduled multi-vehicle tire installs and fleet yard maintenance.",
  },
  {
    icon: Tractor,
    title: "Farms & Ranches",
    desc: "On-site agricultural, tractor, and heavy implement tire support.",
  },
  {
    icon: HardHat,
    title: "Construction Sites",
    desc: "Planned tire service for earthmovers, OTR, and work-truck fleets.",
  },
  {
    icon: Container,
    title: "Logistics Terminals",
    desc: "Pre-arranged inventory replacement and freight yard servicing.",
  },
];

export default function ServiceArea() {
  const [activeZone, setActiveZone] = useState<string | null>("primary");

  return (
    <section className="relative w-full bg-stone-950 py-20 overflow-hidden">
      {/* Background ambient accents */}

      <div className="container relative mx-auto px-10.5 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <h2 className="text-base uppercase tracking-[.3rem] text-stone-400 sm:text-4xl">
            Coverage
          </h2>
          <h3 className="mt-5 font-display text-[25px] leading-8 text-white/90">
            Serving the <span className="text-red-800">Greater Abilene</span>{" "}
            Area.
          </h3>
        </div>

        {/* Main Grid: Visual Map Slot (Left) + Region Data (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* MAP / VISUAL CONTAINER SLOT (OUTER SHELL) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-stone-900/20 rounded-2xl p-2.5 lg:p-4 border border-stone-900 flex flex-col group"
          >
            {/* INNER MAP CONTAINER */}
            <div className="relative w-full h-full min-h-[250px] lg:min-h-[480px] rounded-xl overflow-hidden flex flex-col justify-between">
              {/* Full-bleed background image */}
              <Image
                src="/map.jpg"
                alt="7th Gear Tire Works Regional Service Coverage Map"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center z-0 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay gradient to maintain text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-stone-950/60 z-10 pointer-events-none" />

              {/* Content wrapper */}
              <div className="relative z-20 p-6 flex flex-col justify-between h-full w-full flex-1">
                {/* Your map overlay text, badges, or legend elements go here */}
              </div>
            </div>
          </motion.div>

          {/* REGIONAL DATA & CARD SELECTOR (RIGHT) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="mt-10 lg:mt-0 ml-2 text-[22px] text-white/90 font-display">
              Where your fleet works, we deliver.
            </p>

            {/* Property Types Split Bullet List */}
            <div className="ml-3 mt-6 flex flex-col gap-4 font-sans">
              {/* Row 1 */}
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 font-bold text-xs sm:text-base text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-700 flex-shrink-0" />
                  <span>Fleet yards & vehicle staging facilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-700 flex-shrink-0" />
                  <span>Farms, ranches & agricultural land</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-700 flex-shrink-0" />
                  <span>Active construction & job-site locations</span>
                </li>
              </ul>

              {/* Row 2 */}
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 font-bold text-xs sm:text-base text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-700 flex-shrink-0" />
                  <span>Logistics, freight & distribution terminals</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-700 flex-shrink-0" />
                  <span>Commercial transit & delivery corridors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SERVICE AREA DISCLAIMER CARD (BOTTOM) */}
   <div className="mt-8 ml-2.5 border-t border-stone-900 pt-5 flex flex-col gap-6 font-sans text-xs text-stone-500">
  <div className="flex items-start gap-3">
    <Info className="w-4 h-4 text-olive-700 flex-shrink-0 mt-0.5" />
    <p>
      <span className="font-semibold text-stone-300">Scheduled Service Scope:</span>{" "}
      Mobile installation and deliveries are scheduled in advance across our regional coverage area—not an emergency roadside response service.
    </p>
  </div>

  <div className="flex items-start gap-3    ">
    <Info className="w-4 h-4 text-olive-700 flex-shrink-0 mt-0.5" />
    <p>
      <span className="font-semibold text-stone-300">Travel Fees & Rates:</span>{" "}
      Travel fees and minimum service charges depend on mileage, site conditions, and volume, fully itemized on your written quote before confirmation.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}
