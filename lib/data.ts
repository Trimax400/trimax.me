// Define types for our data to ensure type safety across the app
export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

// --- Content ---

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Trimax400" },
];

export const PROJECTS: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js, Tailwind CSS, and Docker. Automated deployment via GitHub Actions to an OVH VPS.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Docker", "CI/CD"],
    githubUrl: "https://github.com/Trimax400/trimax.me",
    liveUrl: "http://37.59.105.191",
    image: "/projects/portfolio.png",
  },
  {
    title: "Interactive Project One",
    description: "A placeholder for a project..",
    tags: ["React", "API Integration", "Node.js"],
    githubUrl: "https://github.com/Trimax400",
    image: "/projects/placeholder.png",
  },
];