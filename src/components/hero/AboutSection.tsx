import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <div className="mb-10 mt-4">
      <h3 className="mb-3 text-base font-semibold text-foreground">About me</h3>
      <p className="max-w-xl text-sm leading-relaxed text-muted">{profile.summary}</p>
    </div>
  );
}
