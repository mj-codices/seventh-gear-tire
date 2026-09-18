"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavTruck from "../ui/NavTruck";
import TireAndClock from "../ui/TireAndClock";
import TireServiceIcon from "../ui/TireAndTool";
import Chevrons from "../ui/Chevrons";

interface ServiceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  {
    title: "Tire Distribution & Fleet Sales",
    href: "/contact?service=fleet",
    disabled: false,
    icon: (
      <NavTruck className="w-14 h-14 sm:w-20 sm:h-20 md:h-20 sm:w-20 -mt-9.5 -ml-1 text-red-900" />
    ),
    desc: "Commercial fleet supply, tires, and scheduled delivery.",
  },
  {
    title: "Shop Tire & Light Mechanical",
    href: "/contact?service=shop",
    disabled: true,
    icon: (
      <TireServiceIcon className="w-12 h-12 sm:w-18 sm:h-18 md:w-18 md:h-18 -mt-7 ml-1 text-stone-600" />
    ),
    desc: "In-shop mounting, balancing, and light maintenance.",
  },
  {
    title: "Scheduled Mobile Fleet Installation",
    href: "/contact?service=mobile",
    disabled: true,
    icon: (
      <TireAndClock className="w-13 h-13 sm:w-19 sm:h-19 -mt-10 [&_.icon-face]:!fill-stone-600 [&_.icon-bg-accent]:!fill-[#151311]" />
    ),
    desc: "On-site planned service for farms, equipment, and jobsites.",
  },
];

export default function ServiceDrawer({ isOpen, onClose }: ServiceDrawerProps) {
  // Lock background scroll when drawer is active
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with touch-none to stop iOS gestures from bleeding through */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm touch-none lg:hidden"
          />

          {/* Bottom Sheet Drawer styled with bg-stone-900 surface */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100) onClose();
            }}
            className="fixed bottom-0 left-0 right-0 z-50 pt-6 bg-stone-950 border-t rounded-t-lg border-stone-800 shadow-2xl lg:hidden max-h-[85vh] overflow-y-auto"
          >
            {/* Grab Handle for Drag-to-Dismiss */}
            <div className="w-12 h-1.5 bg-stone-800 rounded-full mx-auto mb-5" />

            <div className="flex items-center mb-8 sm:mb-10 font-display">
              <h2 className="ml-7 sm:ml-10 text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-stone-300 z-10 whitespace-nowrap">
                Select a Service
              </h2>
              <svg
                viewBox="0 0 100 8"
                className="w-80 sm:w-100 h-6 text-red-900/70 z-0 -translate-x-70 sm:-translate-x-90 translate-y-2.5 fill-current shrink-0"
                preserveAspectRatio="none"
              >
                <polygon points="12,0 100,0 88,8 0,8" />
              </svg>
            </div>

            {/* Vertical Stacked Cards */}
            <div className="divide-y divide-stone-800">
              {services.map((item) => {
                const CardContent = (
                  <>
                    {/* Left Content Block: Icon + Text */}
                    <div className="flex items-center gap-4 sm:gap-7">
                      <div className="py-3 pr-3 bg-stone-900/10 rounded-lg flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3
                          className={`text-base sm:text-lg font-bold uppercase font-display leading-6.5 tracking-wide max-w-[18rem] md:max-w-[20rem] transition-colors ${
                            item.disabled
                              ? "text-stone-500"
                              : "text-white/90 group-hover/link:text-white"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`text-sm sm:text-base mt-2.5 sm:mt-3 leading-snug sm:leading-7 max-w-[18rem] md:max-w-[22rem] ${
                            item.disabled ? "text-stone-600" : "text-stone-400"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right Trailing Chevron */}
                    {!item.disabled && (
                      <span className="mr-6 sm:mr-10.5 mt-0.5 shrink-0 hidden md:block">
                        <Chevrons className="text-stone-600 group-hover/link:text-stone-300 transition-colors duration-200" />
                      </span>
                    )}
                  </>
                );

                if (item.disabled) {
                  return (
                    <div
                      key={item.title}
                      className="flex items-center justify-between p-6 sm:p-8 sm:pl-20 md:pl-30 bg-stone-900/50 border-b border-stone-800 opacity-40 pointer-events-none select-none"
                    >
                      {CardContent}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={onClose}
                    className="group/link flex items-center justify-between p-6 sm:p-8 sm:pl-20 md:pl-30 bg-stone-900 border-b border-stone-800 hover:bg-stone-800/50 active:scale-[0.98] transition-all"
                  >
                    {CardContent}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}