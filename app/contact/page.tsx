"use client";

import { useState } from "react";

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedOnsiteOption, setSelectedOnsiteOption] = useState<string>("");
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>("");

  // Step 3 States
  const [tireSize, setTireSize] = useState<string>("");
  const [selectedTireType, setSelectedTireType] = useState<string>("");

  const onsiteOptions = [
    {
      id: "onsite_repair",
      title: "Repair / Patch",
    },
    {
      id: "tire_replacement",
      title: "Tire Replacement",
    },
    {
      id: "wheel_swap",
      title: "Mounted Wheel Rotation",
    },
    {
      id: "fleet_inspection",
      title: "Fleet Tire Inspection",
    },
  ];

  const vehicleTypes = [
    { value: "", label: "Pick one" },
    {
      value: "hotshot_dually",
      label: "Hot Shot Rig / Dually ",
    },
    {
      value: "box_truck",
      label: "Box Truck / Commercial Flatbed ",
    },
    {
      value: "delivery_van",
      label: "Commercial Service Van ",
    },
    {
      value: "trailer_gooseneck",
      label: "Commercial Trailer / Gooseneck / Car Hauler",
    },
    {
      value: "other_medium",
      label: "Other Light / Medium Commercial Equipment",
    },
  ];

  const tireTypeOptions = [
    { id: "steer", title: "Steer / Front Axle" },
    { id: "drive", title: "Drive / Rear Dually" },
    { id: "trailer", title: "Trailer / Gooseneck" },
    { id: "all_around", title: "Multiple / Whole Rig" },
  ];

  return (
    <section className="relative min-h-screen bg-stone-950 text-stone-100 py-32 px-9 lg:py-16 lg:px-8">
      {/* 1. Full-bleed background image (Height: 500px) */}
      <img
        src="/contact_main.png"
        alt="Commercial tire service on Texas highway"
        className="absolute top-0 inset-x-0 w-full h-[500px] object-cover object-[49%_center] z-0 opacity-70"
      />

      {/* 2. Seamless Gradient Overlay (Exact 500px height matching the image) */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-stone-950/20 via-stone-950/70 to-stone-950 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 3. Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-18">
        {/* =========================================================
            HEADER SECTION
           ========================================================= */}
        <header className="max-w-3xl">
          <div>
            <div>
              <p className="text-white/90 font-display text-base font-bold uppercase tracking-widest mb-2.5">
                Request Service
              </p>
              <div className="w-12 h-[.2rem] bg-red-700" />
            </div>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-display text-white/95 leading-tighter mt-1">
              Need Immediate Tire Service or a Fleet Quote?
            </h1>
            <p className="mt-4 text-white text-base sm:text-lg leading-6 max-w-2xl">
              Select your service type below to send your equipment details
              directly to dispatch.
            </p>
          </div>
        </header>

        {/* =========================================================
            FORM CONTAINER SECTION
           ========================================================= */}
        <section className="max-w-3xl p-6 sm:p-8 bg-stone-900/60 border border-stone-800 rounded-2xl space-y-8 transition-all duration-300">
          {/* ---------------------------------------------------------
              STEP 1: SERVICE TYPE SELECTION
             --------------------------------------------------------- */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xs sm:text-2xl font-bold text-white/60 font-display tracking-widest uppercase border-b border-stone-800/60 pb-3 leading-6">
                Step 1 — What kind of help do you need?
              </h2>
            </div>

            {/* Step 1 Radio Button Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
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
              ].map((option) => (
                <label
                  key={option.id}
                  className="group relative flex items-start gap-3.5 p-5 bg-stone-950/60 border-[.009rem] border-stone-900/10 rounded-xl cursor-pointer hover:border-red-700/60 hover:bg-stone-950/90 active:scale-[0.98] transition-all duration-200 has-[:checked]:border-red-800 has-[:checked]:bg-stone-950/95 has-[:checked]:ring-1 has-[:checked]:ring-red-600"
                >
                  <div className="pt-1 shrink-0">
                    <input
                      type="radio"
                      name="service_type"
                      value={option.id}
                      checked={selectedService === option.id}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="h-4 w-4 accent-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                  </div>

                  <div className="flex flex-col justify-between h-full w-full min-w-0">
                    <div>
                      <span className="font-display text-stone-100 text-lg tracking-wide leading-snug group-hover:text-white block">
                        {option.title}
                      </span>
                      <p className="text-sm text-stone-400 mt-2.5">
                        {option.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-red-500 uppercase tracking-wider font-medium">
                        {option.tag}
                      </span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* ---------------------------------------------------------
              STEP 2: EXTENDED CLICK LIST (ONSITE SERVICE OPTIONS)
             --------------------------------------------------------- */}
          {selectedService === "onsite_service" && (
            <div className="pt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <div>
                <h3 className="text-xs sm:text-xl font-bold text-white/60 font-display tracking-widest uppercase border-b border-stone-800/60 pb-3 leading-6">
                  Step 2 — What do you need done?
                </h3>
              </div>

              {/* Service Selection List */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <h4 className="text-xs uppercase font-display font-bold text-white/60 tracking-wider">
                    Pick the service
                  </h4>
                  <span className="ml-1 mt-2 text-2xl font-display text-red-500">
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
                        onChange={(e) =>
                          setSelectedOnsiteOption(e.target.value)
                        }
                        className="h-4 w-4 accent-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer shrink-0"
                      />
                      <span className="text-sm sm:text-base text-stone-200 font-medium tracking-wide">
                        {item.title}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Vehicle Type Dropdown Selection */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="vehicle_type"
                    className="text-xs uppercase font-display font-bold text-white/60 tracking-wider cursor-pointer"
                  >
                    Select Vehicle
                  </label>
                  {/* <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                    Optional
                  </span> */}
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

                  {/* Custom Chevron Indicator */}
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
          )}

          {/* ---------------------------------------------------------
              STEP 3: TIRE INFORMATION EXTENSION
             --------------------------------------------------------- */}
          {/* ---------------------------------------------------------
    STEP 3: TIRE INFORMATION EXTENSION
   --------------------------------------------------------- */}
          {selectedService === "onsite_service" &&
            selectedOnsiteOption !== "" && (
              <div className="pt-4 space-y-7 animate-in fade-in slide-in-from-top-2 duration-300">
                <div>
                  <h3 className="text-xs sm:text-xl font-bold text-white/60 font-display tracking-widest uppercase border-b border-stone-800/60 pb-3 leading-6">
                    Step 3 — Tire Information
                  </h3>
                </div>

                {/* Tire Size Input */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pl-1">
                    <label
                      htmlFor="tire_size"
                      className="text-xs uppercase font-display font-bold text-white/60 tracking-wider cursor-pointer"
                    >
                      Tire <br /> Size
                    </label>
                    <span className="pl-5 text-[11px] font-mono text-stone-500">
                      Located on sidewall (e.g. 235/80R16)
                    </span>
                  </div>
                  <input
                    type="text"
                    id="tire_size"
                    name="tire_size"
                    value={tireSize}
                    onChange={(e) => setTireSize(e.target.value)}
                    placeholder="e.g. 225/70R19.5 or 235/80R16"
                    className="w-full px-4 py-3 bg-stone-950/40 border border-stone-800/70 rounded-lg text-sm sm:text-base text-stone-200 placeholder:text-stone-600 font-medium tracking-wide focus:outline-none focus:border-red-700 focus:bg-stone-950/90 focus:ring-1 focus:ring-red-600 transition-all duration-150"
                  />
                </div>

                {/* Tire Position / Type Radio List */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <h4 className="text-xs uppercase font-display font-bold text-white/60 tracking-wider">
                      Type / Position
                    </h4>
                    {/* <span className="ml-1 mt-2 text-2xl font-display text-red-500">
                      *
                    </span> */}
                  </div>

                  <div className="flex flex-col space-y-2.5">
                    {tireTypeOptions.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3.5 px-6 py-3 bg-stone-950/40 border border-stone-800/70 rounded-lg cursor-pointer hover:bg-stone-950 hover:border-red-700/50 transition-all duration-150 has-[:checked]:border-red-700 has-[:checked]:bg-stone-950/90"
                      >
                        <input
                          type="radio"
                          name="tire_type_position"
                          value={item.id}
                          checked={selectedTireType === item.id}
                          onChange={(e) => setSelectedTireType(e.target.value)}
                          className="h-4 w-4 accent-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer shrink-0"
                        />
                        <span className="text-sm sm:text-base text-stone-200 font-medium tracking-wide">
                          {item.title}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Damage / Sidewall Photo Upload (Optional) */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="tire_photo"
                      className="text-xs uppercase font-display font-bold text-white/60 tracking-wider cursor-pointer"
                    >
                      Damage / Sidewall Photo
                    </label>
                  </div>

                  <label
                    htmlFor="tire_photo"
                    className="group flex flex-col items-center justify-center w-full h-28 px-4 bg-stone-950/80 border border-dashed border-stone-800/80 rounded-lg cursor-pointer hover:border-red-700/60 hover:bg-stone-950/80 transition-all duration-150"
                  >
                    <div className="flex flex-col items-center justify-center pt-2 pb-2">
                      <p className="text-xs text-stone-300 font-bold">
                        Click to upload or drag a file
                      </p>
                      <p className="text-[10px] text-stone-500 mt-2">
                        PNG, JPG, HEIC · max 10 MB
                      </p>
                    </div>

                    <input
                      id="tire_photo"
                      name="tire_photo"
                      type="file"
                      accept="image/*"
                      capture="environment" // Opens rear camera directly on phones
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            )}
        </section>
      </div>
    </section>
  );
}
