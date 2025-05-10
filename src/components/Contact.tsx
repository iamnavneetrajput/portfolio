import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formState.name && formState.email && formState.message) {
      // In a real application, you would send the form data to a server
      setTimeout(() => {
        setSubmitted(true);
      }, 1000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };
  
  const handleButtonHover = () => {
    setHoverCount(prev => prev + 1);
  };
  
  return (
    <section id="contact" className="py-12">
      <div className="mb-8 flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <Mail size={20} className="text-gray-500" />
        </div>
        <h2 className="text-xl font-mono ml-3 uppercase tracking-wide">Contact</h2>
      </div>
      
      <div className={`p-6 border border-gray-300 bg-[#f8f8f8] transition-all duration-300`}>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-xs font-mono uppercase mb-2 text-gray-600">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-xs font-mono uppercase mb-2 text-gray-600">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={16} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-mono uppercase mb-2 text-gray-600">
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare size={16} className="text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your Message Here..."
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                onMouseEnter={handleButtonHover}
                className={`
                  relative px-6 py-3 font-mono text-xs uppercase tracking-wide 
                  ${hoverCount >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
                  ${error ? 'animate-shake' : ''}
                  hover:bg-gray-300 transition-all duration-300
                `}
              >
                <span className="flex items-center">
                  <Send size={16} className={`mr-2 ${hoverCount >= 3 ? 'text-white' : 'text-gray-600'}`} />
                  Send Message
                </span>
                
                {hoverCount >= 3 && (
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[10px] text-blue-600 whitespace-nowrap animate-fadeIn">
                    Now we're talking!
                  </span>
                )}
              </button>
            </div>
            
            {error && (
              <p className="text-red-500 text-xs font-mono text-center mt-4 animate-fadeIn">
                Please fill in all fields before submitting.
              </p>
            )}
          </form>
        ) : (
          <div className="text-center py-8 animate-fadeIn">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={24} className="text-green-500" />
            </div>
            <h3 className="text-lg font-mono mb-2">Message Sent!</h3>
            <p className="text-sm text-gray-600 font-mono mb-6">
              Thanks for reaching out. I'll get back to you soon.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormState({ name: '', email: '', message: '' });
              }}
              className="px-4 py-2 bg-gray-200 text-gray-700 font-mono text-xs uppercase tracking-wide hover:bg-gray-300 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;