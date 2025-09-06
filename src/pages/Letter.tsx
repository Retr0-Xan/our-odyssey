import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Feather, Quote } from 'lucide-react';

const Letter = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const letterPages = [
    {
      title: "My Dearest Love",
      content: `As I sit here writing this letter, my heart overflows with emotions I never knew existed before you came into my life. Words feel inadequate to express the depth of what you mean to me, but I'll try my best to capture even a fraction of the love that fills my soul.

From the very first moment I saw you, something shifted in my universe. It wasn't just attraction—though you are breathtakingly beautiful—it was recognition. My soul recognized yours, as if we had been searching for each other across lifetimes.

You have this incredible way of making the ordinary feel extraordinary. A simple morning coffee becomes a cherished ritual when shared with you. A walk in the park transforms into an adventure when your hand is in mine. Even silence feels like the most beautiful conversation when we're together.`
    },
    {
      title: "The Way You Love",
      content: `Your love is like sunlight breaking through clouds after a storm—warm, healing, and absolutely essential to my existence. You love with your whole heart, holding nothing back, and that courage inspires me every single day.

I love how you laugh at my terrible jokes, how you sing in the shower when you think I can't hear, how you scrunch your nose when you're concentrating. I love your passion for the things you care about, your kindness to strangers, your unwavering loyalty to the people you love.

You've taught me that love isn't just a feeling—it's a choice we make every day. And every morning, I wake up choosing you, choosing us, choosing this beautiful life we're building together.

The way you see the world has changed how I see it too. Through your eyes, I've discovered beauty in places I never looked before, found joy in moments I might have overlooked, and learned that the smallest gestures can carry the deepest meaning.`
    },
    {
      title: "Our Future Together",
      content: `When I think about our future, I see endless possibilities painted in the colors of our love. I see lazy Sunday mornings and exciting adventures, quiet evenings and celebrations with friends, challenges we'll face together and victories we'll share.

I see us growing old together, still holding hands, still laughing at inside jokes that no one else understands. I see us creating a home filled with love, laughter, and maybe the patter of little feet someday. I see us supporting each other's dreams and building new ones together.

But more than any specific future, I see us. I see the love we share continuing to grow, deepen, and evolve. I see us choosing each other again and again, through all of life's seasons.

You are my greatest adventure, my safest harbor, my most cherished dream come true. Thank you for loving me, for choosing me, for being exactly who you are.

Forever and always yours,
With all my love ❤️`
    }
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

        {/* Response section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="elegant-card rounded-3xl p-12 text-center">
            <Heart className="text-rose-500 mx-auto mb-6 heartbeat" size={48} />
            <h3 className="text-3xl serif text-gray-800 mb-6">Your Turn</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              This letter is just the beginning of our conversation. I'd love to hear your thoughts, 
              your feelings, your own words of love.
            </p>
            <button className="px-8 py-4 bg-rose-500 text-white hover:bg-rose-600 transition-all duration-300 rounded-none font-medium tracking-wider shadow-lg hover:shadow-xl">
              WRITE BACK TO ME
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Letter;