import { SITE } from "@/lib/constants";

export const profile = {
  name: SITE.name,
  role: SITE.role,
  email: SITE.email,
  location: SITE.location,
  avatarSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBO-33yL2fFjbE7q_lP_VJKrOWE08mrlkOwLsmW8F9Cw4vfZo_wfQXWhTINMtwwm0RQtJWoxNOoZSlw5veq5KlDNTiBiM93-GHMAUtAC0OcPXY2oehGU2nGg_bbDJGUkas0rXhr_-pW243TSzSkT0xsFHzxLKuomNmPwYaYCHTNKqshWKKkEwvtDfDugFhQlTXfKfrvx7uiklqqUeDilnLPAYmgQKG2f-Uu154Wn7srlqFy8JxThTwPbzOgHkK605vTKQ",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Tailwind",
    "PostgreSQL",
    "Prisma",
    "GraphQL",
    "REST",
    "Docker",
    "AWS",
    "Python",
    "MongoDB",
    "Git",
    "Figma",
    "HTML",
    "CSS",
  ] as const,
};
