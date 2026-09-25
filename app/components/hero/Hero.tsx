"use client";

import { useState } from "react";
import Link from "next/link";
import NavTruck from "../ui/NavTruck";
import TireServiceIcon from "../ui/TireAndTool";
import TireAndClock from "../ui/TireAndClock";
import ServiceDrawer from "./ServiceDrawer";
import Chevrons from "../ui/Chevrons";
import ComingSoonBadge from "../ui/ComingSoonBadge";

export default function Hero() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <section className="relative h-svh w-full flex flex-col justify-center p-8 sm:p-14 md:p-16 lg:p-19 xl:p-30 bg-stone-900 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 hero-video-container">
        <video
          src="/tire_01.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60 hero-video-container"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
      </div>

      {/* Content Stack */}
      <div className="relative z-10 w-full max-w-2xl space-y-5 lg:space-y-0 mb-10 max-[380px]:mt-20 mt-30">
        <h1 className="font-display text-[50px] lg:text-7xl font-extrabold tracking-wider text-white/80">
          <span className="block text-red-800 leading-12 lg:leading-22">
            Commercial Tires.
          </span>

          <span className="block text-[25px] lg:text-[40px] tracking-[.05rem] leading-8 lg:leading-12 mt-3 pl-1 text-white/90 max-w-sm lg:max-w-lg">
            Sold, Installed, or Delivered Where You Need Them.
          </span>
        </h1>

        <p className="pl-1.5 text-stone-300 leading-5.5 lg:leading-9 lg:text-xl lg:py-6 tracking-[.05rem] max-w-lg">
          Source commercial tires directly for your business, shop, or
          operation. Get competitive pricing, rapid fulfillment, and reliable
          delivery scaled to fit your fleet, farm, equipment, or job site.
        </p>

        {/* CTA Container */}
        <div className="pt-4 pl-2 md:pl-2 pr-15 max-w-sm">
          {/* MOBILE ONLY: Single CTA Button to Trigger Drawer */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden w-full h-14 bg-red-800/80 text-white font-extrabold rounded-md uppercase tracking-wide text-base transition duration-300 shadow-lg active:scale-[0.99] cursor-pointer flex items-center justify-center gap-6 border-2 border-red-900 border-opacity-80"
          >
            <span>Start Request</span>
            <span className="rotate-270 -mb-0.5">
              <Chevrons className="text-white/90 w-4.5 h-4.5" />
            </span>
          </button>

          {/* TABLET / DESKTOP ONLY: 3 Side-by-Side Horizontal Buttons */}
          <div className="hidden lg:flex flex-row items-center gap-3 w-full max-w-xl pl-1">
            {/* Button 1: Fleet & Sourcing (Active) */}
            <Link href="/contact?service=curation_sourcing&onsite">
              <button className="group relative w-full max-w-sm py-5 px-22 bg-transparent border-2 border-white text-white rounded-md uppercase font-extrabold tracking-tight text-xs sm:text-sm transition duration-300 hover:bg-red-900 hover:border-red-900 cursor-pointer overflow-hidden">
                {/* Default Idle Text */}
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Fleet & Distribution
                </span>
                {/* Hover State: "Schedule Now" + Fleet Icon */}
                <span className="absolute inset-0 flex items-center justify-center gap-1.5 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <span>Schedule Now</span>
                  <NavTruck className="w-10 h-10" />
                </span>
              </button>
            </Link>

            {/* Button 2: Shop Services (Disabled / Nullified) */}
            <div className="relative select-none">
              <button
                tabIndex={-1}
                aria-disabled="true"
                className="cursor-not-allowed relative w-full py-5.5 px-20 bg-transparent outline outline-2 outline-white/20 -outline-offset-2 text-white/50 font-extrabold rounded-md uppercase tracking-tight text-xs sm:text-sm overflow-hidden"
              >
                {/* Text gets its own muted opacity */}
                <span className="absolute inset-0 flex items-center justify-center opacity-40">
                  Shop Services
                </span>

                {/* Badge stays full opacity (100%) */}
                <ComingSoonBadge className="px-5 top-2.5 -right-2 opacity-70 rotate-[28deg]" />
              </button>
            </div>

            {/* Button 3: Onsite Repair (Disabled / Nullified) */}
            <div className="relative select-none">
              <button
                tabIndex={-1}
                aria-disabled="true"
                className="cursor-not-allowed relative w-full py-5.5 px-21 bg-transparent outline outline-2 outline-white/20 -outline-offset-2 text-white/20 font-extrabold rounded-md uppercase tracking-tight text-xs sm:text-sm overflow-hidden"
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  Mobile Repair
                </span>
                <ComingSoonBadge className="px-5 top-2.5 -right-2 opacity-70 rotate-[28deg]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Component */}
      <ServiceDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </section>
  );
}
