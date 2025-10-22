"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getPersonalInfo } from "@/data/personalInfo";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
    const { t } = useLanguage();
    const personalInfo = getPersonalInfo(t);
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "github":
                return <Github className="w-6 h-6" />;
            case "linkedin":
                return <Linkedin className="w-6 h-6" />;
            // case "facebook":
            //     return <Facebook className="w-6 h-6" />;
            // case "instagram":
            //     return <Instagram className="w-6 h-6" />;
            default:
                return <Mail className="w-6 h-6" />;
        }
    };

    return (
        <div className="flex flex-wrap gap-4">
            {personalInfo.socialLinks.map((social, index) => (
                <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-white/10"
                >
                    {getIcon(social.icon)}
                    <span className="hidden sm:inline">{social.name}</span>
                </motion.a>
            ))}
            <motion.a
                href={`mailto:${personalInfo.email}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: personalInfo.socialLinks.length * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-white/10"
            >
                <Mail className="w-6 h-6" />
                <span className="hidden sm:inline">Email</span>
            </motion.a>
        </div>
    );
};

export default SocialLinks;
