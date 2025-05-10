import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';
import { CursorContext } from './context/CursorContext';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [easterEggVisible, setEasterEggVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const handleGlobalClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 7) {
        setEasterEggVisible(true);
      }
      return newCount;
    });
  };
  
  return (
    <CursorContext.Provider value={{ position: cursorPosition }}>
      <div 
        className="min-h-screen bg-[#f5f5f5] font-mono text-gray-700"
        onClick={handleGlobalClick}
      >
        <Header />
        <main className="container mx-auto px-4 py-8">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        {easterEggVisible && <EasterEgg onClose={() => setEasterEggVisible(false)} />}
      </div>
    </CursorContext.Provider>
  );
}

export default App;