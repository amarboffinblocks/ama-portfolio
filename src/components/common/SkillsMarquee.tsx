import { Pill } from "@/components/common/Pill";
import { cn } from "@/lib/cn";

type SkillsMarqueeProps = {
  skills: readonly string[];
};

type MarqueeRowProps = {
  items: readonly string[];
  direction: "left" | "right";
};

function MarqueeRow({ items, direction }: MarqueeRowProps) {
  const sequence = [...items, ...items];

  return (
    <div
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
          "flex w-max gap-2.5 pr-2.5 group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
        )}
      >
        {sequence.map((skill, index) => (
          <Pill key={`${skill}-${index}`} className="shrink-0">
            {skill}
          </Pill>
        ))}
      </div>
    </div>
  );
}

export function SkillsMarquee({ skills }: SkillsMarqueeProps) {
  const midpoint = Math.ceil(skills.length / 2);
  const topRow = skills.slice(0, midpoint);
  const bottomRow = skills.slice(midpoint);

  return (
    <div className="group -mx-8 mt-7 space-y-2.5 sm:-mx-10">
      <p className="sr-only">Skills: {skills.join(", ")}</p>
      <div aria-hidden="true" className="space-y-2.5">
        <MarqueeRow items={topRow} direction="left" />
        <MarqueeRow items={bottomRow} direction="right" />
      </div>
    </div>
  );
}
