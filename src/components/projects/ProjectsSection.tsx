import { Container, SectionHeading, SectionWrapper } from "@/components/common";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <SectionWrapper id="selected-works">
      <Container className="py-10">
        <SectionHeading title="Selected Projects" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
