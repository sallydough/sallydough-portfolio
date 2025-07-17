import React from 'react';
import Header from '../components/Header';
import { Github, Linkedin, Instagram, Facebook, Smile } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pb-16 sm:pb-20 lg:pb-24">
      <Header />
      
      <div className="px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-black flex items-center gap-3 sm:gap-4 xl-custom:justify-center">
            let's get jamming
           
            <Smile className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Email and GitHub */}
          <div className="flex items-start space-x-4 sm:space-x-6">
            <div className="w-3 sm:w-4 h-32 sm:h-40 bg-[#735656] flex-shrink-0"></div>
            <div className="flex-1 space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-black mb-2">email:</h3>
                <p className="text-sm sm:text-base text-gray-700">sallydoh@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-black mb-2">github:</h3>
                <p className="text-sm sm:text-base text-gray-700">github.com/sallydough</p>
              </div>
            </div>
          </div>
          
          {/* Socials */}
          <div className="flex items-start space-x-4 sm:space-x-6">
            <div className="w-3 sm:w-4 h-32 sm:h-40 bg-[#735656] flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-medium text-black mb-4 sm:mb-6">socials:</h3>
              <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-4 max-w-[200px] sm:max-w-none">
                <a 
                  href="https://linkedin.com/in/sallydo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 sm:p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://instagram.com/sallydo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 sm:p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://github.com/sallydo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 sm:p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://facebook.com/sallydo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 sm:p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;