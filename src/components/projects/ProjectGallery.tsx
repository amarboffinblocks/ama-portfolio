"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "motion/react";
import { BrowserWindow } from "@/components/common";
import { ExpandIcon } from "@/components/icons";
import { ProjectLightbox } from "@/components/projects/ProjectLightbox";
import type { Project, ProjectImage, ProjectTheme } from "@/types";

type ProjectGalleryProps = {
  project: Project;
};

function chromeForTheme(theme: ProjectTheme) {
  return theme === "dark" ? "cosmos" : "light";
}

function GalleryFrame({
  image,
  chrome,
  onOpen,
}: {
  image: ProjectImage;
  chrome: "light" | "cosmos" | "symphony";
  onOpen: () => void;
}) {
  return (
    <figure className="min-w-0">
      <button
        type="button"
        className="group block w-full cursor-zoom-in text-left"
        onClick={onOpen}
        aria-label={`View ${image.label} fullscreen`}
      >
        <BrowserWindow chrome={chrome}>
          <div className="relative aspect-16/10 w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 680px"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/35 group-hover:opacity-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-sm">
                <ExpandIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
        </BrowserWindow>
      </button>
      <figcaption className="mt-2.5 text-center text-xs text-neutral-400">
        {image.label}
      </figcaption>
    </figure>
  );
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const chrome = chromeForTheme(project.theme);
  const images = project.images;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [primary, ...rest] = images;

  if (!primary) {
    return null;
  }

  return (
    <>
      <div className="space-y-5">
        <GalleryFrame
          image={primary}
          chrome={chrome}
          onOpen={() => setLightboxIndex(0)}
        />
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:gap-10">
            {rest.map((image, offset) => (
              <GalleryFrame
                key={image.src}
                image={image}
                chrome={chrome}
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
