"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  getResolvedThemeServerSnapshot,
  getResolvedThemeSnapshot,
  getThemeServerSnapshot,
  getThemeSnapshot,
  setStoredTheme,
  subscribeTheme,
} from "@/lib/theme";
import type { ThemePreference } from "@/types";

export function useTheme() {
  const preference = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );
  const resolved = useSyncExternalStore(
    subscribeTheme,
    getResolvedThemeSnapshot,
    getResolvedThemeServerSnapshot,
  );

  const setTheme = useCallback((next: ThemePreference) => {
    setStoredTheme(next);
  }, []);

  return { preference, resolved, setTheme };
}
