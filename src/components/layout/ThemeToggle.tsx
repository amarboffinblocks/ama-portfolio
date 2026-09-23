"use client";

import { useEffect, useId, useRef, useState } from "react";
import { IconButton } from "@/components/common";
import { CheckIcon, ComputerIcon, MoonIcon, SunIcon } from "@/components/icons";
import { useTheme } from "@/hooks/useTheme";
import { THEME_OPTIONS } from "@/lib/theme";
import { cn } from "@/lib/cn";
import type { ThemePreference } from "@/types";

const themeLabel: Record<ThemePreference, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

const themeHint: Record<ThemePreference, string> = {
  light: "Bright interface",
  dark: "Dimmed interface",
  system: "Match device",
};

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

export function ThemeToggle() {
  const { preference, resolved, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndexRef = useRef(0);
  const listboxId = useId();

  activeIndexRef.current = activeIndex;

  useEffect(() => {
    if (!open) {
      return;
    }

    const selectedIndex = THEME_OPTIONS.indexOf(preference);
    const startIndex = selectedIndex >= 0 ? selectedIndex : 0;
    setActiveIndex(startIndex);

    const frame = window.requestAnimationFrame(() => {
      optionRefs.current[startIndex]?.focus();
    });

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const delta = event.key === "ArrowDown" ? 1 : -1;
        const next =
          (activeIndexRef.current + delta + THEME_OPTIONS.length) %
          THEME_OPTIONS.length;
        setActiveIndex(next);
        optionRefs.current[next]?.focus();
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();
        setActiveIndex(0);
        optionRefs.current[0]?.focus();
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        const last = THEME_OPTIONS.length - 1;
        setActiveIndex(last);
        optionRefs.current[last]?.focus();
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const option = THEME_OPTIONS[activeIndexRef.current];
        if (option) {
          setTheme(option);
          setOpen(false);
        }
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, preference, setTheme]);

  return (
    <div className="relative" ref={rootRef}>
      <IconButton
        aria-controls={open ? listboxId : undefined}
        aria-expanded={open}
        aria-haspopup="listbox"
        label={`Theme: ${themeLabel[preference]}`}
        onClick={() => setOpen((value) => !value)}
      >
        <ThemeGlyph
          preference={resolved === "dark" ? "dark" : "light"}
          className="h-4 w-4 sm:h-5 sm:w-5"
        />
      </IconButton>
      {open ? (
        <div
          className="absolute right-0 top-[calc(100%+12px)] z-50 w-46 origin-top-right rounded-2xl border border-black/10 bg-white/95 p-1.5 text-[#161616] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35),0_8px_16px_-10px_rgba(0,0,0,0.12)] backdrop-blur-md animate-[theme-menu-in_160ms_ease-out] dark:border-white/10 dark:bg-[#1c1c1f]/95 dark:text-zinc-100 dark:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)]"
          id={listboxId}
          role="listbox"
          aria-label="Color theme"
        >
          <p className="px-2.5 pb-1.5 pt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400 dark:text-zinc-500">
            Appearance
          </p>
          <div className="flex flex-col gap-0.5">
            {THEME_OPTIONS.map((option, index) => {
              const selected = option === preference;
              const active = index === activeIndex;

              return (
                <button
                  key={option}
                  ref={(node) => {
                    optionRefs.current[index] = node;
                  }}
                  aria-selected={selected}
                  className={cn(
                    "group flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left outline-none transition-colors",
                    selected
                      ? "bg-neutral-100 dark:bg-white/10"
                      : "hover:bg-neutral-50 dark:hover:bg-white/5",
                    active && !selected && "bg-neutral-50 dark:bg-white/5",
                    active && "ring-1 ring-black/5 dark:ring-white/10",
                  )}
                  onClick={() => {
                    setTheme(option);
                    setOpen(false);
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  role="option"
                  type="button"
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-colors",
                      selected
                        ? "border-black/10 bg-white text-[#161616] shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-zinc-100"
                        : "border-transparent bg-neutral-100 text-neutral-500 group-hover:text-neutral-700 dark:bg-white/5 dark:text-zinc-400 dark:group-hover:text-zinc-200",
                    )}
                  >
                    <ThemeGlyph preference={option} className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[12px] font-medium leading-tight">
                      {themeLabel[option]}
                    </span>
                    <span className="mt-0.5 block text-[10px] leading-tight text-neutral-400 dark:text-zinc-500">
                      {themeHint[option]}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "flex h-4 w-4 shrink-0 items-center justify-center text-[#161616] transition-opacity dark:text-zinc-100",
                      selected ? "opacity-100" : "opacity-0",
                    )}
                    aria-hidden={!selected}
                  >
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
