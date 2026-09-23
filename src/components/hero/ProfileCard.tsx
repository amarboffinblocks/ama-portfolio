import { Avatar, Button, Card, SkillsMarquee } from "@/components/common";
import { ChatIcon } from "@/components/icons";
import { ProfileDrawer } from "@/components/hero/ProfileDrawer";
import { profile } from "@/data/profile";

type ProfileCardProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ProfileCard({ isOpen, onClose }: ProfileCardProps) {
  return (
    <Card className="relative z-10 w-full overflow-hidden rounded-xl p-5 pb-4 sm:p-8 sm:pb-5 md:p-10 md:pb-6">
      <div className="flex items-start justify-between gap-3">
        <Avatar
          src={profile.avatarSrc}
          alt={profile.name}
          className="h-16 w-16 sm:h-20 sm:w-20"
          crop={{ position: "13.5% 20%", size: "1350%" }}
        />
        <Button href={profile.email} className="gap-2 px-3 py-2 sm:gap-2.5 sm:px-4">
          <ChatIcon className="h-4 w-4 shrink-0" />
          <span className="sm:hidden">Contact</span>
          <span className="hidden sm:inline">Contact me</span>
        </Button>
      </div>
      <div className="mt-5 sm:mt-6">
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {profile.name}
          </h1>
          {profile.openToWork ? (
            <span
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400"
              title={profile.availability}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
              Open to work
            </span>
          ) : null}
        </div>
        <p className="mt-2.5 max-w-md text-sm leading-relaxed text-muted sm:mt-3">
          {profile.tagline}
        </p>
      </div>
      <SkillsMarquee skills={profile.skills} />
      <ProfileDrawer isOpen={isOpen} onClose={onClose} />
    </Card>
  );
}
