import { Button } from "@/components/common";
import { DocumentIcon } from "@/components/icons";
import { DynamicIsland } from "@/components/layout/DynamicIsland";
import { LocationBar } from "@/components/layout/LocationBar";
import { SITE } from "@/lib/constants";

export function Header() {
  return (
    <header className="relative z-20 flex w-full items-center justify-between px-6 py-5 text-xs tracking-normal lg:px-12">
      <div className="flex items-center space-x-2">
        <Button href={SITE.cvHref} variant="soft">
          <DocumentIcon className="h-3.5 w-3.5 text-muted" />
          <span>Download CV</span>
        </Button>
      </div>
      <DynamicIsland />
      <LocationBar />
    </header>
  );
}
