// src/components/Footer.tsx

import { Mail } from 'lucide-react'; 
// ✅ Import the Simple Icons version of the LinkedIn icon
import { SiLinkedin } from 'react-icons/si'; 
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const userEmail = "spencerhdwyer@gmail.com"; 
  const linkedInUrl = "https://www.linkedin.com/in/spencer-dwyer-a73b04294";
  const githubUrl = "https://github.com/spencerd42";

  return (
    <footer className="border-t border-neutral-800 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        
        <div className="text-center sm:text-left">
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} Spencer Dwyer. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="text-neutral-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={24} /> 
          </a>
          <a 
            href={linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="text-neutral-400 hover:text-white transition-colors duration-300"
          >
            <SiLinkedin size={24} /> 
          </a>
          <a 
            href={`mailto:${userEmail}`} 
            aria-label="Email"
            className="text-neutral-400 hover:text-white transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;