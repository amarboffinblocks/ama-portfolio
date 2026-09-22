export const SITE = {
  name: "Amarjeet Singh",
  role: "Full Stack Developer",
  email: "mailto:hello@amarjeetsingh.dev",
  cvHref: "#cv",
  location: "Mohali",
  timeZone: "Asia/Kolkata",
  /** Fallback only — live weather is fetched for `location`. */
  weather: "—°C",
} as const;

export const LAYOUT = {
  maxWidth: "1400px",
  pageSheetPeek: 0.15,
  pageSheetSpeed: 1.5,
} as const;
