import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'ai saas pdf summarizer',
      description: 'Next.js 15, React 19, TypeScript, TailwindCSS 4, ShadCN UI, Clerk, GPT-4, LangChain, NextDB (PostgreSQL), UploadThing, Stripe, Toast Notifications, Vercel',
      details: 'full-stack AI SaaS app that transforms pdf files into beautiful and concise summaries to create ig reels within seconds.',
      links: [
        { label: 'visit app', url: '#' },
        { label: 'github', url: '#' }
      ]
    },
    {
      title: 'garden loft app',
      description: 'Expo (React Native), Firebase (Auth, Firestore, Storage, Cloud Functions), Supabase, VideoSDK, Home Assistant API, Expo Router, TypeScript',
      details: 'a mobile platform that empowers residents and their caregivers to stay connected, safe, and comfortable together. features include: seamless features real-time video calling, home automation, activity booking, emergency alerts, and wellness tracking. the app is built with an intuitive UI designed for older adults, prioritizing accessibility and peace of mind.',
      links: [
        { label: 'visit app', url: 'https://apps.apple.com/ca/app/garden-loft/id6508169875' },
        { label: 'github', url: 'https://github.com/gardenloft/app-garden-loft' }
      ]
    },
    {
      title: 'garden loft dashboard',
      description: 'React, Tailwind CSS, Vercel',
      details: 'a secure web app for staff and supporters to monitor resident well-being, view sensor data, manage medication, water, power usage, access live timelines, and receive alerts. it enables proactive care decisions through real-time data visualization and trend tracking.',
      links: [
        { label: 'visit webapp', url: '#' },
        { label: 'github', url: '#' }
      ]
    },
    {
      title: 'gardenloft.ca',
      description: 'React, Tailwind CSS, Vercel',
      details: 'designed and developed the garden loft website from scratch to showcase our line of canadian-made, prefabricated backyard suites that support independent living for seniors and individuals with differing abilities. the site features an intuitive user experience, responsive design, and a strong emphasis with a focus on simplicity, customization, and quality. built to serve both families and municipalities, the platform communicates our vision for a scalable, dignified aging-in-place solution across canada.',
      links: [
        { label: 'visit website', url: 'https://www.gardenloft.ca/' },
        { label: 'github', url: 'https://github.com/gardenloft/garden-loft-website-main' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-16 sm:pb-20 lg:pb-24">
      <Header />
      
      <div className="px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
          <h2 className="text-2xl sm:text-3xl font-light text-black">wanna see some cool sh*t . . .</h2>
          <div className="flex items-center space-x-4 self-start sm:self-auto">
            <div className="w-3 sm:w-4 h-12 sm:h-16 bg-[#735656]"></div>
            <Link 
              to="/resume"
              className="bg-[#d4c4b0] hover:bg-[#c4b49a] px-6 py-3 rounded-full text-gray-800 font-medium transition-all duration-300 shadow-md hover:shadow-lg inline-block"
            >
              view my resume
            </Link>
          </div>
        </div>
        
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="flex items-start space-x-4 sm:space-x-6">
              <div className="w-3 sm:w-4 h-24 sm:h-32 bg-[#735656] flex-shrink-0"></div>
              <div className="flex-1">
                <div className="bg-white/80 rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-3 sm:space-y-0">
                    <h3 className="text-xl sm:text-2xl font-medium text-black">{project.title}</h3>
                    <div className="hidden sm:flex space-x-3">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="bg-[#f5f3f0] hover:bg-[#d4c4b0] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm text-gray-700 transition-all duration-300 whitespace-nowrap"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 italic">{project.description}</p>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">{project.details}</p>
                  
                  {/* Mobile buttons - shown only on small screens */}
                  <div className="flex sm:hidden space-x-3 mt-4">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="bg-[#f5f3f0] hover:bg-[#d4c4b0] px-3 py-2 rounded-full text-xs text-gray-700 transition-all duration-300 flex-1 text-center"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;