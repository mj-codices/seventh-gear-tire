"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-24">
      
      {/* LAYER 1: The Solid Active State Background
          This sits underneath everything. It fades smoothly from opacity 0 to 100.
          We also put the backdrop blur and border strictly on this layer. */}
      <div
        className={`absolute inset-0 bg-stone-950 transition-opacity duration-300 pointer-events-none
          ${hasScrolled ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      />

      {/* LAYER 2: The Initial Transparent Gradient Scrim
          This sits on top of Layer 1. When scrolling, it fades to opacity 0 
          so it doesn't muck up the crisp rendering of the solid bar beneath it. */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/60 to-transparent transition-opacity duration-300 pointer-events-none
          ${hasScrolled ? "opacity-0" : "opacity-100"}`}
        aria-hidden="true"
      />

      {/* The Content Container */}
      <div className="relative z-10 flex items-center justify-between h-full ml-[-.5rem] px-6 md:px-12">
        {/* Hamburger Icon */}
        <button 
          type="button" 
          className="text-white hover:text-stone-300 p-1 transition-colors"
          aria-label="Open navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-12 w-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}