"use client";

import { usePageSheetParallax } from "@/hooks/usePageSheetParallax";

export function PageSheet() {
  const sheetRef = usePageSheetParallax();

  return (
    <span
      ref={sheetRef}
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-0 left-0 -z-10 rounded-t-3xl bg-sheet"
      style={{ top: "calc(100vh - 9rem)" }}
    />
  );
}
