import React from 'react';
import { motion } from 'framer-motion';

import {
  Download,
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
  Code,
} from 'lucide-react';

const Home: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in the public folder
    link.download = 'Resume.pdf';
    link.click();
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/rupesh____04/',
      color: 'hover:text-pink-600',
      bg: 'hover:bg-pink-50',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rupesh-bhadane-693b93296/',
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-50',
    },
    {
      icon: Github,
      href: 'https://github.com/Rupesh0204?tab=repositories',
      color: 'hover:text-gray-800',
      bg: 'hover:bg-gray-50',
    },
    {
      icon: Code,
      href: 'https://leetcode.com/u/Rupesh_Bhadane04/',
      color: 'hover:text-orange-600',
      bg: 'hover:bg-orange-50',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Rupesh <span className="text-blue-600">Bhadane</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Full Stack Web/App Developer & Cloud/DevOps Enthusiast
              </motion.p>
            </div>

            {/* Social Icons */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white shadow-lg ${social.color} ${social.bg} transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={downloadResume}
                className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
              >
                <MessageCircle size={20} className="mr-2" />
                Let's Talk
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/myphoto.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
