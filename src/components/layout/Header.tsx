import { Button } from "@/components/common";
import { DocumentIcon } from "@/components/icons";
import { DynamicIsland } from "@/components/layout/DynamicIsland";
import { LocationBar } from "@/components/layout/LocationBar";
import { SITE } from "@/lib/constants";

type HeaderProps = {
  action?: "cv" | "back";
};

export function Header({ action = "cv" }: HeaderProps) {
  return (
    <header className="relative z-20 grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4 lg:px-12 lg:py-5">
      <div className="justify-self-start">
        {action === "back" ? (
          <Button href="/#selected-works" variant="soft" className="px-2.5 sm:px-3">
            <span>← Back</span>
          </Button>
        ) : (
          <Button href={SITE.cvHref} variant="soft" className="px-2.5 sm:px-3">
            <DocumentIcon className="h-3.5 w-3.5 shrink-0 text-muted" />
            <span className="sm:hidden">CV</span>
            <span className="hidden sm:inline">Download CV</span>
          </Button>
        )}
      </div>

      <DynamicIsland />

      <div className="justify-self-end">
        <LocationBar className="hidden lg:flex" />
      </div>
    </header>
  );
}
