// components/ui/ServiceDrawer.tsx
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavTruck from "../ui/NavTruck";
import TireAndClock from "../ui/TireAndClock";
import TireServiceIcon from "../ui/TireAndTool";

interface ServiceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  {
    title: "Fleet & Distribution",
    href: "/contact?service=fleet",
    icon: <NavTruck className="w-8 h-8 text-red-500" />,
    desc: "Commercial fleet supply, tires, and scheduled delivery.",
  },
  {
    title: "Shop Services",
    href: "/contact?service=shop",
    icon: <TireServiceIcon className="w-8 h-8 text-red-500" />,
    desc: "In-shop mounting, balancing, and light maintenance.",
  },
  {
    title: "Mobile Services",
    href: "/contact?service=mobile",
    icon: (
      <TireAndClock className="w-8 h-8 [&_.icon-face]:!fill-white [&_.icon-bg-accent]:!fill-red-700" />
    ),
    desc: "On-site planned service for farms, equipment, and jobsites.",
  },
];

export default function ServiceDrawer({ isOpen, onClose }: ServiceDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
          />

          {/* Bottom Sheet Drawer */}
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
            className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-stone-900 border-t border-stone-800 rounded-t-2xl shadow-2xl lg:hidden"
          >
            {/* Grab Handle for Drag-to-Dismiss */}
            <div className="w-12 h-1.5 bg-stone-700 rounded-full mx-auto mb-6" />

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
                Select a Service
              </h2>
              <button
                onClick={onClose}
                className="text-stone-400 hover:text-white text-sm font-bold uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>

            {/* Vertical Stacked Cards */}
            <div className="space-y-3 mt-4">
              {services.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 rounded-xl bg-stone-950/80 border border-stone-800/80 hover:border-red-700 active:scale-[0.98] transition-all"
                >
                  <div className="p-2 bg-stone-900 rounded-lg flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-400 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
