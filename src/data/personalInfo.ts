import { PersonalInfo } from "@/types";

// Base data that doesn't need translation
export const basePersonalInfo = {
    name: "Gerónimo Boza",
    title: "Full Stack Developer",
    location: "Argentina",
    email: "geronimoboza@gmail.com",
    socialLinks: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/geronimoboza/",
            icon: "linkedin",
        },
        {
            name: "GitHub",
            url: "https://github.com/GeroBoza",
            icon: "github",
        },
    ],
    skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "MongoDB",
        "AWS S3",
        "HTML",
        "CSS",
        "Material-UI",
        "Bootstrap",
        "Git",
        "GitHub",
        "Nginx",
    ],
};

// Function to get translated personal info
export const getPersonalInfo = (t: (key: string) => string): PersonalInfo => {
    return {
        ...basePersonalInfo,
        description: t("personalInfo.description"),
        experience: [
            {
                id: "1",
                title: t("personalInfo.experience.freelance.title"),
                company: t("personalInfo.experience.freelance.company"),
                period: t("personalInfo.experience.freelance.period"),
                description: t("personalInfo.experience.freelance.description"),
                technologies: ["React", "Node.js", "Express", "MySQL", "AWS S3", "JavaScript"],
            },
        ],
        projects: [
            {
                id: "1",
                title: t("personalInfo.projects.clara.title"),
                description: t("personalInfo.projects.clara.description"),
                technologies: ["Node.js", "Express", "React", "MySQL", "AWS S3"],
                liveUrl: "https://asprella.com/",
                image: "/images/clara.png",
            },
            {
                id: "2",
                title: t("personalInfo.projects.zapateria.title"),
                description: t("personalInfo.projects.zapateria.description"),
                technologies: ["Node.js", "Express", "React", "MySQL", "AWS S3"],
                liveUrl: "https://www.zapateriaavenida.com/",
                image: "/images/zapateriaavenida.png",
            },
            {
                id: "3",
                title: t("personalInfo.projects.infounlp.title"),
                description: t("personalInfo.projects.infounlp.description"),
                technologies: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript"],
                liveUrl: "https://www.info.unlp.edu.ar/",
                image: "/images/infounlp.png",
            },
            {
                id: "4",
                title: t("personalInfo.projects.starwars.title"),
                description: t("personalInfo.projects.starwars.description"),
                technologies: ["Node.js", "Express", "React", "MySQL", "AWS S3"],
                liveUrl: "https://sw-app-challenge.netlify.app/",
                image: "/images/starwars.png",
            },
            {
                id: "5",
                title: t("personalInfo.projects.estudiopereyra.title"),
                description: t("personalInfo.projects.estudiopereyra.description"),
                technologies: ["HTML", "CSS", "JavaScript"],
                liveUrl: "http://estudiopereyra.com.ar/",
                image: "/images/estudiopereyra.png",
            },
            {
                id: "6",
                title: t("personalInfo.projects.alianzafrancesa.title"),
                description: t("personalInfo.projects.alianzafrancesa.description"),
                technologies: ["HTML", "CSS", "JavaScript"],
                liveUrl: "https://www.alianzafrancesalp.org.ar/",
                image: "/images/alianzafrancesa.png",
            },
        ],
    };
};
