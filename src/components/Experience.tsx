"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getPersonalInfo } from "@/data/personalInfo";
import { motion } from "framer-motion";
import { Calendar, Laptop, MapPin } from "lucide-react";
import Image from "next/image";

const Experience = () => {
    const { t } = useLanguage();
    const personalInfo = getPersonalInfo(t);

    // Function to render the appropriate icon or image
    const renderIconOrImage = (iconName?: string, imagePath?: string) => {
        // Priority: image over icon
        if (imagePath) {
            return (
                <Image
                    src={imagePath}
                    alt="Company logo"
                    width={48}
                    height={48}
                    className="object-contain rounded-lg"
                />
            );
        }

        return (
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg flex items-center justify-center">
                <Laptop className="w-6 h-6 text-white" />
            </div>
        );
        // if i want to switch on different icons, i can do it like this:
        // switch (iconName) {
        //     case "Code":
        //         return <Code className="w-6 h-6 text-white" />;
        //     case "Laptop":
        //         return <Laptop className="w-6 h-6 text-white" />;
        //     case "Briefcase":
        //     default:
        //         return <Briefcase className="w-6 h-6 text-white" />;
        // }
    };

    return (
        <section id="experience" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {t("experience.title")}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t("experience.subtitle")}
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {personalInfo.experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                                        <div>{renderIconOrImage(exp.icon, exp.image)}</div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {exp.title}
                                            </h3>
                                            <p className="text-lg text-blue-600 font-semibold">
                                                <a
                                                    href={exp.companyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 font-semibold hover:text-blue-800"
                                                >
                                                    {exp.company}
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:items-end gap-2">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            <span className="font-medium">{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <MapPin className="w-4 h-4" />
                                            <span>Argentina</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                                    {exp.description}
                                </p>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                        {t("experience.technologiesUsed")}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
