"use client";

import { personalInfo } from "@/data/personalInfo";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Contacto</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Estoy
                        disponible para nuevas oportunidades y colaboraciones.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Información de contacto
                            </h3>

                            <div className="space-y-6">
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                                >
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Email</p>
                                        <p className="text-white font-semibold">
                                            {personalInfo.email}
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                                >
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Ubicación</p>
                                        <p className="text-white font-semibold">
                                            {personalInfo.location}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-white mb-4">
                                Redes sociales
                            </h4>
                            <SocialLinks />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>

                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-300 text-sm font-medium mb-2"
                                >
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-300 text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-gray-300 text-sm font-medium mb-2"
                                >
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="Asunto del mensaje"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-300 text-sm font-medium mb-2"
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                            >
                                Enviar Mensaje
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
