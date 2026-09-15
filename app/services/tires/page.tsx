"use client";
import React from "react";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  Wrench,
  PackageCheck,
  Truck,
  CreditCard,
  FileText,
  CheckSquare,
  ClipboardClock,
} from "lucide-react";

import Chevrons from "@/app/components/ui/Chevrons";

const LOGISTICS_OPTIONS = [
  {
    title: "Procurement",
    subtitle: "Direct Volume Pricing",
    description:
      "Tiered discount structures engineered for multi-vehicle fleets, municipal contracts, and agricultural operations.",
    icon: CreditCard,
    iconStyles: "translate-y-2 -translate-x-2",
    bullets: ["Scaled quantity brackets", "Direct quote generation"],
  },
  {
    title: "Fulfillment",
    subtitle: "Bulk Site Delivery",
    description:
      "Scheduled drop-ship dispatch directly to field yards, maintenance shops, or regional terminal locations.",
    icon: Truck,
    iconStyles: "translate-y-3 -translate-x-4",
    bullets: ["Scheduled yard drop-off", "Regional freight options"],
  },
  {
    title: "Accounts",
    subtitle: "Commercial Accounts",
    description:
      "Custom billing terms, consolidated invoicing, and dedicated rep support for recurring fleet purchasing.",
    icon: PackageCheck,
    iconStyles: "translate-y-3 -translate-x-2",
    bullets: ["Net-30 invoicing terms", "Dedicated account rep"],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Submit Specifications",
    description:
      "Provide your required tire sizes, axle positions, quantity, and operational timeline through our direct request form.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Review Quote & Options",
    description:
      "Receive tailored fitment availability, transparent volume pricing brackets, and flexible fulfillment terms for written approval.",
    icon: CheckSquare,
  },
  {
    step: "03",
    title: "Confirm & Dispatch",
    description:
      "Select your fulfillment preference—shop installation, site delivery, or mobile dispatch—and lock in your confirmed service slot.",
    icon: ClipboardClock,
  },
];

