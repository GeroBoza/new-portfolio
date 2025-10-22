"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: t("nav.home"), href: "#home" },
        { name: t("nav.about"), href: "#about" },
        { name: t("nav.projects"), href: "#projects" },
        { name: t("nav.experience"), href: "#experience" },
        { name: t("nav.contact"), href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
                        {/* <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("#home");
                            }}
                            className={`transition-colors duration-300 ${
                                scrolled ? "text-gray-900" : "text-white"
                            }`}
                        >
                            GB
                        </a> */}
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                                className={`font-medium transition-colors duration-300 ${
                                    scrolled
                                        ? "text-gray-700 hover:text-purple-600"
                                        : "text-white hover:text-purple-300"
                                }`}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <LanguageSelector scrolled={scrolled} />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                            scrolled
                                ? "text-gray-700 hover:bg-gray-100"
                                : "text-white hover:bg-white/10"
                        }`}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="py-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                                    scrolled
                                        ? "text-gray-700 hover:bg-gray-100"
                                        : "text-white hover:bg-white/10"
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
