import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Camera, Star } from 'lucide-react';

const Map = () => {
  const memories = [
    {
      id: 1,
      name: "Central Perk Café",
      location: "Downtown",
      coordinates: [40.7589, -73.9851],
      type: "first-meeting",
      date: "January 15, 2024",
      description: "Where our eyes first met over coffee",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "I was reading a book when you walked in. You ordered a vanilla latte with extra foam, and when you smiled at the barista, I knew I had to talk to you."
    },
    {
      id: 2,
      name: "Moonlight Restaurant",
      location: "Uptown District",
      coordinates: [40.7831, -73.9712],
      type: "romantic",
      date: "February 14, 2024",
      description: "Our first official date",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Valentine's Day dinner that lasted until they had to kick us out. We talked about everything and nothing, and I knew this was just the beginning."
    },
    {
      id: 3,
      name: "Blue Ridge Mountains",
      location: "Mountain Trail",
      coordinates: [40.8176, -74.0014],
      type: "adventure",
      date: "March 22, 2024",
      description: "Weekend getaway and hiking adventure",
      image: "https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "You conquered your fear of heights on that cliff overlook. Watching you be so brave made me fall even deeper in love."
    },
    {
      id: 4,
      name: "City Park",
      location: "Central Park Area",
      coordinates: [40.7829, -73.9654],
      type: "celebration",
      date: "July 4, 2024",
      description: "Summer festival and fireworks",
      image: "https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Dancing under the fireworks in that beautiful sundress. Every song felt like it was written just for us."
    },
    {
      id: 5,
      name: "Our First Apartment",
      location: "Riverside District",
      coordinates: [40.7505, -73.9934],
      type: "milestone",
      date: "September 15, 2024",
      description: "The day we moved in together",
      image: "https://images.pexels.com/photos/1024989/pexels-photo-1024989.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Boxes everywhere, takeout dinner on the floor, and the overwhelming happiness of finally sharing a home with you."
    },
    {
      id: 6,
      name: "Sunset Beach",
      location: "Coastal Drive",
      coordinates: [40.7282, -74.0776],
      type: "romantic",
      date: "October 10, 2024",
      description: "Beach sunset and long walks",
      image: "https://images.pexels.com/photos/1816654/pexels-photo-1816654.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Golden hour with my golden girl. We wrote our names in the sand and promised to come back every year."
    }
  ];

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case 'first-meeting': return Heart;
      case 'romantic': return Heart;
      case 'adventure': return Star;
      case 'celebration': return Camera;
      case 'milestone': return MapPin;
      default: return MapPin;
    }
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'first-meeting': return 'from-pink-500 to-rose-600';
      case 'romantic': return 'from-red-500 to-pink-600';
      case 'adventure': return 'from-green-500 to-emerald-600';
      case 'celebration': return 'from-purple-500 to-indigo-600';
      case 'milestone': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
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
            Our Memory Map
          </h1>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every place tells a story. Here are the locations where our love story unfolded, 
            each one holding a special piece of our journey together.
          </p>
        </motion.div>
      </div>

      {/* Interactive Map Placeholder */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="elegant-card rounded-3xl p-8 mb-12"
        >
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl relative overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 via-green-200 to-yellow-200"></div>
            </div>
            
            {/* Memory Markers */}
            {memories.map((memory, index) => {
              const Icon = getMarkerIcon(memory.type);
              return (
                <motion.div
                  key={memory.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${20 + (index * 12)}%`,
                    top: `${30 + (index % 2 * 20)}%`,
                  }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${getMarkerColor(memory.type)} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                      {memory.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Legend</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full"></div>
                  <span>First Meeting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-full"></div>
                  <span>Romantic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full"></div>
                  <span>Adventure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full"></div>
                  <span>Milestone</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-600 italic">
              Interactive map showing our special places (Click markers to explore)
            </p>
          </div>
        </motion.div>
      </div>

      {/* Memory Cards */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl serif text-gray-800 mb-6">Our Special Places</h2>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each location holds a piece of our story
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => {
            const Icon = getMarkerIcon(memory.type);
            return (
              <motion.div
                key={memory.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="elegant-card rounded-3xl overflow-hidden sophisticated-hover"
              >
                {/* Memory Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={memory.image}
                    alt={memory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Memory Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${getMarkerColor(memory.type)} rounded-lg flex items-center justify-center`}>
                      <Icon className="text-white" size={18} />
                    </div>
                    <span className="text-sm text-gray-500">{memory.date}</span>
                  </div>
                  
                  <h3 className="text-xl serif text-gray-800 mb-2">{memory.name}</h3>
                  <p className="text-gray-600 mb-3">{memory.description}</p>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin size={14} className="mr-1" />
                    <span className="text-sm">{memory.location}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="script text-gray-700 leading-relaxed italic text-sm">
                      "{memory.story}"
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Future Adventures */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mt-32"
      >
        <div className="elegant-card rounded-3xl p-16 text-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <MapPin className="text-yellow-600" size={64} />
          </motion.div>
          <h3 className="text-4xl serif text-gray-800 mb-6">More Adventures Await</h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Our map is still being drawn. Every day brings new places to explore, 
            new memories to create, and new pins to add to our love story.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">🗺️</div>
              <div className="text-sm text-gray-600">Places to Explore</div>
            </div>
            <div>
              <div className="text-3xl mb-2">✈️</div>
              <div className="text-sm text-gray-600">Adventures Ahead</div>
            </div>
            <div>
              <div className="text-3xl mb-2">💕</div>
              <div className="text-sm text-gray-600">Memories to Make</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Map;