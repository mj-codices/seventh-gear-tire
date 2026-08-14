"use client";
import Link from "next/link";
import Image from "next/image";
import Chevrons from "../ui/Chevrons";
import Truck2 from "../ui/NavTruck";
import TireAndClock from "../ui/TireAndClock";
import TireServiceIcon from "../ui/TireAndTool";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  TargetAndTransition,
} from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isServiceRoute = pathname === "/services";

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Mobile accordion states
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutMobileOpen, setIsAboutMobileOpen] = useState(false);

  // Desktop hover/click dropdown states
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const [isMounted, setIsMounted] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  // Click outside listener for "What We Offer" dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownHovered(false);
      }
    };

    if (isDropdownHovered) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownHovered]);

  // Click outside listener for "Who We Are" dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setIsAboutHovered(false);
      }
    };

    if (isAboutHovered) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAboutHovered]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // Scroll Listener with Hysteresis (Dead Zone) to prevent flickering near 20px
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 30) {
        setHasScrolled(true);
      } else if (currentScroll < 10) {
        setHasScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleToggleMenu = (nextState?: boolean) => {
    setIsOpen((prev) => {
      const value = typeof nextState === "boolean" ? nextState : !prev;
      if (!value) {
        setIsServicesOpen(false); // Reset dropdowns when drawer closes
        setIsAboutMobileOpen(false);
      }
      return value;
    });
  };

  // Framer Motion Spring Configurations
  const menuSpring: TargetAndTransition["transition"] = {
    type: "spring",
    stiffness: 400,
    damping: 40,
  };

  // Framer Motion Variants
  const menuVariants: Variants = {
    closed: {
      x: "-100%",
      transition: { ...menuSpring },
    },
    open: {
      x: 0,
      transition: { ...menuSpring, damping: 35 },
    },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const closeButtonVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { delay: 0.1 } },
  };

  const isAnyDropdownActive = isDropdownHovered || isAboutHovered;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-20 lg:h-30">
        {/* LAYER 1: The Solid Active State Background */}
        <div
          className={`absolute inset-0 bg-stone-950 transition-opacity duration-400 pointer-events-none border-stone-800/90 border-b-[.1rem] drop-shadow-xl
      ${hasScrolled || isAnyDropdownActive ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        />

        {/* LAYER 2: The Initial Transparent Gradient Scrim */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/60 to-transparent transition-opacity duration-400 pointer-events-none
      ${hasScrolled || isAnyDropdownActive ? "opacity-0" : "opacity-100"}`}
          aria-hidden="true"
        />

        {/* The Content Container */}
        <div className="relative z-10 flex items-center justify-between w-full h-full ml-[-.5rem] lg:ml-0 px-6 sm:px-12 lg:px-10">
          {/* LEFT INNER CLUSTER: Hamburger, Logo, and Desktop Exploration Links */}
          <div className="flex items-center gap-2 sm:gap-6 md:gap-8">
            {/* Hamburger Icon — Hidden only on /services */}
            {isMounted && !isServiceRoute && (
              <button
                type="button"
                onClick={() => handleToggleMenu(true)}
                className="text-white hover:text-stone-300 p-1 transition-colors flex-shrink-0 lg:hidden cursor-pointer"
                aria-label="Open navigation menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-12 md:h-14 md:w-14 lg:h-16 lg:w-16 text-white/90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              </button>
            )}

            {/* Logo Wrapper Container */}
            <span className="flex items-center ml-1 md:ml-4 lg:ml-0 flex-shrink-0 w-[240px] sm:w-[280px] md:w-[300px] lg:w-[410px]">
              {isMounted && !isServiceRoute && (
                <Link href="/" className="w-full cursor-pointer">
                  <Image
                    src="/logo-alt.png"
                    alt="company logo"
                    width={270}
                    height={270}
                    className="-mt-1 w-full h-auto object-contain"
                  />
                </Link>
              )}
            </span>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12 lg:-ml-4 xl:ml-12 h-full text-sm font-display uppercase tracking-wider text-stone-300">
              {/* ROUTING GUARD: Hidden only on /services */}
              {!isServiceRoute && (
                <>
                  {/* LINK 1: WHAT WE OFFER */}
                  <div
                    ref={dropdownRef}
                    className="relative flex items-center h-full"
                    onMouseEnter={() => {
                      if (window.matchMedia("(hover: hover)").matches) {
                        setIsDropdownHovered(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.matchMedia("(hover: hover)").matches) {
                        setIsDropdownHovered(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsDropdownHovered((prev) => !prev);
                        setIsAboutHovered(false);
                      }}
                      className={`flex items-center gap-1.5 transition-colors duration-200 ${
                        isDropdownHovered
                          ? "text-white"
                          : "text-stone-300 hover:text-white"
                      }`}
                    >
                      <span className="text-base uppercase -mt-2 whitespace-nowrap">
                        What We Offer
                      </span>
                      <span
                        className={`inline-block transform transition-transform duration-300 -mt-1 ${
                          isDropdownHovered
                            ? "rotate-90 text-white"
                            : "text-stone-500"
                        }`}
                        aria-hidden="true"
                      >
                        <Chevrons />
                      </span>
                    </button>

                    {/* What We Offer Panel */}
                    <AnimatePresence>
                      {isDropdownHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-[calc(100%-9px)] left-0 w-80 pt-15 z-50"
                        >
                          <div className="w-full bg-stone-950 border-b-[.1rem] border-l-[.1rem] border-r-[.1rem] border-t border-stone-800 rounded-b-lg shadow-2xl overflow-hidden">
                            {/* Item 1: Direct Tire Purchasing & Fleet Sales */}
                            <Link
                              href="/services"
                              className="group/link flex items-center gap-5 px-3 py-5.5 text-sm font-bold text-stone-300 hover:bg-stone-900/30 hover:text-white transition-colors border-b border-stone-800"
                            >
                              <span className="text-stone-500 group-hover/link:text-red-700 transition-colors duration-200 flex-shrink-0">
                                <Truck2 />
                              </span>
                              <span>
                                Tire Distribution &amp;
                                <br />
                                Fleet Sales
                              </span>
                            </Link>

                            {/* Item 2: In-Shop Service */}
                            <Link
                              href="/services"
                              className="group/link flex items-center gap-[1.4rem] px-5 py-5.5 text-sm font-bold text-stone-300 hover:bg-stone-900/30 hover:text-white transition-colors border-b border-stone-800"
                            >
                              <span className="text-stone-500 group-hover/link:text-red-700 transition-colors duration-200 flex-shrink-0 pb-1">
                                <TireServiceIcon />
                              </span>
                              <span>
                                Shop Tire &amp;
                                <br />
                                Light Mechanical
                              </span>
                            </Link>

                            {/* Item 3: Scheduled Mobile Installation */}
                            <Link
                              href="/services"
                              className="group/link flex items-center gap-4 px-5 py-5.5 text-sm font-bold text-stone-300 hover:bg-stone-900/30 hover:text-white transition-colors"
                            >
                              <span className="text-stone-950 group-hover/link:text-[#110f0d] transition-colors duration-200 flex-shrink-0 pb-2">
                                <TireAndClock />
                              </span>
                              <span>
                                Scheduled Mobile
                                <br />
                                Fleet Installation
                              </span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* LINK 2: WHO WE ARE */}
                  <div
                    ref={aboutDropdownRef}
                    className="relative flex items-center h-full"
                    onMouseEnter={() => {
                      if (window.matchMedia("(hover: hover)").matches) {
                        setIsAboutHovered(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.matchMedia("(hover: hover)").matches) {
                        setIsAboutHovered(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsAboutHovered((prev) => !prev);
                        setIsDropdownHovered(false);
                      }}
                      className={`flex items-center gap-1.5 transition-colors duration-200 ${
                        isAboutHovered
                          ? "text-white"
                          : "text-stone-300 hover:text-white"
                      }`}
                    >
                      <span className="text-base uppercase -mt-2 whitespace-nowrap">
                        Why Choose Us
                      </span>
                      <span
                        className={`inline-block transform transition-transform duration-300 -mt-1 ${
                          isAboutHovered
                            ? "rotate-90 text-white"
                            : "text-stone-500"
                        }`}
                        aria-hidden="true"
                      >
                        <Chevrons />
                      </span>
                    </button>

                    {/* Who We Are Panel */}
                    <AnimatePresence>
                      {isAboutHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-[calc(100%-9px)] left-0 w-60 pt-15 z-50"
                        >
                          <div className="w-full bg-stone-950 border-b-[.1rem] border-l-[.1rem] border-r-[.1rem] border-t border-stone-800 rounded-b-lg shadow-2xl overflow-hidden">
                            <Link
                              href="/about#works"
                              className="group/link flex items-center justify-between px-6 py-5 text-sm font-bold text-stone-300 hover:bg-stone-900/30 hover:text-white transition-colors border-b border-stone-800"
                            >
                              <span>How It Works</span>
                              {/* <span className="text-stone-500 group-hover/link:text-red-700 transition-colors">
                                <Chevrons />
                              </span> */}
                            </Link>
                            <Link
                              href="/about#service"
                              className="group/link flex items-center justify-between px-6 py-5 text-sm font-bold text-stone-300 hover:bg-stone-900/30 hover:text-white transition-colors border-b border-stone-800"
                            >
                              <span>Service Area</span>
                              {/* <span className="text-stone-500 group-hover/link:text-red-700 transition-colors">
                                <Chevrons />
                              </span> */}
                            </Link>
                            <Link
                              href="/about"
                              className="group/link flex items-center justify-between px-6 py-5 text-sm font-bold text-stone-300 hover:bg-stone-900/30 hover:text-white transition-colors "
                            >
                              <span>About 7th Gear</span>
                              {/* <span className="text-stone-500 group-hover/link:text-red-700 transition-colors">
                                <Chevrons />
                              </span> */}
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </>
              )}
            </nav>
          </div>

          {/* RIGHT SIDE CTA ACTION */}
          <div className="flex items-center mt-1">
            {isMounted && isServiceRoute ? (
              <Link
                href="/"
                className="inline-block bg-transparent text-white font-display text-sm font-bold uppercase tracking-widest px-5 py-3 sm:px-6 sm:py-3.5 rounded border-2 border-stone-700 hover:border-red-800 hover:bg-red-800 transition-all duration-300 shadow-md whitespace-nowrap mt-3 -ml-40"
              >
                Back To Home
              </Link>
            ) : (
              <Link
                href="/contact"
                className="hidden lg:inline-block bg-transparent text-white font-display text-sm font-bold uppercase tracking-widest px-6 py-3.5 ml-5 rounded border-2 border-red-800 hover:bg-red-800 active:bg-red-900 transition-all duration-300 shadow-md hover:shadow-red-900/20 whitespace-nowrap"
              >
                Request a Quote
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Slide-out Menu and Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={closeButtonVariants}
              className="fixed top-6 max-[380px]:left-[85vw] left-[86vw] sm:left-[92.5vw] z-50 md:left-[calc(max-md-width+24px)]"
            >
              <button
                type="button"
                onClick={() => handleToggleMenu(false)}
                className="text-white hover:text-stone-300 transition-colors"
                aria-label="Close navigation menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 left-0 bottom-0 z-50 w-[80vw] sm:w-[90vw] bg-stone-950 border-r border-stone-800 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-start mb-5 h-20 lg:h-30 bg-white/90 pl-6 sm:pl-12 pr-8">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/logo-nav.png"
                      alt="nav menu logo"
                      width={240}
                      height={60}
                      className="object-contain max-h-12 sm:max-h-12 md:max-h-15 w-auto"
                    />
                  </Link>
                </div>

                <nav className="flex flex-col text-xl md:text-2xl text-stone-200">
                  {/* MOBILE ACCORDION 1: WHAT WE OFFER */}
                  <div className="flex flex-col w-full">
                    <button
                      type="button"
                      onClick={() => {
                        setIsServicesOpen(!isServicesOpen);
                        setIsAboutMobileOpen(false);
                      }}
                      className="flex items-center justify-between w-full pl-8 sm:pl-15 pr-6 pt-2 md:pt-4 pb-5 md:pb-7 text-left font-display uppercase tracking-wider text-stone-200 hover:text-white transition-colors"
                    >
                      <span>What We Offer</span>
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 90 : 0 }}
                        className="inline-flex items-center justify-center mt-0.5"
                        transition={{
                          type: "tween",
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <Chevrons />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col mt-2 bg-stone-900 text-base md:text-lg text-stone-300 uppercase">
                            {/* Item 1: Tire Distribution & Fleet Sales */}
                            <Link
                              href="/services"
                              onClick={() => handleToggleMenu(false)}
                              className="group/mobile-link flex items-center justify-between py-5 pl-8 sm:pl-16 pr-4 border-b border-stone-800 font-display hover:text-white transition-colors text-left"
                            >
                              <div className="max-[500px]:ml-0 ml-7 flex items-center gap-9">
                                <span className="text-stone-200 group-hover/mobile-link:text-red-700 transition-colors duration-200 shrink-0">
                                  <Truck2 />
                                </span>
                                <span>
                                  Tire Distribution &amp; <br /> Fleet Sales
                                </span>
                              </div>
                              <span className="mt-0.5 mr-6 shrink-0">
                                <Chevrons className="text-stone-600" />
                              </span>
                            </Link>

                            {/* Item 2: Shop Tire & Light Mechanical */}
                            <Link
                              href="/services"
                              onClick={() => handleToggleMenu(false)}
                              className="group/mobile-link flex items-center justify-between py-5 pl-8 sm:pl-16 pr-4 border-b border-stone-800 font-display hover:text-white transition-colors text-left"
                            >
                              <div className="max-[500px]:ml-0 ml-9 flex items-center gap-8 md:gap-10">
                                <span className="text-stone-300 group-hover/mobile-link:text-red-700 transition-colors duration-200 shrink-0">
                                  <TireServiceIcon />
                                </span>
                                <span>
                                  Shop Tire &amp; <br /> Light Mechanical
                                </span>
                              </div>
                              <span className="mt-0.5 mr-6 shrink-0">
                                <Chevrons className="text-stone-600" />
                              </span>
                            </Link>

                            {/* Item 3: Scheduled Mobile Fleet Installation */}
                            <Link
                              href="/services"
                              onClick={() => handleToggleMenu(false)}
                              className="group/mobile-link flex items-center justify-between py-5 pl-8 sm:pl-16 pr-4 font-display hover:text-white transition-colors text-left"
                            >
                              <div className="max-[500px]:ml-0 ml-8.5 flex items-center gap-8">
                                <span className="text-stone-900 transition-colors duration-200 shrink-0 -translate-y-1">
                                  <TireAndClock />
                                </span>
                                <span>
                                  Scheduled Mobile <br /> Fleet Installation
                                </span>
                              </div>
                              <span className="mt-0.5 mr-6 shrink-0">
                                <Chevrons className="text-stone-600" />
                              </span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* MOBILE ACCORDION 2: WHY CHOOSE US */}
                  <div className="flex flex-col w-full border-t border-stone-800">
                    <button
                      type="button"
                      onClick={() => {
                        setIsAboutMobileOpen(!isAboutMobileOpen);
                        setIsServicesOpen(false);
                      }}
                      className="flex items-center justify-between w-full pl-8 sm:pl-15 pr-6 py-6 md:py-7 text-left font-display uppercase tracking-wider text-stone-200 hover:text-white transition-colors"
                    >
                      <span>Why Choose Us</span>
                      <motion.span
                        animate={{ rotate: isAboutMobileOpen ? 90 : 0 }}
                        className="inline-flex items-center justify-center mt-0.5"
                        transition={{
                          type: "tween",
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <Chevrons />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isAboutMobileOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col bg-stone-900 text-base md:text-lg text-stone-300 uppercase">
                            <Link
                              href="/about"
                              onClick={() => handleToggleMenu(false)}
                              className="flex items-center justify-between py-5 pl-10 sm:pl-20 pr-4 border-b border-stone-800 font-display hover:text-white transition-colors text-left"
                            >
                              <span>How It Works</span>
                              <span className="mt-0.5 mr-6 shrink-0">
                                <Chevrons className="text-stone-600" />
                              </span>
                            </Link>

                            <Link
                              href="/about#fleet"
                              onClick={() => handleToggleMenu(false)}
                              className="flex items-center justify-between py-5 pl-10 sm:pl-20 pr-4 font-display hover:text-white transition-colors text-left border-b border-stone-800"
                            >
                              <span>Service Area</span>
                              <span className="mt-0.5 mr-6 shrink-0">
                                <Chevrons className="text-stone-600" />
                              </span>
                            </Link>

                            <Link
                              href="/about#fleet"
                              onClick={() => handleToggleMenu(false)}
                              className="flex items-center justify-between py-5 pl-10 sm:pl-20 pr-4 font-display hover:text-white transition-colors text-left"
                            >
                              <span>About 7th Gear</span>
                              <span className="mt-0.5 mr-6 shrink-0">
                                <Chevrons className="text-stone-600" />
                              </span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* MOBILE LINK: REQUEST A QUOTE */}
                  <div className="flex flex-col w-full border-t border-stone-800">
                    <Link
                      href="/contact"
                      className="flex items-center justify-between w-full pl-8 sm:pl-15 pr-6 py-6 md:py-7 font-display uppercase tracking-wider text-stone-200 hover:text-white transition-colors text-left"
                      onClick={() => handleToggleMenu(false)}
                    >
                      <span>Request a Quote</span>
                      <span className="mt-0.5">
                        <Chevrons />
                      </span>
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
