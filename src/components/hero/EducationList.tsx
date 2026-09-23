import { AcademicCapIcon } from "@/components/icons";
import { education } from "@/data/education";
import type { EducationItem } from "@/types";

function EducationRow({ item }: { item: EducationItem }) {
  return (
    <div className="flex items-start justify-between gap-3 py-1 sm:items-center">
      <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200/80 bg-neutral-50 text-neutral-500 sm:h-11 sm:w-11">
          <AcademicCapIcon className="h-5 w-5 text-neutral-600" />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-foreground">{item.school}</h4>
          <p className="mt-0.5 text-xs font-normal text-neutral-500">{item.degree}</p>
        </div>
      </div>
      <span className="shrink-0 pt-0.5 font-mono text-[10px] text-neutral-400 sm:pt-0 sm:text-xs">
        {item.dates}
      </span>
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
