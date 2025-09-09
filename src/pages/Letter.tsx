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
    {
      title: "",
      content: `Your love is like sunlight breaking through clouds after a storm—warm, healing, and absolutely essential to my existence. You love with your whole heart, holding nothing back, and that courage inspires me every single day.

I love how you laugh at my terrible jokes, how you sing in the shower when you think I can't hear, how you scrunch your nose when you're concentrating. I love your passion for the things you care about, your kindness to strangers, your unwavering loyalty to the people you love.

You've taught me that love isn't just a feeling—it's a choice we make every day. And every morning, I wake up choosing you, choosing us, choosing this beautiful life we're building together.

The way you see the world has changed how I see it too. Through your eyes, I've discovered beauty in places I never looked before, found joy in moments I might have overlooked, and learned that the smallest gestures can carry the deepest meaning.`
    },
    {
      title: "100 reasons why I love you",
      content: `1. Your smile lights up my world.


2. You make me laugh like no one else can.


3. Your kindness is boundless.


4. You believe in me even when I don't believe in myself.


5. Your hugs are my safe haven.


6. You have the most beautiful soul.


7. You challenge me to be a better person.


8. Your creativity inspires me.


9. You listen to me, really listen.


10. Your passion for life is contagious.


11. You make ordinary moments extraordinary.


12. Your strength amazes me.


13. You support my dreams as if they were your own.


14. Your honesty is refreshing.


15. You have a heart of gold.


16. Your adventurous spirit makes life exciting.


17. You remember the little things about me.


18. Your patience is endless.


19. You make me feel special every single day.


20. Your love is unconditional.


21. You are my best friend and confidant.


22. Your eyes sparkle with mischief and joy.


23. You have an incredible sense of humor.


24. Your cooking is delicious (even when you burn the toast).


25. You make me feel safe and protected.


26. Your optimism brightens my darkest days.


27. You are incredibly thoughtful.


28. Your determination is inspiring.


29. You have a way of making everyone feel welcome.


30. Your spontaneity keeps life interesting.


31. You are my rock in times of trouble.


32. Your love for animals shows your compassionate heart.


33. You make me want to be a better person.


34. Your intelligence is impressive.


35. You have a unique perspective on life that I adore.


36. Your generosity knows no bounds.


37. You make me feel beautiful inside and out.


38. Your sense of style is impeccable.


39. You are my partner in crime and adventure.


40. Your laughter is music to my ears.


41. You have a way of making me feel understood.


42. Your resilience in the face of challenges is admirable.


43. You are my biggest cheerleader.


44. Your love for life is infectious.


45. You make me feel cherished and valued.


46. Your creativity knows no limits.


47. You have a heart that loves deeply and fiercely.


48. Your sense of humor always brightens my day.


49. You are my favorite person to spend time with.


50. Your love is the greatest gift I've ever received.


51. You make me feel like I can conquer the world.


52. Your adventurous spirit makes every day an adventure.


53. You have a way of making me feel at home wherever we are.
54. Your love for family is heartwarming.
55. You make me feel like the luckiest person alive.
56. Your kindness to others is inspiring.
57. You have a way of making me feel special and loved.
58. Your passion for your hobbies is contagious.
59. You make me feel like I can be myself around you.
60. Your love is my anchor in a chaotic world.
61. You have a way of making me feel like the most important person in the world.
62. Your sense of adventure makes life exciting.
63. You make me feel like I can achieve anything with you by my side.
64. Your love is my guiding light.
65. You have a way of making me feel like I belong.
66. Your laughter is my favorite sound.
67. You make me feel like I can take on any challenge with you.
68. Your love is my safe haven.
69. You have a way of making me feel like I am enough just as I am.
70. Your adventurous spirit makes every day an adventure.
71. You make me feel like I can be vulnerable and open with you.
72. Your love is my greatest source of strength.
73. You have a way of making me feel like I am the most important person in your life.
74. Your kindness to others is inspiring.
75. You make me feel like I can be my true self around you.
76. Your love is my anchor in a chaotic world.
77. You have a way of making me feel like I belong.
78. Your laughter is my favorite sound.
79. You make me feel like I can take on any challenge with you by my side.
80. Your love is my safe haven.
81. You have a way of making me feel like I am enough just as I am.
82. Your adventurous spirit makes every day an adventure.
83. You make me feel like I can be vulnerable and open with you.
84. Your love is my greatest source of strength.
85. You have a way of making me feel like I am the most important person in your life.
86. Your kindness to others is inspiring.
87. You make me feel like I can be my true self around you.
88. Your love is my anchor in a chaotic world.
89. You have a way of making me feel like I belong.
90. Your laughter is my favorite sound.
91. You make me feel like I can take on any challenge with you by my side.
92. Your love is my safe haven.
93. You have a way of making me feel like I am enough just as I am.
94. Your adventurous spirit makes every day an adventure.
95. You make me feel like I can be vulnerable and open with you.
96. Your love is my greatest source of strength.
97. You have a way of making me feel like I am the most important person in your life.
98. Your kindness to others is inspiring.
99. You make me feel like I can be my true self around you.
100. Your love is my anchor in a chaotic world.`
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

      </div>
    </motion.div>
  );
};

export default Letter;