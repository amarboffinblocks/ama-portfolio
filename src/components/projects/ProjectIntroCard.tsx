import { Button, Card, Pill } from "@/components/common";
import { GitHubIcon, GlobeIcon } from "@/components/icons";
import { CaseStudyDrawer } from "@/components/projects/CaseStudyDrawer";
import type { Project } from "@/types";

type ProjectIntroCardProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

export function ProjectIntroCard({
  project,
  isOpen,
  onClose,
}: ProjectIntroCardProps) {
  return (
    <Card className="relative z-10 w-full overflow-hidden rounded-xl p-8 pb-5 sm:p-10 sm:pb-6">
      <div className="flex items-start justify-between gap-4">
        <a
          className="inline-flex min-w-0 items-center gap-1.5 rounded-full bg-soft px-3 py-1.5 text-[11px] text-muted"
          href={project.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GlobeIcon className="h-3 w-3 shrink-0 text-stone-400" />
          <span className="truncate">{project.host}</span>
        </a>
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
          <Button
            href={project.href}
            rel="noopener noreferrer"
            target="_blank"
            className="gap-2.5"
          >
            <GlobeIcon className="h-3.5 w-3.5" />
            <span>Live site</span>
          </Button>
          {project.repoHref ? (
            <Button
              href={project.repoHref}
              rel="noopener noreferrer"
              target="_blank"
              variant="soft"
              className="gap-2"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </Button>
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {project.title}
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          {project.caption}
        </p>
        <p className="mt-2 text-xs text-neutral-400">
          {project.role} · {project.year}
        </p>
      </div>

      <div className="-mx-8 mt-6 flex flex-wrap gap-2 px-8 sm:-mx-10 sm:px-10">
        {project.stack.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>

      <CaseStudyDrawer project={project} isOpen={isOpen} onClose={onClose} />
    </Card>
  );
}
