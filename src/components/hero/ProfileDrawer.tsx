import { Button } from "@/components/common";
import { CertificateGrid } from "@/components/hero/CertificateGrid";
import { EducationList } from "@/components/hero/EducationList";
import { ExperienceList } from "@/components/hero/ExperienceList";
import { SocialGrid } from "@/components/hero/SocialGrid";
import { ChevronUpIcon } from "@/components/icons";
import { freelance, workExperience } from "@/data/experience";
import { cn } from "@/lib/cn";

type ProfileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ProfileDrawer({ isOpen, onClose }: ProfileDrawerProps) {
  return (
    <div
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "overflow-hidden transition-all duration-500 ease-in-out",
        isOpen ? "max-h-[6000px] opacity-100" : "pointer-events-none max-h-0 opacity-0",
      )}
    >
      <div className="flex items-center justify-center pb-4 pt-8">
        <div className="grow border-t border-dashed border-neutral-200 dark:border-white/10" />
        <Button variant="ghost" className="gap-1.5 px-4" onClick={onClose}>
          <span>OK, THAT&apos;S ENOUGH</span>
          <ChevronUpIcon className="h-3.5 w-3.5" />
        </Button>
        <div className="grow border-t border-dashed border-neutral-200 dark:border-white/10" />
      </div>
      <ExperienceList freelance={freelance} work={workExperience} />
      <EducationList />
      <CertificateGrid />
      <SocialGrid />
    </div>
  );
}
