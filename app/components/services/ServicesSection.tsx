import Link from "next/link";
import Chevrons from "../ui/Chevrons";
import Image from "next/image";

export default function Services() {
  return (
    <section className="relative border-t border-stone-900 bg-stone-950 px-10.5 sm:px-18 md:px-20 lg:px-0 lg:pl-24 lg:pr-10 xl:px-33 pt-15 md:pt-30 pb-20 md:pb-30 xl:pb-35 space-y-10 md:space-y-15 z-10 drop-shadow-xl lg:drop-shadow-4xl">
      {/* Section Header */}
      <div>
        <h2 className="text-base md:text-[27px] uppercase tracking-[.3rem] text-stone-400 ">
          Services
        </h2>
        <p className="mt-5 font-display text-[25px] text-white/90 leading-8 lg:leading-10 pb-2 md:pb-5 max-w-xs">
          Uptime solutions engineered for your fleet.
        </p>
      </div>

      {/* Services Stack */}
      <div className="flex flex-col space-y-12 lg:space-y-0 lg:grid lg:grid-cols-[auto_1fr] lg:gap-x-18 xl:gap-x-30 lg:items-start">
        {/* LEFT COLUMN: Image Wrapper */}
        <div className="relative flex flex-col w-full max-w-xs md:max-w-lg lg:max-w-[520px] mr-3.5 pr-3 pb-3 lg:mr-0 lg:pr-0">
          {/* Inner Layer */}
          <div className="w-full max-w-xs md:max-w-md max-[400px]:h-50 h-60 md:h-84 lg:aspect-[5/4] rounded-xl overflow-hidden mb-2 relative after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)] after:pointer-events-none after:z-10">
            <Image
              src="/services.jpeg"
              alt="Working on tire"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover opacity-90"
            />
          </div>

          {/* 3. The Top-Right SVG */}
          <svg
            className="absolute -top-7.5 md:-top-12.5 -right-4 md:right-6 lg:-right-11 lg:-top-12 w-30 h-30 md:w-45 md:h-45 text-stone-500/60 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 10 10 H 70 Q 90 10 90 30 V 90"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="butt"
              strokeDasharray="10 6"
            />
          </svg>

          {/* 4. The Bottom-Left Geometric Slab SVG */}
          <div className="absolute bottom-2 md:bottom-0.5 -left-3 md:-left-5 lg:-left-3.5 text-red-800 -translate-x-4 pointer-events-none">
            <svg
              className="w-60 md:w-85 lg:w-95 h-6.5 md:h-10"
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
        </div>

        {/* RIGHT COLUMN: The Services Content Stack */}

        <div className="flex flex-col space-y-10 md:space-y-12 lg:space-y-8 lg:justify-center lg:h-full">
          {/* Service Division 1: Distribution */}
          <Link href="/services" className="group block">
            <div className="space-y-1 md:space-y-6 lg:space-y-2">
              <h3 className="relative inline-block text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight leading-11 text-white/75 overflow-hidden lg:mr-5">
                <span>Tire Distribution &amp; Fleet Sales</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 block w-full text-white [clip-path:polygon(0_0,0_0,0_100%,0_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-[clip-path] duration-400 ease-in-out pointer-events-none select-none"
                >
                  Tire Distribution &amp; Fleet Sales
                </span>
              </h3>

              <p className="text-base md:text-lg lg:text-xl text-stone-400 max-w-md md:max-w-lg lg:max-w-2xl leading-7.5 lg:leading-10">
                Direct tire purchasing for fleets, independent operators, farms,
                and job sites. Sourced by application, position, and load
                requirements with pickup or coordinated delivery options.
              </p>
            </div>

            <div className="ml-0.5 mt-8 lg:mt-6">
              <p className="font-display tracking-wider uppercase text-stone-200 group-hover:text-white transition-colors duration-300 md:text-lg leading-8">
                Explore Fleet Supply &amp;{" "}
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span>Sourcing</span>
                  <span className="transform translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500 ease-in-out text-amber-400">
                    <Chevrons />
                  </span>
                </span>
              </p>
            </div>
          </Link>

          {/* THE STRUCTURAL DIVIDER */}
          <div
            className="border-t border-stone-900 w-full"
            aria-hidden="true"
          />

          {/* Service Division 2: Shop Service */}
          <Link href="/services" className="group block">
            <div className="space-y-1 md:space-y-6 lg:space-y-2">
              <h3 className="relative inline-block text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight leading-11 text-white/75 overflow-hidden lg:mr-5">
                <span>Shop Tire &amp; Light Mechanical Service</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 block w-full text-white [clip-path:polygon(0_0,0_0,0_100%,0_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-[clip-path] duration-400 ease-in-out pointer-events-none select-none"
                >
                  Shop Tire &amp; Light Mechanical Service
                </span>
              </h3>

              <p className="text-base md:text-lg lg:text-xl text-stone-400 max-w-md md:max-w-lg lg:max-w-2xl leading-7.5 lg:leading-10">
                Professional tire mounting, inspection, approved repairs, and
                torque procedures at our shop, alongside routine preventive
                maintenance like oil, filters, and fluid services.
              </p>
            </div>
            <div className="ml-0.5 mt-8 lg:mt-6">
              <p className="font-display tracking-wider uppercase text-stone-200 group-hover:text-white transition-colors duration-300 md:text-lg leading-8">
                View Shop Services <br /> &amp;{" "}
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span>Menu</span>
                  <span className="transform translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500 ease-in-out">
                    <Chevrons />
                  </span>
                </span>
              </p>
            </div>
          </Link>

          {/* THE STRUCTURAL DIVIDER */}
          <div
            className="border-t border-stone-900 w-full"
            aria-hidden="true"
          />

          {/* Service Division 3: Mobile Service */}
          <Link href="/services" className="group block">
            <div className="space-y-1 md:space-y-6 lg:space-y-2">
              <h3 className="relative inline-block text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight leading-11 text-white/75 overflow-hidden lg:mr-5">
                <span>Scheduled Mobile Fleet Installation</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 block w-full text-white [clip-path:polygon(0_0,0_0,0_100%,0_100%)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-[clip-path] duration-400 ease-in-out pointer-events-none select-none"
                >
                  Scheduled Mobile Fleet Installation
                </span>
              </h3>

              <p className="text-base md:text-lg lg:text-xl text-stone-400 max-w-md md:max-w-lg lg:max-w-2xl leading-7.5 lg:leading-10">
                Planned on-site tire mounting and installation dispatched to
                fleet yards, terminals, construction sites, and commercial
                locations across the greater Abilene area.
              </p>
            </div>

            <div className="ml-0.5 mt-8 lg:mt-6 flex items-center gap-1.5">
              <p className="font-display tracking-wider uppercase text-stone-200 group-hover:text-white transition-colors duration-300 md:text-lg">
                View On-site Capabilities
              </p>
              <span className="transform translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500 ease-in-out">
                <Chevrons />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}