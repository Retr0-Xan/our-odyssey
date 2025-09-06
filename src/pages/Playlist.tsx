import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Heart, Headphones, Volume2 } from 'lucide-react';

const Playlist = () => {
  const [currentSong, setCurrentSong] = useState(0);
  
  const playlist = [
    {
      id: 1,
      title: "Perfect",
      artist: "Ed Sheeran",
      memory: "Our first dance song - you hummed along and I knew you were the one",
      spotifyId: "0tgVpDi06FyKpA1z0VMD4v",
      youtubeId: "2Vv-BfVoq4g",
      mood: "romantic"
    },
    {
      id: 2,
      title: "All of Me",
      artist: "John Legend",
      memory: "Playing in the car during our first road trip together",
      spotifyId: "3U4isOIWM3VvDubwSI3y7a",
      youtubeId: "450p7goxZqg",
      mood: "intimate"
    },
    {
      id: 3,
      title: "Thinking Out Loud",
      artist: "Ed Sheeran",
      memory: "You sang this to me on my birthday - off-key but perfect",
      spotifyId: "lp-EO9WFXs0",
      youtubeId: "lp-EO9WFXs0",
      mood: "sweet"
    },
    {
      id: 4,
      title: "A Thousand Years",
      artist: "Christina Perri",
      memory: "Our song for slow dancing in the kitchen at midnight",
      spotifyId: "6Zm0HzDOvs5Iq5FdLKOLKJ",
      youtubeId: "rtOvBOTyX00",
      mood: "dreamy"
    },
    {
      id: 5,
      title: "Make You Feel My Love",
      artist: "Adele",
      memory: "Played during that rainy evening when we just held each other",
      spotifyId: "4eHbdreAnSOrDDsFfc4Fpm",
      youtubeId: "0put0_a--Ng",
      mood: "emotional"
    },
    {
      id: 6,
      title: "Can't Help Myself",
      artist: "Four Tops",
      memory: "Our happy song - always makes us dance around the living room",
      spotifyId: "3p0OvgMHdHDhOHqhZbGOqD",
      youtubeId: "T6QKqFPRZSA",
      mood: "joyful"
    }
  ];

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'romantic': return 'from-rose-500 to-pink-600';
      case 'intimate': return 'from-purple-500 to-indigo-600';
      case 'sweet': return 'from-yellow-500 to-orange-600';
      case 'dreamy': return 'from-blue-500 to-cyan-600';
      case 'emotional': return 'from-gray-500 to-slate-600';
      case 'joyful': return 'from-green-500 to-emerald-600';
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
            Our Soundtrack
          </h1>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every love story has its soundtrack. These are the songs that score our romance, 
            each one holding a special memory of us.
          </p>
        </motion.div>
      </div>

      {/* Featured Song */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="elegant-card rounded-3xl p-12 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <div className={`w-32 h-32 bg-gradient-to-br ${getMoodColor(playlist[currentSong].mood)} rounded-full flex items-center justify-center shadow-2xl`}>
              <Music className="text-white" size={48} />
            </div>
          </motion.div>
          
          <h2 className="text-4xl serif text-gray-800 mb-2">{playlist[currentSong].title}</h2>
          <p className="text-2xl text-gray-600 mb-6">by {playlist[currentSong].artist}</p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl script text-gray-700 leading-relaxed italic">
              "{playlist[currentSong].memory}"
            </p>
          </div>

          {/* Embedded Player */}
          <div className="max-w-md mx-auto mb-8">
            <div className="playlist-embed">
              <iframe
                src={`https://www.youtube.com/embed/${playlist[currentSong].youtubeId}?controls=1&modestbranding=1`}
                width="100%"
                height="200"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Song Navigation */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setCurrentSong(Math.max(0, currentSong - 1))}
              disabled={currentSong === 0}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                currentSong === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100 hover:shadow-md'
              }`}
            >
              ← Previous
            </button>
            
            <span className="px-6 py-3 text-gray-600">
              {currentSong + 1} of {playlist.length}
            </span>
            
            <button
              onClick={() => setCurrentSong(Math.min(playlist.length - 1, currentSong + 1))}
              disabled={currentSong === playlist.length - 1}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                currentSong === playlist.length - 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100 hover:shadow-md'
              }`}
            >
              Next →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Full Playlist */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl serif text-gray-800 mb-6">Complete Playlist</h2>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Click on any song to make it the featured track
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {playlist.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setCurrentSong(index)}
              className={`cursor-pointer sophisticated-hover rounded-2xl p-6 transition-all duration-300 ${
                currentSong === index
                  ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 shadow-lg'
                  : 'elegant-card hover:shadow-lg'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${getMoodColor(song.mood)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {currentSong === index ? (
                    <Volume2 className="text-white" size={24} />
                  ) : (
                    <Play className="text-white" size={24} />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl serif text-gray-800 mb-1 truncate">
                    {song.title}
                  </h3>
                  <p className="text-gray-600 mb-2 truncate">by {song.artist}</p>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {song.memory}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <Heart 
                    className={`${currentSong === index ? 'text-red-500 fill-current' : 'text-gray-400'} transition-colors duration-300`} 
                    size={20} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Spotify Integration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mt-32"
      >
        <div className="elegant-card rounded-3xl p-16 text-center">
          <Headphones className="text-green-500 mx-auto mb-8" size={64} />
          <h3 className="text-4xl serif text-gray-800 mb-6">Listen on Spotify</h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Want to listen to our complete playlist? Find it on Spotify and add your own songs 
            that remind you of us.
          </p>
          <button className="px-8 py-4 bg-green-500 text-white hover:bg-green-600 transition-all duration-300 rounded-full font-medium tracking-wider shadow-lg hover:shadow-xl">
            OPEN IN SPOTIFY
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Playlist;