import { Pill } from "@/components/common/Pill";
import { cn } from "@/lib/cn";

type SkillsMarqueeProps = {
  skills: readonly string[];
};

export function SkillsMarquee({ skills }: SkillsMarqueeProps) {
  const sequence = [...skills, ...skills];

  return (
    <div className="group -mx-8 mt-6 sm:-mx-10">
      <p className="sr-only">Skills: {skills.join(", ")}</p>
      <div
        aria-hidden="true"
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className={cn(
            "flex w-max animate-marquee-left gap-2.5 pr-2.5 group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          )}
        >
          {sequence.map((skill, index) => (
            <Pill key={`${skill}-${index}`} className="shrink-0">
              {skill}
            </Pill>
          ))}
        </div>
      </div>
    </div>
  );
}
