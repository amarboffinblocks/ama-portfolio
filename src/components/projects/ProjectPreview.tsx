import Image from "next/image";
import { BrowserWindow } from "@/components/common";
import type { Project } from "@/types";

export function ProjectPreview({ project }: { project: Project }) {
  const { banner } = project;

  return (
    <BrowserWindow chrome="cosmos">
      <div className="w-full overflow-hidden rounded-b-lg bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={banner.src}
          alt={banner.alt}
          width={banner.width ?? 1920}
          height={banner.height ?? 1080}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 80vw, 900px"
          priority
        />
      </div>
    </BrowserWindow>
  );
}
