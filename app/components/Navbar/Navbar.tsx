"use client";

import Chevrons from "../UI/Chevrons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isContactRoute = pathname === "/contact";
  const isServiceRoute = pathname === "/services";
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

  // Prevent background scrolling when menu is open
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
  const menuSpring = { type: "spring", stiffness: 400, damping: 40 };
  const accordionSpring = { type: "spring", stiffness: 380, damping: 30 };

  // Framer Motion Variants
  const menuVariants = {
    closed: {
      x: "-100%",
      transition: menuSpring,
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
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-20">
        {/* LAYER 1: The Solid Active State Background */}
        <div
          className={`absolute inset-0 bg-stone-950 transition-opacity duration-300 pointer-events-none border-stone-800/90 border-b-[.1rem] drop-shadow-xl
            ${hasScrolled ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        />

        {/* LAYER 2: The Initial Transparent Gradient Scrim */}
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
            onClick={() => setIsOpen(true)}
            className="text-white hover:text-stone-300 p-1 transition-colors"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-12 w-12 text-white/90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
          {!isContactRoute && !isServiceRoute && (
            <img
              src="/logo-alt.png"
              alt="company logo"
              width={270}
              height={270}
              className="-mt-1"
            />
          )}
        </div>
      </header>

      {/* Slide-out Menu and Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop Overlay — Matches drawer layout dimensions so the gutter is non-clickable */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed top-0 left-0 bottom-0 z-50 w-[100vw] max-w-md bg-stone-950/60 backdrop-blur-sm"
            />

            {/* Floating Close Button in the Blur Zone */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={closeButtonVariants}
              className="fixed top-6 left-[86vw] z-50 md:left-[calc(max-md-width+24px)]"
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

            {/* Slide-out Drawer Container */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 left-0 bottom-0 z-50 w-[83vw] max-w-md bg-stone-950 border-r border-stone-800 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header space inside the drawer — White background with the Logo */}
             
                  <div className="flex items-center justify-start mb-5 h-20 bg-white/90 pl-6 pr-8">
                    <a href="/">
                    <img
                      src="/logo-nav.png"
                      alt="nav menu logo"
                      width={240}
                      height={240}
                      className="object-contain max-h-12"
                    />
                     </a>
                  </div>
           
                {/* Navigation Links */}
                <nav className="flex flex-col text-xl text-stone-200">
                  {/* "WHAT WE OFFER" INTERACTIVE CONTAINER */}
                  <div className="flex flex-col w-full">
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full pl-8 pr-6 pt-2 pb-5 text-left font-display uppercase tracking-wider text-stone-200 hover:text-white transition-colors"
                    >
                      <span>What We Offer</span>
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 90 : 0 }}
                        // transition={accordionSpring}
                        className="inline-flex items-center justify-center mt-0.5"
                      >
                        <Chevrons />
                      </motion.span>
                    </button>

                    {/* Expandable Dropdown Content Area */}
                    <AnimatePresence initial={false}>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          // transition={accordionSpring}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col mt-2 bg-stone-900 text-base text-stone-300 uppercase">
                            <a
                              href="/services"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between py-5 pl-10 pr-4 border-b border-stone-800 font-display hover:text-white transition-colors text-left"
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
                              className="flex items-center justify-between py-5 pl-10 pr-4 font-display hover:text-white transition-colors text-left"
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

                  {/* "SECURE A TIME SLOT" LINK */}
                  <div className="flex flex-col w-full border-t border-stone-800">
                    <a
                      href="/contact"
                      className="flex items-center justify-between w-full pl-8 pr-6 py-5 font-display uppercase tracking-wider text-stone-200 hover:text-white transition-colors text-left"
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
