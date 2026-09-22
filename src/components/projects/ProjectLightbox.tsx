"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "@/components/icons";
import type { ProjectImage } from "@/types";

type ProjectLightboxProps = {
  images: readonly ProjectImage[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function ProjectLightbox({
  images,
  index,
  onClose,
  onChange,
}: ProjectLightboxProps) {
  const image = images[index];
  const hasMultiple = images.length > 1;

  const showPrevious = useCallback(() => {
    onChange((index - 1 + images.length) % images.length);
  }, [images.length, index, onChange]);

  const showNext = useCallback(() => {
    onChange((index + 1) % images.length);
  }, [images.length, index, onChange]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (!hasMultiple) {
        return;
      }
      if (event.key === "ArrowLeft") {
        onChange((index - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        onChange((index + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultiple, images.length, index, onChange, onClose]);

  if (!image) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
        onClick={onClose}
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      {hasMultiple ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:left-6"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-6"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </>
      ) : null}

      <motion.div
        key={image.src}
        className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-black/40">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
        <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
          <span>{image.label}</span>
          {hasMultiple ? (
            <span className="text-white/45">
              {index + 1} / {images.length}
            </span>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}
