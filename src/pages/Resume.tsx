import React from 'react';
import Header from '../components/Header';
import { Download } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownloadPDF = () => {
    // This would typically trigger a PDF download
    // For now, we'll just show an alert
    alert('PDF download would be triggered here');
  };

  return (
    <div className="min-h-screen pb-16 sm:pb-20 lg:pb-24">
      <Header />
      
      <div className="px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Header with download button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
          <h2 className="text-2xl sm:text-3xl font-light text-black">my resume</h2>
          <div className="flex items-center space-x-4 self-start sm:self-auto">
            <div className="w-3 sm:w-4 h-12 sm:h-16 bg-[#8b6f47]"></div>
            <button 
              onClick={handleDownloadPDF}
              className="bg-[#d4c4b0] hover:bg-[#c4b49a] px-6 py-3 rounded-full text-gray-800 font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>download pdf</span>
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">Sally Do</h1>
            <p className="text-lg text-gray-600 mb-4">Software Developer</p>
            <div className="flex flex-col min-[500px]:flex-row min-[500px]:flex-wrap min-[500px]:justify-center min-[500px]:gap-x-6 min-[500px]:gap-y-2 space-y-1 min-[500px]:space-y-0 text-sm text-gray-600">
              <span className="min-[500px]:flex-shrink-0">sallydoh@gmail.com</span>
              <span className="min-[500px]:flex-shrink-0">(403) 510 - 2393</span><br/>
              <span className="min-[500px]:flex-shrink-0">calgary, ab</span> 
              <span className="min-[500px]:flex-shrink-0">sallydo.com</span> 
              <span className="min-[500px]:flex-shrink-0">github.com/sallydough</span>
              <span className="min-[500px]:flex-shrink-0">linkedin.com/in/sallydough</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4 border-b border-gray-100 pb-2">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Passionate software developer with expertise in full-stack development, mobile applications, and IoT integration. 
              Experienced in building scalable solutions using modern technologies including React, React Native, Firebase, and AWS. 
              Strong background in leadership and collaborative problem-solving with a focus on creating meaningful, user-centered applications.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4 border-b border-gray-100 pb-2">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Frontend Development</h3>
                <p className="text-sm text-gray-600">JavaScript, React, React Native, TypeScript, HTML5, CSS3, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Backend & Database</h3>
                <p className="text-sm text-gray-600">Firebase, Supabase, Node.js, PostgreSQL, Cloud Functions</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Cloud & DevOps</h3>
                <p className="text-sm text-gray-600">AWS, Vercel, Expo, Git, CI/CD</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Tools & Design</h3>
                <p className="text-sm text-gray-600">Figma, IoT Integration, Data Analytics, API Development, Home Assistant, VideoSDK</p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4 border-b border-gray-100 pb-2">Professional Experience</h2>
            
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-semibold text-gray-800">Lead Software Developer</h3>
                <span className="text-sm text-gray-600">2023 - Present</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Garden Loft  • Calgary, AB</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                
                <li>Built comprehensive mobile platform using React Native and Firebase for senior living solutions</li>
                <li>Implemented real-time video calling, home automation, and wellness tracking features</li>
                <li>Created secure web dashboard for staff monitoring with real-time data visualization</li>
                <li>Designed and developed company website from scratch using React and Tailwind CSS</li>
                 <li>Developed and maintained web applications using modern JavaScript frameworks</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                <li>Implemented responsive designs and optimized application performance</li>
              </ul>
            </div>


            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="font-semibold text-gray-800">Lead Early Childhood Educator</h3>
                <span className="text-sm text-gray-600">2016 - 2023</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Kids & Company, KidsU, Private Education • Calgary, AB</p>
              <ul className="list-disc text-sm text-gray-700 space-y-1 ml-4">
                <li className="pl-2">Successfully trained and mentored 4 assistant teachers during strategic company expansion, demonstrating strong leadership and knowledge transfer capabilities</li>
                <li className="pl-2">Achieved 100% audit success rate across 4 consecutive annual evaluations, showcasing consistent quality standards and regulatory compliance</li>
                <li className="pl-2">Rapidly promoted from Assistant to Lead Teacher through exceptional classroom management, collaborative problem-solving, and innovative teaching methodologies</li>
                <li className="pl-2">Fostered strong stakeholder relationships through effective parent communication and seamless team collaboration</li>
                <li className="pl-2">Developed and implemented engaging educational programs that enhanced student learning outcomes and satisfaction</li>
              </ul>
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4 border-b border-gray-100 pb-2">Key Projects</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">AI Summarizer SaaS Platform</h3>
                <p className="text-sm text-gray-600 mb-2">Next.js 15, React 19, TypeScript, GPT-4, Stripe</p>
                <p className="text-sm text-gray-700">Full-stack AI application that transforms PDF files into concise summaries for social media content creation.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Garden Loft Mobile App</h3>
                <p className="text-sm text-gray-600 mb-2">React Native, Firebase, VideoSDK, Home Assistant API</p>
                <p className="text-sm text-gray-700">Comprehensive mobile platform for senior living with video calling, home automation, and wellness tracking.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Garden Loft Dashboard</h3>
                <p className="text-sm text-gray-600 mb-2">React, Tailwind CSS, Real-time Data Visualization</p>
                <p className="text-sm text-gray-700">Secure web application for staff monitoring with live timelines, sensor data, and alert management.</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4 border-b border-gray-100 pb-2">Education</h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="font-semibold text-gray-800">Full Stack Web Development</h3>
                <p className="text-sm text-gray-600">InceptionU</p>
                <p className="text-sm text-gray-600 mt-2"><span className="font-medium">Coursework:</span> Web Development, Mobile App Development, Critical Thinking, Firebase</p>
                <p className="text-sm text-gray-600 mt-1"><span className="font-medium">Honours:</span> InceptionU Educational Bursary</p>
              </div>
              <span className="text-sm text-gray-600 mt-1 sm:mt-0">Calgary, AB</span>
            </div>
          </section>

          {/* Additional Skills */}
          <section>
            <h2 className="text-xl font-semibold text-black mb-4 border-b border-gray-100 pb-2">Additional Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Leadership & Management</h3>
                <p className="text-sm text-gray-600">Team leadership, project management, collaborative problem-solving</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Personal Interests</h3>
                <p className="text-sm text-gray-600">Jiu jitsu, bass guitar, yoga, hiking, painting, drawing</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;