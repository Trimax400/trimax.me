import { Project } from "@/lib/data";

export default function ProjectCards({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm transition-all hover:shadow-xl hover:bg-card/80">
      <div className="aspect-video w-full bg-muted/10 flex items-center justify-center transition-colors">
         <span className="text-muted font-medium">Preview Image</span>
      </div>

      <div className="flex flex-1 flex-col p-6">
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

        <h3 className="text-xl font-bold text-foreground mb-2 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted text-sm leading-relaxed mb-6 transition-colors">
          {project.description}
        </p>

        <div className="mt-auto flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            Code GitHub →
          </a>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:opacity-90 shadow-md transition-all active:scale-95"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}