import {Moon , Sun} from 'lucide-react'
import { NavLinks } from './NavLink';

// Header Component
export const Header = ({ theme, toggleTheme, activeSection, setActiveSection }) => {
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'
    } backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
          Aashir Tech
        </h1>
        <nav className="hidden md:flex space-x-6">
          {[
            { label: 'Home', id: 'home' },
            { label: 'About', id: 'about' },
            { label: 'My Journey', id: 'timeline' },
            { label: 'Tech Stack', id: 'techStack' },
            { label: 'Testimonials', id: 'testimonials' },
            { label: 'Contact', id: 'contact' }
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`transition-colors hover:text-blue-500 ${
                activeSection === link.id ? 'text-blue-500 font-medium' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
};