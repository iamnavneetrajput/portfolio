import React, { useState } from 'react';
import { FolderClosed, FolderOpen, ExternalLink, Code } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';

const projects = [
  {
    id: 1,
    title: "Screenui",
    description: "A component library for React, Next, Core. Nothing special.",
    boringTags: ["HTML", "CSS", "JavaScript"],
    actualTags: ["Next.js", "Typescript", "Tailwind", "Vercel"],
    boringImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    actualImage: "/screenui.png",
    demoLink: "https://www.screenui.com/",
    codeLink: "https://github.com/iamnavneetrajput/screenui"
  },
  {
    id: 2,
    title: "create-screenui",
    description: "A CLI tool to create a new screenui project. Nothing fancy.",
    boringTags: ["WordPress", "WooCommerce", "PHP"],
    actualTags: ["Next.js", "Ts", "Tailwind CSS", "Vercel"],
    boringImage: "https://images.pexels.com/photos/6214571/pexels-photo-6214571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    actualImage: "/cli.png",
    demoLink: "https://www.npmjs.com/package/create-screenui",
    codeLink: "https://github.com/iamnavneetrajput/create-screenui"
  },
  {
    id: 3,
    title: "Chrono a Clock App",
    description: "A simple clock app. Nothing to see here.",
    boringTags: ["HTML", "CSS", "JavaScript"],
    actualTags: ["Next", "TypeScript", "Tailwind CSS", "Vercel"],
    boringImage: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    actualImage: "/watch.png",
    demoLink: "https://chrono.screenui.com/",
    codeLink: "https://github.com/iamnavneetrajput/create-screenui/tree/main/templates/nextjs/layout"
  }
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [clickedProject, setClickedProject] = useState<number | null>(null);
  const mousePosition = useMousePosition();
  
  return (
    <section id="projects" className="py-12 border-b border-gray-300">
      <div className="mb-8 flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <FolderClosed size={20} className="text-gray-500" />
        </div>
        <h2 className="text-xl font-mono ml-3 uppercase tracking-wide">Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => {
          const isHovered = hoveredProject === project.id;
          const isClicked = clickedProject === project.id;
          
          return (
            <div
              key={project.id}
              className={`
                border border-gray-300 overflow-hidden transition-all duration-500
                ${isHovered || isClicked ? 'shadow-md transform translate-y-[-4px]' : 'shadow-sm'}
              `}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setClickedProject(isClicked ? null : project.id)}
            >
              <div className="relative overflow-hidden" style={{ height: '180px' }}>
                <img 
                  src={isHovered || isClicked ? project.actualImage : project.boringImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                
                <div 
                  className={`
                    absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center
                    transition-all duration-300
                    ${isHovered || isClicked ? 'bg-opacity-40' : ''}
                  `}
                >
                  {(isHovered || isClicked) && (
                    <div className="flex space-x-3 opacity-0 animate-fadeIn">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-blue-100 transition-colors"
                      >
                        <ExternalLink size={16} className="text-gray-800" />
                      </a>
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-blue-100 transition-colors"
                      >
                        <Code size={16} className="text-gray-800" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-4 bg-white">
                <div className="flex items-center mb-2">
                  {isClicked ? 
                    <FolderOpen size={16} className="text-blue-500 mr-2" /> : 
                    <FolderClosed size={16} className="text-gray-500 mr-2" />
                  }
                  <h3 className="font-mono text-sm font-medium">{project.title}</h3>
                </div>
                
                <p className="text-xs text-gray-600 mb-4 font-mono">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {(isHovered || isClicked ? project.actualTags : project.boringTags).map((tag, index) => (
                    <span 
                      key={index}
                      className={`
                        px-2 py-1 text-xs font-mono rounded
                        ${isHovered || isClicked ? 
                          'bg-blue-100 text-blue-800' : 
                          'bg-gray-100 text-gray-600'}
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;