import Link from "next/link";
import { Card } from "@/components/common";
import { GlobeIcon } from "@/components/icons";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import type { Project } from "@/types";

function ProjectHost({ host }: { host: string }) {
  return (
    <span className="truncate font-normal text-stone-700 dark:text-stone-300">
      {host}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const caseStudyHref = `/projects/${project.id}`;

  return (
    <Card as="article" className="flex flex-col rounded-2xl p-3 sm:p-4 lg:p-5">
      <div className="flex flex-col gap-2 px-1 pb-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <a
          className="inline-flex min-w-0 max-w-full items-center gap-1.5 self-start rounded-full bg-soft px-2.5 py-1 text-[11px] text-muted sm:px-3"
          href={project.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GlobeIcon className="h-3 w-3 shrink-0 text-stone-400" />
          <span className="hidden shrink-0 text-[10px] uppercase tracking-tight text-stone-400 sm:inline">
            HTTPS : //
          </span>
          <ProjectHost host={project.host} />
        </a>
        <Link
          href={caseStudyHref}
          className="shrink-0 text-sm font-medium text-foreground transition-colors hover:text-muted"
        >
          {project.title}
        </Link>
      </div>
      <Link
        href={caseStudyHref}
        className="flex grow flex-col items-center rounded-xl border border-neutral-100 bg-[#f8f8fa] p-3 transition-colors hover:border-neutral-200 sm:p-4 md:p-6 dark:border-white/5 dark:bg-background dark:hover:border-white/10"
      >
        <ProjectPreview preview={project.preview} />
        <p className="mt-4 text-center text-xs font-normal text-neutral-400 sm:mt-5">
          {project.caption}
        </p>
      </Link>
    </Card>
  );
}
