"use client";

import { useEffect } from "react";

interface SubmissionSuccessProps {
  serviceType: string;
  locationValue: string;
  vehicleType?: string;
  tireSize?: string;
  onReset: () => void;
}

// Helper for Service Labels
function formatServiceLabel(service: string): string {
  if (!service) return "On-Site Service";

  const serviceMap: Record<string, string> = {
    // Step 1 Options
    onsite_service: "On-Site Service",
    curation_sourcing: "Commercial Tire Sales",

    // Step 2 Options (ONSITE_OPTIONS)
    onsite_repair: "Repair / Patch",
    tire_replacement: "Tire Replacement",
    wheel_swap: "Mounted Wheel Rotation",
    fleet_inspection: "Fleet Tire Inspection",
  };

  const normalizedKey = service.toLowerCase().trim();
  if (serviceMap[normalizedKey]) {
    return serviceMap[normalizedKey];
  }

  return service
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// Helper for Vehicle Labels
function formatVehicleLabel(vehicle: string): string {
  if (!vehicle) return "";

  const vehicleMap: Record<string, string> = {
    hotshot_dually: "Hot Shot Rig / Dually",
    box_truck: "Box Truck / Commercial Flatbed",
    delivery_van: "Commercial Service Van",
    trailer_gooseneck: "Commercial Trailer / Gooseneck / Car Hauler",
    other_medium: "Other Light / Medium Commercial Equipment",
  };

  const normalizedKey = vehicle.toLowerCase().trim();
  if (vehicleMap[normalizedKey]) {
    return vehicleMap[normalizedKey];
  }

  // Fallback if someone typed/sent custom text or another key format
  return vehicle
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function SubmissionSuccess({
  serviceType,
  locationValue,
  vehicleType,
  tireSize,
  onReset,
}: SubmissionSuccessProps) {
  useEffect(() => {
    // Height of your fixed/sticky navbar + padding preference
    const navbarOffset = 120;
    const element = document.getElementById("contact-form-section");

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: "smooth",
      });
    }
  }, []);

  // Format labels before rendering
  const displayService = formatServiceLabel(serviceType);
  const displayVehicle = formatVehicleLabel(vehicleType || "");

  return (
    <div className="pt-2 space-y-6">
      {/* Success Badge / Header */}
      <div className="p-6 bg-stone-900/90 border border-stone-800 rounded-xl text-center space-y-4">
        <div className="mx-auto w-12 h-12 rounded-full bg-stone-950/60 border border-stone-800 flex items-center justify-center text-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-15 h-15 -translate-y-1.5 translate-x-1"
          >
            <path d="M 3.2 13.2 C 5.4 15.1 7.7 17.8 9.5 20.5 C 10.1 21.3 11.1 21.1 11.6 20.2 C 15.2 13.8 18.9 8.1 22.2 3.8 C 22.7 3.2 22.1 2.4 21.3 2.8 C 17.5 5.1 13.7 11.0 10.1 17.4 C 8.2 14.6 5.8 12.0 4.1 10.7 C 3.2 10.0 2.4 11.7 3.2 13.2 Z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-white/90 uppercase tracking-wider">
            Dispatch Request Received
          </h3>
          <p className="text-[11px] text-stone-400 mt-4 font-sans leading-5">
            A dispatch specialist will call you shortly to discuss your request
            and provide an exact quote before sending out service.
          </p>
        </div>
      </div>

      {/* Inline Summary Bullet List */}
      <ul className="px-3 py-1 text-[10px] space-y-3">
        {/* Service Type (Always rendered) */}
        <li className="flex items-center justify-between text-stone-400">
          <span className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-500/90 shrink-0" />
            <span className="font-mono tracking-tighter whitespace-nowrap">
              Service Type:
            </span>
          </span>
          <span className="ml-3 text-stone-200 font-bold uppercase tracking-tighter truncate">
            {displayService}
          </span>
        </li>

        {/* Vehicle Type Row (Only shown if filled) */}
        {vehicleType && (
          <li className="flex items-center justify-between text-stone-400">
            <span className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-500/90 shrink-0" />
              <span className="font-mono whitespace-nowrap tracking-tighter">
                Vehicle Type:
              </span>
            </span>
            <span className="ml-3 text-stone-200 font-bold uppercase truncate tracking-tighter">
              {displayVehicle}
            </span>
          </li>
        )}

        {/* Tire Size Row (Only shown if filled) */}
        {tireSize && (
          <li className="flex items-center justify-between text-stone-400">
            <span className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-500/90 shrink-0" />
              <span className="font-mono whitespace-nowrap tracking-tighter">
                Tire Size:
              </span>
            </span>
            <span className="ml-3 text-stone-200 font-bold uppercase truncate tracking-tighter">
              {tireSize}
            </span>
          </li>
        )}

        {/* Target Location Row (Always rendered) */}
        <li className="flex items-center justify-between text-stone-400">
          <span className="flex items-center gap-2.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-500/90 shrink-0" />
            <span className="font-mono tracking-tighter">Target Location:</span>
          </span>
          <span className="ml-3 text-stone-200 font-bold truncate max-w-[200px] sm:max-w-[280px] uppercase tracking-tighter">
            {locationValue || "GPS Pin Attached"}
          </span>
        </li>
      </ul>

      {/* Action Button to Submit Another Request */}
      <button
        type="button"
        onClick={onReset}
        className="w-full py-3.5 px-6 bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white font-display font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-150 cursor-pointer"
      >
        Submit Another Request
      </button>
    </div>
  );
}
