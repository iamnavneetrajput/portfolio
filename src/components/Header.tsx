import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  useEffect(() => {
    if (isMenuOpen) {
      setHasInteracted(true);
    }
  }, [isMenuOpen]);
  
  return (
    <header className="sticky top-0 z-10 bg-[#eaeaea] py-4 px-6 border-b border-gray-300 transition-all duration-500">
      <div className="container mx-auto flex justify-between items-center">
        <div className={`font-mono text-lg ${hasInteracted ? 'text-gray-900 font-bold' : 'text-gray-600'} transition-all duration-300`}>
          <span className="relative">
            {hasInteracted ? "NOT SO BORING" : "BORING"} NAVNEET
            {hasInteracted && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-500"></span>
            )}
          </span>
        </div>

        <div className="md:hidden">
          <button 
            className="p-2 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={20} />
          </button>
        </div>

        <nav className={`hidden md:flex space-x-8 font-mono text-sm ${hasInteracted ? 'text-gray-900' : 'text-gray-500'}`}>
          <a href="#about" className="boring-link relative py-1 px-2 hover:bg-gray-200 transition-all duration-300">ABOUT</a>
          <a href="#projects" className="boring-link relative py-1 px-2 hover:bg-gray-200 transition-all duration-300">PROJECTS</a>
          <a href="#skills" className="boring-link relative py-1 px-2 hover:bg-gray-200 transition-all duration-300">SKILLS</a>
          <a href="#contact" className="boring-link relative py-1 px-2 hover:bg-gray-200 transition-all duration-300">CONTACT</a>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
        <nav className="flex flex-col space-y-4 pt-4 pb-2 px-4 font-mono">
          <a href="#about" className="py-2 px-3 border border-gray-300 hover:bg-gray-200 transition-colors" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
          <a href="#projects" className="py-2 px-3 border border-gray-300 hover:bg-gray-200 transition-colors" onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
          <a href="#skills" className="py-2 px-3 border border-gray-300 hover:bg-gray-200 transition-colors" onClick={() => setIsMenuOpen(false)}>SKILLS</a>
          <a href="#contact" className="py-2 px-3 border border-gray-300 hover:bg-gray-200 transition-colors" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;