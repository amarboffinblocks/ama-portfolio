export const PAGE_SHEET_RELAYOUT = "pagesheet:relayout";

export function relayoutPageSheet() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(PAGE_SHEET_RELAYOUT));
  window.setTimeout(() => {
    window.dispatchEvent(new Event(PAGE_SHEET_RELAYOUT));
  }, 520);
}
