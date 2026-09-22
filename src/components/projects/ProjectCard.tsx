import { BrowserWindow, Card } from "@/components/common";
import { GlobeIcon } from "@/components/icons";
import { ExpeditionPreview } from "@/components/projects/previews/ExpeditionPreview";
import { MotsclesPreview } from "@/components/projects/previews/MotsclesPreview";
import { SpacetimePreview } from "@/components/projects/previews/SpacetimePreview";
import { SynthesioPreview } from "@/components/projects/previews/SynthesioPreview";
import type { Project } from "@/types";

function ProjectPreview({ preview }: { preview: Project["preview"] }) {
  switch (preview) {
    case "motscles":
      return (
        <BrowserWindow chrome="light">
          <MotsclesPreview />
        </BrowserWindow>
      );
    case "spacetime":
      return (
        <BrowserWindow chrome="cosmos">
          <SpacetimePreview />
        </BrowserWindow>
      );
    case "expedition":
      return (
        <BrowserWindow chrome="symphony">
          <ExpeditionPreview />
        </BrowserWindow>
      );
    case "synthesio":
      return (
        <BrowserWindow chrome="light">
          <SynthesioPreview />
        </BrowserWindow>
      );
    default: {
      const _exhaustive: never = preview;
      return _exhaustive;
    }
  }
}

function ProjectHost({ host }: { host: string }) {
  return <span className="truncate font-normal text-stone-700">{host}</span>;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card as="article" className="flex flex-col rounded-2xl p-4 lg:p-5">
      <div className="flex items-center justify-between gap-3 px-1 pb-3 text-xs">
        <a
          className="inline-flex min-w-0 items-center gap-1.5 rounded-full bg-soft px-3 py-1 text-[11px] text-muted"
          href={project.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GlobeIcon className="h-3 w-3 shrink-0 text-stone-400" />
          <span className="shrink-0 text-[10px] uppercase tracking-tight text-stone-400">
            HTTPS : //
          </span>
          <ProjectHost host={project.host} />
        </a>
        <h3 className="shrink-0 text-sm font-medium text-foreground">{project.title}</h3>
      </div>
      <div className="flex grow flex-col items-center rounded-xl border border-neutral-100 bg-[#f8f8fa] p-4 sm:p-6 dark:border-white/5 dark:bg-background">
        <ProjectPreview preview={project.preview} />
        <p className="mt-5 text-center text-xs font-normal text-neutral-400">{project.caption}</p>
      </div>
    </Card>
  );
}
