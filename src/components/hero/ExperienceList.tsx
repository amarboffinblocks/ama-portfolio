import type { ReactNode } from "react";
import { AppleIcon, DeviceIcon, SearchIcon, SpintankIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import type { ExperienceIcon as ExperienceIconName, ExperienceItem } from "@/types";

type BadgeTone = "search" | "spintank" | "lonsdale" | "apple" | "generic";

const badgeClass: Record<BadgeTone, string> = {
  search:
    "border border-neutral-200/80 bg-neutral-50 text-neutral-500",
  spintank: "bg-black text-white",
  lonsdale: "border border-neutral-300 bg-white font-serif text-[11px] font-bold leading-tight text-neutral-800",
  apple: "border border-neutral-200/80 bg-neutral-50 text-black",
  generic: "border border-neutral-200/80 bg-neutral-50 text-neutral-400",
};

function ExperienceBadge({ icon }: { icon: ExperienceIconName }) {
  let content: ReactNode;

  switch (icon) {
    case "search":
      content = <SearchIcon className="h-5 w-5 text-neutral-600" />;
      break;
    case "spintank":
      content = <SpintankIcon className="h-6 w-6 fill-white" />;
      break;
    case "lonsdale":
      content = (
        <div>
          19
          <br />
          61
        </div>
      );
      break;
    case "apple":
      content = <AppleIcon className="h-5 w-5 fill-current" />;
      break;
    case "generic":
      content = <DeviceIcon className="h-5 w-5" />;
      break;
    default: {
      const _exhaustive: never = icon;
      return _exhaustive;
    }
  }

  return (
    <div
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-center",
        badgeClass[icon],
      )}
    >
      {content}
    </div>
  );
}

export function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <div className="flex items-start justify-between gap-3 py-1 sm:items-center">
      <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
        <ExperienceBadge icon={item.icon} />
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-foreground">{item.company}</h4>
          <p className="mt-0.5 text-xs font-normal text-neutral-500">{item.role}</p>
        </div>
      </div>
      <span className="shrink-0 pt-0.5 font-mono text-[10px] text-neutral-400 sm:pt-0 sm:text-xs">
        {item.dates}
      </span>
    </div>
  );
}

export function ExperienceList({
  work,
}: {
  work: ExperienceItem[];
}) {
  return (
    <div className="mb-10 mt-4">
      <h3 className="mb-4 text-base font-semibold text-foreground">Experience</h3>
      <div className="space-y-4">
        {work.map((item) => (
          <ExperienceRow key={`${item.company}-${item.dates}`} item={item} />
        ))}
      </div>
    </div>
  );
}
