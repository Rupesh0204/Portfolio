import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ChevronUp size={24} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Rupesh Bhadane</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Full Stack Developer passionate about creating innovative
              solutions and meaningful user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center text-gray-400">
                <span>Made with</span>
                <Heart size={16} className="mx-2 text-red-500" />
                <span>and</span>
                <Code size={16} className="mx-2 text-blue-500" />
                <span>by Rupesh Bhadane</span>
              </div>

              <div className="text-gray-400">
                <p>&copy; {currentYear} Rupesh Bhadane. All rights reserved.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-500 text-sm">
              This portfolio is built with React, TypeScript, and Tailwind CSS.
              <br className="hidden sm:inline" />
              Deployed with ❤️ on modern web technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
