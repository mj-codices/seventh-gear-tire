interface ComingSoonBadgeProps {
  /** Positioning classes (e.g. "-top-3 -right-3") — left to the caller since this
   * badge gets absolutely positioned against containers of very different shapes. */
  className?: string;
}

export default function ComingSoonBadge({ className = "" }: ComingSoonBadgeProps) {
  return (
    <span
      className={`pointer-events-none select-none absolute z-20 rotate-[9deg] whitespace-nowrap rounded-[2px] px-2.5 py-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg ring-1 ring-black/60 bg-[repeating-linear-gradient(45deg,var(--color-yellow-400)_0px,var(--color-yellow-400)_5px,var(--color-stone-950)_5px,var(--color-stone-950)_10px)] [text-shadow:1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000] ${className}`}
    >
      Coming Soon
    </span>
  );
}
