import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gerónimo Boza - Full Stack Developer",
    description:
        "Desarrollador full-stack con 5+ años de experiencia enfocado en desarrollo web. Especializado en React, Node.js, Express y MySQL.",
    keywords:
        "Gerónimo Boza, Desarrollador Full Stack, React, Node.js, JavaScript, Desarrollo Web, Argentina",
    authors: [{ name: "Gerónimo Boza" }],
    openGraph: {
        title: "Gerónimo Boza - Full Stack Developer",
        description:
            "Desarrollador full-stack con 5+ años de experiencia enfocado en desarrollo web.",
        type: "website",
        locale: "es_ES",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gerónimo Boza - Full Stack Developer",
        description:
            "Desarrollador full-stack con 5+ años de experiencia enfocado en desarrollo web.",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
