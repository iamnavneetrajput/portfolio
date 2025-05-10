import React, { useEffect, useState } from 'react';
import { X, Heart } from 'lucide-react';

type EasterEggProps = {
  onClose: () => void;
};

const EasterEgg: React.FC<EasterEggProps> = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);
  
  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };
  
  return (
    <div 
      className={`
        fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50
        transition-opacity duration-500
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
      onClick={handleClose}
    >
      <div 
        className={`
          bg-white p-6 rounded-lg max-w-md w-full m-4 transform transition-all duration-500
          ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-mono font-bold">You Found It!</h3>
          <button 
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="text-center my-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Heart size={24} className="text-red-500" />
          </div>
          <p className="text-sm mb-4 font-mono">
            Congratulations! You've discovered the main easter egg by clicking 7 times on the page.
          </p>
          <p className="text-sm text-gray-600 font-mono">
            This boring portfolio is actually filled with hidden interactions and surprises. Keep exploring to find them all!
          </p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 font-mono">
            Hidden Features: 10/10 discovered
          </p>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div className="bg-green-500 h-full rounded-full" style={{ width: '30%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;