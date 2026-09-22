export type ExperienceIcon = "search" | "spintank" | "lonsdale" | "apple" | "generic";

export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  icon: ExperienceIcon;
};

export type SocialNetwork = "linkedin" | "instagram";

export type SocialLink = {
  network: SocialNetwork;
  handle: string;
  href: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  dates: string;
};

export type CertificateItem = {
  name: string;
  issuer: string;
  year: string;
  href?: string;
};

export type ThemePreference = "light" | "dark" | "system";

export type ProjectTheme = "light" | "dark";

export type ProjectPreviewId = "motscles" | "spacetime" | "expedition" | "synthesio";

export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  host: string;
  href: string;
  caption: string;
  theme: ProjectTheme;
  preview: ProjectPreviewId;
  role: string;
  year: string;
  stack: readonly string[];
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  images: readonly ProjectImage[];
  repoHref?: string;
};
