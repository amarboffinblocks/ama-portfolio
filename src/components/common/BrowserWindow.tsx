import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BrowserChrome = "light" | "cosmos" | "symphony";

type BrowserWindowProps = {
  children: ReactNode;
  chrome?: BrowserChrome;
};

const chromeClass: Record<
  BrowserChrome,
  { frame: string; bar: string }
> = {
  light: {
    frame: "border-black/5 bg-white",
    bar: "border-neutral-100 bg-white",
  },
  cosmos: {
    frame: "border-neutral-800 bg-[#0d1217]",
    bar: "border-white/5 bg-[#131920]",
  },
  symphony: {
    frame: "border-neutral-800 bg-[#111113]",
    bar: "border-white/5 bg-[#1c1c1f]",
  },
};

export function BrowserWindow({
  children,
  chrome = "light",
}: BrowserWindowProps) {
  const styles = chromeClass[chrome];

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-lg border shadow-window transition-transform duration-300 hover:scale-[1.01]",
        styles.frame,
      )}
    >
      <div className={cn("flex h-6 items-center gap-1.5 border-b px-3", styles.bar)}>
        <span className="inline-block h-2 w-2 rounded-full bg-rose-400" />
        <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
      </div>
      {children}
    </div>
  );
}
