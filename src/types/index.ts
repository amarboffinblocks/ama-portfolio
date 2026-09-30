export type ExperienceIcon = "search" | "spintank" | "lonsdale" | "apple" | "generic";

export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  href?: string;
  logoSrc?: string;
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
  location?: string;
  href?: string;
  logoSrc?: string;
};

export type CertificateItem = {
  name: string;
  issuer: string;
  year: string;
  href?: string;
};

export type ThemePreference = "light" | "dark" | "system";

export type ProjectTheme = "light" | "dark";

export type ProjectPreviewId = "boffinblocks";

export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

export type ProjectVideo = {
  src: string;
  poster?: string;
  label?: string;
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
  /** Optional project walkthrough / demo video. Hidden when omitted. */
  video?: ProjectVideo;
  repoHref?: string;
};
