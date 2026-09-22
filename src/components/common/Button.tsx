import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "soft" | "ghost";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-[#212226] text-white hover:bg-black px-4 py-2 rounded-xl text-[13px] shadow-sm dark:bg-white dark:text-[#161616] dark:hover:bg-zinc-200",
  soft: "bg-soft hover:bg-soft-hover text-muted px-3 py-1.5 rounded-full text-xs border border-black/5 dark:border-white/10 dark:text-zinc-300",
  ghost:
    "font-mono text-[11px] tracking-widest text-muted hover:text-foreground uppercase",
};

export function Button({
  children,
  className,
  variant = "primary",
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-colors",
    variantClass[variant],
    className,
  );

  if ("href" in rest && rest.href) {
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonAsButton;

  return (
    <button className={classes} {...buttonRest} type={buttonRest.type ?? "button"}>
      {children}
    </button>
  );
}
