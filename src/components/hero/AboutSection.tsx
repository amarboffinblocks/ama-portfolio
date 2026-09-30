import { profile } from "@/data/profile";

export function AboutSection() {
  const paragraphs = profile.summary.split("\n\n").filter(Boolean);

  return (
    <div className="mb-10 mt-4">
      <h3 className="mb-3 text-base font-semibold text-foreground">About me</h3>
      <div className="max-w-xl space-y-3">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
