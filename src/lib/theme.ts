import type { ThemePreference } from "@/types";

export const THEME_STORAGE_KEY = "theme";

export const THEME_OPTIONS: readonly ThemePreference[] = [
  "light",
  "dark",
  "system",
];

const listeners = new Set<() => void>();

let currentPreference: ThemePreference = "system";
let didHydrate = false;

export function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

export function resolveTheme(preference: ThemePreference): "light" | "dark" {
  if (preference === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return preference;
}

export function applyTheme(preference: ThemePreference) {
  const resolved = resolveTheme(preference);
  document.documentElement.classList.toggle("dark", resolved === "dark");
  document.documentElement.dataset.theme = preference;
}

export function readStoredTheme(): ThemePreference {
  if (typeof window === "undefined") {
    return "system";
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isThemePreference(stored) ? stored : "system";
}

function emitThemeChange() {
  listeners.forEach((listener) => listener());
}

export function subscribeTheme(listener: () => void) {
  listeners.add(listener);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", listener);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", listener);
  };
}

export function getThemeSnapshot(): ThemePreference {
  if (!didHydrate) {
    currentPreference = readStoredTheme();
    didHydrate = true;
  }

  return currentPreference;
}

export function getThemeServerSnapshot(): ThemePreference {
  return "system";
}

export function getResolvedThemeSnapshot(): "light" | "dark" {
  return resolveTheme(getThemeSnapshot());
}

export function getResolvedThemeServerSnapshot(): "light" | "dark" {
  return "light";
}

export function setStoredTheme(preference: ThemePreference) {
  currentPreference = preference;
  window.localStorage.setItem(THEME_STORAGE_KEY, preference);
  applyTheme(preference);
  emitThemeChange();
}

