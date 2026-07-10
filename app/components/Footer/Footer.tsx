export default function Footer() {
  return (
    <div>
      {/* Added flex and items-center to safely organize the vertical flow */}
      <footer className="w-full bg-stone-950 pt-13 sm:pt-20 pb-16 sm:pb-22 flex flex-col items-center leading-none">
        <div className="max-w-5xl w-full">
          {/* Left Side: Brand & Identity */}
          <div className="flex justify-center tracking-[.03rem] -mt-2 opacity-95">
            <img
              src="/logo-alt.png"
              alt="company logo"
              width={326}
              height={326}
              className="w-[300px] sm:w-[500px] md:w-[600px] sm:h-auto object-contain"
            />
          </div>
        </div>

        <div className="max-w-5xl w-full mx-auto mt-5 md:mt-10 pt-8 border-t border-stone-900 text-xs md:text-base text-stone-400 font-sans">
          <p className="text-center">
            © 2026 7th Gear Tire Works. All rights reserved.
          </p>
          {/* <p className="tracking-tight">Design by MW</p> */}
        </div>
      </footer>
    </div>
  );
}
