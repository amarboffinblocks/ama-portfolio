"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, Container, PageSheet } from "@/components/common";
import { DrawerToggle } from "@/components/hero/DrawerToggle";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectIntroCard } from "@/components/projects/ProjectIntroCard";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { relayoutPageSheet } from "@/lib/page-sheet";
import type { Project } from "@/types";

type CaseStudyProps = {
  project: Project;
  previous: Project | null;
  next: Project | null;
};

export function CaseStudy({ project, previous, next }: CaseStudyProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
    relayoutPageSheet();
  };

  const toggle = () => {
    setIsOpen((open) => !open);
    relayoutPageSheet();
  };

  return (
    <main className="relative isolate pb-12 pt-6 sm:pb-16 sm:pt-10 md:pb-20 md:pt-14">
      <Container className="flex justify-center">
        <div className="flex w-full max-w-2xl flex-col items-center">
          <ProjectIntroCard project={project} isOpen={isOpen} onClose={close} />
          <DrawerToggle isOpen={isOpen} onToggle={toggle} />
        </div>
      </Container>

      <PageSheet />

      <Container className="relative z-10 mt-8 space-y-4 sm:mt-10 sm:space-y-5">
        <Card className="relative z-10 w-full overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
          <h2 className="mb-3 text-base font-semibold text-foreground sm:mb-4">
            Preview
          </h2>
          <div className="rounded-xl border border-neutral-100 bg-[#f8f8fa] p-3 sm:p-6 dark:border-white/5 dark:bg-background">
            <div className="mx-auto max-w-4xl">
              <ProjectPreview preview={project.preview} />
            </div>
          </div>
        </Card>

        <Card className="relative z-10 w-full overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
          <h2 className="mb-3 text-base font-semibold text-foreground sm:mb-4">
            Screens
          </h2>
          <ProjectGallery project={project} />
        </Card>

        <nav className="flex items-start justify-between gap-3 px-1 pt-2 sm:gap-4 sm:pt-3">
          {previous ? (
            <Link
              href={`/projects/${previous.id}`}
              className="group max-w-[48%] text-left transition-colors"
            >
              <span className="block text-[10px] uppercase tracking-wider text-neutral-400 sm:text-[11px]">
                Previous
              </span>
              <span className="mt-1 block text-xs font-medium text-foreground group-hover:text-muted sm:text-sm">
                ← {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.id}`}
              className="group max-w-[48%] text-right transition-colors"
            >
              <span className="block text-[10px] uppercase tracking-wider text-neutral-400 sm:text-[11px]">
                Next
              </span>
              <span className="mt-1 block text-xs font-medium text-foreground group-hover:text-muted sm:text-sm">
                {next.title} →
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </Container>
    </main>
  );
}
