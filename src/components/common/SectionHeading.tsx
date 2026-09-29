type SectionHeadingProps = {
  title: string;
  label?: string;
};

export function SectionHeading({ title, label }: SectionHeadingProps) {
  return (
    <div className="mb-5 sm:mb-6 md:mb-8">
      {label ? (
        <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:text-xs">
          {`// ${label}`}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2.5rem] lg:leading-tight">
        {title}
      </h2>
    </div>
  );
}
