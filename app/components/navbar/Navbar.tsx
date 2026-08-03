"use client";
import Link from "next/link";
import Chevrons from "../ui/Chevrons";
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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click occurred outside the dropdown container
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

  useEffect(() => {
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

  useEffect(() => {
    if (!isOpen) {
      setIsServicesOpen(false);
    }
  }, [isOpen]);

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-20 md:h-30">
        {/* LAYER 1: The Solid Active State Background */}
        <div
          className={`absolute inset-0 bg-stone-950 transition-opacity duration-400 pointer-events-none border-stone-800/90 border-b-[.1rem] drop-shadow-xl
      ${hasScrolled || isDropdownHovered ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        />

        {/* LAYER 2: The Initial Transparent Gradient Scrim */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/60 to-transparent transition-opacity duration-400 pointer-events-none
      ${hasScrolled || isDropdownHovered ? "opacity-0" : "opacity-100"}`}
          aria-hidden="true"
        />

        {/* The Content Container */}
        <div className="relative z-10 flex items-center justify-between w-full h-full ml-[-.5rem] lg:ml-0 px-6 sm:px-12">
          {/* LEFT INNER CLUSTER: Hamburger, Logo, and Desktop Exploration Links */}
          <div className="flex items-center gap-2 sm:gap-6 md:gap-8">
            {/* Hamburger Icon — Hidden only on /services */}
            {isMounted && !isServiceRoute && (
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="text-white hover:text-stone-300 p-1 transition-colors flex-shrink-0 lg:hidden cursor-pointer"
                aria-label="Open navigation menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-12 md:h-16 md:w-16 text-white/90"
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
            <span className="flex items-center ml-1 md:ml-4 lg:ml-0 flex-shrink-0 w-[240px] sm:w-[280px] md:w-[380px] lg:w-[410px]">
              {isMounted && !isServiceRoute && (
                <Link href="/" className="w-full cursor-pointer">
                  <img
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
            <nav className="hidden lg:flex items-center lg:-ml-4 xl:ml-12 h-full text-sm font-display uppercase tracking-wider text-stone-300">
              {/* ROUTING GUARD: Hidden only on /services */}
              {!isServiceRoute && (
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
                    }}
                    className={`flex items-center gap-1.5 transition-colors duration-200 cursor-pointer ${
                      isDropdownHovered
                        ? "text-white"
                        : "text-stone-300 hover:text-white"
                    }`}
                  >
                    <span className="text-base uppercase">What We Offer</span>
                    <span
                      className={`inline-block transform transition-transform duration-300 mt-1 ${
                        isDropdownHovered
                          ? "rotate-90 text-white"
                          : "text-stone-500"
                      }`}
                      aria-hidden="true"
                    >
                      <Chevrons />
                    </span>
                  </button>

                  {/* Premium Extension Panel Controlled via React State */}
                  <AnimatePresence>
                    {isDropdownHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-[calc(100%-12px)] left-0 w-72 pt-15 z-50"
                      >
                        <div className="w-full bg-stone-950 border border-stone-800 rounded-b-lg shadow-2xl overflow-hidden">
                          <a
                            href="/services"
                            className="group/link flex items-center gap-4 px-5 py-4.5 text-sm font-bold text-stone-300 hover:bg-stone-900 hover:text-white transition-colors border-b border-stone-800"
                          >
                            <span className="text-stone-500 group-hover/link:text-red-600 transition-colors duration-200 flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>On-Site Tire Replacement</span>
                          </a>

                          <a
                            href="/services"
                            className="group/link flex items-center gap-4 px-5 py-4.5 text-sm font-bold text-stone-300 hover:bg-stone-900 hover:text-white transition-colors"
                          >
                            <span className="text-stone-500 group-hover/link:text-red-600 transition-colors duration-200 flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>Commercial Curation &amp; Sourcing</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </nav>
          </div>

          {/* RIGHT SIDE CTA ACTION */}
          <div className="flex items-center mt-1">
            {isMounted && isServiceRoute ? (
              <a
                href="/"
                className="inline-block bg-transparent text-white font-display text-sm font-bold uppercase tracking-widest px-5 py-3 sm:px-6 sm:py-3.5 rounded border-2 border-stone-700 hover:border-red-800 hover:bg-red-800 transition-all duration-300 shadow-md whitespace-nowrap mt-3 -ml-40"
              >
                Back To Home
              </a>
            ) : (
              <a
                href="/contact"
                className="hidden lg:inline-block bg-transparent text-white font-display text-sm font-bold uppercase tracking-widest px-6 py-3.5 rounded border-2 border-red-800 hover:bg-red-800 active:bg-red-900 transition-all duration-300 shadow-md hover:shadow-red-900/20"
              >
                Schedule Service
              </a>
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
              className="fixed top-6 max-[380px]:left-[85vw] left-[86vw] sm:left-[91.5vw] z-50 md:left-[calc(max-md-width+24px)]"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
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
                <div className="flex items-center justify-start mb-5 h-20 md:h-30 bg-white/90 pl-6 sm:pl-12 pr-8">
                  <Link href="/" className="flex items-center">
                    <img
                      src="/logo-nav.png"
                      alt="nav menu logo"
                      width={240}
                      className="object-contain max-h-12 sm:max-h-12 md:max-h-15 w-auto"
                    />
                  </Link>
                </div>

                <nav className="flex flex-col text-xl md:text-2xl text-stone-200">
                  <div className="flex flex-col w-full">
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full pl-8 sm:pl-15 pr-6 pt-2 md:pt-6 pb-5 md:pb-10 text-left font-display uppercase tracking-wider text-stone-200 hover:text-white transition-colors"
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
                            <a
                              href="/services"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between py-5 pl-10 sm:pl-20 pr-4 border-b border-stone-800 font-display hover:text-white transition-colors text-left"
                            >
                              <span>
                                On-site Tire <br /> Replacement
                              </span>
                              <span className="mt-0.5 mr-6 shrink-0">
                                <Chevrons className="text-stone-600" />
                              </span>
                            </a>

                            <a
                              href="/services"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between py-5 pl-10 sm:pl-20 pr-4 font-display hover:text-white transition-colors text-left"
                            >
                              <span>
                                Commercial curation <br /> and sourcing
                              </span>
                              <span className="mt-0.5 mr-6 shrink-0">
                                <Chevrons className="text-stone-600" />
                              </span>
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col w-full border-t border-stone-800">
                    <a
                      href="/contact"
                      className="flex items-center justify-between w-full pl-8 sm:pl-15 pr-6 py-6 md:py-9 font-display uppercase tracking-wider text-stone-200 hover:text-white transition-colors text-left"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>Schedule a Service</span>
                      <span className="mt-0.5">
                        <Chevrons />
                      </span>
                    </a>
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
