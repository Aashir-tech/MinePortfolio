// Bottom Navigation Bar Component
import { Briefcase, Code, Home, Phone, Star, User } from "lucide-react";
import { NavLinks } from "./NavLink";

export const BottomNav = ({ activeSection, setActiveSection, theme, isVisible }) => {
    const scrollToSection = (sectionId) => {
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <nav  className={` bottom-nav
        fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50
        px-6 py-2 rounded-full backdrop-blur-md
        ${theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'}
        border border-gray-200 dark:border-gray-700
        flex space-x-8
        transition-all duration-300
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}>
        {[
          { icon: <Home className="w-6 h-6" />, label: 'Home', id: 'home' },
          { icon: <User className="w-6 h-6" />, label: 'About', id: 'about' },
          { icon: <Briefcase className="w-6 h-6" />, label: 'My Journey', id: 'timeline' },
          { icon: <Code className="w-6 h-6" />, label: 'Tech Stack', id: 'techStack' },
          { icon: <Star className="w-6 h-6" />, label: 'Testimonials', id: 'testimonials' },
          { icon: <Phone className="w-6 h-6" />, label: 'Contact', id: 'contact' },
        ].map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`flex flex-col items-center p-2 transition-colors hover:text-blue-500
              ${activeSection === link.id ? 'text-blue-500' : ''}`}
          >
            {link.icon}
            <span className="text-xs mt-1">{link.label}</span>
          </button>
        ))}
      </nav>
    );
  };