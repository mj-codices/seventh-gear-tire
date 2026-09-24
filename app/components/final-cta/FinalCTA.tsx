import Link from "next/link";
import Chevrons from "../ui/Chevrons";
import TireAndClock from "../ui/TireAndClock";
import TireServiceIcon from "../ui/TireAndTool";
import NavTruck from "../ui/NavTruck";
import ComingSoonBadge from "../ui/ComingSoonBadge";

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-stone-950 py-20 md:py-30 border-t border-stone-900">
      <div className="container relative mx-auto px-10.5 sm:px-6 lg:px-8 max-w-4xl text-center">
        {/* Section Heading */}
        <h2 className="font-display mx-auto text-2xl sm:text-3xl lg:text-4xl text-white/90 uppercase tracking-wide max-w-sm lg:max-w-md lg:leading-12">
          Tell Us What You Operate and What You Need
        </h2>

        {/* Informational Blurb */}
        <p className="mt-4 md:mt-8 text-sm md:text-base lg:text-lg text-stone-400 leading-relaxed lg:leading-8 max-w-2xl lg:max-w-3xl mx-4 sm:mx-40">
          Send us your tire size, equipment information, quantity, preferred
          service location, and timing. We will confirm available options and
          provide a clear quote before the order or appointment is finalized.
        </p>

        {/* Direct Link to Request Form */}
        <div className="mt-8 md:mt-12 lg:mt-15 flex justify-center">
          {/* 1. MOBILE & TABLET CTA (Visible up to md, hidden on lg+) */}
          <div className="block lg:hidden">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-5 px-7 py-4 bg-red-800/80 text-white font-extrabold uppercase tracking-wider text-base rounded-md transition-colors border-2 border-red-900 border-opacity-80"
            >
              <span>Request Quote</span>
              <span className="mt-0.5" aria-hidden="true">
                <Chevrons className="text-white/90" />
              </span>
            </Link>
          </div>

          {/* 2. DESKTOP CTA (Hidden on mobile/tablet, visible on lg+) */}
          <div className="hidden lg:flex flex-row items-center justify-center gap-3 w-full max-w-5xl">
            {/* Button 1: Fleet & Distribution (Active) */}
            <Link href="/contact?service=fleet" className="flex-1 max-w-[200px]">
              <button className="group relative w-full h-13 bg-transparent border-2 border-white text-white font-extrabold rounded-md uppercase tracking-tight lg:text-sm transition duration-300 hover:bg-red-900 hover:border-red-900 cursor-pointer overflow-hidden">
                {/* Default Idle Text */}
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full px-2">
                  Fleet & Distribution
                </span>
                {/* Hover State: "Schedule Now" + Fleet Icon */}
                <span className="absolute inset-0 flex items-center justify-center gap-1.5 translate-y-full transition-transform duration-300 group-hover:translate-y-0 px-2">
                  <span>Schedule Now</span>
                  <NavTruck className="w-10 h-10 flex-shrink-0" />
                </span>
              </button>
            </Link>

            {/* Button 2: Shop Services (Disabled) */}
            <div className="relative flex-1 max-w-[200px]">
              <button
                disabled
                className="relative w-full h-13 bg-transparent border-2 border-white/40 text-white/40 font-extrabold rounded-md uppercase tracking-tight lg:text-sm opacity-50 overflow-hidden select-none cursor-not-allowed"
              >
                <span className="absolute inset-0 flex items-center justify-center px-2">
                  Shop Services
                </span>
              </button>
              <ComingSoonBadge className="-top-3 -right-3" />
            </div>

            {/* Button 3: Mobile Services (Disabled) */}
            <div className="relative flex-1 max-w-[200px]">
              <button
                disabled
                className="relative w-full h-13 bg-transparent border-2 border-white/40 text-white/40 font-extrabold rounded-md uppercase tracking-tight lg:text-sm opacity-50 overflow-hidden select-none cursor-not-allowed"
              >
                <span className="absolute inset-0 flex items-center justify-center px-2">
                  Mobile Services
                </span>
              </button>
              <ComingSoonBadge className="-top-3 -right-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}