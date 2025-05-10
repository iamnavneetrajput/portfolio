import React, { useState } from 'react';
import { Layers, Check, X } from 'lucide-react';

const boringSkills = [
  { name: "HTML", level: 70 },
  { name: "CSS", level: 65 },
  { name: "JavaScript", level: 60 },
  { name: "WordPress", level: 80 },
  { name: "Photoshop", level: 55 },
  { name: "Microsoft Office", level: 90 },
];

const actualSkills = [
  { name: "React/Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Mongodb", level: 75 },
  { name: "Vercel", level: 70 },
  { name: "Github", level: 85 },
];

const Skills: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const [levelOfDetail, setLevelOfDetail] = useState(0);
  
  const handleMoreDetail = () => {
    setLevelOfDetail(prev => Math.min(prev + 1, 2));
  };
  
  const handleResetDetail = () => {
    setLevelOfDetail(0);
    setRevealed(false);
  };
  
  return (
    <section id="skills" className="py-12 border-b border-gray-300">
      <div className="mb-8 flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <Layers size={20} className="text-gray-500" />
        </div>
        <h2 className="text-xl font-mono ml-3 uppercase tracking-wide">Skills</h2>
      </div>
      
      <div 
        className={`
          relative p-6 border border-gray-300 transition-all duration-500
          ${revealed ? 'bg-gradient-to-r from-gray-100 to-white' : 'bg-[#f5f5f5]'}
        `}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={`
              font-mono text-sm uppercase mb-4 tracking-wide
              ${revealed ? 'text-red-500 line-through' : 'text-gray-700'}
            `}>
              {revealed ? "Fake Skills" : "My Skills"}
            </h3>
            
            <div className="space-y-4">
              {boringSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-mono text-gray-600">{skill.name}</span>
                    {levelOfDetail > 0 && (
                      <span className="text-xs font-mono text-gray-600">{skill.level}%</span>
                    )}
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${revealed ? 'bg-red-300' : 'bg-gray-400'} transition-all duration-1000 ease-out`}
                      style={{ width: `${revealed ? skill.level / 2 : skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {revealed && (
            <div className="animate-fadeIn">
              <h3 className="font-mono text-sm uppercase mb-4 tracking-wide text-green-600">
                Actual Skills
              </h3>
              
              <div className="space-y-4">
                {actualSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-mono text-gray-600">{skill.name}</span>
                      {levelOfDetail > 0 && (
                        <span className="text-xs font-mono text-gray-600">{skill.level}%</span>
                      )}
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-center mt-8 space-x-4">
          {!revealed && levelOfDetail < 2 && (
            <button 
              onClick={handleMoreDetail}
              className="px-4 py-2 bg-gray-200 text-gray-700 font-mono text-xs uppercase tracking-wide hover:bg-gray-300 transition-colors"
            >
              {levelOfDetail === 0 ? "Analyze Skills" : "Analyze Deeper"}
            </button>
          )}
          
          {levelOfDetail >= 2 && !revealed && (
            <button 
              onClick={() => setRevealed(true)}
              className="px-4 py-2 bg-blue-500 text-white font-mono text-xs uppercase tracking-wide hover:bg-blue-600 transition-colors"
            >
              Reveal Truth
            </button>
          )}
          
          {revealed && (
            <button 
              onClick={handleResetDetail}
              className="px-4 py-2 bg-gray-200 text-gray-700 font-mono text-xs uppercase tracking-wide hover:bg-gray-300 transition-colors flex items-center"
            >
              <X size={16} className="mr-1" />
              Reset
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;