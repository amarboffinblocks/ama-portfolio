import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerSize = "wide" | "narrow";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
};

const sizeClass: Record<ContainerSize, string> = {
  wide: "max-w-[1400px]",
  narrow: "max-w-2xl",
};

export function Container({
  children,
  className,
  size = "wide",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-12",
        sizeClass[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
