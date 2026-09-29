import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "boffinblocks",
    title: "Boffinblocks",
    host: "boffinblocks.com",
    href: "https://boffinblocks.com/",
    caption: "Agentic AI & automation company website for modern businesses",
    theme: "dark",
    preview: "boffinblocks",
    role: "Full stack developer",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind", "AI integrations"],
    overview:
      "Marketing and product site for Boffinblocks — an agentic AI and automation company. The site presents services, case studies, client stories, careers, and conversion flows around booking strategy calls.",
    challenge:
      "Communicate a complex AI/automation offering clearly: services, process, social proof, and CTAs — without feeling generic or overcrowded, while staying fast on mobile and desktop.",
    approach:
      "Designed a navy-and-gold brand system with a hero grid pattern, modular service cards, testimonials, case study surfaces, and strong consultation CTAs. Built responsive sections so the story stays readable from phone to large screens.",
    outcome:
      "Shipped a production marketing site at boffinblocks.com that positions the company as an AI automation partner and guides visitors toward strategy calls and case studies.",
    images: [
      {
        src: "/projects/boffinblocks/hero.jpg",
        alt: "Boffinblocks homepage hero with stats",
        label: "Homepage",
      },
      {
        src: "/projects/boffinblocks/services.png",
        alt: "Our Services section with AI service cards",
        label: "Services",
      },
      {
        src: "/projects/boffinblocks/services-grid.png",
        alt: "Services grid with integrations and automation cards",
        label: "Services grid",
      },
      {
        src: "/projects/boffinblocks/stories.jpg",
        alt: "Real stories client video carousel",
        label: "Client stories",
      },
      {
        src: "/projects/boffinblocks/testimonials.png",
        alt: "Client testimonials and CTA banner",
        label: "Testimonials",
      },
      {
        src: "/projects/boffinblocks/about.jpg",
        alt: "About us page with company focus",
        label: "About",
      },
      {
        src: "/projects/boffinblocks/careers.jpg",
        alt: "Careers page with open roles",
        label: "Careers",
      },
    ],
  },
];
