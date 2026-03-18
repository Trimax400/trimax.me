import { Project } from "@/lib/data";
import { List } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProjectCards({ project }: { project: Project }) {
  const t = useTranslations('projects');

  const projectTitle = t(`list.${project.id}.title`);

  return (
    /**
     * Main container using the semantic 'card' colors defined in globals.css.
     * Transitions are applied for smooth hover effects on shadows and background opacity.
     */
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm transition-all hover:shadow-xl hover:bg-card/80">
      {/* Project Visual Container:
        Uses an 'aspect-video' ratio to ensure UI consistency across all cards.
        The container handles overflow to contain the hover scale effect.
        We utilize the optimized Next.js Image component with the 'fill' layout 
        to adapt dynamically to the space, ensuring sharp, optimized delivery.
      */}
      <div className="aspect-video w-full relative overflow-hidden bg-muted/10 border-b border-card-border">
          {project.image ? (
            <Image 
              src={project.image}
              alt={`Project preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full">
               <span className="text-muted font-medium text-sm">No Preview</span>
            </div>
          )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Technology Tags:
          Rendered as badges with a subtle primary-colored background (10% opacity)
          to maintain brand consistency without overwhelming the UI.
        */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Title and Description using theme-aware foreground/muted colors */}
        <h3 className="text-xl font-bold text-foreground mb-2 transition-colors">
          {projectTitle}
        </h3>
        
        <p className="text-muted text-sm leading-relaxed mb-6 transition-colors">
          {t(`list.${project.id}.description`)}
        </p>

        {/* Action Buttons:
          Pushed to the bottom of the card using 'mt-auto' to ensure uniform button 
          alignment regardless of varying description lengths.
        */}
        <div className="mt-auto flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors focus:outline-none"
          >
            {t('actions.code')} →
          </a>
          
          {/* Conditional rendering for the Live Demo button */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:opacity-90 shadow-md transition-all active:scale-95 focus:outline-none"
            >
              {t('actions.demo')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}