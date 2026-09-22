import { PageSheet } from "@/components/common";
import { HeroSection } from "@/components/hero/HeroSection";
import { Header } from "@/components/layout/Header";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative isolate">
        <HeroSection />
        <PageSheet />
        <ProjectsSection />
      </main>
    </>
  );
}
