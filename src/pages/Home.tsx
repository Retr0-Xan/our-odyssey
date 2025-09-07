import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Quote, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Home = () => {
  // Track scroll position to change navbar text color
  const [navbarTextColor, setNavbarTextColor] = useState('text-white');
  useEffect(() => {
    const onScroll = () => {
      // Change at 80vh (just after hero section)
      if (window.scrollY > window.innerHeight * 0.8) {
        setNavbarTextColor('text-gray-900');
      } else {
        setNavbarTextColor('text-white');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const [revealSecret, setRevealSecret] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleSecretClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 6) {
      setRevealSecret(true);
    }
  };

  return (
    <>
      <Navbar navbarTextColor={navbarTextColor} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="min-h-screen"
      >
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 luxury-gradient opacity-95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-light serif text-white mb-8 text-shadow-elegant"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Our Odyssey
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "300px" }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-12"
            />

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-2xl md:text-3xl script text-yellow-100 mb-16 leading-relaxed"
            >
              To my beautiful Princess, my heart's eternal flame.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button
                onClick={handleSecretClick}
                className="group relative px-10 py-4 border border-yellow-400 text-yellow-400 hover:text-black hover:bg-yellow-400 transition-all duration-500 rounded-none font-medium tracking-wider"
              >
                <span className="relative z-10">DISCOVER OUR STORY</span>
                <motion.div
                  className="absolute inset-0 bg-yellow-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </button>

              <Link
                to="/timeline"
                className="group relative px-10 py-4 bg-yellow-400 text-black hover:bg-transparent hover:text-yellow-400 border border-yellow-400 transition-all duration-500 rounded-none font-medium tracking-wider"
              >
                <span className="relative z-10">VIEW TIMELINE</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <ArrowDown size={24} />
              <span className="text-sm mt-2 tracking-wider">SCROLL</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Secret Message Modal */}
        {revealSecret && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setRevealSecret(false)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="elegant-card rounded-3xl p-12 max-w-2xl mx-6 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Sparkles className="text-yellow-600" size={48} />
              </motion.div>
              <h3 className="text-3xl serif text-gray-800 mb-6">You Found Our Secret</h3>
              <p className="text-xl script text-gray-600 leading-relaxed mb-6">
                "In all the world, there is no heart for me like yours.
                In all the world, there is no love for you like mine."
              </p>
              <p className="text-sm text-gray-500 italic">— Maya Angelou</p>
              <motion.button
                onClick={() => setRevealSecret(false)}
                className="mt-8 px-8 py-3 bg-gray-800 text-white hover:bg-gray-900 transition-colors rounded-none font-medium tracking-wider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CLOSE
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* Content Sections */}
        <div className="bg-white">
          {/* Welcome Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="py-32 px-6"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-6xl serif text-gray-800 mb-8">
                    Welcome to Our World
                  </h2>
                  <div className="w-24 h-px bg-yellow-600 mb-8"></div>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    This is more than just a website—it's a digital sanctuary where our love story lives,
                    breathes, and grows. Every page holds a piece of our journey, every interaction a memory,
                    every moment a testament to what we've built together.
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    Navigate through our timeline, relive our adventures, test your knowledge of our story,
                    and discover the hidden treasures scattered throughout these pages.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="elegant-card rounded-3xl p-12 text-center">
                    <Quote className="text-yellow-600 mx-auto mb-6" size={48} />
                    <blockquote className="text-2xl script text-gray-700 leading-relaxed mb-6">
                      "You are my today and all of my tomorrows"
                    </blockquote>
                    <div className="flex justify-center space-x-4">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Heart className="text-red-500 fill-current" size={24} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Features Grid */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="py-32 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-5xl serif text-gray-800 mb-6">Explore Our Story</h2>
                <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Each section of this website tells a different chapter of our love story.
                  Click through to discover memories, milestones, and moments that define us.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Timeline',
                    description: 'Journey through our milestones',
                    icon: '⏰',
                    link: '/timeline',
                    color: 'from-blue-500 to-purple-600'
                  },
                  {
                    title: 'Gallery',
                    description: 'Curated memories in photos',
                    icon: '📸',
                    link: '/gallery',
                    color: 'from-green-500 to-teal-600'
                  },
                  {
                    title: 'Love Letter',
                    description: 'A heartfelt note just for you',
                    icon: '💌',
                    link: '/letter',
                    color: 'from-pink-500 to-rose-600'
                  },
                  {
                    title: 'Countdown',
                    description: 'Time until our next milestone',
                    icon: '⏳',
                    link: '/countdown',
                    color: 'from-orange-500 to-red-600'
                  },
                  {
                    title: 'Our Playlist',
                    description: 'Songs that define our love',
                    icon: '🎵',
                    link: '/playlist',
                    color: 'from-indigo-500 to-blue-600'
                  },
                  {
                    title: 'Memory Quiz',
                    description: 'Test your knowledge of us',
                    icon: '🧠',
                    link: '/quiz',
                    color: 'from-yellow-500 to-orange-600'
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <Link to={feature.link}>
                      <div className="elegant-card rounded-3xl p-8 h-full sophisticated-hover">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          {feature.icon}
                        </div>
                        <h3 className="text-2xl serif text-gray-800 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="py-32 px-6"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-12">
                {[
                  { number: '365+', label: 'Days Together', icon: Heart },
                  { number: '∞', label: 'Infinite Love', icon: Star },
                  { number: '1', label: 'Perfect Match', icon: Sparkles },
                  { number: '2', label: 'Hearts as One', icon: Quote },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <stat.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-5xl font-light serif text-gray-800 mb-4">{stat.number}</h3>
                    <p className="text-gray-600 uppercase tracking-wider text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default Home;