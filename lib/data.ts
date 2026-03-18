// --- Interfaces ---

export interface Project {
    id: string;
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
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { platform: "GitHub", url: "https://github.com/Trimax400" },
    { platform: "Mail", url: "mailto:cherriertristan@gmail.com" },
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
        id: "portfolio",
        title: "Portfolio Website",
        description: "My personal portfolio built with Next.js, Tailwind CSS, and Docker. Automated deployment via GitHub Actions to an OVH VPS.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Docker", "CI/CD"],
        githubUrl: "https://github.com/Trimax400/trimax.me",
        liveUrl: "https://trimax400.com",
        image: "/projects/portfolio.png",
    },
    {
        id: "taxes",
        title: "Tax Visualizer",
        description: "A project developed as part of the Master’s degree in Computer Science at the University of Le Havre Normandie. Produced in pairs, this application visualizes statistics on specific taxes collected in France over selected years.",
        tags: ["API Integration", "Next.js", "TypeScript", "Symfony", "D3"],
        githubUrl: "https://github.com/Trimax400/tax-visualizer",
        liveUrl: "https://taxes.trimax400.com",
        image: "/projects/taxvisualizer.png",
    },
];