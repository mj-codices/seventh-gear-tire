import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-svh w-full flex flex-col justify-center p-6 bg-stone-900">
      {/* Background Image with a dark overlay to make text pop */}
      <div className="absolute inset-0 z-0">
        {/* <img 
          src="/tires.jpg" 
          alt="tires" 
          className="h-full w-full object-cover opacity-60"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
      </div>

      {/* Content Stack - Anchored to the bottom for comfortable thumb-tapping */}
      <div className="relative z-10 w-full max-w-xl space-y-6 mb-8 mt-15">
        <h1 className="font-display text-5xl leading-13 font-extrabold tracking-wider text-white sm:text-4xl px-3">
          <span className="text-red-500">Commercial Tires.</span>
          <br />
          Delivered & Fitted On-Site.
        </h1>

        <p className="text-white leading-6 px-3">
          We bring the tire shop to you. No waiting in lines, no wasted hours.
          Schedule your fleet service today.
        </p>

        {/* Primary CTA Button - High-contrast, easy to tap */}
        <div className="pt-2 pl-3 pr-15">
          <Link href="/contact" className="w-full block">
            <button className="w-full bg-transparent border-2 border-white text-white font-bold h-14 rounded-lg uppercase font-extrabold tracking-tight">
              Schedule Service
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
