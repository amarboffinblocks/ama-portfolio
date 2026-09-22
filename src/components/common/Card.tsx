import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "div" | "article";
};

export function Card({
  as: Tag = "div",
  children,
  className,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cn(
        "border border-card-border bg-card shadow-smooth",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
