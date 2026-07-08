"use client";

import { motion, Transition } from "framer-motion";

export default function ComingSoon() {
  // High-tension spring for that premium, snappy give-and-pull movement
  const springTransition:Transition = { type: "spring", stiffness: 300, damping: 28 };

  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center relative overflow-hidden bg-stone-900 pt-18">
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
      {/* Main Glassmorphic Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={springTransition}
        className="relative z-10 w-full max-w-xl p-4 md:p-12 text-center mr-1"
      >
        {/* Decorative Tag / Badge */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-block px-3 py-1 mr-3"
        >
          <img src="/temp-logo.png" alt="" />
        </motion.span>

        {/* Heading */}
        <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white/90 uppercase mb-4">
          Scheduling Terminal <br />
          <span className="text-red-800 brightness-140">
            Under Construction
          </span>
        </h1>

        {/* Description Copy */}
        {/* <p className="text-stone-400 max-w-sm mx-auto text-base leading-relaxed font-sans normal-case mb-8">
          We are currently engineering our digital intake network to streamline your commercial fleet scheduling. 
        </p> */}

        {/* Visual Progress / Separator Flourish */}
        <div className="relative w-full h-[1px] bg-stone-800/80 my-8 flex items-center justify-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40px" }}
            transition={{ delay: 0.4, ...springTransition }}
            className="absolute h-[2px] bg-white/40"
          />
        </div>

        {/* Temporary Secondary Status/Info Footer */}
        <div className="text-sm font-medium uppercase tracking-wider text-stone-500">
          Launching Soon • Phase 1 Rollout
        </div>
      </motion.div>
    </div>
  );
}
