import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PillProps = {
  children: ReactNode;
  className?: string;
  variant?: "outline" | "muted";
};

export function Pill({ children, className, variant = "outline" }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full",
        variant === "outline" &&
          "border border-neutral-200/80 px-4 py-1.5 text-[11px] font-mono uppercase tracking-wider text-muted transition-colors hover:border-neutral-300 dark:border-white/10 dark:hover:border-white/20",
        variant === "muted" &&
          "bg-soft px-2.5 py-1 text-[11px] text-foreground/80",
        className,
      )}
    >
      {children}
    </span>
  );
}
