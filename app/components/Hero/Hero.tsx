import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-svh w-full flex flex-col justify-center p-6 sm:p-12 md:p-16 xl:p-30 bg-stone-900 overflow-hidden">
      {/* Background Video with a dark overlay to make text pop */}
      <div className="absolute inset-0 z-0 hero-video-container">
        <video 
          src="/tire_01.mp4" /* Replace with your actual video path in the public folder */
          autoPlay 
          loop 
          muted 
          playsInline 
          className="h-full w-full object-cover opacity-60 hero-video-container"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
      </div>

      {/* Content Stack - Anchored to the bottom for comfortable thumb-tapping */}
      <div className="relative z-10 w-full max-w-xl xl:max-w-2xl space-y-6 sm:space-y-9 mb-10 max-[380px]:mt-25 mt-5 md:mt-25">
        <h1 className="font-display text-5xl sm:text-6xl leading-13 sm:leading-16 font-extrabold tracking-wider text-white/90 px-3">
          <span className="text-red-600 brightness-110">Commercial Tires.</span>
          <br />
          Delivered & Fitted On-Site.
        </h1>

        <p className="text-white leading-6 px-3 sm:text-lg">
          We bring the tire shop to you. No waiting in lines, no wasted hours.
          Schedule your fleet service today.
        </p>

        {/* Primary CTA Button - High-contrast, easy to tap */}
        <div className="pt-2 pl-3 pr-15">
          <Link href="/contact" className="w-full block">
            <button className="w-full max-w-xs bg-transparent border-2 border-white text-white font-bold h-14 rounded-md uppercase font-extrabold tracking-tight transition duration-300 hover:bg-red-800 hover:border-red-800 cursor-pointer">
              Schedule Service
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}