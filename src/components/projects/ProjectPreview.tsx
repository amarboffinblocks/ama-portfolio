"use client"
import { BrowserWindow } from "@/components/common";
import { AstroAnshPreview, BoffinblocksPreview } from "@/components/projects/previews/BoffinblocksPreview";
import {  ProjectPreviewId } from "@/types";
import Image from "next/image";


export function ProjectPreview({ preview }: { preview: ProjectPreviewId }) {
  switch (preview) {
    case "boffinblocks":
      return (
        <BrowserWindow chrome="cosmos">
          <BoffinblocksPreview />
        </BrowserWindow>
      );
    case "astroansh":
        return (
        <BrowserWindow chrome="cosmos">
          <AstroAnshPreview />
        </BrowserWindow>
      );

    default: {
      const _exhaustive: never = preview;
      return _exhaustive;
    }
  }
}


