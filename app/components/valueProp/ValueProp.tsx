import Link from "next/link";
import Chevrons from "../ui/Chevrons";

export default function HowItWorks() {
  return (
    <div className="relative mx-auto mt-13 sm:mt-25 md:mt-30 w-[calc(100%-3rem)] sm:w-[calc(100%-6rem)] md:w-[calc(100%-10rem)] rounded-md bg-stone-950 px-6 pt-9 sm:pt-15 md:pt-20 pb-12 sm:pb-20 md:pb-25 border-l border-r border-stone-800/40 drop-shadow-xl lg:drop-shadow-3xl">
      {/* Changed xl:grid-cols-4 to lg:grid-cols-4 to snap into a single row at 1024px */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-stone-800">
        {/* 1. First Item */}
        {/* Swapped xl: values out for lg: variants */}
        <div className="px-4 sm:px-10 md:px-20 lg:px-6 xl:px-16 pt-4 xl:pt-5 pb-8 lg:py-4 border-r border-b border-stone-900 lg:border-b-0 flex flex-col items-center justify-center">
          <div className="text-stone-400" aria-hidden="true"></div>
          <h5 className="font-sans text-xs sm:text-base font-bold text-stone-400/90 text-center leading-relaxed tracking-wide">
            Light, medium, and heavy-duty fleet focus.
          </h5>
        </div>

        {/* 2. Second Item */}
        {/* Swapped xl: values out for lg: variants */}
        <div className="px-4 sm:px-12 md:px-20 lg:px-6 xl:px-16 pt-4 md:pt-7 pb-8 lg:py-4 border-b border-stone-900 lg:border-b-0 lg:border-r border-stone-900 flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-2">
          <div
            className="text-stone-400 flex items-center justify-center"
            aria-hidden="true"
          ></div>
          <h5 className="font-sans text-xs sm:text-base font-bold text-stone-400/90 text-center leading-relaxed tracking-wide">
            Tires optimized for rough Texas roads.
          </h5>
        </div>

        {/* 3. Third Item (Time Quadrant) */}
        {/* Swapped xl: values out for lg: variants, and stripped out the extra mobile border-b tracking entirely */}
        <div className="pt-2 sm:pt-5 lg:pt-0 pb-8 lg:py-4 border-r border-stone-900 lg:border-b-0 flex flex-col items-center justify-center gap-1 px-6">
          <div
            className="text-stone-400/90 flex items-center justify-center"
            aria-hidden="true"
          ></div>
          <h5 className="font-sans text-xs sm:text-base font-bold text-stone-400/90 text-center leading-relaxed tracking-wide">
            No waiting rooms or dealership lineups.
          </h5>
        </div>

        {/* 4. Fourth Item */}
        {/* Remove the outer layout padding from this wrapper so it doesn't create dead zones */}
        <div className="flex items-center justify-center mt-6 md:mt-10 lg:mt-10">
          <Link
            href="/contact"
            className="group flex items-center justify-center w-full h-full p-6 text-center text-stone-200 rounded-xl transition-colors hover:text-white active:bg-white/5 lg:p-6"
          >
            <h5 className="font-display uppercase leading-normal tracking-wider text-center sm:text-lg">
              Spec your{" "}
              <span className="inline-flex items-center gap-1 whitespace-nowrap">
                fleet
                <span
                  className="group-hover:translate-x-1 transition-transform duration-500 mt-1"
                  aria-hidden="true"
                >
                  <Chevrons />
                </span>
              </span>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
