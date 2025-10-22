"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface LanguageSelectorProps {
    scrolled?: boolean;
}

const LanguageSelector = ({ scrolled = false }: LanguageSelectorProps) => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const languages = [
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "es", name: "Español", flag: "🇦🇷" },
    ] as const;

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 150); // 150ms delay
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && !(event.target as Element).closest(".language-selector")) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div
            className="relative language-selector"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                    scrolled
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                        : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                }`}
            >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                    {languages.find((lang) => lang.code === language)?.flag}
                </span>
            </motion.button>

            {/* Dropdown */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : -10,
                }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 z-[9999] ${
                    isOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
            >
                {languages.map((lang) => (
                    <motion.button
                        key={lang.code}
                        onClick={() => {
                            setLanguage(lang.code as "en" | "es");
                            setIsOpen(false);
                        }}
                        whileHover={{ x: 5 }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg cursor-pointer ${
                            language === lang.code
                                ? "bg-purple-100 text-purple-700"
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                        {language === lang.code && (
                            <motion.div
                                layoutId="activeLanguage"
                                className="ml-auto w-2 h-2 bg-purple-500 rounded-full"
                            />
                        )}
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
};

export default LanguageSelector;
