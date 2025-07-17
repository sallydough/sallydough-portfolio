import React from 'react';
import Header from '../components/Header';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pb-16 sm:pb-20 lg:pb-24">
      <Header />
      
      <div className="px-4 sm:px-8 max-w-6xl mx-auto">
        {/* Main description with underline */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl xl-custom:text-5xl leading-relaxed text-gray-800 max-w-4xl lg:max-w-5xl xl:max-w-6xl xl-custom:max-w-full text-justify xl-custom:text-center xl-custom:tracking-wide">
            i see software development as both craft and compassion — a way to design systems that honor people, protect the planet, and spark creativity.
            {' '}i believe the best ideas come from a place of listening deeply, building slowly, and dreaming with others.
          </p>
        </div>
        
        {/* Skills sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Hobbies */}
          <div className="flex items-start space-x-4 sm:space-x-6">
            <div className="w-3 sm:w-4 h-32 sm:h-40 lg:h-48 bg-[#735656] flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">hobbies</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                <li>jui jitsu</li>
                <li>bass guitar</li>
                <li>yoga</li>
                <li>hiking</li>
                <li>painting</li>
                <li>drawing</li>
              </ul>
            </div>
          </div>
          
          {/* Tech Skills */}
          <div className="flex items-start space-x-4 sm:space-x-6">
            <div className="w-3 sm:w-4 h-32 sm:h-40 lg:h-48 bg-[#735656] flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">tech skills</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                <li>javascript</li>
                <li>react</li>
                <li>react-native</li>
                <li>expo</li>
                <li>firebase</li>
                <li>supabase</li>
                <li>aws</li>
                <li>iot integration</li>
                <li>data analytics</li>
                <li>figma</li>
              </ul>
            </div>
          </div>
          
          {/* People Skills */}
          <div className="flex items-start space-x-4 sm:space-x-6">
            <div className="w-3 sm:w-4 h-32 sm:h-40 lg:h-48 bg-[#735656] flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">people skills</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                <li>leadership</li>
                <li>management</li>
                <li>problem solving</li>
                <li>collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;