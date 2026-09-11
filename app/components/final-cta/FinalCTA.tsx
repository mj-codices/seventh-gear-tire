import Link from "next/link";
import Chevrons from "../ui/Chevrons";

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-stone-950 py-20 border-t border-stone-900">
      <div className="container relative mx-auto px-10.5 sm:px-6 lg:px-8 max-w-4xl text-center">
        {/* Section Heading */}
        <h2 className="font-display mx-auto  text-2xl sm:text-3xl lg:text-4xl text-white/90 uppercase tracking-wide max-w-sm">
          Tell Us What You Operate and What You Need
        </h2>

        {/* Informational Blurb */}
        <p className="mt-4 text-sm md:text-base text-stone-400 leading-relaxed max-w-2xl mx-10 sm:mx-20">
          Send us your tire size, equipment information, quantity, preferred service location, and timing. We will confirm available options and provide a clear quote before the order or appointment is finalized.
        </p>

        {/* Direct Link to Request Form */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-6 px-8 py-4 bg-red-900 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider text-base rounded-md transition-colors border-2 border-red-900 border-opacity-80"
          >
            <span>Request Quote</span>
            <span
              className="group-hover:translate-x-1 transition-transform duration-300 mt-0.5"
              aria-hidden="true"
            >
              <Chevrons className="text-white/90" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}