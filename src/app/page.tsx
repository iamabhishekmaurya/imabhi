import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechOrbitSection from "../components/TechOrbitSection";
import About from "../components/About";
import TechnicalSkills from "../components/TechnicalSkills";
import HowIWork from "../components/HowIWork";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "@/components/Footer";
import { TabProvider } from "@/contexts/TabContext";

export default function Home() {
  return (
    <TabProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-10">
          <Hero />
          <About />
          <TechnicalSkills />
          <TechOrbitSection />
          <Experience />
          <Projects />
          <HowIWork />
          <Contact />
        </main>
        <Footer />
      </div>
    </TabProvider>
  );
}
