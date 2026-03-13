// --- Interfaces ---

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

export type SocialPlatform = "GitHub" | "LinkedIn" | "Twitter" | "Mail";

export interface SocialLink {
    platform: SocialPlatform;
    url: string;
}

export interface Skill {
    name: string;
    category: "Frontend" | "Backend" | "DevOps" | "Tools";
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

export const SKILLS: Skill[] = [
    // --- Frontend ---
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "React Native", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Bulma", category: "Frontend" },

    // --- Backend ---
    { name: "Node.js", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "Symfony", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Flask", category: "Backend" },
    { name: "Java", category: "Backend" },

    // --- Databases (Category: Backend or Tools) ---
    { name: "SQLite", category: "Backend" },
    { name: "MySQL", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "MongoDB", category: "Backend" },

    // --- DevOps & Tools ---
    { name: "Docker", category: "DevOps" },
    { name: "GIT", category: "DevOps" },
    { name: "CI/CD", category: "DevOps" },
    { name: "VirtualBox", category: "DevOps" },
    { name: "LaTeX", category: "Tools" },
    { name: "Swagger", category: "Tools" },
    { name: "Trello", category: "Tools" },
    { name: "Linux", category: "Tools" },
    { name: "Bash", category: "Tools" },
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