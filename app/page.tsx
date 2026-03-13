import { PROJECTS, SKILLS } from "@/lib/data";
import Skills from "@/components/sections/Skills";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import SectionWrapper from "@/components/sections/SectionWrapper";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const sections = [
    { id: 'hero', component: <Hero /> },
    { id: 'skills', component: <Skills skills={SKILLS} /> },
    { id: 'projects', component: <Projects projects={PROJECTS} /> },
    { id: 'contact', component: <Contact />},
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-20 min-h-screen">
      {sections.map((section, index) => (
        <SectionWrapper 
          key={section.id} 
          showDivider={index !== 0}
        >
          {section.component}
        </SectionWrapper>
      ))}
    </main>
  );
}