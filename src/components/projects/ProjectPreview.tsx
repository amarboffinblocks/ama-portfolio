import { BrowserWindow } from "@/components/common";
import { BoffinblocksPreview } from "@/components/projects/previews/BoffinblocksPreview";
import type { ProjectPreviewId } from "@/types";

export function ProjectPreview({ preview }: { preview: ProjectPreviewId }) {
  switch (preview) {
    case "boffinblocks":
      return (
        <BrowserWindow chrome="cosmos">
          <BoffinblocksPreview />
        </BrowserWindow>
      );
    default: {
      const _exhaustive: never = preview;
      return _exhaustive;
    }
  }
}
