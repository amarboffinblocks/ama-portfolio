import { BadgeIcon } from "@/components/icons";
import { certificates } from "@/data/certificates";
import type { CertificateItem } from "@/types";

function CertificateBody({ item }: { item: CertificateItem }) {
  return (
    <>
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-50 text-amber-700">
        <BadgeIcon className="h-3.5 w-3.5" />
      </div>
      <div className="mt-4">
        <div className="text-xs font-semibold text-foreground group-hover:text-foreground">
          {item.name}
        </div>
        <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-neutral-400">
          {item.issuer} · {item.year}
        </div>
      </div>
    </>
  );
}

function CertificateCard({ item }: { item: CertificateItem }) {
  const className =
    "group flex flex-col justify-between rounded-2xl border border-neutral-200/70 bg-background p-3.5 transition-colors hover:border-neutral-300 dark:border-white/10 dark:hover:border-white/20";

  if (item.href) {
    return (
      <a
        className={className}
        href={item.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <CertificateBody item={item} />
      </a>
    );
  }

  return (
    <div className={className}>
      <CertificateBody item={item} />
    </div>
  );
}

export function CertificateGrid() {
  return (
    <div className="mb-10">
      <h3 className="mb-4 text-base font-semibold text-foreground">Certificates</h3>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {certificates.map((item) => (
          <CertificateCard key={`${item.name}-${item.year}`} item={item} />
        ))}
      </div>
    </div>
  );
}
