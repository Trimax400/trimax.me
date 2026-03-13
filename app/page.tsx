import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCards";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 min-h-screen">
      
      {/* Hero Section */}
      <section id="about" className="py-15 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-foreground transition-colors">
          Hi, I'm <span className="text-primary">Tristan</span>
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-muted max-w-2xl mx-auto transition-colors">
          I'm a Fullstack Developer specialized in building robust web applications. 
          Check out my work below.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#projects"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:opacity-90 transition-all active:scale-95"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contact me <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-15">
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground transition-colors">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

    </main>
  );
}