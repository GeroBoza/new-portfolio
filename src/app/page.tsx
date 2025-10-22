import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <div id="home">
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}