export default function Tires() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveIndex(index);
  };

  const scrollTo = (idx: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pl-10 pr-10 relative h-[80vh] w-full flex flex-col items-start justify-center bg-stone-900 text-white/90 font-display mb-30">
        <h1 className="text-[38px] md:text-6xl z-10 leading-14 mt-50">
          <span className="text-red-800">Tires</span> tailored for independent
          operators and commercial fleets.
        </h1>
        <div className="absolute -translate-y-17 bottom-0 md:bottom-0.5 -left-6 md:-left-5 lg:-left-3.5 text-stone-600 -translate-x-4 pointer-events-none z-10">
          <svg
            className="w-80 md:w-85 lg:w-95 h-10 md:h-10"
            viewBox="0 0 320 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <path
              d="
              M10 32L22 0H32L20 32H10Z
              M30 32L42 0H52L40 32H30Z
              M50 32L62 0H72L60 32H50Z
              M70 32L82 0H92L80 32H70Z
              M90 32L102 0H112L100 32H90Z
              M110 32L122 0H132L120 32H110Z
              M130 32L142 0H152L140 32H130Z
              M150 32L162 0H172L160 32H150Z
              M170 32L182 0H192L180 32H170Z
              M190 32L202 0H212L200 32H190Z
              M210 32L222 0H232L220 32H210Z
              M230 32L242 0H252L240 32H230Z
              M250 32L262 0H272L260 32H250Z
              M270 32L282 0H292L280 32H270Z
              M290 32L302 0H312L300 32H290Z
            "
              fill="currentColor"
            />
          </svg>
        </div>
        <p className="z-10 mt-28 ml-0.5 bg-gradient-to-r from-white/90 via-stone-400 to-stone-500 bg-clip-text text-transparent text-base font-sans font-extrabold leading-8">
          Request direct volume pricing, bulk delivery, or commercial account
          setup for your fleet or farm operation.
        </p>

        {/* Bottom gradient overlay to blend into the next section */}
        <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />
      </section>

      {/* Main Route Content */}
      <section className="flex-1 text-stone-100 mt-10 mb-15 mx-5 mr-10 p-4 pr-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between pb-4 mb-4 mt-5">
            <h2 className="text-[18px] font-sans text-stone-400 tracking-wider uppercase pl-2 leading-8">
              Application Categories & Capabilities
            </h2>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="ml-2 text-red-800 font-mono text-sm mt-1">
                  <Wrench className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-white font-medium text-base">
                    Commercial Highway & Trailer
                  </h3>
                  <p className="text-stone-400 font-sans text-sm mt-2 leading-relaxed">
                    Over-the-road steer, drive, and trailer fitments engineered
                    for high mileage, fuel efficiency, and heavy axle loads.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="ml-2 text-red-800 font-mono text-sm mt-1">
                  <Wrench className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-white font-medium text-base">
                    Heavy Equipment & Off-Road
                  </h3>
                  <p className="text-stone-400 font-sans text-sm mt-2 leading-relaxed">
                    Severe-duty construction, earthmoving, and industrial
                    equipment tires built to resist punctures and site abrasion.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="ml-2 text-red-800 font-mono text-sm mt-1">
                  <Wrench className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-white font-medium text-base">
                    Agricultural & Farm Fleet
                  </h3>
                  <p className="text-stone-400 font-sans text-sm mt-2 leading-relaxed">
                    High-traction tractor, implement, and flotation options
                    optimized for field work and soil compaction management.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="ml-2 text-red-800 font-mono text-sm mt-1">
                  <Wrench className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-white font-medium text-base">
                    Light Truck & Commercial Van
                  </h3>
                  <p className="text-stone-400 font-sans text-sm mt-2 leading-relaxed">
                    Heavy load-rated tires for municipal fleets, trade vans, and
                    regional pickup/delivery service trucks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchasing & Logistics Section with Horizontal Scroll & Pagination */}
      <section className="w-full bg-stone-900/30 py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section Header */}
          <div className="flex items-center justify-between pl-5 pb-2 mb-4 max-w-[300px]">
            <h2 className="text-[18px] md:text-2xl font-sans text-stone-400 tracking-wide uppercase">
              Purchasing & Logistics Options
            </h2>
          </div>

          {/* Full-bleed scroll track spanning 100vw while breaking out of max-w container */}
          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 md:gap-8 pl-6 sm:pl-10 md:pl-13 pb-4 scroll-pl-6 sm:scroll-pl-10 md:scroll-pl-13 after:content-[''] after:w-10 after:flex-shrink-0"
            >
              {LOGISTICS_OPTIONS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="w-[80vw] max-w-[340px] md:w-[calc(33.333%-16px)] shrink-0 snap-start p-5 sm:p-6 rounded-xl bg-stone-950 border border-stone-800/60 backdrop-blur-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-2xl font-semibold text-olive-600 font-display tracking-wider">
                          {item.title}
                        </p>
                        <Icon
                          className={`w-10 h-10 text-stone-400 stroke-[1.5] ${item.iconStyles}`}
                        />
                      </div>
                      <p className="text-sm lg:text-base font-extrabold text-stone-200 mt-1 lg:mt-3">
                        {item.subtitle}
                      </p>
                      <p className="text-xs lg:text-sm text-stone-400 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <ul className="mt-4 pt-4 border-t border-stone-800/60 space-y-2 font-mono text-xs text-stone-400">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-olive-500 rounded-full shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Pagination Indicators (Mobile Only) */}
            <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
              {LOGISTICS_OPTIONS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-6 bg-red-900/50"
                      : "w-2 bg-stone-700/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-stone-950/40 py-13">
        <div className="max-w-7xl mx-auto px-11 md:px-10">
          {/* Section Header */}
          <div className="pb-6 mb-4">
            <h2 className="text-[18px] md:text-2xl font-sans text-stone-400 tracking-wider uppercase max-w-[250px]">
              How Procurement Works
            </h2>
          </div>

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-6 md:gap-4">
            {PROCESS_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={item.step}>
                  {/* Step Card */}
                  <div className="p-7 sm:p-8 rounded-xl bg-stone-900/30 border border-stone-800/50 backdrop-blur-sm flex flex-col justify-between relative overflow-hidden group hover:border-stone-700/80 transition-colors h-full">
                    <div>
                      {/* Top Bar: Icon */}
                      <div className="flex items-center justify-center mb-2 -mt-2">
                        <div className="p-3 rounded-lg bg-transparent text-stone-400">
                          <Icon
                            className={`w-10 h-10 stroke-[1.75] ${
                              item.step === "01"
                                ? "[&>path:nth-child(3)]:stroke-olive-500 [&>path:nth-child(4)]:stroke-olive-500 [&>path:nth-child(5)]:stroke-olive-500"
                                : item.step === "02"
                                  ? "[&>path:nth-child(2)]:stroke-olive-500 [&>path:nth-child(4)]:stroke-olive-500"
                                  : "[&>path:nth-child(1)]:stroke-olive-500"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Heading & Paragraph */}
                      <h3 className="text-lg font-semibold text-white font-sans tracking-wide text-center">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-400 mt-3 leading-relaxed text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Inter-card Chevron Divider (Only renders between cards 1-2 & 2-3) */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="flex items-center justify-center py- md:py-0 text-stone-600">
                      {/* Horizontal Chevron for Desktop, Rotated Downward for Mobile */}
                      <Chevrons className="w-10 h-10 md:w-8 md:h-8 stroke-[1.5] rotate-90 md:rotate-0 text-red-900/30" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <section className="flex-1 w-full bg-stone-950 text-zinc-100 py-20 px-12 border-t border-stone-800/40 mt-5">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl font-sans font-semibold bg-gradient-to-r from-white/90 via-stone-400 to-stone-500 bg-clip-text text-transparent tracking-wide uppercase">
            Ready to Lock In Your Fleet Procurement?
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base text-stone-400 mt-12 max-w-xl leading-relaxed">
            Submit your tire specifications, required quantities, and delivery
            window. Our dispatch team will review your fitment details and
            return an itemized quote.
          </p>

          {/* Final CTA Button (Triggers Centralized Form / Route) */}
          <div className="mt-7.5 w-full sm:w-auto">
            <Link href="/contact?service=curation_sourcing&onsite">
              <button className=" sm:w-auto px-6 py-4 rounded-md bg-red-800/80 hover:bg-white text-white font-extrabold text-md tracking uppercase flex items-center justify-center gap-3 transition-colors shadow-lg active:scale-[0.98]">
                <span>Request Tire Quote</span>
                <Chevrons className="w-4 h-4 mt-0.5" />
              </button>
            </Link>
          </div>
             <p className="font-mono text-[11px] text-stone-600 mt-5 tracking-wider uppercase max-w-[250px]">
         
            Special-order sourcing based on availability • customer
            specifications
          </p>
        </div>
      </section>
    </div>
  );
}
