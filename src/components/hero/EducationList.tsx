import { AcademicCapIcon } from "@/components/icons";
import { education } from "@/data/education";
import type { EducationItem } from "@/types";

function EducationRow({ item }: { item: EducationItem }) {
  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200/80 bg-neutral-50 text-neutral-500">
          <AcademicCapIcon className="h-5 w-5 text-neutral-600" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">{item.school}</h4>
          <p className="mt-0.5 text-xs font-normal text-neutral-500">{item.degree}</p>
        </div>
      </div>
      <span className="font-mono text-xs text-neutral-400">{item.dates}</span>
    </div>
  );
}

export function EducationList() {
  return (
    <div className="mb-10">
      <span className="block font-mono text-[11px] uppercase tracking-widest text-neutral-400">
        {"// EDUCATION"}
      </span>
      <h3 className="mb-4 mt-1 text-base font-semibold text-foreground">Education</h3>
      <div className="space-y-4">
        {education.map((item) => (
          <EducationRow key={`${item.school}-${item.dates}`} item={item} />
        ))}
      </div>
    </div>
  );
}
