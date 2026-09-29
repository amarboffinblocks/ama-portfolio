import Link from "next/link";
import { Card } from "@/components/common";
import { ChevronRightIcon, GlobeIcon } from "@/components/icons";
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
    <Card
      as="article"
      className="group/card flex flex-col rounded-2xl p-3 transition-shadow duration-300 hover:shadow-smooth sm:p-4 lg:p-5"
    >
      <div className="flex flex-col gap-2 px-1 pb-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <a
          className="relative z-10 inline-flex min-w-0 max-w-full items-center gap-1.5 self-start rounded-full bg-soft px-2.5 py-1 text-[11px] text-muted transition-colors hover:bg-soft-hover sm:px-3"
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
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover/card:text-muted"
        >
          {project.title}
          <ChevronRightIcon className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover/card:translate-x-0.5 group-hover/card:opacity-100" />
        </Link>
      </div>
      <Link
        href={caseStudyHref}
        aria-label={`View ${project.title} case study`}
        className="relative flex grow cursor-pointer flex-col items-center overflow-hidden rounded-xl border border-neutral-100 bg-[#f8f8fa] p-3 transition-all duration-300 hover:border-neutral-200/90 sm:p-4 md:p-6 dark:border-white/5 dark:bg-background dark:hover:border-white/15"
      >
        <div className="relative w-full transition-transform duration-300 group-hover/card:scale-[1.015]">
          <ProjectPreview preview={project.preview} />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-[#0b1f4d]/0 opacity-0 transition-all duration-300 group-hover/card:bg-[#0b1f4d]/45 group-hover/card:opacity-100 dark:group-hover/card:bg-black/50"
        >
          <span className="flex translate-y-2 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-[#0b1f4d] shadow-lg transition-transform duration-300 group-hover/card:translate-y-0">
            View case study
            <ChevronRightIcon className="h-4 w-4" />
          </span>
        </div>
        <p className="relative z-1 mt-4 text-center text-xs font-normal text-neutral-400 transition-colors group-hover/card:text-neutral-500 sm:mt-5">
          {project.caption}
        </p>
      </Link>
    </Card>
  );
}
