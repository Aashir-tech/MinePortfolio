// Navigation Links Component
import {Home , User , Briefcase , Code , Star , Phone} from 'lucide-react'


export const NavLinks = ({ activeSection, setActiveSection }) => {
    const links = [
      { icon: <Home className="w-6 h-6" />, label: 'Home', id: 'home' },
      { icon: <User className="w-6 h-6" />, label: 'About', id: 'about' },
      { icon: <Briefcase className="w-6 h-6" />, label: 'Experience', id: 'experience' },
      { icon: <Code className="w-6 h-6" />, label: 'Tech Stack', id: 'techStack' },
      { icon: <Star className="w-6 h-6" />, label: 'Testimonials', id: 'testimonials' },
      { icon: <Phone className="w-6 h-6" />, label: 'Contact', id: 'contact' },
    ];
  
    return links.map((link) => (
      <button
        key={link.id}
        onClick={() => setActiveSection(link.id)}
        className={`flex flex-col items-center p-2 transition-colors hover:text-blue-500
          ${activeSection === link.id ? 'text-blue-500' : ''}`}
      >
        {link.icon}
        <span className="text-xs mt-1">{link.label}</span>
      </button>
    ));
  };