import { Project } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function ProjectCards({ project }: { project: Project }) {
  const t = useTranslations('projects');
  return (
    /**
     * Main container using the semantic 'card' colors defined in globals.css.
     * Transitions are applied for smooth hover effects on shadows and background opacity.
     */
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm transition-all hover:shadow-xl hover:bg-card/80">
      
      {/* Image Placeholder: 
        Uses an aspect-ratio utility to maintain consistency across all project cards.
        The muted background provides a neutral canvas before actual images are added.
      */}
      <div className="aspect-video w-full bg-muted/10 flex items-center justify-center transition-colors">
         <span className="text-muted font-medium text-sm">Preview Image</span>
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
          {t(`list.${project.id}.title`)}
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