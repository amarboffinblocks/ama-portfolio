"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "motion/react";
import { Card } from "@/components/common";
import { ExpandIcon } from "@/components/icons";
import { ProjectLightbox } from "@/components/projects/ProjectLightbox";
import type { Project, ProjectImage } from "@/types";

type ProjectGalleryProps = {
  project: Project;
};

type GalleryFrameProps = {
  image: ProjectImage;
  onOpen: () => void;
  featured?: boolean;
};

function GalleryFrame({ image, onOpen, featured = false }: GalleryFrameProps) {
  return (
    <Card className="group/card min-w-0 overflow-hidden rounded-2xl p-4 transition-shadow duration-300 hover:shadow-smooth">
      <button
        type="button"
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-neutral-100 bg-[#f8f8fa] p-3 text-left transition-all duration-300 hover:border-neutral-200/90 sm:p-4 dark:border-white/5 dark:bg-background dark:hover:border-white/15"
        onClick={onOpen}
        aria-label={`View ${image.label} fullscreen`}
      >
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg transition-transform duration-300 group-hover/card:scale-[1.015]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top"
            sizes={
              featured
                ? "(max-width: 1400px) 100vw, 1400px"
                : "(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 680px"
            }
            priority={featured}
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-[#0b1f4d]/0 opacity-0 transition-all duration-300 group-hover:bg-[#0b1f4d]/45 group-hover:opacity-100 dark:group-hover:bg-black/50"
        >
          <span className="flex translate-y-2 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-[#0b1f4d] shadow-lg transition-transform duration-300 group-hover:translate-y-0">
            <ExpandIcon className="h-4 w-4" />
            View
          </span>
        </div>
      </button>
    </Card>
  );
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const images = project.images;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [primary, ...rest] = images;

  if (!primary) {
    return null;
  }

  return (
    <>
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        <GalleryFrame
          image={primary}
          featured
          onOpen={() => setLightboxIndex(0)}
        />
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
            {rest.map((image, offset) => (
              <GalleryFrame
                key={image.src}
                image={image}
                onOpen={() => setLightboxIndex(offset + 1)}
              />
            ))}
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null ? (
          <ProjectLightbox
            key="project-lightbox"
            images={images}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onChange={setLightboxIndex}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
