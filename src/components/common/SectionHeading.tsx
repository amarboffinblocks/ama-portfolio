type SectionHeadingProps = {
  title: string;
};

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-6 sm:mb-8 md:mb-10">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
    </div>
  );
}
