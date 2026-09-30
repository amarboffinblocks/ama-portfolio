import type { ReactNode } from "react";
import Image from "next/image";
import { AcademicCapIcon, ExternalLinkIcon } from "@/components/icons";
import { education } from "@/data/education";
import type { EducationItem } from "@/types";

function EducationLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-neutral-200/80 bg-white sm:h-11 sm:w-11">
      <Image alt={alt} className="object-cover" fill sizes="44px" src={src} />
    </div>
  );
}

function SchoolLink({ href, children }: { href: string; children: ReactNode }) {
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

function EducationRow({ item }: { item: EducationItem }) {
  const mark = item.logoSrc ? (
    <EducationLogo alt={`${item.school} logo`} src={item.logoSrc} />
  ) : (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200/80 bg-neutral-50 text-neutral-500 sm:h-11 sm:w-11">
      <AcademicCapIcon className="h-5 w-5 text-neutral-600" />
    </div>
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
            aria-label={`${item.school} website`}
          >
            {mark}
          </a>
        ) : (
          mark
        )}
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-foreground">
            {item.href ? (
              <SchoolLink href={item.href}>{item.school}</SchoolLink>
            ) : (
              item.school
            )}
          </h4>
          <p className="mt-0.5 text-xs font-normal text-neutral-500">{item.degree}</p>
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

export function EducationList() {
  return (
    <div className="mb-10">
      <h3 className="mb-4 text-base font-semibold text-foreground">Education</h3>
      <div className="space-y-4">
        {education.map((item) => (
          <EducationRow key={`${item.school}-${item.dates}`} item={item} />
        ))}
      </div>
    </div>
  );
}
