import React, { useState } from 'react';
import { Github, Linkedin, Twitter, ChevronsUp, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const handleLogoClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setShowEasterEgg(true);
      }
      return newCount;
    });
  };
  
  return (
    <footer className="bg-[#eaeaea] py-8 px-6 border-t border-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div 
              onClick={handleLogoClick}
              className="font-mono text-sm text-gray-600 cursor-pointer"
            >
              © 2025 NAVNEET
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/iamnavneetrajput" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <Github size={16} className="text-gray-600" />
            </a>
            <a href="https://www.linkedin.com/in/navneet-singh-rajput-642b5322a/" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <Linkedin size={16} className="text-gray-600" />
            </a>
            <a href="https://x.com/iNAVNEETRAJPUT" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <Twitter size={16} className="text-gray-600" />
            </a>
          </div>
        </div>
        
        {showEasterEgg && (
          <div className="mt-6 p-4 border-t border-gray-300 animate-fadeIn">
            <div className="flex items-start">
              <MessageSquare size={16} className="text-blue-500 mt-1 mr-2" />
              <div>
                <p className="text-xs text-gray-700 font-mono mb-2">
                  <span className="font-bold">Secret Message:</span> Congratulations! You've found one of the hidden easter eggs. Keep exploring to find more!
                </p>
                <p className="text-xs text-gray-500 font-mono">
                  What appears boring on the surface often hides complexity and beauty underneath.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-center mt-8">
          <a 
            href="#" 
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          >
            <ChevronsUp size={16} className="text-gray-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;