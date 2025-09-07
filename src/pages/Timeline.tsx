import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, Star, Camera } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      id: 1,
      date: 'March 2024',
      title: 'First Meeting',
      description: 'Never knew something special was about to begin..(I don\'t remember the exact date I\'m sorry😬)',
      image: 'src/assets/Fortnite.jpg',
      location: 'In-game',
      type: 'milestone',
      details: 'Decided to give this game one last go on the HP. Best decision ever!'
    },
    {
      id: 2,
      date: 'September 09, 2024',
      title: 'First Date',
      description: 'Our first official date! Also the day we officially became a couple.',
      image: 'src/assets/first-date.jpg',
      location: 'Sweet Tooth',
      type: 'romantic',
      details: 'Never trying those churros again.'
    },
    {
      id: 3,
      date: 'March 22, 2024',
      title: 'Weekend Getaway',
      description: 'Our first trip together to the mountains. Hiking, stargazing, and falling deeper in love.',
      image: 'https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Blue Ridge Mountains',
      type: 'adventure',
      details: 'You conquered your fear of heights on that cliff, and I fell even more in love with your courage.'
    },
    {
      id: 4,
      date: 'May 10, 2024',
      title: 'Meeting the Family',
      description: 'The day you met my family, and they instantly fell in love with you too.',
      image: 'https://images.pexels.com/photos/1024988/pexels-photo-1024988.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Family Home',
      type: 'milestone',
      details: 'Mom still talks about how you helped her in the kitchen and made everyone laugh.'
    },
    {
      id: 5,
      date: 'July 4, 2024',
      title: 'Summer Festival',
      description: 'Dancing under fireworks at the summer festival. Pure magic in your eyes.',
      image: 'https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'City Park',
      type: 'celebration',
      details: 'We danced to every song, and you looked absolutely radiant in that sundress.'
    },
    {
      id: 6,
      date: 'September 15, 2024',
      title: 'Moving In Together',
      description: 'The day we decided to share not just our hearts, but our home too.',
      image: 'https://images.pexels.com/photos/1024989/pexels-photo-1024989.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Our First Apartment',
      type: 'milestone',
      details: 'Boxes everywhere, takeout dinner, and the happiest we\'d ever been.'
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'romantic': return Heart;
      case 'adventure': return Star;
      case 'celebration': return Camera;
      default: return Calendar;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'romantic': return 'from-rose-500 to-pink-600';
      case 'adventure': return 'from-green-500 to-emerald-600';
      case 'celebration': return 'from-purple-500 to-indigo-600';
      default: return 'from-blue-500 to-cyan-600';
    }
  };

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
            Our Timeline
          </h1>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every relationship is a story written in moments. Here are the chapters that define our journey together—
            from first glances to shared dreams, each milestone a testament to our growing love.
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 timeline-line h-full"></div>

          {/* Timeline events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = getEventIcon(event.type);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:space-x-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-yellow-600 rounded-full z-10 shadow-lg">
                    <div className="absolute inset-1 bg-yellow-600 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'ml-16 md:ml-0' : 'ml-16 md:ml-0'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="elegant-card rounded-3xl p-8 sophisticated-hover"
                    >
                      {/* Event image */}
                      <div className={`${event.id === 2 ? 'aspect-[2/2]' : 'aspect-video'} rounded-2xl overflow-hidden mb-6`}>
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Event header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${getEventColor(event.type)} rounded-xl flex items-center justify-center`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <span className="text-sm text-gray-500 font-medium">{event.date}</span>
                      </div>

                      {/* Event content */}
                      <h3 className="text-3xl serif text-gray-800 mb-4">{event.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-4">{event.description}</p>

                      {/* Location */}
                      <div className="flex items-center text-gray-500 mb-4">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>

                      {/* Details */}
                      <div className="border-t border-gray-200 pt-4">
                        <p className="script text-lg text-gray-700 leading-relaxed italic">
                          "{event.details}"
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-2/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Future section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mt-32"
      >
        <div className="elegant-card rounded-3xl p-16 text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <Star className="text-yellow-600" size={64} />
          </motion.div>
          <h3 className="text-4xl serif text-gray-800 mb-6">To Be Continued...</h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Our story is still being written. Every day brings new adventures, new memories,
            and new reasons to fall in love with you all over again.
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Timeline;