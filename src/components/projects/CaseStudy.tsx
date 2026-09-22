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
    <main className="relative isolate pb-16 pt-12 sm:pb-20 sm:pt-16">
      <Container className="flex justify-center">
        <div className="flex w-full max-w-2xl flex-col items-center">
          <ProjectIntroCard project={project} isOpen={isOpen} onClose={close} />
          <DrawerToggle isOpen={isOpen} onToggle={toggle} />
        </div>
      </Container>

      <PageSheet />

      <Container className="relative z-10 mt-10 space-y-5">
        <Card className="relative z-10 w-full overflow-hidden rounded-xl p-5 sm:p-6 lg:p-8">
          <h2 className="mb-4 text-base font-semibold text-foreground">Preview</h2>
          <div className="rounded-xl border border-neutral-100 bg-[#f8f8fa] p-4 sm:p-6 dark:border-white/5 dark:bg-background">
            <div className="mx-auto max-w-4xl">
              <ProjectPreview preview={project.preview} />
            </div>
          </div>
        </Card>

        <Card className="relative z-10 w-full overflow-hidden rounded-xl p-5 sm:p-6 lg:p-8">
          <h2 className="mb-4 text-base font-semibold text-foreground">Screens</h2>
          <ProjectGallery project={project} />
        </Card>

        <nav className="flex items-center justify-between gap-4 px-1 pt-3">
          {previous ? (
            <Link
              href={`/projects/${previous.id}`}
              className="group max-w-[45%] text-left transition-colors"
            >
              <span className="block text-[11px] uppercase tracking-wider text-neutral-400">
                Previous
              </span>
              <span className="mt-1 block text-sm font-medium text-foreground group-hover:text-muted">
                ← {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.id}`}
              className="group max-w-[45%] text-right transition-colors"
            >
              <span className="block text-[11px] uppercase tracking-wider text-neutral-400">
                Next
              </span>
              <span className="mt-1 block text-sm font-medium text-foreground group-hover:text-muted">
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
