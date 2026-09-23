"use client";

import { Container, SectionWrapper } from "@/components/common";
import { DrawerToggle } from "@/components/hero/DrawerToggle";
import { ProfileCard } from "@/components/hero/ProfileCard";
import { useProfileDrawer } from "@/hooks/useProfileDrawer";

export function HeroSection() {
  const { isOpen, close, toggle } = useProfileDrawer();

  return (
    <SectionWrapper>
      <Container className="flex items-center justify-center pb-8 pt-8 sm:pb-10 sm:pt-14 lg:pt-20">
        <div className="flex w-full max-w-2xl flex-col items-center">
          <ProfileCard isOpen={isOpen} onClose={close} />
          <DrawerToggle isOpen={isOpen} onToggle={toggle} />
        </div>
      </Container>
    </SectionWrapper>
  );
}
