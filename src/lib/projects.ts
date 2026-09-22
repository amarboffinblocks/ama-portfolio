import { projects } from "@/data/projects";
import type { Project } from "@/types";

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectIds(): string[] {
  return projects.map((project) => project.id);
}

export function getAdjacentProjects(id: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((project) => project.id === id);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? projects[index - 1] ?? null : null,
    next: index < projects.length - 1 ? projects[index + 1] ?? null : null,
  };
}
