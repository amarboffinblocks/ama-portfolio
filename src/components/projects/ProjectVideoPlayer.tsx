import { BrowserWindow } from "@/components/common";
import type { ProjectTheme, ProjectVideo } from "@/types";

type ProjectVideoPlayerProps = {
  video: ProjectVideo;
  theme: ProjectTheme;
};

function chromeForTheme(theme: ProjectTheme) {
  return theme === "dark" ? "cosmos" : "light";
}

export function ProjectVideoPlayer({ video, theme }: ProjectVideoPlayerProps) {
  return (
    <BrowserWindow chrome={chromeForTheme(theme)}>
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-contain"
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
        >
          <source src={video.src} />
          Your browser does not support the video tag.
        </video>
      </div>
    </BrowserWindow>
  );
}
