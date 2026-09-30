import { SITE } from "@/lib/constants";

export const profile = {
  name: SITE.name,
  role: SITE.role,
  email: SITE.email,
  location: SITE.location,
  tagline:
    "Generative AI and full-stack developer with 3 years of experience — shipping products with Next.js, the MERN stack, and Webflow.",
  summary:
    "I'm a Generative AI and full-stack developer with 3 years of experience, based in Mohali. I build end-to-end web products — from polished interfaces in Next.js and React to solid backends with Node.js and MongoDB.\n\nMy core focus is Next.js and the MERN stack, with hands-on work in Generative AI features (LLMs, agents, and workflow automation). I also ship marketing and product sites in Webflow when speed and content flexibility matter.\n\nI care about clean architecture, clear UX, and delivering work that teams can ship and scale.",
  openToWork: true,
  availability: "Open to full-time roles & freelance · Gen AI / Full stack",
  avatarSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBO-33yL2fFjbE7q_lP_VJKrOWE08mrlkOwLsmW8F9Cw4vfZo_wfQXWhTINMtwwm0RQtJWoxNOoZSlw5veq5KlDNTiBiM93-GHMAUtAC0OcPXY2oehGU2nGg_bbDJGUkas0rXhr_-pW243TSzSkT0xsFHzxLKuomNmPwYaYCHTNKqshWKKkEwvtDfDugFhQlTXfKfrvx7uiklqqUeDilnLPAYmgQKG2f-Uu154Wn7srlqFy8JxThTwPbzOgHkK605vTKQ",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Generative AI",
    "OpenAI",
    "LangChain",
    "Tailwind",
    "Express",
    "Webflow",
    "AWS",
  ] as const,
};
