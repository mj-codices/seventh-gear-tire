"use client";

import { Dispatch, SetStateAction, useEffect, useRef } from "react";

// Types
export interface ServiceSubOption {
  id: string;
  title: string;
}

export interface OptionType {
  value: string;
  label: string;
}

// 1. Dynamic Config for Options based on Step 1 Selection
export const SERVICE_DETAILS_CONFIG: Record<
  string,
  {
    subOptions: ServiceSubOption[];
    vehicleLabel: string;
    vehicles: OptionType[];
  }
> = {
  // Option 1: Distribution & Fleet Sales
  curation_sourcing: {
    subOptions: [
      { id: "bulk_order", title: "Bulk Commercial Tire Sourcing" },
      { id: "fleet_supply", title: "Ongoing Fleet Inventory Supply Contract" },
      {
        id: "scheduled_delivery",
        title: "Direct Fleet Yard / Job-Site Delivery",
      },
      {
        id: "specialty_sourcing",
        title: "OTR / Agricultural / Specialty Sourcing",
      },
    ],
    vehicleLabel: "Target Fleet / Equipment Category",
    vehicles: [
      { value: "", label: "-- Select Target Fleet Category --" },
      { value: "semi_trucks", label: "Class 7–8 Semi-Trucks & Trailers" },
      { value: "medium_duty", label: "Class 4–6 Box Trucks & Delivery Vans" },
      { value: "ag_implement", label: "Tractors & Agricultural Machinery" },
      {
        value: "construction_otr",
        label: "Earthmoving & Heavy Construction (OTR)",
      },
      { value: "mixed_fleet", label: "Mixed Commercial Fleet" },
    ],
  },
  shop_service: {
    subOptions: [
      { id: "shop_mount_balance", title: "In-Shop Mount, Balance & Install" },
      { id: "preventive_maint", title: "Oil, Filter & Preventive Maintenance" },
      {
        id: "inspection_repair",
        title: "Tire Inspection, Patch & Approved Repairs",
      },
      { id: "light_mechanical", title: "Brake, Battery & Light Mechanical" },
    ],
    vehicleLabel: "Vehicle Category",
    vehicles: [
      { value: "", label: "-- Select Vehicle Type --" },
      { value: "commercial_pickup", label: "Commercial Pickup Truck" },
      { value: "van_fleet", label: "Work Van / Cargo Van" },
      { value: "medium_duty_truck", label: "Medium Duty Service Truck" },
      { value: "passenger_vehicle", label: "Passenger / Utility Vehicle" },
    ],
  },

  onsite_service: {
    subOptions: [
      { id: "onsite_repair", title: "On-site Commercial Flat Repair" },
      { id: "tire_replacement", title: "On-site Mounting & Balancing" },
      { id: "wheel_swap", title: "Scheduled Fleet Rotation Service" },
      {
        id: "fleet_inspection",
        title: "Fleet Yard Tire Inspection & Pressure Check",
      },
    ],
    vehicleLabel: "Vehicle / Equipment to Service",
    vehicles: [
      { value: "", label: "-- Select Vehicle / Equipment Type --" },
      { value: "semi_trailer", label: "Semi-Truck & Trailer" },
      { value: "box_truck", label: "Medium Duty Box Truck / Utility Vehicle" },
      { value: "tractor_ag", label: "Farm Tractor / Implement" },
      { value: "construction_heavy", label: "Construction Equipment / OTR" },
      {
        value: "light_fleet",
        label: "Light Commercial Truck Fleet (3/4 & 1 Ton)",
      },
    ],
  },

  // Option 3: Shop Service (CHANGED KEY FROM 'tire_purchase' TO 'shop_service')
};

interface Step2DetailsProps {
  selectedService: string;
  selectedOnsiteOption: string;
  setSelectedOnsiteOption: Dispatch<SetStateAction<string>>;
  selectedVehicleType: string;
  setSelectedVehicleType: Dispatch<SetStateAction<string>>;
}

export function Step2OnsiteDetails({
  selectedService,
  selectedOnsiteOption,
  setSelectedOnsiteOption,
  selectedVehicleType,
  setSelectedVehicleType,
}: Step2DetailsProps) {
  // Get active options array based on parent step 1 selection
  const activeConfig =
    SERVICE_DETAILS_CONFIG[selectedService] ||
    SERVICE_DETAILS_CONFIG.onsite_service;

  // Track initial render to preserve URL query parameters on page load
  const isInitialMount = useRef(true);

  // Reset inner fields ONLY when the user manually changes service after initial load
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setSelectedOnsiteOption("");
    setSelectedVehicleType("");
  }, [selectedService, setSelectedOnsiteOption, setSelectedVehicleType]);

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
            Select Specific Service Need
          </h4>
          <span className="ml-0.5 mt-1 text-lg font-display text-red-500">
            *
          </span>
        </div>

        <div className="flex flex-col space-y-2.5 -mt-2">
          {activeConfig.subOptions.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3.5 px-6 py-3 bg-stone-950/40 border border-stone-800/70 rounded-lg cursor-pointer hover:bg-stone-950 hover:border-red-700/50 transition-all duration-150 has-[:checked]:border-red-700 has-[:checked]:bg-stone-950/90"
            >
              <input
                type="radio"
                name="service_sub_detail"
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

      {/* Dynamic Vehicle / Fleet Category Dropdown */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="vehicle_type"
            className="text-xs uppercase font-display font-bold text-white/60 tracking-wider cursor-pointer"
          >
            {activeConfig.vehicleLabel}
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
            {activeConfig.vehicles.map((v) => (
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
