"use client";

import { useCallback, useState } from "react";
import { relayoutPageSheet } from "@/lib/page-sheet";

export function useProfileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    relayoutPageSheet();
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    relayoutPageSheet();
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((open) => {
      relayoutPageSheet();
      return !open;
    });
  }, []);

  return { isOpen, open, close, toggle };
}
