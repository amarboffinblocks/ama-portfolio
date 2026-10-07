"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {
  CheckIcon,
  CloseIcon,
  ComputerIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from "@/components/icons";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socials";
import { useTheme } from "@/hooks/useTheme";
import { SITE } from "@/lib/constants";
import { THEME_OPTIONS } from "@/lib/theme";
import { cn } from "@/lib/cn";
import type { SocialNetwork, ThemePreference } from "@/types";

const themeLabel: Record<ThemePreference, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

function socialLabel(network: SocialNetwork) {
  switch (network) {
    case "linkedin":
      return "LinkedIn";
    case "instagram":
      return "Instagram";
    default: {
      const _exhaustive: never = network;
      return _exhaustive;
    }
  }
}

function SocialGlyph({ network }: { network: SocialNetwork }) {
  switch (network) {
    case "linkedin":
      return <LinkedInIcon className="h-4 w-4 fill-current sm:h-5 sm:w-5" />;
    case "instagram":
      return <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />;
    default: {
      const _exhaustive: never = network;
      return _exhaustive;
    }
  }
}

function ThemeGlyph({
  preference,
  className,
}: {
  preference: ThemePreference;
  className?: string;
}) {
  switch (preference) {
    case "light":
      return <SunIcon className={className} />;
    case "dark":
      return <MoonIcon className={className} />;
    case "system":
      return <ComputerIcon className={className} />;
    default: {
      const _exhaustive: never = preference;
      return _exhaustive;
    }
  }
}

const spring = { type: "spring" as const, stiffness: 520, damping: 38, mass: 0.8 };

export function DynamicIsland() {
  const { preference, resolved, setTheme } = useTheme();
  const [themeOpen, setThemeOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!themeOpen) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setThemeOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setThemeOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [themeOpen]);

  return (
    <motion.div
      ref={rootRef}
      layout
      transition={spring}
      className="flex items-center overflow-hidden rounded-full border border-black/5 bg-island text-island-fg shadow-lg shadow-black/10 dark:border-black/10"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {themeOpen ? (
          <motion.div
            key="theme"
            layout
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-1 px-1.5 py-1.5 sm:gap-1.5 sm:px-2 sm:py-2"
            role="listbox"
            aria-label="Color theme"
          >
            {THEME_OPTIONS.map((option) => {
              const selected = option === preference;

              return (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  aria-label={themeLabel[option]}
                  onClick={() => {
                    setTheme(option);
                    setThemeOpen(false);
                  }}
                  className={cn(
                    "flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[12px] font-medium transition-colors sm:px-3",
                    selected
                      ? "bg-island-fg/15 text-island-fg"
                      : "text-island-fg/70 hover:bg-island-fg/10 hover:text-island-fg",
                  )}
                >
                  <ThemeGlyph preference={option} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">{themeLabel[option]}</span>
                  {selected ? (
                    <CheckIcon className="h-3 w-3 opacity-80" aria-hidden />
                  ) : null}
                </button>
              );
            })}
            <button
              type="button"
              aria-label="Close theme menu"
              onClick={() => setThemeOpen(false)}
              className="ml-0.5 cursor-pointer rounded-full p-1.5 text-island-fg/60 transition-colors hover:bg-island-fg/10 hover:text-island-fg"
            >
              <CloseIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="idle"
            layout
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-1.5 px-2 py-1.5 sm:gap-3 sm:px-3 sm:py-2"
          >
            <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-linear-to-tr from-pink-400 via-rose-300 to-amber-200 p-[1.5px] sm:h-8 sm:w-8">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-stone-800">
                <Image
                  src={profile.avatarSrc}
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  sizes="32px"
                />
              </div>
            </div>
            <div className="h-4 w-px bg-current/20 sm:h-5" />
            <div className="flex items-center gap-0.5 text-island-fg/80 sm:gap-1.5">
              <a
                aria-label="Send an email"
                className="cursor-pointer p-1 transition-colors hover:text-island-fg sm:p-1.5"
                href={SITE.email}
              >
                <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.network}
                  aria-label={socialLabel(link.network)}
                  className="cursor-pointer p-1 transition-colors hover:text-island-fg sm:p-1.5"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SocialGlyph network={link.network} />
                </a>
              ))}
              <button
                type="button"
                aria-expanded={false}
                aria-haspopup="listbox"
                aria-label={`Theme: ${themeLabel[preference]}`}
                onClick={() => setThemeOpen(true)}
                className="cursor-pointer p-1 transition-colors hover:text-island-fg sm:p-1.5"
              >
                <ThemeGlyph
                  preference={resolved === "dark" ? "dark" : "light"}
                  className="h-4 w-4 sm:h-5 sm:w-5"
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
