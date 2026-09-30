import type { ReactNode } from "react";
import Image from "next/image";
import {
  AppleIcon,
  DeviceIcon,
  ExternalLinkIcon,
  SearchIcon,
  SpintankIcon,
} from "@/components/icons";
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

function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-neutral-200/80 bg-white">
      <Image alt={alt} className="object-cover" fill sizes="44px" src={src} />
    </div>
  );
}

function CompanyLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="group/link inline-flex items-center gap-1 transition-colors hover:text-blue-600"
    >
      {children}
      <ExternalLinkIcon
        className="h-3 w-3 shrink-0 text-neutral-400 transition-colors group-hover/link:text-blue-600"
        aria-hidden
      />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}

export function ExperienceRow({ item }: { item: ExperienceItem }) {
  const mark = item.logoSrc ? (
    <CompanyLogo alt={`${item.company} logo`} src={item.logoSrc} />
  ) : (
    <ExperienceBadge icon={item.icon} />
  );

  return (
    <div className="flex items-start justify-between gap-3 py-1">
      <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
        {item.href ? (
          <a
            href={item.href}
            rel="noopener noreferrer"
            target="_blank"
            className="shrink-0 transition-opacity hover:opacity-80"
            aria-label={`${item.company} website`}
          >
            {mark}
          </a>
        ) : (
          mark
        )}
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-foreground">
            {item.href ? (
              <CompanyLink href={item.href}>{item.company}</CompanyLink>
            ) : (
              item.company
            )}
          </h4>
          <p className="mt-0.5 text-xs font-normal text-neutral-500">{item.role}</p>
        </div>
      </div>
      <div className="shrink-0 pt-0.5 text-right">
        <span className="block font-mono text-[10px] text-neutral-400 sm:text-xs">
          {item.dates}
        </span>
        {item.location ? (
          <p className="mt-0.5 text-[11px] text-neutral-400">{item.location}</p>
        ) : null}
      </div>
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
