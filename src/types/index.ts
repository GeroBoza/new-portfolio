export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    githubUrl?: string;
    image: string;
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    description: string;
    location: string;
    email: string;
    socialLinks: SocialLink[];
    skills: string[];
    experience: Experience[];
    projects: Project[];
}
