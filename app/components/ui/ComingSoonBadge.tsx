import { twMerge } from "tailwind-merge";

interface ComingSoonBadgeProps {
  className?: string;
}

export default function ComingSoonBadge({ className }: ComingSoonBadgeProps) {
  return (
    <span
      className={twMerge(
        "pointer-events-none select-none absolute z-20 whitespace-nowrap rounded-[2px] py-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg ring-1 ring-black/60 bg-[repeating-linear-gradient(45deg,var(--color-yellow-400)_0px,var(--color-yellow-400)_5px,var(--color-stone-950)_5px,var(--color-stone-950)_10px)] [text-shadow:1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000]",
        className,
      )}
    >
      Coming Soon
    </span>
  );
}
