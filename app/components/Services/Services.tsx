import Link from "next/link";
import Chevrons from "../UI/Chevrons";

export default function Services() {
  return (
    <section className="relative bg-stone-950 px-9 py-16 space-y-15 drop-shadow-2xl">
      {/* Section Header */}
      <div className="space-y-4">
        <h2 className="font-display text-3xl uppercase tracking-tight text-white">
          Our Fleet Services
        </h2>
      </div>

      {/* Services Stack - Pure vertical alignment for mobile viewports */}
      <div className="space-y-10 flex flex-col">
        <Link href="/contact/">
          {/* Service 1: Hot Shot & Goosenecks */}
          <div className="space-y-3">
            {/* Icon Wrapper */}
            <div className="relative flex flex-col items-center w-max ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-35 text-stone-500 z-10"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>

              <div
                className="h-6 w-20 rounded-[50%] bg-stone-800 -mt-4.5"
                aria-hidden="true"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-white/90 tracking-tight">
                On-Site Tire Replacement
              </h3>
              <p className="text-base text-stone-400 max-w-sm">
                Commercial-grade mounting, precision computer balancing, and
                fresh rubber delivered directly to your home base or warehouse
                yard. Engineered for light to medium-duty trucks, box trucks,
                and regional delivery vans.
              </p>
            </div>
            <div className="ml-1 mt-5 flex row gap-1.5">
              <p className="font-display tracking-wide uppercase text-white/90">Schedule{" "}Appointment</p>
              <span className="mt-1">
                <Chevrons />
              </span>
            </div>
          </div>
        </Link>

        {/* 
          THE STRUCTURAL MOBILE DIVIDER 
          By adding self-center, it sits beautifully right in the middle 
          of your massive space-y-25 margin gap, creating a premium anchor.
        */}
        
        <div className="border-t border-stone-900/60 w-75" aria-hidden="true" />

        <Link href="/contact/">
          {/* Service 2: Box Trucks & Delivery */}
          <div className="space-y-5">
            {/* Added flex and flex-col to match the physical structural stacking style of card one */}
            <div className="relative flex flex-col items-center w-max ml-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-30 text-stone-500"
              >
                <path
                  fillRule="evenodd"
                  d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-white/90 tracking-tight">
                Commercial Curation & Sourcing
              </h3>
              <p className="text-base text-stone-400 max-w-sm">
                Whether your fleet demands closed-shoulder drive tires for
                maximum Texas highway efficiency, or aggressive lugs engineered
                for rugged regional job sites, we match your weight margins with
                top-tier inventory.
              </p>
            </div>
               <div className="ml-1 mt-5 flex row gap-1.5">
              <p className="font-display uppercase text-white/90">Learn More</p>
              <span className="mt-1">
                <Chevrons />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
