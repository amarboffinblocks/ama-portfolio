import { InstagramIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socials";
import type { SocialLink, SocialNetwork } from "@/types";

function SocialGlyph({ network }: { network: SocialNetwork }) {
  switch (network) {
    case "linkedin":
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0077b5]/10 text-[#0077b5]">
          <LinkedInIcon className="h-3.5 w-3.5 fill-current" />
        </div>
      );
    case "instagram":
      return (
        <div className="flex h-6 w-6 items-center justify-center rounded-md border border-rose-100 bg-rose-50 text-rose-500">
          <InstagramIcon className="h-3.5 w-3.5" />
        </div>
      );
    default: {
      const _exhaustive: never = network;
      return _exhaustive;
    }
  }
}

function SocialCard({ link }: { link: SocialLink }) {
  return (
    <a
      className="group flex min-h-[84px] flex-1 flex-col justify-between rounded-2xl border border-neutral-200/70 bg-background p-3.5 transition-colors hover:border-neutral-300 dark:border-white/10 dark:hover:border-white/20"
      href={link.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <SocialGlyph network={link.network} />
      <div>
        <div className="text-xs font-semibold text-foreground group-hover:text-foreground">
          {link.handle}
        </div>
        <div className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">
          {link.network}
        </div>
      </div>
    </a>
  );
}

export function SocialGrid() {
  return (
    <div className="pt-2">
      <span className="block font-mono text-[11px] uppercase tracking-widest text-neutral-400">
        {"// ABOUT ME"}
      </span>
      <h3 className="mb-4 mt-1 text-base font-semibold text-foreground">About</h3>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:items-stretch">
        <div
          role="img"
          aria-label={profile.name}
          className="min-h-[220px] overflow-hidden rounded-2xl border border-neutral-200/70 bg-cover bg-center"
          style={{
            backgroundImage: `url('${profile.avatarSrc}')`,
            backgroundPosition: "13.5% 20%",
            backgroundSize: "1350%",
          }}
        />
        <div className="flex flex-col gap-3.5">
          {socialLinks.map((link) => (
            <SocialCard key={link.network} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
