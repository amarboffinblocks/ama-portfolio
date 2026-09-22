import { Button } from "@/components/common";
import { ChevronUpIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import type { Project } from "@/types";

type CaseStudyDrawerProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

function CaseStudyBlock({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <section className="mb-8">
      <h3 className="mb-3 text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{children}</p>
    </section>
  );
}

export function CaseStudyDrawer({
  project,
  isOpen,
  onClose,
}: CaseStudyDrawerProps) {
  return (
    <div
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "overflow-hidden transition-all duration-500 ease-in-out",
        isOpen ? "max-h-[6000px] opacity-100" : "pointer-events-none max-h-0 opacity-0",
      )}
    >
      <div className="flex items-center justify-center pb-4 pt-8">
        <div className="grow border-t border-dashed border-neutral-200 dark:border-white/10" />
        <Button variant="ghost" className="gap-1.5 px-4" onClick={onClose}>
          <span>OK, THAT&apos;S ENOUGH</span>
          <ChevronUpIcon className="h-3.5 w-3.5" />
        </Button>
        <div className="grow border-t border-dashed border-neutral-200 dark:border-white/10" />
      </div>
      <CaseStudyBlock title="Overview">{project.overview}</CaseStudyBlock>
      <CaseStudyBlock title="Challenge">{project.challenge}</CaseStudyBlock>
      <CaseStudyBlock title="Approach">{project.approach}</CaseStudyBlock>
      <CaseStudyBlock title="Outcome">{project.outcome}</CaseStudyBlock>
    </div>
  );
}
