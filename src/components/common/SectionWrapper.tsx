import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionWrapperProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "section" | "div";
};

export function SectionWrapper({
  as: Tag = "section",
  children,
  className,
  ...rest
}: SectionWrapperProps) {
  return (
    <Tag className={cn("relative z-10", className)} {...rest}>
      {children}
    </Tag>
  );
}
