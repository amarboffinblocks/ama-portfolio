"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { playClickSound } from "@/lib/sound";

const INTERACTIVE_SELECTOR = "button, a[href], [role='button'], [role='option']";

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false;
  }

  const interactive = target.closest(INTERACTIVE_SELECTOR);
  if (!(interactive instanceof HTMLElement)) {
    return false;
  }

  if (interactive.hasAttribute("disabled") || interactive.getAttribute("aria-disabled") === "true") {
    return false;
  }

  // Skip Next.js / tooling overlays.
  if (interactive.closest("nextjs-portal, [data-nextjs-toast], [data-nextjs-dev-overlay]")) {
    return false;
  }

  return true;
}

export function ClickSoundProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (event.button !== 0) {
        return;
      }

      if (isInteractiveTarget(event.target)) {
        playClickSound();
      }
    }

    document.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, []);

  return children;
}
