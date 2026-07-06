export default function () {
  return (
    <div>
      <footer className="w-full bg-stone-950 pt-13 pb-16 px-6 leading-none">
        <div className="max-w-5xl">
          {/* Left Side: Brand & Identity */}

          <div className="text-center tracking-[.03rem] -mt-2 opacity-95">
          <img src="/logo.png" alt="company logo" width={326} height={326} />
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-5 pt-8 border-t border-stone-900 text-xs text-stone-400 font-sans">
          <p className="text-center">
            © 2026 7th Gear Tire Works. All rights reserved.
          </p>
          {/* <p className="tracking-tight">Design by MW</p> */}
        </div>
      </footer>
    </div>
  );
}
