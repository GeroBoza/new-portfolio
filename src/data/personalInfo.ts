import { PersonalInfo } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Geronimo Boza",
    title: "Full Stack Developer",
    description:
        "Desarrollador full-stack con 3+ años de experiencia enfocado en desarrollo web. Visionario y solucionador creativo de problemas. Autodidacta que entiende rápidamente nuevos conceptos, ideas, tecnologías y metodologías.",
    location: "Argentina",
    email: "geronimoboza@gmail.com",
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/GeroBoza",
            icon: "github",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/geronimoboza/",
            icon: "linkedin",
        },
        // {
        //     name: "Facebook",
        //     url: "https://www.facebook.com/gero.boza",
        //     icon: "facebook",
        // },
        // {
        //     name: "Instagram",
        //     url: "https://www.instagram.com/geroboza/",
        //     icon: "instagram",
        // },
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
    experience: [
        {
            id: "1",
            title: "Full Stack Developer",
            company: "Freelance",
            period: "2019 - Presente",
            description:
                "Desarrollo de aplicaciones web completas utilizando tecnologías modernas como React, Node.js, Express y bases de datos MySQL. Especialización en soluciones escalables y eficientes.",
            technologies: ["React", "Node.js", "Express", "MySQL", "AWS S3", "JavaScript"],
        },
    ],
    projects: [
        {
            id: "1",
            title: "Clara Asprella - Portfolio",
            description:
                "Portfolio personal desarrollado con tecnologías modernas, incluyendo gestión de contenido dinámico y diseño responsive.",
            technologies: ["Node.js", "Express", "React", "MySQL", "AWS S3"],
            liveUrl: "https://asprella.com/",
            image: "/images/clara.png",
        },
        {
            id: "2",
            title: "Zapatería Avenida",
            description:
                "E-commerce completo para zapatería con sistema de gestión de productos, carrito de compras y procesamiento de pagos.",
            technologies: ["Node.js", "Express", "React", "MySQL", "AWS S3"],
            liveUrl: "https://www.zapateriaavenida.com/",
            image: "/images/zapateriaavenida.png",
        },
        {
            id: "3",
            title: "Facultad de Informática UNLP",
            description:
                "Sitio web institucional desarrollado con WordPress, incluyendo gestión de contenido y diseño responsive.",
            technologies: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript"],
            liveUrl: "https://www.info.unlp.edu.ar/",
            image: "/images/infounlp.png",
        },
        {
            id: "4",
            title: "Star Wars App Challenge",
            description:
                "Aplicación web interactiva basada en la API de Star Wars, con funcionalidades de búsqueda y filtrado avanzado.",
            technologies: ["Node.js", "Express", "React", "MySQL", "AWS S3"],
            liveUrl: "https://sw-app-challenge.netlify.app/",
            image: "/images/starwars.png",
        },
        {
            id: "5",
            title: "Estudio Pereyra",
            description:
                "Sitio web corporativo para estudio jurídico con diseño profesional y funcionalidades de contacto.",
            technologies: ["HTML", "CSS", "JavaScript"],
            liveUrl: "http://estudiopereyra.com.ar/",
            image: "/images/estudiopereyra.png",
        },
        {
            id: "6",
            title: "Alianza Francesa",
            description:
                "Portal web para institución educativa con sistema de gestión de cursos y eventos.",
            technologies: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://www.alianzafrancesalp.org.ar/",
            image: "/images/alianzafrancesa.png",
        },
    ],
};
