import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "motscles",
    title: "Mots-clés",
    host: "motscles.net",
    href: "https://motscles.net",
    caption: "Consultancy and creative communications agency, Mots-Clés",
    theme: "light",
    preview: "motscles",
    role: "Front-end developer",
    year: "2023",
    stack: ["Next.js", "TypeScript", "Tailwind", "CMS"],
    overview:
      "A marketing site for a consultancy and creative communications agency. The goal was a calm, editorial presence that still feels modern and easy to update.",
    challenge:
      "The brand needed a site that looked premium without becoming heavy — clear storytelling, fast pages, and a layout editors could maintain without developer help for every change.",
    approach:
      "Built a modular page structure with reusable sections, careful typography, and a lightweight CMS-backed content model so marketing could ship updates independently.",
    outcome:
      "Delivered a polished marketing experience with strong performance and a content workflow the team can own day to day.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        alt: "Mots-clés marketing homepage",
        label: "Homepage",
      },
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
        alt: "Agency services overview",
        label: "Services",
      },
      {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
        alt: "Team and culture page",
        label: "About",
      },
    ],
  },
  {
    id: "spacetime",
    title: "Spacetime Pictures",
    host: "spacetimepictures.com",
    href: "https://spacetimepictures.com",
    caption: "SaaS platform dedicated to astrophotography enthusiasts",
    theme: "dark",
    preview: "spacetime",
    role: "Full stack developer",
    year: "2024",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    overview:
      "A SaaS product for astrophotography enthusiasts — galleries, processing workflows, and a dark visual language that matches the subject matter.",
    challenge:
      "Users needed a focused product experience for media-heavy content without slow loads or a cluttered interface.",
    approach:
      "Designed a dark UI system, optimized media surfaces, and structured the app around clear workflows from upload to published gallery.",
    outcome:
      "Shipped a cohesive product UI that feels purpose-built for the niche while staying fast enough for large image sets.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
        alt: "Spacetime product dashboard",
        label: "Dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80",
        alt: "Astrophotography gallery view",
        label: "Gallery",
      },
      {
        src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80",
        alt: "Image detail and processing view",
        label: "Detail",
      },
    ],
  },
  {
    id: "expedition",
    title: "Expedition33",
    host: "apaintedsymphony.expedition33.com",
    href: "https://apaintedsymphony.expedition33.com",
    caption: "Immersive and interactive audio-web promotional experience",
    theme: "dark",
    preview: "expedition",
    role: "Front-end developer",
    year: "2024",
    stack: ["React", "TypeScript", "Web Audio", "CSS"],
    overview:
      "An immersive promotional web experience combining interactive visuals with audio — built to feel like a short film you can explore in the browser.",
    challenge:
      "Synchronizing motion, narrative beats, and audio without jank — especially on mid-range devices — while keeping the story readable.",
    approach:
      "Structured the experience as sequenced scenes with careful performance budgets, progressive enhancement, and accessible fallbacks where interaction was secondary.",
    outcome:
      "Launched an interactive promo that feels cinematic, stays responsive, and works as a memorable brand moment.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba35e271?w=1200&q=80",
        alt: "Expedition immersive landing scene",
        label: "Landing",
      },
      {
        src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80",
        alt: "Interactive audio experience scene",
        label: "Experience",
      },
      {
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
        alt: "Story chapter view",
        label: "Chapters",
      },
    ],
  },
  {
    id: "synthesio",
    title: "Synthesio",
    host: "synthesio.com",
    href: "https://synthesio.com",
    caption: "Consumer intelligence and social listening platform, Ipsos",
    theme: "light",
    preview: "synthesio",
    role: "Front-end developer",
    year: "2022",
    stack: ["React", "TypeScript", "GraphQL", "Design system"],
    overview:
      "Product UI work for a consumer intelligence and social listening platform — dense data surfaces that still need to feel clear under pressure.",
    challenge:
      "Dashboards and listening tools can overwhelm users. The interface had to surface signal quickly without hiding important controls.",
    approach:
      "Focused on information hierarchy, reusable data components, and consistent patterns across filters, charts, and detail views.",
    outcome:
      "Improved clarity across key product flows and strengthened a shared front-end foundation for ongoing feature work.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        alt: "Synthesio analytics dashboard",
        label: "Dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        alt: "Listening and insights view",
        label: "Insights",
      },
      {
        src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
        alt: "Report and filters view",
        label: "Reports",
      },
    ],
  },
];
