import { ThemeToggle } from "@/components/layout/ThemeToggle";
import {
  InstagramIcon,
  IslandAvatarIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";
import { socialLinks } from "@/data/socials";
import { SITE } from "@/lib/constants";
import type { SocialNetwork } from "@/types";

function socialLabel(network: SocialNetwork) {
  switch (network) {
    case "linkedin":
      return "LinkedIn";
    case "instagram":
      return "Instagram";
    default: {
      const _exhaustive: never = network;
      return _exhaustive;
    }
  }
}

function SocialGlyph({ network }: { network: SocialNetwork }) {
  switch (network) {
    case "linkedin":
      return <LinkedInIcon className="h-5 w-5 fill-current" />;
    case "instagram":
      return <InstagramIcon className="h-5 w-5" />;
    default: {
      const _exhaustive: never = network;
      return _exhaustive;
    }
  }
}

export function DynamicIsland() {
  return (
    <div className="absolute left-1/2 top-4 -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-full border border-black/5 bg-island px-3 py-2 text-island-fg shadow-lg shadow-black/10 dark:border-black/10">
        <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-linear-to-tr from-pink-400 via-rose-300 to-amber-200 p-[1.5px]">
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-stone-800">
            <IslandAvatarIcon />
          </div>
        </div>
        <div className="h-5 w-px bg-current/20" />
        <div className="flex items-center gap-1.5 text-island-fg/80">
          <a
            aria-label="Send an email"
            className="p-1.5 transition-colors hover:text-island-fg"
            href={SITE.email}
          >
            <MailIcon className="h-5 w-5" />
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.network}
              aria-label={socialLabel(link.network)}
              className="p-1.5 transition-colors hover:text-island-fg"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialGlyph network={link.network} />
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
