"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, PageSheet, SectionHeading } from "@/components/common";
import { DrawerToggle } from "@/components/hero/DrawerToggle";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectIntroCard } from "@/components/projects/ProjectIntroCard";
import { ProjectVideoPlayer } from "@/components/projects/ProjectVideoPlayer";
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

      <Container className="relative z-10 mt-10 space-y-10 sm:mt-14 sm:space-y-12">
        {project.video?.src ? (
          <section>
            <SectionHeading label="Demo" title="Product walkthrough" />
            <div className="mx-auto max-w-4xl">
              <ProjectVideoPlayer video={project.video} theme={project.theme} />
            </div>
          </section>
        ) : null}

        {project.images.length > 0 ? (
          <section>
            <SectionHeading label="Gallery" title="Product screens" />
            <ProjectGallery project={project} />
          </section>
        ) : null}

        <nav className="flex items-start justify-between gap-3 border-t border-neutral-200/80 px-1 pt-6 dark:border-white/10 sm:gap-4 sm:pt-8">
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
