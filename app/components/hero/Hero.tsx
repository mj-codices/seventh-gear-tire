import Link from "next/link";
import NavTruck from "../ui/NavTruck";
import TireServiceIcon from "../ui/TireAndTool";
import TireAndClock from "../ui/TireAndClock";

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
      <div className="relative z-10 w-full max-w-xl xl:max-w-2xl space-y-6 lg:space-y-0 mb-10 max-[380px]:mt-25 mt-5 md:mt-25">
        <h1 className="font-display text-5xl sm:text-7xl font-extrabold tracking-wider text-white/80">
          <span className="block text-red-700 leading-22">
            Commercial Tires.
          </span>

          {/* Added block, leading-tight (or leading-none), and mt-1 for precise spacing */}
          <span className="block text-[40px] tracking-[.05rem] leading-14 mt-1">
            Sold, Installed, or Delivered Where You Need Them.
          </span>
        </h1>

        <p className="text-stone-300 leading-9 sm:text-xl pt-8 pb-8 tracking-[.05rem]">
          Purchase tires directly, visit our shop for professional installation
          and light maintenance, or schedule planned on-site service for your
          fleet, farm, equipment, or job site.
        </p>

        {/* Primary CTA Button - High-contrast, easy to tap */}

        <div className="pt-2 pl-2 pr-2 sm:pr-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full max-w-xl">
            {/* Button 1: Fleet & Distribution */}
            <Link href="/contact?service=fleet" className="w-full sm:flex-1">
              <button className="group relative w-full h-14 bg-transparent border-2 border-white text-white font-bold rounded-md uppercase font-extrabold tracking-tight text-xs sm:text-sm transition duration-300 hover:bg-red-800 hover:border-red-800 cursor-pointer overflow-hidden">
                {/* Default Idle Text */}
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Fleet & Distribution
                </span>
                {/* Hover State: "Schedule Now" + Fleet Icon */}
                <span className="absolute inset-0 flex items-center justify-center gap-1.5 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <span>Schedule Now</span>
                  <NavTruck className="w-10 h-10" />
                </span>
              </button>
            </Link>

            {/* Button 2: Shop Services */}
            <Link href="/contact?service=shop" className="w-full sm:flex-1">
              <button className="group relative w-full h-14 bg-transparent border-2 border-white text-white font-bold rounded-md uppercase font-extrabold tracking-tight text-xs sm:text-sm transition duration-300 hover:bg-red-800 hover:border-red-800 cursor-pointer overflow-hidden">
                {/* Default Idle Text */}
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Shop Services
                </span>
                {/* Hover State: "Schedule Now" + Wrench / Shop Icon */}
                <span className="absolute inset-0 flex items-center justify-center gap-1.5 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <span>Schedule Now</span>
                  <TireServiceIcon className="w-8 h-8" />
                </span>
              </button>
            </Link>

            {/* Button 3: Mobile Services */}
      <Link href="/contact?service=mobile" className="w-full sm:flex-1">
  <button className="group relative w-full h-14 bg-transparent border-2 border-white text-white font-extrabold rounded-md uppercase tracking-tight text-xs sm:text-sm transition duration-300 hover:bg-red-800 hover:border-red-800 cursor-pointer overflow-hidden">
    {/* Default Idle Text */}
    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
      Mobile Services
    </span>
    {/* Hover State: "Schedule Now" + Tire / Clock Icon */}
    <span className="absolute inset-0 flex items-center justify-center gap-1.5 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
      <span>Schedule Now</span>
      <TireAndClock className="w-9 h-9 [&_.icon-face]:!fill-white [&_.icon-bg-accent]:!fill-red-800" />
    </span>
  </button>
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
