"use client";

import { Dispatch, SetStateAction, ChangeEvent } from "react";

export interface OptionItem {
  id: string;
  title: string;
}

// Dynamic configuration per service division according to Section 5 & 8 of guidelines
export const SERVICE_TIRE_CONFIG: Record<
  string,
  {
    applications: OptionItem[];
    brandOptions: { value: string; label: string }[];
    defaultQuantityLabel: string;
  }
> = {
  // Service 1: Tire Distribution & Fleet Sales
  curation_sourcing: {
    defaultQuantityLabel: "Quantity Needed (Bulk / Volume)",
    applications: [
      { id: "steer", title: "Steer Position" },
      { id: "drive", title: "Drive Position (Closed/Open)" },
      { id: "trailer", title: "Trailer Position" },
      { id: "otr_ag", title: "Agricultural & OTR Industrial" },
    ],
    brandOptions: [
      { value: "any", label: "Best Value / Sourced Availability" },
      { value: "tier1", label: "Tier 1 Premium (Michelin, Bridgestone, etc.)" },
      { value: "tier2", label: "Tier 2 Mid-Grade / Commercial Quality" },
      { value: "budget", label: "Economy / Budget Supply" },
    ],
  },

  // Service 2: Scheduled Mobile Installation
  onsite_service: {
    defaultQuantityLabel: "Number of Tires to Install On-Site",
    applications: [
      { id: "steer_drive", title: "Commercial Steer / Drive" },
      { id: "trailer_pos", title: "Trailer / All-Position" },
      { id: "light_truck", title: "Light Truck (LT) / Service Vehicle" },
      { id: "heavy_equipment", title: "Farm Tractor & Heavy Equipment" },
    ],
    brandOptions: [
      { value: "any", label: "Standard Fleet Specification" },
      { value: "premium", label: "Premium Commercial Brand" },
      { value: "budget", label: "Budget Commercial Option" },
    ],
  },

  // Service 3: Shop Service
  tire_purchase: {
    defaultQuantityLabel: "Number of Tires",
    applications: [
      { id: "all_season", title: "All-Season Highway" },
      { id: "all_terrain", title: "All-Terrain (A/T) / Mud-Terrain (M/T)" },
      { id: "commercial_lt", title: "Commercial Heavy Duty LT" },
      { id: "passenger_touring", title: "Passenger / Utility" },
    ],
    brandOptions: [
      { value: "any", label: "Best Match for Budget & Use" },
      { value: "premium", label: "Name Brand / Premium" },
      { value: "budget", label: "Economy Line" },
    ],
  },
};

