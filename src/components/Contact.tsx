"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getPersonalInfo } from "@/data/personalInfo";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Contact = () => {
    const { t } = useLanguage();
    const personalInfo = getPersonalInfo(t);

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t("contact.title")}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        {t("contact.subtitle")}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">
                            {t("contact.contactInfo")}
                        </h3>

                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                            >
                                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm">{t("contact.email")}</p>
                                    <p className="text-white font-semibold">{personalInfo.email}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                            >
                                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm">{t("about.location")}</p>
                                    <p className="text-white font-semibold">
                                        {personalInfo.location}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-xl font-semibold text-white mb-4 text-center">
                                {t("contact.socialNetworks")}
                            </h4>
                            <div className="flex justify-center">
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
