"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "es";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>("en");
    const [translations, setTranslations] = useState<Record<string, any>>({});

    // Load translations when language changes
    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const translation = await import(`../locales/${language}.json`);
                setTranslations(translation.default);
            } catch (error) {
                console.error("Error loading translations:", error);
                // Fallback to English if translation fails
                const fallback = await import("../locales/en.json");
                setTranslations(fallback.default);
            }
        };

        loadTranslations();
    }, [language]);

    // Load saved language from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem("portfolio-language") as Language;
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("portfolio-language", lang);
    };

    const t = (key: string): string => {
        const keys = key.split(".");
        let value: any = translations;

        for (const k of keys) {
            if (value && typeof value === "object" && k in value) {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return typeof value === "string" ? value : key;
    };

    const value: LanguageContextType = {
        language,
        setLanguage,
        t,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
