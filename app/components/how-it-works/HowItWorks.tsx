import React from "react";
import { FileText, Calculator, Wrench } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Tell Us What You Need",
    description:
      "Select your service channel—direct tire supply, shop service, or mobile installation—and submit your vehicle, tire size, and schedule preferences.",
    icon: FileText,
  },
  {
    id: 2,
    title: "Get a Clear Quote",
    description:
      "Our team verifies inventory, fitment, and service site feasibility to send you an upfront, transparent quote for confirmation.",
    icon: Calculator,
  },
  {
    id: 3,
    title: "Get Back to Work",
    description:
      "Approve your quote and complete your service via direct delivery, in-shop installation, or scheduled on-site mobile service.",
    icon: Wrench,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full py-12 px-10 max-w-6xl mx-auto">
      <div className="text-left mb-12">
        <h2 className="text-base uppercase tracking-[.3rem] text-stone-400 sm:text-4xl">
          How It Works
        </h2>
        <h3 className="mt-5 font-display text-[25px] text-white/90 leading-8">
          Three simple steps to direct tire delivery, shop appointments, or
          mobile installation.
        </h3>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-4">
        {/* Mobile Vertical Red Connecting Line (Ends at 3rd bubble center) */}
        <div
          className="absolute left-[23px] top-6 h-[calc(100%-170px)] w-[2px] bg-red-900/90 md:hidden"
          aria-hidden="true"
        />

        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <div
              key={step.id}
              className="relative flex flex-row md:flex-col items-start md:items-center flex-1 z-10 w-full"
            >
              {/* Desktop Horizontal Red Connecting Line */}
              {!isLast && (
                <div
                  className="hidden md:block absolute top-[24px] left-[calc(50%+24px)] w-[calc(100%-24px)] h-[2px] bg-red-600 -z-10"
                  aria-hidden="true"
                />
              )}

              {/* Number Badge */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-800 border-3 border-stone-950 text-white font-bold text-2xl shadow-lg">
                {step.id}
              </div>

              {/* Text / Blurb Content with Icon */}
              <div className="ml-6 md:ml-0 md:mt-6 md:text-center flex-1">
                <Icon className="mt-2 mb-2 w-6 h-6 text-olive-700 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-white tracking-wide">
                  {step.title}.
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-xs md:mx-auto">
                  {step.description}
                </p>

                {/* Subtle Action Link for Step 1 */}
                {step.id === 1 && (
                  <div className="">
                    <button className="inline-flex items-center text-sm text-neutral-400 underline decoration-dotted decoration-stone-500 underline-offset-5 hover:text-white hover:decoration-stone-300 transition-colors">
                      <span>Book a service here.</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
