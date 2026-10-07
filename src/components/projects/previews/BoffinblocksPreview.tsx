import Image from "next/image";

export function BoffinblocksPreview() {
  return (
    <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-[#0b1f4d]">
      <Image
        src="/projects/boffinblocks/banner.png"
        alt="Boffinblocks homepage preview"
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, (max-width: 1400px) 80vw, 900px"
        priority
      />
    </div>
  );
}


export function AstroAnshPreview() {
  return (
    <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-[#0b1f4d]">
      <Image
        src="/projects/astroansh/banner.png"
        alt="Boffinblocks homepage preview"
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, (max-width: 1400px) 80vw, 900px"
        priority
      />
    </div>
  );
}