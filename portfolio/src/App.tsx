import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSpotlight from "./components/ProjectsSpotlight";
import TechMarquee from "./components/TechMarquee";
import ExperienceHighlights from "./components/ExperienceHighlights";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";


export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <TechMarquee />
            <ProjectsSpotlight />
            <ExperienceHighlights />
            <ContactCTA />
            <Footer />
        </>
    );
}
