import { BrowserWindow } from "@/components/common";
import { ExpeditionPreview } from "@/components/projects/previews/ExpeditionPreview";
import { MotsclesPreview } from "@/components/projects/previews/MotsclesPreview";
import { SpacetimePreview } from "@/components/projects/previews/SpacetimePreview";
import { SynthesioPreview } from "@/components/projects/previews/SynthesioPreview";
import type { ProjectPreviewId } from "@/types";

export function ProjectPreview({ preview }: { preview: ProjectPreviewId }) {
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
