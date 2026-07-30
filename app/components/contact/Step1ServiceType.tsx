"use client";

import { Dispatch, SetStateAction } from "react";

// 1. Define Option Type
export interface ServiceOption {
  id: string;
  title: string;
  desc: string;
  tag: string;
}

// 2. Static Data Array (Extracted out of the render cycle)
export const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: "onsite_service",
    title: "Onsite Tire Service",
    desc: "On-location tire repair, replacement, and mounting.",
    tag: "Mobile Dispatch",
  },
  {
    id: "curation_sourcing",
    title: "Commercial Tire Sales & Sourcing",
    desc: "Order bulk commercial tires or request quotes on specific drive, steer, and trailer tread specs.",
    tag: "Bulk & Direct Sales",
  },
];

// 3. Component Props Interface
interface Step1ServiceTypeProps {
  selectedService: string;
  setSelectedService: Dispatch<SetStateAction<string>>;
  options?: ServiceOption[];
}

// 4. Step 1 Component
export function Step1ServiceType({
  selectedService,
  setSelectedService,
  options = SERVICE_OPTIONS,
}: Step1ServiceTypeProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-2 duration-300">
      <div>
        <h2 className="text-xs sm:text-2xl font-bold text-white/60 font-display tracking-widest uppercase border-b border-stone-800/60 pb-3 leading-6">
          Step 1 — What kind of help do you need?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option) => {
          const isDisabled = option.id === "curation_sourcing";

          return (
            <label
              key={option.id}
              onClick={(e) => {
                if (isDisabled) {
                  e.preventDefault(); // Prevents label click interaction
                }
              }}
              className={`group relative flex items-start gap-3.5 p-5 bg-stone-950/60 border border-stone-900/40 rounded-xl transition-all duration-200 ${
                isDisabled
                  ? "opacity-50 cursor-not-allowed bg-stone-950/30 border-stone-900/20"
                  : "cursor-pointer hover:border-red-700/60 hover:bg-stone-950/90 active:scale-[0.98] has-[:checked]:border-red-800 has-[:checked]:bg-stone-950/95 has-[:checked]:ring-1 has-[:checked]:ring-red-600"
              }`}
            >
              <div className="pt-1 shrink-0">
                <input
                  type="radio"
                  name="service_type"
                  value={option.id}
                  disabled={isDisabled}
                  checked={selectedService === option.id}
                  onChange={(e) => {
                    if (!isDisabled) {
                      setSelectedService(e.target.value);
                    }
                  }}
                  className={`h-4 w-4 accent-red-600 focus:ring-0 focus:ring-offset-0 ${
                    isDisabled
                      ? "cursor-not-allowed opacity-40"
                      : "cursor-pointer"
                  }`}
                />
              </div>

              <div className="flex flex-col justify-between h-full w-full min-w-0">
                <div>
                  <span
                    className={`font-display text-lg tracking-wide leading-snug block ${
                      isDisabled
                        ? "text-stone-400"
                        : "text-stone-100 group-hover:text-white"
                    }`}
                  >
                    {option.title}
                  </span>
                  <p className="text-sm text-stone-400 mt-2.5">{option.desc}</p>
                </div>

                {/* <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between">
                  {isDisabled ? (
                    <span className="text-[10px] font-mono tracking-wider text-red-400 uppercase font-semibold bg-red-950/40 px-2 py-0.5 rounded border border-red-900/40">
                      Coming Soon
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-red-500 uppercase tracking-wider font-medium">
                      {option.tag}
                    </span>
                  )}
                </div> */}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
