"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getPersonalInfo } from "@/data/personalInfo";
import { motion } from "framer-motion";
import { Cloud, Code, Database, Globe } from "lucide-react";

const About = () => {
    const { t } = useLanguage();
    const personalInfo = getPersonalInfo(t);

    const skillCategories = [
        {
            title: "Frontend",
            icon: <Code className="w-6 h-6" />,
            skills: [
                "React",
                "Next.js",
                "JavaScript",
                "HTML",
                "CSS",
                "Material-UI",
                "Tailwind CSS",
            ],
        },
        {
            title: "Backend",
            icon: <Database className="w-6 h-6" />,
            skills: ["Node.js", "Express", "Nest.js", "MySQL", "MongoDB", "PostgreSQL"],
        },
        {
            title: "DevOps",
            icon: <Cloud className="w-6 h-6" />,
            skills: ["AWS S3", "Nginx", "Git", "GitHub", "GitLab"],
        },
        // {
        //     title: "Web",
        //     icon: <Globe className="w-6 h-6" />,
        //     skills: ["Responsive Design", "SEO", "Performance"],
        // },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {t("about.title")}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {t("hero.description")}
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            {t("about.description")}
                        </p>

                        <div className="flex items-center gap-4 text-gray-600">
                            <span className="flex items-center gap-2">
                                <Globe className="w-5 h-5" />
                                {t("about.location")} {personalInfo.location}
                            </span>
                            <span className="flex items-center gap-2">
                                <Code className="w-5 h-5" />
                                {t("about.experience")}
                            </span>
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            {t("about.skills")}
                        </h3>

                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-6 rounded-lg"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-purple-600">{category.icon}</div>
                                    <h4 className="text-lg font-semibold text-gray-900">
                                        {category.title}
                                    </h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
