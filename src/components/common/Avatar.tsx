import { cn } from "@/lib/cn";

type AvatarProps = {
  src: string;
  alt: string;
  size?: "sm" | "lg";
  className?: string;
  crop?: {
    position: string;
    size: string;
  };
};

const sizeClass = {
  sm: "h-7 w-7",
  lg: "h-20 w-20",
} as const;

export function Avatar({ src, alt, size, className, crop }: AvatarProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "shrink-0 overflow-hidden rounded-full border border-neutral-100 bg-cover bg-center shadow-sm",
        size ? sizeClass[size] : className ? undefined : "h-20 w-20",
        className,
      )}
      style={{
        backgroundImage: `url('${src}')`,
        backgroundPosition: crop?.position,
        backgroundSize: crop?.size,
      }}
    />
  );
}