interface Step3TireInfoProps {
  selectedService: string;
  tireSize: string;
  setTireSize: Dispatch<SetStateAction<string>>;
  selectedTireType: string;
  setSelectedTireType: Dispatch<SetStateAction<string>>;
  tireQuantity?: string;
  setTireQuantity?: Dispatch<SetStateAction<string>>;
  preferredBrand?: string;
  setPreferredBrand?: Dispatch<SetStateAction<string>>;
  photoFile?: File | null;
  handlePhotoChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Step3TireInfo({
  selectedService,
  tireSize,
  setTireSize,
  selectedTireType,
  setSelectedTireType,
  tireQuantity,
  setTireQuantity,
  preferredBrand,
  setPreferredBrand,
  photoFile,
  handlePhotoChange,
}: Step3TireInfoProps) {
  // Get dynamic config based on chosen service
  const activeConfig =
    SERVICE_TIRE_CONFIG[selectedService] || SERVICE_TIRE_CONFIG.onsite_service;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
      <div>
        <h3 className="text-xs sm:text-xl font-bold text-white/90 font-display tracking-widest uppercase border-b border-stone-800/60 pb-3 leading-6">
          Step 3 — Tire Specification & Sourcing
        </h3>
      </div>

      {/* Row 1: Size & Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2 space-y-2">
          <label
            htmlFor="tire_size"
            className="block text-xs uppercase font-display font-bold text-white/60 tracking-wider"
          >
            Tire Size <span className="text-stone-400 font-normal">(e.g., 295/75R22.5 or 275/65R18)</span>
          </label>
          <input
            type="text"
            id="tire_size"
            name="tire_size"
            value={tireSize}
            onChange={(e) => setTireSize(e.target.value)}
            placeholder="e.g. 295/75R22.5"
            className="w-full px-4 py-3 bg-stone-950/40 border border-stone-800/70 rounded-lg text-sm sm:text-base text-stone-200 placeholder-stone-600 focus:outline-none focus:border-red-700 focus:bg-stone-950/90 focus:ring-1 focus:ring-red-600 transition-all duration-150"
          />
        </div>

        {/* Quantity Field */}
        {setTireQuantity && (
          <div className="space-y-2">
            <label
              htmlFor="tire_quantity"
              className="block text-xs uppercase font-display font-bold text-white/60 tracking-wider"
            >
              Quantity
            </label>
            <input
              type="number"
              id="tire_quantity"
              name="tire_quantity"
              min="1"
              value={tireQuantity || "1"}
              onChange={(e) => setTireQuantity(e.target.value)}
              className="w-full px-4 py-3 bg-stone-950/40 border border-stone-800/70 rounded-lg text-sm sm:text-base text-stone-200 focus:outline-none focus:border-red-700 focus:bg-stone-950/90 focus:ring-1 focus:ring-red-600 transition-all duration-150"
            />
          </div>
        )}
      </div>

      {/* Row 2: Dynamic Tire Application Options */}
      <div className="space-y-3">
        <label className="block text-xs uppercase font-display font-bold text-white/60 tracking-wider">
          Tire Position / Application Category
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {activeConfig.applications.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 px-4 py-3 bg-stone-950/40 border border-stone-800/70 rounded-lg cursor-pointer hover:bg-stone-950 hover:border-red-700/50 transition-all duration-150 has-[:checked]:border-red-700 has-[:checked]:bg-stone-950/90"
            >
              <input
                type="radio"
                name="tire_type"
                value={item.id}
                checked={selectedTireType === item.id}
                onChange={(e) => setSelectedTireType(e.target.value)}
                className="h-4 w-4 accent-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer shrink-0"
              />
              <span className="text-sm text-stone-200 font-medium">
                {item.title}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Row 3: Brand / Tier Preference (Flexible Language per Section 8 Guidelines) */}
      {setPreferredBrand && (
        <div className="space-y-2 pt-1">
          <label
            htmlFor="brand_preference"
            className="block text-xs uppercase font-display font-bold text-white/60 tracking-wider"
          >
            Brand / Price Tier Preference
          </label>
          <select
            id="brand_preference"
            name="brand_preference"
            value={preferredBrand || "any"}
            onChange={(e) => setPreferredBrand(e.target.value)}
            className="w-full appearance-none px-4 py-3 bg-stone-950/40 border border-stone-800/70 rounded-lg text-sm sm:text-base text-stone-200 font-medium tracking-wide cursor-pointer focus:outline-none focus:border-red-700 focus:bg-stone-950/90 focus:ring-1 focus:ring-red-600 transition-all duration-150"
          >
            {activeConfig.brandOptions.map((brand) => (
              <option
                key={brand.value}
                value={brand.value}
                className="bg-stone-950 text-stone-200"
              >
                {brand.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Row 4: Photo Upload Optional */}
      {handlePhotoChange && (
        <div className="space-y-2 pt-1">
          <label className="block text-xs uppercase font-display font-bold text-white/60 tracking-wider">
            Upload Sidewall Photo / Tread Verification <span className="text-stone-400 font-normal">(Optional)</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="block w-full text-sm text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:uppercase file:bg-stone-800 file:text-stone-200 hover:file:bg-red-700 hover:file:text-white cursor-pointer transition-colors"
          />
          {photoFile && (
            <p className="text-xs text-red-400 mt-1">
              Selected: {photoFile.name}
            </p>
          )}
        </div>
      )}
    </div>
  );
}