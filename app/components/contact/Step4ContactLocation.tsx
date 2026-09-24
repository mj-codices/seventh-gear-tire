"use client";

interface Step4ContactLocationProps {
  locationValue: string;
  setLocationValue: (val: string) => void;
  isGpsCaptured: boolean;
  setIsGpsCaptured: (captured: boolean) => void;
  isLocating: boolean;
  handleGetLocation: () => void;
  stepTitle?: string;
  submitButtonText?: string;
  isSubmitting?: boolean;
}

export function Step4ContactLocation({
  locationValue,
  setLocationValue,
  isGpsCaptured,
  setIsGpsCaptured,
  isLocating,
  handleGetLocation,
  stepTitle = "Step 4 — Contact & Location",
  submitButtonText = "Submit Service Request",
  isSubmitting = false,
}: Step4ContactLocationProps) {
  return (
    <div className="pt-3 space-y-6 border-stone-800/80 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="flex items-center justify-between border-b border-stone-800/60 pb-2.5">
        <div className="flex items-center gap-2">
          <h3 className="text-xs sm:text-xl font-bold text-white/90 font-display tracking-widest uppercase">
            {stepTitle}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name Input */}
        <div className="space-y-3 sm:col-span-1">
          <label
            htmlFor="contact_name"
            className="text-xs uppercase font-display font-bold text-white/60 tracking-wider block"
          >
            Your Name{" "}
            <span className="inline-block text-red-500 align-middle leading-none font-normal text-lg mt-0.5">
              *
            </span>
          </label>
          <input
            type="text"
            id="contact_name"
            name="contact_name"
            required
            placeholder="e.g. Marcus Vance"
            className="w-full px-4 py-3 bg-stone-950/50 border border-stone-800/80 rounded-lg text-sm text-stone-200 placeholder:text-stone-600 font-medium tracking-wide focus:outline-none focus:border-red-700 focus:bg-stone-950 focus:ring-1 focus:ring-red-600 transition-all duration-150"
          />
        </div>

        {/* Phone Input */}
        <div className="space-y-3 sm:col-span-1 sm:-mt-2">
          <label
            htmlFor="contact_phone"
            className="text-xs uppercase font-display font-bold text-white/60 tracking-wider block"
          >
            Phone Number{" "}
            <span className="inline-block relative text-red-500 font-normal text-lg top-[4.5px]">
              *
            </span>
          </label>
          <input
            type="tel"
            id="contact_phone"
            name="contact_phone"
            required
            pattern="[\+]?[0-9\s\-\(\)]+"
            title="Please enter a valid phone number using only numbers, spaces, dashes, or parentheses."
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                /[^0-9\s\-\(\)\+]/g,
                "",
              );
            }}
            placeholder="(555) 000-0000"
            className="w-full px-4 py-3 bg-stone-950/50 border border-stone-800/80 rounded-lg text-sm text-stone-200 placeholder:text-stone-600 font-medium tracking-wide focus:outline-none focus:border-red-700 focus:bg-stone-950 focus:ring-1 focus:ring-red-600 transition-all duration-150 font-mono"
          />
        </div>

        {/* Location Input with Map/GPS button */}
        <div className="space-y-3 sm:col-span-2">
          <div>
            <label
              htmlFor="service_location"
              className="text-xs uppercase font-display font-bold text-white/60 tracking-wider block"
            >
              Service Location{" "}
              <span className="inline-block relative top-[4px] text-red-500 font-normal text-lg">
                *
              </span>
            </label>
            <p className="text-[11px] font-mono text-stone-500 mt-0.5 ml-0.5 tracking-tight">
              Manually enter address or autofill with map marker.
            </p>
          </div>

          <div className="relative flex items-center">
            <input
              type="text"
              id="service_location"
              name="service_location"
              required
              value={locationValue}
              onChange={(e) => {
                setLocationValue(e.target.value);
                if (isGpsCaptured) setIsGpsCaptured(false);
              }}
              placeholder="e.g. 8400 Industrial Blvd, Dallas"
              className="w-full pl-4 pr-32 py-3 bg-stone-950/50 border border-stone-800/80 rounded-lg text-sm text-stone-200 placeholder:text-stone-600 font-medium tracking-wide focus:outline-none focus:border-red-700 focus:bg-stone-950 focus:ring-1 focus:ring-red-600 transition-all duration-150"
            />

            <button
              type="button"
              onClick={handleGetLocation}
              disabled={isLocating}
              className="absolute right-2 px-2.5 py-1.5 bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-red-700/50 rounded text-[10px] font-mono uppercase tracking-wide text-stone-300 hover:text-white transition-all duration-150 flex items-center gap-1.5 focus:outline-none disabled:opacity-50 cursor-pointer shadow-sm"
            >
              {isLocating ? (
                <>
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-ping shrink-0" />
                  <span className="text-red-400">Locating...</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3.5 h-3.5 text-stone-500 shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-bold">Locate Me</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* SERVICE URGENCY / TIMING SELECTOR */}
        <div className="space-y-3 sm:col-span-2 mt-2">
          <label
            htmlFor="service_urgency"
            className="text-xs uppercase font-display font-bold text-white/60 tracking-wider block"
          >
            Service Urgency / Requested Timing{" "}
            <span className="inline-block relative top-[4px] text-red-500 font-normal text-lg">
              *
            </span>
          </label>

          <div className="relative flex items-center">
            <select
              id="service_urgency"
              name="service_urgency"
              defaultValue=""
              required
              className="w-full appearance-none pl-4 pr-10 py-3 bg-stone-950/50 border border-stone-800/80 rounded-lg text-sm text-stone-200 font-medium tracking-wide focus:outline-none focus:border-red-700 focus:bg-stone-950 focus:ring-1 focus:ring-red-600 transition-all duration-150 cursor-pointer invalid:text-stone-600"
            >
              <option
                value=""
                disabled
                hidden
                className="bg-stone-950 text-stone-200"
              >
                -- Select Service Timeline / Urgency --
              </option>
              <option value="today" className="bg-stone-950 text-stone-200">
                Today (Within 2–4 Hours)
              </option>
              <option value="scheduled" className="bg-stone-950 text-stone-200">
                Scheduled Maintenance / Next Available
              </option>
            </select>

            {/* Custom Styled Chevron */}
            <div className="pointer-events-none absolute right-3 flex items-center text-stone-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Company / Fleet Name */}
        <div className="space-y-4 sm:col-span-2 mt-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="company_name"
              className="text-xs uppercase font-display font-bold text-white/60 tracking-wider"
            >
              Company / Fleet Name
            </label>
          </div>
          <input
            type="text"
            id="company_name"
            name="company_name"
            placeholder="e.g. Apex Express Hauling or N/A"
            className="w-full px-4 py-3 bg-stone-950/50 border border-stone-800/80 rounded-lg text-sm text-stone-200 placeholder:text-stone-600 font-medium tracking-wide focus:outline-none focus:border-red-700 focus:bg-stone-950 focus:ring-1 focus:ring-red-600 transition-all duration-150"
          />
        </div>

        {/* Special Instructions */}
        <div className="space-y-4.5 sm:col-span-2 mt-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="special_instructions"
              className="text-xs uppercase font-display font-bold text-white/60 tracking-wider"
            >
              Special Instructions
            </label>
          </div>
          <textarea
            id="special_instructions"
            name="special_instructions"
            rows={3}
            placeholder="Gate codes, exact spot in yard, on-site contact name, hazards, etc."
            className="w-full px-4 py-3 bg-stone-950/50 border border-stone-800/80 rounded-lg text-sm text-stone-200 placeholder:text-stone-600 font-medium tracking-wide focus:outline-none focus:border-red-700 focus:bg-stone-950 focus:ring-1 focus:ring-red-600 transition-all duration-150 resize-none"
          />
        </div>
      </div>

      {/* Dispatch Notice & Action Button */}
      <div className="pt-4 space-y-6">
        {/* OPERATIONAL & MOBILE SERVICE DISCLAIMERS */}
        <div>
          <div className="p-3 bg-stone-950/60 border border-stone-800/60 rounded-lg text-[11px] text-stone-500 leading-relaxed font-sans space-y-1.5">
            {/* <p>
              <strong className="text-stone-400 font-medium">
                Scheduled Mobile Scope:
              </strong>{" "}
              Mobile services are scheduled on-site installations across our
              regional coverage area and do not constitute emergency highway
              roadside response.
            </p> */}
            <p>
              <strong className="text-stone-400 font-medium">
                Service Conditions & Rates:
              </strong>{" "}
              Service is subject to inventory availability, safe site working
              conditions, vehicle condition, and travel-zone fees. Final rates
              and availability are fully confirmed by 7th Gear Tire Works prior
              to dispatch.
            </p>
          </div>
        </div>
        <div className="p-3 bg-stone-900/80 border border-stone-800 rounded-lg flex items-start gap-3">
          <svg
            className="w-7 h-7 text-red-700 shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
            <strong className="text-stone-200/90 font-bold">
              Immediate Callback:
            </strong>{" "}
            Submitting this form alerts dispatch. Expect a quick call to confirm
            exact ETA, inventory, and final pricing before rolling out.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-red-900 active:bg-red-900 active:scale-[0.97] text-white font-display font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg shadow-lg shadow-red-950/30 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 disabled:active:bg-red-800"
        >
          <span>
            {isSubmitting ? "Submitting Request..." : submitButtonText}
          </span>
        </button>
      </div>
    </div>
  );
}
