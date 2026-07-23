export default function ContactPage() {
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
            2. STEP 1 FORM SECTION
           ========================================================= */}
        <section className="max-w-3xl p-6 sm:p-8 bg-stone-900/60 border border-stone-800 rounded-2xl space-y-7">
          {/* Step Heading */}
          <div>
            <h2 className="text-xs sm:text-2xl font-bold text-white/60 font-display tracking-widest uppercase border-b border-stone-800 pb-3 leading-6">
              Step 1 — What kind of help do you need?
            </h2>
          </div>

          {/* Radio Button Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                id: "onsite_service",
                title: "Onsite Tire Service",
                desc: "On-location tire repair, replacement, and mounting brought directly to your job site, commercial yard, or shop.",
                tag: "Mobile Dispatch",
              },
                {
                  id: "curation_sourcing",
                  title: "Commercial Tire Sales & Sourcing",
                  desc: "Order bulk commercial tires, stock your yard, or request quotes on specific drive, steer, and trailer tread specs.",
                  tag: 'Bulk & Direct Sales',
                },
              //   {
              //     id: "van_box_truck",
              //     title: "Service Van & Box Truck Tire Work",
              //     desc: "On-site tire replacements and maintenance for local delivery & commercial fleets.",
              //     tag: "Commercial Medium Duty",
              //   },
              //   {
              //     id: "fleet_quote",
              //     title: "Scheduled Fleet Service / Bulk Quote",
              //     desc: "Multi-vehicle fleet tire checks, recurring maintenance packages, and commercial quotes.",
              //     tag: "Multi-Vehicle Fleet",
              //   },
            ].map((option) => (
              <label
                key={option.id}
                className="group relative flex items-start gap-3.5 p-5 bg-stone-950/60 border-[.009rem] border-stone-900/10 rounded-xl cursor-pointer hover:border-red-700/60 hover:bg-stone-950/90 active:scale-[0.98] transition-all duration-200 has-[:checked]:border-red-800 has-[:checked]:bg-stone-950/95 has-[:checked]:ring-1 has-[:checked]:ring-red-600"
              >
                {/* LEFT GUTTER: Dedicated radio slot */}
                <div className="pt-1 shrink-0">
                  <input
                    type="radio"
                    name="service_type"
                    value={option.id}
                    className="h-4 w-4 accent-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                </div>

                {/* RIGHT CONTENT COLUMN: Stacks text & footer badge */}
                <div className="flex flex-col justify-between h-full w-full min-w-0">
                  <div>
                    <span className="font-display text-stone-100 text-lg tracking-wide leading-snug group-hover:text-white block">
                      {option.title}
                    </span>
                    <p className="text-sm text-stone-400 mt-2.5">
                      {option.desc}
                    </p>
                  </div>

                  {/* Micro Tag / Badge at Bottom */}
                  <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-red-500 uppercase tracking-wider font-medium">
                      {option.tag}
                    </span>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
