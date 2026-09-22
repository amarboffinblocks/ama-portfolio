"use client";

import { useEffect, useRef } from "react";
import { LAYOUT } from "@/lib/constants";
import { PAGE_SHEET_RELAYOUT } from "@/lib/page-sheet";

export function usePageSheetParallax() {
  const sheetRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sheetEl = sheetRef.current;
    const mainEl = sheetEl?.closest("main");
    if (!sheetEl || !mainEl) {
      return;
    }

    const sheet: HTMLSpanElement = sheetEl;
    const main: HTMLElement = mainEl;

    let currentTop = 0;
    let scrollYOld = window.scrollY;

    function baseSheetTop() {
      const peek = Math.round(window.innerHeight * LAYOUT.pageSheetPeek);
      const mainOffset = main.getBoundingClientRect().top + window.scrollY;
      return window.innerHeight - peek - mainOffset;
    }

    function syncSheet() {
      currentTop = baseSheetTop() - window.scrollY * LAYOUT.pageSheetSpeed;
      sheet.style.top = `${currentTop}px`;
      scrollYOld = window.scrollY;
    }

    function handleScroll() {
      currentTop -= (window.scrollY - scrollYOld) * LAYOUT.pageSheetSpeed;
      sheet.style.top = `${currentTop}px`;
      scrollYOld = window.scrollY;
    }

    syncSheet();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", syncSheet);
    window.addEventListener(PAGE_SHEET_RELAYOUT, syncSheet);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", syncSheet);
      window.removeEventListener(PAGE_SHEET_RELAYOUT, syncSheet);
    };
  }, []);

  return sheetRef;
}
