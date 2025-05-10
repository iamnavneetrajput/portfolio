import React, { useState } from 'react';
import { User, FileText, ChevronsDown } from 'lucide-react';

const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  
  const handleInteraction = () => {
    setInteractionCount(prev => prev + 1);
    
    if (interactionCount >= 2) {
      setShowSecret(true);
    }
  };
  
  return (
    <section 
      id="about" 
      className="py-12 border-b border-gray-300"
    >
      <div 
        className={`transition-all duration-500 ${expanded ? 'bg-gray-100' : 'bg-[#f8f8f8]'} p-6 border border-gray-300`}
        onMouseEnter={handleInteraction}
      >
        <div className="flex items-center mb-6">
          <div className={`w-10 h-10 ${expanded ? 'bg-blue-100' : 'bg-gray-200'} rounded-full flex items-center justify-center transition-colors duration-300`}>
            <User size={20} className={`${expanded ? 'text-blue-500' : 'text-gray-500'} transition-colors duration-300`} />
          </div>
          <h2 className="text-xl font-mono ml-3 uppercase tracking-wide">About Me</h2>
        </div>
        
        <div className={`${expanded ? 'leading-relaxed' : 'leading-tight'} transition-all duration-300 text-gray-600`}>
          <p className="mb-4 font-mono text-sm">
            Hello. I am a <span className={`${showSecret ? 'text-blue-500 font-bold' : ''} transition-colors duration-300`}>very boring developer</span> who creates very boring websites. This portfolio showcases my uninteresting work.
          </p>
          
          {expanded && (
            <>
              <p className="mb-4 font-mono text-sm transition-opacity duration-500 opacity-100">
                I specialize in <span className="relative group">
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                  intentionally dull design
                </span> while secretly including elements that might catch your interest if you look closely enough.
              </p>
              
              <p className="mb-4 font-mono text-sm transition-opacity duration-500 opacity-100">
                With <span className={`${showSecret ? 'text-green-500 font-bold' : ''} transition-colors duration-300`}>1+ years of experience</span> creating corporate websites, internal tools, and various digital artifacts that nobody remembers, I've mastered the art of blending in.
              </p>
              
              {showSecret && (
                <div className="my-6 p-4 bg-white border-l-4 border-blue-500 transition-all duration-500">
                  <p className="font-mono text-sm text-gray-800">
                    <span className="font-bold">SECRET:</span> There are 5 more hidden interactions on this page. Can you find them all?
                  </p>
                </div>
              )}
              
              <div className="flex items-center mt-6 space-x-4">
                <button className="px-4 py-2 border border-gray-300 font-mono text-xs uppercase tracking-wide hover:bg-gray-200 transition-colors duration-300 flex items-center">
                  <FileText size={16} className="mr-2" />
                  Download Resume
                </button>
              </div>
            </>
          )}
        </div>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-center w-full mt-4 py-2 text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300"
        >
          <ChevronsDown size={16} className={`transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          <span className="ml-1 uppercase tracking-wide font-mono">{expanded ? 'Less' : 'More'}</span>
        </button>
      </div>
    </section>
  );
};

export default About;