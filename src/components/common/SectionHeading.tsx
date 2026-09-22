type SectionHeadingProps = {
  pretitle: string;
  title: string;
};

export function SectionHeading({ pretitle, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <span className="text-xs font-mono uppercase tracking-widest text-muted">
        {pretitle}
      </span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
        {title}
      </h2>
    </div>
  );
}
