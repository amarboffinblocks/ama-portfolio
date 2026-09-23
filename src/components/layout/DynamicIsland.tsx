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
      return <LinkedInIcon className="h-4 w-4 fill-current sm:h-5 sm:w-5" />;
    case "instagram":
      return <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />;
    default: {
      const _exhaustive: never = network;
      return _exhaustive;
    }
  }
}

export function DynamicIsland() {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-black/5 bg-island px-2 py-1.5 text-island-fg shadow-lg shadow-black/10 sm:gap-3 sm:px-3 sm:py-2 dark:border-black/10">
      <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full bg-linear-to-tr from-pink-400 via-rose-300 to-amber-200 p-[1.5px] sm:h-8 sm:w-8">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-stone-800">
          <IslandAvatarIcon />
        </div>
      </div>
      <div className="h-4 w-px bg-current/20 sm:h-5" />
      <div className="flex items-center gap-0.5 text-island-fg/80 sm:gap-1.5">
        <a
          aria-label="Send an email"
          className="p-1 transition-colors hover:text-island-fg sm:p-1.5"
          href={SITE.email}
        >
          <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
        {socialLinks.map((link) => (
          <a
            key={link.network}
            aria-label={socialLabel(link.network)}
            className="p-1 transition-colors hover:text-island-fg sm:p-1.5"
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
  );
}
