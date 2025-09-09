import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Feather, Quote } from 'lucide-react';

const Letter = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const letterPages = [
    {
      title: "My Dearest Love",
      content: `It's crazy to think it's already been a year since we've been together. It feels as if I've known you much longer. (Technically yes, but you know what I mean😉).
      Giving Fortnite another chance was one of the best decisions I've ever made because it led me to you.

      I honestly sometimes sit to think about how different my life would be if I hadn't met you. You have brought so much joy, love, and light into my life. And I'm so grateful to God for bringing you into my life. He really cooked with this one

I know we've had our ups and downs, but every moment with you has been worth it. I don't know about you, but I feel like I've grown so much as a person since we've been together. You've challenged me to be better. You genuinely get stressed over me (sorry wai), and I love that you care so much, and I am so grateful for that.I love how we can talk about anything and everything, and how we can be ourselves together.

I know I'm not an easy person, and I understand that I can't give you everything now, but I promise to keep working on myself for you (and for me obviously, don't worry). You are my rock, my confidant, my best friend. 
  
  

You are my greatest adventure, my safest harbor, my most cherished dream come true. Thank you for loving me, for choosing me, for being exactly who you are.

Forever and always yours,
With all my love ❤️`
    },

  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-32 pb-16"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-light serif text-gray-800 mb-6">
            A Letter to You
          </h1>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Words from my heart, written with love and sealed with devotion
          </p>
        </motion.div>
      </div>

      {/* Letter */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0, rotateX: -10 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative"
        >
          {/* Paper background with texture */}
          <div className="paper-texture bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl shadow-2xl border border-amber-200 p-12 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 opacity-10">
              <Feather size={64} className="text-amber-600" />
            </div>
            <div className="absolute bottom-8 left-8 opacity-10">
              <Heart size={48} className="text-rose-600" />
            </div>
            
            {/* Letter header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center mb-12"
            >
              <Quote className="text-amber-600 mx-auto mb-4" size={32} />
              <h2 className="text-4xl script text-gray-800 mb-2">
                {letterPages[currentPage].title}
              </h2>
              <div className="w-32 h-px bg-amber-400 mx-auto"></div>
            </motion.div>

            {/* Letter content */}
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="handwritten text-xl md:text-2xl text-gray-800 leading-relaxed space-y-8"
            >
              {letterPages[currentPage].content.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-justify"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Page navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-amber-200">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-amber-700 hover:bg-amber-100 hover:shadow-md'
                }`}
              >
                ← Previous
              </button>

              <div className="flex space-x-2">
                {letterPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? 'bg-amber-600 scale-125'
                        : 'bg-amber-300 hover:bg-amber-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(letterPages.length - 1, currentPage + 1))}
                disabled={currentPage === letterPages.length - 1}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === letterPages.length - 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-amber-700 hover:bg-amber-100 hover:shadow-md'
                }`}
              >
                Next →
              </button>
            </div>
          </div>

          {/* Paper shadow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-3xl transform translate-x-2 translate-y-2 -z-10"></div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Letter;