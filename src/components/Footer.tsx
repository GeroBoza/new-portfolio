"use client";

import { personalInfo } from "@/data/personalInfo";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-4">Geronimo Boza</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Desarrollador full-stack apasionado por crear soluciones web innovadoras
                            y eficientes. Siempre aprendiendo y creciendo en el mundo de la
                            tecnología.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-4">Enlaces</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Sobre mí
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#experience"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Experiencia
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <div className="space-y-2 text-gray-400">
                            <p>{personalInfo.email}</p>
                            <p>{personalInfo.location}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
                >
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {currentYear} Geronimo Boza. Todos los derechos reservados.
                    </p>

                    <motion.p
                        className="text-gray-400 text-sm flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                    >
                        Hecho con <Heart className="w-4 h-4 text-red-500" /> en Argentina
                    </motion.p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
