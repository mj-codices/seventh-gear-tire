"use client";

import React, { useState, useRef } from "react";
import { Wrench, Clock, FileCheck2, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Chevrons from "../../components/ui/Chevrons";

// Section 1 Data: Service Categories
const SHOP_CAPABILITIES = [
  {
    title: "Commercial Tire & Wheel Service",
    desc: "Precision mounting, proper inflation, valve replacement, dual rotation, thorough tread inspection, and puncture repairs.",
    icon: Wrench,
  },
  {
    title: "Balancing & Torque Compliance",
    desc: "Application-appropriate balancing solutions matched to axle placement, plus certified torque and mandatory retorque protocols.",
    icon: Wrench,
  },
  {
    title: "Preventive Maintenance & Light Mechanical",
    desc: "Oil and filter changes, batteries, drive belts, coolant hoses, cabin/engine filters, wipers, bulbs, and essential fluid checks.",
    icon: Wrench,
  },
];

// Section 2 Data: Shop Standards (Horizontal Track)
const SHOP_STANDARDS = [
  {
    step: "01",
    title: "SCHEDULED ACCESS",
    subtitle: "Priority Shop Bay Scheduling",
    description:
      "Reserve dedicated rack time ahead of arrival to eliminate yard waiting and ensure immediate technician assignment.",
    icon: Clock,
    bullets: ["Reserved bay slots", "Reduced vehicle downtime"],
  },
  {
    step: "02",
    title: "TORQUE LOGS",
    subtitle: "Certified Quality Controls",
    description:
      "Every wheel service and fluid flush includes standardized torque verifications and complete digital service logs.",
    icon: FileCheck2,
    bullets: ["Calibrated torque checks", "Digital invoice records"],
  },
  {
    step: "03",
    title: "LICENSED SCOPE",
    subtitle: "Defined Operational Menu",
    description:
      "All services strictly follow published capabilities backed by commercial equipment limits, licensing, and insurance.",
    icon: ShieldAlert,
    bullets: ["Transparent service menu", "Commercial insurance coverage"],
  },
];

export default function Shop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-950 text-stone-200">
      {/* Hero Section */}
      <section className="pl-10 pr-10 relative h-[80vh] w-full flex flex-col items-start justify-center bg-stone-900 text-white/90 font-display">
        <h1 className="text-[38px] md:text-6xl z-10 leading-14 mt-57">
          <span className="text-red-800">In-shop</span> installation, balancing,
          and light maintenance.
        </h1>
        <div className="absolute -translate-y-10 bottom-0 md:bottom-0.5 -left-6 md:-left-5 lg:-left-3.5 text-stone-600 -translate-x-4 pointer-events-none z-10">
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
        <p className="z-10 mt-30 ml-0.5 bg-gradient-to-r from-white/90 via-stone-400 to-stone-500 bg-clip-text text-transparent text-base font-sans font-extrabold leading-8">
          Schedule your visit for mounting, balancing, or light preventive
          service at our shop.
        </p>
        {/* Bottom gradient overlay to blend into the next section */}
        <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />
      </section>

      {/* SECTION 1: Application Categories & Capabilities */}
      <section className="flex-1 text-stone-100 mt-40 mb-15 mx-5 mr-10 p-4 pr-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between pb-4 mb-4 mt-5">
            <h2 className="text-[18px] font-sans text-stone-400 tracking-wider uppercase pl-2 leading-8">
              In-Shop Services & Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {SHOP_CAPABILITIES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="ml-2 text-red-800 font-mono text-sm mt-1">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-white font-medium text-base">
                        {item.title}
                      </h3>
                      <p className="text-stone-400 font-sans text-sm mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Horizontal Card Track - Shop Standards */}
      <section className="w-full bg-stone-900/30 py-11 border-t border-stone-800/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-11 md:px-10 mb-6">
          {/* <p className="font-mono text-xs text-olive-500 uppercase tracking-widest mb-2">
            Standards
          </p> */}
          <h2 className="text-[18px] md:text-2xl font-sans text-stone-400 tracking-wider uppercase max-w-[300px]">
            Facility & Service Protocols
          </h2>
        </div>

        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 md:gap-8 pl-6 sm:pl-10 md:pl-13 pb-4 scroll-pl-6 sm:scroll-pl-10 md:scroll-pl-13 after:content-[''] after:w-10 after:flex-shrink-0"
          >
            {SHOP_STANDARDS.map((item, idx) => {
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
                        className={`text-stone-400 stroke-[1.5] ${
                          idx === 0
                            ? "w-11 h-11 -translate-x-3"
                            : "w-10 h-10 translate-y-3 -translate-x-2"
                        }`}
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

          {/* Mobile Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
            {SHOP_STANDARDS.map((_, idx) => (
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
      </section>

      {/* SECTION 3: Final Call to Action */}
      <section className="w-full bg-stone-950 py-16 px-11 border-t border-stone-800/60">
        <div className="max-w-4xl mx-auto text-left flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-sans font-semibold bg-gradient-to-r from-white/90 via-stone-400 to-stone-500 bg-clip-text text-transparent tracking-wide uppercase">
            Ready to book shop installation or service?
          </h2>

          <p className="text-sm sm:text-base text-stone-400 mt-12 max-w-xl leading-relaxed">
            Select your required tire services or preventive maintenance items
            to reserve your shop bay time and receive an itemized quote.
          </p>

          <div className="mt-7.5 w-full sm:w-auto">
            <Link href="/contact?service=shop_service">
              <button className="sm:w-auto px-6 py-4.5 rounded-md bg-red-800/80 hover:bg-white text-white hover:text-stone-950 font-extrabold text-md tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-lg active:scale-[0.98]">
                <span>Book Shop Service</span>
                <Chevrons className="w-4 h-4 mt-0.5" />
              </button>
            </Link>
          </div>

          <p className="font-mono text-[11px] text-stone-600 mt-5 tracking-wider uppercase">
            Scheduled bay priority • Itemized written estimate first
          </p>
        </div>
      </section>
    </div>
  );
}
