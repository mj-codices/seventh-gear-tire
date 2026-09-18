"use client";

import { Dispatch, SetStateAction } from "react";

// 1. Define Option Type
export interface ServiceOption {
  id: string;
  title: string;
  desc: string;
  tag: string;
  disabled?: boolean;
}

// 2. Static Data Array (Extracted out of the render cycle)
export const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: "curation_sourcing",
    title: "Tire Distribution & Fleet Sales",
    desc: "Commercial fleet supply, tires, and scheduled delivery.",
    tag: "Bulk & Direct Sales",
    disabled: false,
  },
  {
    id: "shop_service",
    title: "Shop tire & light mechanical",
    desc: "In-shop mounting, balancing, and light maintenance.",
    tag: "Retail Sales",
    disabled: true, // <-- Grayed out & nullified
  },
  {
    id: "onsite_service",
    title: "Mobile Fleet Installation",
    desc: "Onsite planned service for farms, equipment and jobsites.",
    tag: "Mobile Dispatch",
    disabled: true, // <-- Grayed out & nullified
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
        <h2 className="text-xs sm:text-xl font-bold text-white/90 font-display tracking-widest uppercase border-b border-stone-800/60 pb-2 leading-6 sm:leading-8">
          Step 1 — What kind of help do you need?
        </h2>
      </div>

      {/* Changed sm:grid-cols-2 to lg:grid-cols-3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option) => {
          const isDisabled = option.disabled ?? false;

          return (
            <label
              key={option.id}
              className={`group relative flex items-start gap-3.5 p-5 bg-stone-950/60 border border-stone-900/40 rounded-xl transition-all duration-200 ${
                isDisabled
                  ? "opacity-40 cursor-not-allowed border-stone-900/20"
                  : "cursor-pointer hover:border-red-700/60 hover:bg-stone-950/90 active:scale-[0.98] has-[:checked]:border-red-900 has-[:checked]:bg-stone-950/95 has-[:checked]:ring-1 has-[:checked]:ring-red-900"
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
                    if (!isDisabled) setSelectedService(e.target.value);
                  }}
                  className="h-4 w-4 accent-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer disabled:cursor-not-allowed"
                />
              </div>

              <div className="flex flex-col justify-between h-full w-full min-w-0">
                <div>
                  <span className="font-display text-lg tracking-wide leading-snug block text-stone-100 group-hover:text-white">
                    {option.title}
                  </span>
                  <p className="text-sm text-stone-400 mt-2.5">{option.desc}</p>
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}