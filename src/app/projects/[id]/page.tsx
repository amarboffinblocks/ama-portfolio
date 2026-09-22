import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { CaseStudy } from "@/components/projects/CaseStudy";
import {
  getAdjacentProjects,
  getProjectById,
  getProjectIds,
} from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getProjectIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — Amarjeet Singh`,
    description: project.caption,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(id);

  return (
    <>
      <Header action="back" />
      <CaseStudy project={project} previous={previous} next={next} />
    </>
  );
}
