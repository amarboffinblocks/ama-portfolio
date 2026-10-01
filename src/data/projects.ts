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
        src: "/projects/boffinblocks/banner.png",
        alt: "Boffinblocks homepage hero with navigation and stats",
        label: "Homepage",
      },
      {
        src: "/projects/boffinblocks/screens/screen-02.png",
        alt: "Our Services section with AI service cards",
        label: "Services",
      },
      {
        src: "/projects/boffinblocks/screens/screen-01.png",
        alt: "Real stories client video and testimonial carousel",
        label: "Client stories",
      },
      {
        src: "/projects/boffinblocks/screens/screen-03.png",
        alt: "Blogs section with AI automation articles",
        label: "Blogs",
      },
      {
        src: "/projects/boffinblocks/screens/screen-04.png",
        alt: "Client testimonials and book a strategy call CTA",
        label: "Testimonials",
      },
      {
        src: "/projects/boffinblocks/screens/screen-05.png",
        alt: "Careers page with current openings",
        label: "Careers",
      },
      {
        src: "/projects/boffinblocks/screens/screen-06.png",
        alt: "Hiring process steps and open application CTA",
        label: "Hiring process",
      },
    ],
  },
];
