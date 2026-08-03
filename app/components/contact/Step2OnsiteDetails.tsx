"use client";

import { Dispatch, SetStateAction } from "react";

// 1. Define Option Types
export interface OnsiteOptionItem {
  id: string;
  title: string;
}

export interface VehicleOptionItem {
  value: string;
  label: string;
}

// 2. Component Props Interface
interface Step2OnsiteDetailsProps {
  selectedOnsiteOption: string;
  setSelectedOnsiteOption: Dispatch<SetStateAction<string>>;
  selectedVehicleType: string;
  setSelectedVehicleType: Dispatch<SetStateAction<string>>;
  onsiteOptions: OnsiteOptionItem[];
  vehicleTypes: VehicleOptionItem[];
}

// 3. Step 2 Component
export function Step2OnsiteDetails({
  selectedOnsiteOption,
  setSelectedOnsiteOption,
  selectedVehicleType,
  setSelectedVehicleType,
  onsiteOptions,
  vehicleTypes,
}: Step2OnsiteDetailsProps) {
  return (
    <div className="pt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
      <div>
        <h3 className="text-xs sm:text-xl font-bold text-white/90 font-display tracking-widest uppercase border-b border-stone-800/60 pb-3 leading-6">
          Step 2 — What do you need done?
        </h3>
      </div>

      {/* Service Detail Radio Group */}
      <div className="space-y-3">
        <div className="flex items-center">
          <h4 className="text-xs uppercase font-display font-bold text-white/60 tracking-wider">
            Pick the service
          </h4>
          <span className="ml-0.5 mt-1 text-lg font-display text-red-500">
            *
          </span>
        </div>

        <div className="flex flex-col space-y-2.5 -mt-2">
          {onsiteOptions.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3.5 px-6 py-3 bg-stone-950/40 border border-stone-800/70 rounded-lg cursor-pointer hover:bg-stone-950 hover:border-red-700/50 transition-all duration-150 has-[:checked]:border-red-700 has-[:checked]:bg-stone-950/90"
            >
              <input
                type="radio"
                name="onsite_detail"
                value={item.id}
                checked={selectedOnsiteOption === item.id}
                onChange={(e) => setSelectedOnsiteOption(e.target.value)}
                className="h-4 w-4 accent-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer shrink-0"
              />
              <span className="text-sm sm:text-base text-stone-200 font-medium tracking-wide">
                {item.title}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Vehicle Type Dropdown */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="vehicle_type"
            className="text-xs uppercase font-display font-bold text-white/60 tracking-wider cursor-pointer"
          >
            Select Vehicle
          </label>
        </div>

        <div className="relative">
          <select
            id="vehicle_type"
            name="vehicle_type"
            value={selectedVehicleType}
            onChange={(e) => setSelectedVehicleType(e.target.value)}
            className="w-full appearance-none px-4 py-3 bg-stone-950/40 border border-stone-800/70 rounded-lg text-sm sm:text-base text-stone-200 font-medium tracking-wide cursor-pointer focus:outline-none focus:border-red-700 focus:bg-stone-950/90 focus:ring-1 focus:ring-red-600 transition-all duration-150"
          >
            {vehicleTypes.map((v) => (
              <option
                key={v.value}
                value={v.value}
                disabled={v.value === ""}
                className="bg-stone-950 text-stone-200 py-2"
              >
                {v.label}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-400">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}