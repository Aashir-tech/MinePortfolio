// Main Portfolio Component
import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Github, Linkedin, Mail } from "lucide-react";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testinomial";
import { Contact } from "./components/Contact";
import { BottomNav } from "./components/BottomNav";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import MyProfileImage from "./assets/MyProfileImage.jpg";
import TypingEffect from './components/TypingEffect'
import LocomotiveScroll from "locomotive-scroll";
import Timeline from "./components/Timeline";
import TechStack from "./components/TechStack";


const App = () => {
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  

  useEffect(() => {
    
    setIsVisible(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show nav when scrolling up or after scrolling down 100px
      if (currentScrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`font-[poppins] min-h-screen transition-colors duration-300 scroll-smooth snap-y snap-mandatory overflow-y-auto ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="w-full">
        <Section id="home" setActiveSection={setActiveSection}>
          <div className="flex flex-col items-center space-y-8">
            <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:scale-110 transition-transform duration-300">
              <img
                src={MyProfileImage} // Replace with your image path
                alt="Aashir Haris"
                className="w-full h-full object-cover"
                image-rendering: crisp-edges
              />
            </div>
            <h1 className="text-5xl font-bold">Aashir Haris</h1>
            <TypingEffect />
            <div className="flex space-x-6">
              <a href="https://github.com/Aashir-tech"><Github className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors" /></a>
              <a href="https://www.linkedin.com/in/aashir-haris">
              <Linkedin className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors" /></a>
              <a href="mailto:aashirharis6@gmail.com">
              <Mail className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
        </Section>

        <Section id="about" setActiveSection={setActiveSection}>
          <About />
        </Section>
{/* 
        <Section id="experience" setActiveSection={setActiveSection}>
          <Experience />
        </Section> */}
        <Section id='timeline' setActiveSection={setActiveSection} >
          <Timeline />
        </Section>

        <Section id='techStack' setActiveSection={setActiveSection}>
          <TechStack />
        </Section>

{/* 

        <Section id="services" setActiveSection={setActiveSection}>
          <Services />
        </Section> */}

        <Section id="testimonials" setActiveSection={setActiveSection}>
          <Testimonials />
        </Section>
        
          <Contact />
          <Footer />
      </div>

      <BottomNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        isVisible={showNav}
      />
    </div>
  );
};

export default App;
