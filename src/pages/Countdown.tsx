import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Star, Gift } from 'lucide-react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your target date here (2-year anniversary example)
  const targetDate = new Date('2026-09-09T00:00:00').getTime();
  const eventTitle = "Our 2-Year Anniversary";
  const eventDescription = "Two years of love, laughter, and endless memories";

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const milestones = [
    {
      date: 'September 09, 2025',
      title: 'One Year Anniversary',
      description: 'Celebrating our first year together',
      status: 'completed',
      icon: Heart
    },
    {
      date: 'February 14, 2025',
      title: 'Valentine\'s Day',
      description: 'Our second Valentine\'s together',
      status: 'upcoming',
      icon: Gift
    },
    {
      date: 'September 09, 2026',
      title: 'Two Year Anniversary',
      description: 'The milestone we\'re counting down to',
      status: 'target',
      icon: Star
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
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-light serif text-gray-800 mb-6">
            Countdown to Forever
          </h1>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every second brings us closer to our next milestone. Time may pass, but our love only grows stronger.
          </p>
        </motion.div>
      </div>

      {/* Main Countdown */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="elegant-card rounded-3xl p-12 text-center mb-12"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <Calendar className="text-yellow-600" size={64} />
          </motion.div>
          
          <h2 className="text-4xl serif text-gray-800 mb-4">{eventTitle}</h2>
          <p className="text-xl text-gray-600 mb-12">{eventDescription}</p>

          {/* Countdown Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="countdown-digit rounded-2xl p-6 shadow-lg"
              >
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-5xl font-light serif mb-2"
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-sm uppercase tracking-wider opacity-80">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl script text-gray-700"
          >
            "Every moment until then is a gift"
          </motion.div>
        </motion.div>
      </div>

      {/* Milestones */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl serif text-gray-800 mb-6">Our Milestones</h2>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Celebrating the moments that mark our journey together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const getStatusColor = (status: string) => {
              switch (status) {
                case 'completed': return 'from-green-500 to-emerald-600';
                case 'target': return 'from-yellow-500 to-orange-600';
                default: return 'from-blue-500 to-indigo-600';
              }
            };

            const getStatusText = (status: string) => {
              switch (status) {
                case 'completed': return 'Celebrated ✓';
                case 'target': return 'Counting Down';
                default: return 'Coming Soon';
              }
            };

            return (
              <motion.div
                key={milestone.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="elegant-card rounded-3xl p-8 sophisticated-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${getStatusColor(milestone.status)} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl serif text-gray-800 mb-3 text-center">
                  {milestone.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-4 leading-relaxed">
                  {milestone.description}
                </p>
                
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-500 mb-2 block">
                    {milestone.date}
                  </span>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    milestone.status === 'completed' 
                      ? 'bg-green-100 text-green-800'
                      : milestone.status === 'target'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {getStatusText(milestone.status)}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Future Dreams */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mt-32"
      >
        <div className="elegant-card rounded-3xl p-16 text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <Heart className="text-rose-500" size={64} />
          </motion.div>
          <h3 className="text-4xl serif text-gray-800 mb-6">Beyond the Countdown</h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            While we count down to our next milestone, remember that every day with you is already perfect. 
            The real celebration isn't in reaching the destination—it's in every step of the journey we take together.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl serif text-gray-800 mb-2">∞</div>
              <div className="text-sm text-gray-600">Days of Love Ahead</div>
            </div>
            <div>
              <div className="text-3xl serif text-gray-800 mb-2">♾️</div>
              <div className="text-sm text-gray-600">Memories to Create</div>
            </div>
            <div>
              <div className="text-3xl serif text-gray-800 mb-2">💕</div>
              <div className="text-sm text-gray-600">Reasons to Smile</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Countdown;