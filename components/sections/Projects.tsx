"use client";
import { Project } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCards";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface ProjectsProps {
  projects: Project[];
}

/**
 * Projects Section: Displays a grid of featured work.
 */
export default function Projects({ projects }: ProjectsProps) {
  const t = useTranslations('projects');
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 3;
  const hasMoreProjects = projects.length > INITIAL_COUNT;
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  return (
    <section id="projects" className="py-15 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-foreground transition-colors">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {hasMoreProjects && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 active:scale-95"
          >
            {showAll ? t("actions.show_less") : t("actions.show_more")}
          </button>
        </div>
      )}
    </section>
  );
}