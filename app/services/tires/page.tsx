"use client";
import React from "react";
import Image from "next/image";
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
    iconStyles: "translate-y-2 -translate-x-2 sm:translate-x-0",
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
      <section className="relative min-h-[80vh] w-full flex flex-col justify-center px-12 min-[500px]:px-20 sm:px-20 md:px-29 pt-30 md:pt-50 bg-stone-900 text-white/90 font-display mb-30 overflow-hidden">
        {/* Background Image Container with Left Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tires_route.png"
            alt="Commercial tire distribution background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark Left Vignette: Preserves solid darkness under the text column */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/85 to-transparent pointer-events-none z-10" />
        </div>
        <h1 className="text-4xl sm:text-5xl leading-13 sm:leading-snug max-w-[280px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[600px] z-30">
          <span className="text-red-800">Tires</span> tailored for independent
          operators and commercial fleets.
        </h1>
        {/* Hero Content */}
        <div className="z-10 flex flex-col items-start max-w-2xl relative">
          {/* 1. Main Heading */}

          {/* 2. Inline SVG Track / Divider */}
          <div className="my-10 sm:my-13 lg:my-18 -ml-17 sm:-ml-25 md:-ml-38 min-[500px]:-ml-25 text-stone-600 pointer-events-none w-full max-w-sm min-[400px]:max-w-md sm:max-w-xl md:max-w-2xl">
            <svg
              className="w-full h-10 sm:h-12 md:h-14"
              viewBox="0 0 320 32"
              preserveAspectRatio="none"
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
        </div>
        {/* 3. Subtext Paragraph - Original Gradient Intact */}
        <p className="bg-gradient-to-r from-white via-stone-200 to-stone-500 bg-clip-text text-transparent text-sm sm:text-base md:text-lg font-sans font-extrabold leading-8 max-w-[260px] sm:max-w-[290px] md:max-w-[320px] lg:max-w-[400px] z-20">
          Request direct volume pricing, bulk delivery, or commercial account
          setup for your fleet or farm operation.
        </p>
        {/* Bottom gradient overlay - Height trimmed to h-48/h-60 to avoid darkening the text */}
        <div className="absolute bottom-0 left-0 w-full h-48 sm:h-150 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none z-10" />
      </section>

      {/* Main Route Content */}
      <section className="flex-1 text-stone-100 mt-10 mb-15 md:mb-20 mx-5 min-[500px]:mx-15 mr-10 p-4 pr-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between pb-4 mb-4 md:mb-10 mt-5">
            <h2 className="text-[18px] sm:text-[25px] font-sans text-stone-400 tracking-wider uppercase pl-2 leading-8 sm:leading-11 max-w-[260px] sm:max-w-[350px]">
              Application Categories & Capabilities
            </h2>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <span className="ml-2 text-red-800 font-mono text-sm mt-1">
                  <Wrench className="h-4 w-4 sm:h-6 sm:w-6" />
                </span>
                <div>
                  <h3 className="text-white font-medium text-base sm:text-lg">
                    Commercial Highway & Trailer
                  </h3>
                  <p className="text-stone-400 font-sans text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed max-w-[260px] sm:max-w-[350px]">
                    Over-the-road steer, drive, and trailer fitments engineered
                    for high mileage, fuel efficiency, and heavy axle loads.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="ml-2 text-red-800 font-mono text-sm mt-1">
                  <Wrench className="h-4 w-4 sm:h-6 sm:w-6" />
                </span>
                <div>
                  <h3 className="text-white font-medium text-base sm:text-lg">
                    Heavy Equipment & Off-Road
                  </h3>
                  <p className="text-stone-400 font-sans text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed max-w-[260px] sm:max-w-[350px]">
                    Severe-duty construction, earthmoving, and industrial
                    equipment tires built to resist punctures and site abrasion.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <span className="ml-2 text-red-800 font-mono text-sm mt-1">
                  <Wrench className="h-4 w-4 sm:h-6 sm:w-6" />
                </span>
                <div>
                  <h3 className="text-white font-medium text-base sm:text-lg">
                    Agricultural & Farm Fleet
                  </h3>
                  <p className="text-stone-400 font-sans text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed max-w-[260px] sm:max-w-[350px]">
                    High-traction tractor, implement, and flotation options
                    optimized for field work and soil compaction management.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="ml-2 text-red-800 font-mono text-sm mt-1">
                  <Wrench className="h-4 w-4 sm:h-6 sm:w-6" />
                </span>
                <div>
                  <h3 className="text-white font-medium text-base sm:text-lg">
                    Light Truck & Commercial Van
                  </h3>
                  <p className="text-stone-400 font-sans text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed max-w-[260px] sm:max-w-[350px]">
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
      <section className="w-full bg-stone-900/30 py-10 sm:py-15 overflow-hidden">
        {/* Standard max-w-7xl centered container throughout */}
        <div className="max-w-7xl mx-auto px-17 sm:px-23 md:px-30 lg:px-28 xl:px-0 xl:ml-20">
          {/* Section Header with synced left gutter */}
          <div className="flex items-center pb-2 mb-4 sm:mb-8 md:mb-10 pl-0 lg:pl-0 xl:pl-3">
            <h2 className="text-[18px] sm:text-[25px] font-sans text-stone-400 tracking-wide uppercase leading-8 sm:leading-11 max-w-[300px] sm:max-w-[350px]">
              Purchasing & Logistics Options
            </h2>
          </div>

          {/* Full-bleed breaking container */}
          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 sm:gap-14 lg:gap-16 
             pl-12 sm:pl-15 md:pl-22 lg:pl-21 xl:pl-[max(3.5rem,calc((100vw-80rem)/2+0.25rem))] 
             pb-4 scroll-pl-12 sm:scroll-pl-15 md:scroll-pl-22 lg:scroll-pl-21 xl:scroll-pl-[max(3.5rem,calc((100vw-80rem)/2+3.75rem))] 
             after:content-[''] after:w-10 after:flex-shrink-0"
            >
              {LOGISTICS_OPTIONS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="w-[80vw] max-w-[315px] min-[500px]:max-w-[330px] sm:max-w-[400px] shrink-0 snap-start p-5 sm:p-8 rounded-xl bg-stone-950 border border-stone-800/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-2xl sm:text-3xl font-semibold text-olive-600 font-display tracking-wider">
                          {item.title}
                        </p>
                        <Icon
                          className={`w-10 h-10 sm:w-12 sm:h-12 text-stone-400 stroke-[1.5] ${item.iconStyles}`}
                        />
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-stone-200 mt-1 lg:mt-3">
                        {item.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-stone-400 mt-2 sm:mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <ul className="mt-4 pt-4 border-t border-stone-800/60 space-y-2 sm:space-y-4 font-mono text-xs sm:text-sm text-stone-400">
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
            <div className="flex items-center justify-center gap-2 mt-4 md:mt-8 xl:hidden">
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
        <div className="max-w-7xl mx-auto px-11 min-[500px]:px-12.5 md:px-22 lg:px-21 xl:px-1 xl:mx-20">
          {/* Section Header */}
          <div className="pb-6 md:pb-8 mb-4 pl-4 md:pl-7 lg:pl-8 xl:pl-0">
            <h2 className="text-[18px] sm:text-[25px] md:text-2xl font-sans text-stone-400 tracking-wider uppercase max-w-[250px] sm:max-w-[350px] md:max-w-[340px] sm:leading-11">
              How Procurement Works
            </h2>
          </div>

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-6 md:gap-5">
            {PROCESS_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={item.step}>
                  {/* Step Card */}
                  <div className="p-7 sm:p-10 md:pb-15 rounded-xl bg-stone-900/30 border border-stone-800/50 flex flex-col justify-between relative overflow-hidden h-full">
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
                      <Chevrons className="w-10 h-10 md:w-12 md:h-12 stroke-[1.5] rotate-90 lg:rotate-0 text-red-900/30" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <section className="flex-1 w-full bg-stone-950 text-zinc-100 py-20 md:py-30 lg:pt-30 lg:pb-15 px-12 min-[500px]:px-18 md:px-22 border-t border-stone-800/40 mt-5">
        <div className="max-w-7xl mx-auto lg:flex lg:flex-col lg:items-center lg:text-center">
          {/* Main Heading */}
          <h2 className="max-w-[280px] md:max-w-[360px] lg:max-w-2xl text-2xl sm:text-3xl md:text-4xl font-sans font-semibold bg-gradient-to-r from-white/90 via-stone-400 to-stone-500 bg-clip-text text-transparent tracking-wide uppercase md:leading-12 lg:leading-14">
            Ready to Lock In Your Fleet Procurement?
          </h2>

          {/* Supporting Paragraph */}
          <p className="max-w-[400px] lg:max-w-[395px] text-sm sm:text-base md:text-xl text-stone-400 mt-12 md:mt-15 lg:mt-10 sm:max-w-xl lg:max-w-2xl leading-relaxed">
            Submit your tire specifications, required quantities, and delivery
            window. Our dispatch team will review your fitment details and
            return an itemized quote.
          </p>

          {/* Final CTA Button */}
          <div className="mt-7.5 md:mt-10 w-full sm:w-auto lg:flex lg:justify-center">
            <Link href="/contact?service=curation_sourcing&onsite">
              <button className="font-display sm:w-auto px-6 py-4 md:px-10 md:py-7 lg:px-6 lg:py-5.5 rounded-md bg-red-800/80 hover:bg-red-800/60 text-white font-extrabold text-base md:text-lg tracking uppercase flex items-center justify-center gap-3 transition-colors shadow-lg active:scale-[0.98] cursor-pointer tracking-widest">
                <span>Request Tire Quote</span>
                <Chevrons className="w-4 h-4 mt-0.5" />
              </button>
            </Link>
          </div>

          {/* Footer Microcopy */}
          <p className="font-mono text-[11px] md:text-[14px] text-stone-600 mt-5 md:mt-7 tracking-wider uppercase max-w-[250px] md:max-w-[300px] lg:max-w-[280px]">
            Special-order sourcing based on availability • customer
            specifications
          </p>
        </div>
      </section>
    </div>
  );
}
