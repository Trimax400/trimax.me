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
    hasIcon: boolean;
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
    { name: "React", category: "Frontend", hasIcon: true },
    { name: "Next.js", category: "Frontend", hasIcon: true },
    { name: "React Native", category: "Frontend", hasIcon: false },
    { name: "TypeScript", category: "Frontend", hasIcon: true },
    { name: "JavaScript", category: "Frontend", hasIcon: true },
    { name: "Tailwind CSS", category: "Frontend", hasIcon: true },
    { name: "Bulma", category: "Frontend", hasIcon: true },

    // --- Backend ---
    { name: "Node.js", category: "Backend", hasIcon: true },
    { name: "PHP", category: "Backend", hasIcon: true },
    { name: "Symfony", category: "Backend", hasIcon: true },
    { name: "Python", category: "Backend", hasIcon: true },
    { name: "Flask", category: "Backend", hasIcon: true },
    { name: "Java", category: "Backend", hasIcon: false },

    // --- Databases ---
    { name: "SQLite", category: "Backend", hasIcon: true },
    { name: "MySQL", category: "Backend", hasIcon: true },
    { name: "PostgreSQL", category: "Backend", hasIcon: true },
    { name: "MongoDB", category: "Backend", hasIcon: true },

    // --- DevOps & Tools ---
    { name: "Docker", category: "DevOps", hasIcon: true },
    { name: "GIT", category: "DevOps", hasIcon: true },
    { name: "CI/CD", category: "DevOps", hasIcon: false },
    { name: "VirtualBox", category: "DevOps", hasIcon: true },
    { name: "LaTeX", category: "Tools", hasIcon: true },
    { name: "Swagger", category: "Tools", hasIcon: true },
    { name: "Trello", category: "Tools", hasIcon: true },
    { name: "Linux", category: "Tools", hasIcon: true },
    { name: "Bash", category: "Tools", hasIcon: false },
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
        id: "lifey",
        title: "Lifey",
        description: "Lifey is a modern, fast, and secure personal finance application designed to give you complete control over your budget. Track your daily expenses, manage recurring bills, and visualize your financial future with ease.",
        tags: ["AngularJS", "Supabase", "Resend", "Docker", "CI/CD"],
        githubUrl: "https://github.com/Trimax400/lifey",
        liveUrl: "https://lifey.trimax400.com",
        image: "/projects/lifey.png",
    },
    {
        id: "jobs",
        title: "JobTracker",
        description: "JobTracker is a personal CRM designed to centralize, organize, and track the progress of your job applications within a single dashboard. It empowers users to manage their job search through real-time performance metrics and advanced filtering, ensuring no opportunity ever slips through the cracks.",
        tags: ["Ruby on Rails", "Hotwire", "Tailwind", "SQLite", "Docker"],
        githubUrl: "https://github.com/Trimax400/JobTracker",
        liveUrl: "https://jobs.trimax400.com",
        image: "/projects/jobtracker.png",
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