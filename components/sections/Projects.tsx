import { Project } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCards";

interface ProjectsProps {
  projects: Project[];
}

/**
 * Projects Section: Displays a grid of featured work.
 */
export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-15">
      <h2 className="text-3xl font-bold mb-10 text-center text-foreground transition-colors">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}