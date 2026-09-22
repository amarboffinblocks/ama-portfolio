type SectionHeadingProps = {
  title: string;
};

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
        {title}
      </h2>
    </div>
  );
}
