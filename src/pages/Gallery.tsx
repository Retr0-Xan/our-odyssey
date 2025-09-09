import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ArrowLeft, ArrowRight } from 'lucide-react';

// First Date
import firstDateCover from '../assets/albums/first date/20240909_121005.jpg';
import firstDateImg1 from '../assets/albums/first date/20240909_121005.jpg';
import firstDateImg2 from '../assets/albums/first date/20240909_121008.jpg';
import firstDateImg3 from '../assets/albums/first date/Snapchat-1123126089.jpg';
import firstDateImg4 from '../assets/albums/first date/Snapchat-188329827.jpg';
import firstDateImg5 from '../assets/albums/first date/Snapchat-283777194.jpg';
import firstDateImg6 from '../assets/albums/first date/Snapchat-690853652.jpg';
import firstDateImg7 from '../assets/albums/first date/Snapchat-871769054.jpg';

// Art Gallery Date
import artGalleryCover from '../assets/albums/art date/Snapchat-337729128.jpg';
import artImg1 from '../assets/albums/art date/Snapchat-1071229453.jpg';
import artVid1 from '../assets/albums/art date/Snapchat-1173644644.mp4';
import artImg2 from '../assets/albums/art date/Snapchat-1184203243.jpg';
import artImg3 from '../assets/albums/art date/Snapchat-1198843755.jpg';
import artImg4 from '../assets/albums/art date/Snapchat-1199493870.jpg';
import artImg5 from '../assets/albums/art date/Snapchat-1203038165.jpg';
import artImg6 from '../assets/albums/art date/Snapchat-1211211887.jpg';
import artImg7 from '../assets/albums/art date/Snapchat-122066854.jpg';
import artVid2 from '../assets/albums/art date/Snapchat-1223133338.mp4';
import artImg8 from '../assets/albums/art date/Snapchat-1267739832.jpg';
import artImg9 from '../assets/albums/art date/Snapchat-1361525375.jpg';
import artImg10 from '../assets/albums/art date/Snapchat-1386991570.jpg';
import artImg11 from '../assets/albums/art date/Snapchat-166754221.jpg';
import artImg12 from '../assets/albums/art date/Snapchat-1755864904.jpg';
import artImg13 from '../assets/albums/art date/Snapchat-1762553618.jpg';
import artImg14 from '../assets/albums/art date/Snapchat-1767278430.jpg';
import artImg15 from '../assets/albums/art date/Snapchat-183391550.jpg';
import artImg16 from '../assets/albums/art date/Snapchat-184717893.jpg';
import artVid3 from '../assets/albums/art date/Snapchat-617585777.mp4';
import artImg17 from '../assets/albums/art date/Snapchat-1889480375.jpg';
import artImg18 from '../assets/albums/art date/Snapchat-1981462126.jpg';
import artImg19 from '../assets/albums/art date/Snapchat-1992287904.jpg';
import artImg20 from '../assets/albums/art date/Snapchat-337729128.jpg';
import artImg21 from '../assets/albums/art date/Snapchat-388811311.jpg';
import artImg22 from '../assets/albums/art date/Snapchat-597037957.jpg';
import artImg23 from '../assets/albums/art date/Snapchat-607715139.jpg';
import artImg24 from '../assets/albums/art date/Snapchat-617538490.jpg';
import artImg25 from '../assets/albums/art date/Snapchat-632865432.jpg';
import artImg26 from '../assets/albums/art date/Snapchat-704270314.jpg';
import artImg27 from '../assets/albums/art date/Snapchat-865463239.jpg';

// Rooftop Rebels
import rooftopCover from '../assets/albums/rooftop date/20250329_152446.jpg';
import rooftopImg1 from '../assets/albums/rooftop date/20250329_145520.jpg';
import rooftopImg2 from '../assets/albums/rooftop date/20250329_142252.jpg';
import rooftopImg3 from '../assets/albums/rooftop date/20250329_152446.jpg';
import rooftopImg4 from '../assets/albums/rooftop date/20250329_152710.jpg';
import rooftopImg5 from '../assets/albums/rooftop date/20250517_163811.jpg';
import rooftopImg6 from '../assets/albums/rooftop date/Snapchat-1412665655.jpg';
import rooftopImg7 from '../assets/albums/rooftop date/Snapchat-1565705203.jpg';
import rooftopImg8 from '../assets/albums/rooftop date/Snapchat-1571863218.jpg';

// Randoms
import randomsCover from '../assets/albums/randoms/Snapchat-2012772674.jpg';
import rnd_20250214_171922 from '../assets/albums/randoms/20250214_171922.jpg';
import rnd_20250214_172017 from '../assets/albums/randoms/20250214_172017.jpg';
import rnd_vid_103123124 from '../assets/albums/randoms/Snapchat-103123124.mp4';
import rnd_1037530612 from '../assets/albums/randoms/Snapchat-1037530612.jpg';
import rnd_1941345676 from '../assets/albums/randoms/Snapchat-1941345676.jpg';
import rnd_1967554179 from '../assets/albums/randoms/Snapchat-1967554179.jpg';
import rnd_1976865519 from '../assets/albums/randoms/Snapchat-1976865519.jpg';
// randomsCover already imported for Snapchat-2012772674.jpg
import rnd_vid_2017212395 from '../assets/albums/randoms/Snapchat-2017212395.mp4';
import rnd_2048073210 from '../assets/albums/randoms/Snapchat-2048073210.jpg';
import rnd_312219279 from '../assets/albums/randoms/Snapchat-312219279.jpg';
import rnd_337366375 from '../assets/albums/randoms/Snapchat-337366375.jpg';
import rnd_75640906 from '../assets/albums/randoms/Snapchat-75640906.jpg';
import rnd_79750910 from '../assets/albums/randoms/Snapchat-79750910.jpg';
import rnd_916854534 from '../assets/albums/randoms/Snapchat-916854534.jpg';

const Gallery = () => {
  // Album structure: cover, title, description, media[]
  const albums = [
    {
      id: 1,
      title: 'First Date',
      description: 'Our first official date memories',
      cover: firstDateCover,
      media: [
        { type: 'image', url: firstDateImg1, title: 'Our First Date', description: 'Miss these your glasses' },
        { type: 'image', url: firstDateImg2, title: '', description: 'We were so happy before the churros came 🙄' },
        { type: 'image', url: firstDateImg3, title: 'Skinnnnn', description: '' },
        { type: 'image', url: firstDateImg4, title: '', description: '' },
        { type: 'image', url: firstDateImg5, title: 'Veins Popping', description: '' },
        { type: 'image', url: firstDateImg6, title: '', description: '' },
        { type: 'image', url: firstDateImg7, title: 'This is all you know', description: '' },
      ],
    },
    {
      id: 2,
      title: 'Art Gallery Date',
      description: 'Ft. Kanta Wig',
      cover: artGalleryCover,
      media: [
        { type: 'image', url: artImg1, title: 'It\'s the lips for me', description: '' },
        { type: 'video', url: artVid1, title: 'By force Video', description: '' },
        { type: 'image', url: artImg2, title: '👍', description: '' },
        { type: 'image', url: artImg3, title: '', description: '' },
        { type: 'image', url: artImg4, title: '', description: 'We should go here again' },
        { type: 'image', url: artImg5, title: 'There was NOTHING on the floor', description: 'Posing with art.' },
        { type: 'image', url: artImg6, title: 'Okkkkkkk', description: '👯' },
        { type: 'image', url: artImg7, title: '', description: '' },
        { type: 'video', url: artVid2, title: '', description: '' },
        { type: 'image', url: artImg8, title: 'Kanta wig in the wind', description: '' },
        { type: 'image', url: artImg9, title: 'The art behind the art', description: '' },
        { type: 'image', url: artImg10, title: 'Our Favorite Pose', description: '' },
        { type: 'image', url: artImg11, title: '', description: 'I don\'t know what we were trying to do here.' },
        { type: 'image', url: artImg12, title: 'Scared Victim Shot', description: '' },
        { type: 'image', url: artImg13, title: '', description: '' },
        { type: 'image', url: artImg14, title: 'Full Vex', description: 'Please don\'t beat me' },
        { type: 'image', url: artImg15, title: 'Hm', description: 'Hm' },
        { type: 'image', url: artImg16, title: '', description: '' },
        { type: 'video', url: artVid3, title: 'Moody Maame', description: '' },
        { type: 'image', url: artImg17, title: '', description: '' },
        { type: 'image', url: artImg18, title: '', description: '' },
        { type: 'image', url: artImg19, title: 'Good Cop Bad Cop', description: 'We all know who the good cop is' },
        { type: 'image', url: artImg20, title: '', description: '' },
        { type: 'image', url: artImg21, title: '', description: '' },
        { type: 'image', url: artImg22, title: '', description: '' },
        { type: 'image', url: artImg23, title: '', description: '' },
        { type: 'image', url: artImg24, title: '', description: '' },
        { type: 'image', url: artImg25, title: '👍', description: '👍' },
        { type: 'image', url: artImg26, title: 'Your second best angle', description: '' },
        { type: 'image', url: artImg27, title: 'Fin', description: '' },
      ],
    },
    {
      id: 3,
      title: 'Rooftop Rebels',
      description: 'Our Spot',
      cover: rooftopCover,
      media: [
        { type: 'image', url: rooftopImg1, title: '', description: 'Lowkey one of my favorites' },
        { type: 'image', url: rooftopImg2, title: '', description: '' },
        { type: 'image', url: rooftopImg3, title: '', description: '' },
        { type: 'image', url: rooftopImg4, title: '', description: '' },
        { type: 'image', url: rooftopImg5, title: 'Epic Fail', description: 'But like i tear o' },
        { type: 'image', url: rooftopImg6, title: '', description: '' },
        { type: 'image', url: rooftopImg7, title: '', description: '' },
        { type: 'image', url: rooftopImg8, title: '', description: '' },
      ],
    },
    {
      id: 4,
      title: 'Randoms',
      description: 'Random moments and memories',
      cover: randomsCover,
      media: [
        { type: 'image', url: rnd_20250214_171922, title: '"Beautiful"', description: '' },
        { type: 'image', url: rnd_20250214_172017, title: '', description: '' },
        { type: 'video', url: rnd_vid_103123124, title: 'Passenger Princess', description: '' },
        { type: 'image', url: rnd_1037530612, title: 'Birthday Princess', description: '' },
        { type: 'image', url: rnd_1941345676, title: '', description: '' },
        { type: 'image', url: rnd_1967554179, title: 'Cute', description: '' },
        { type: 'image', url: rnd_1976865519, title: '', description: '' },
        { type: 'image', url: randomsCover, title: '', description: '' },
        { type: 'video', url: rnd_vid_2017212395, title: '', description: 'I\'m very serious' },
        { type: 'image', url: rnd_2048073210, title: 'First art Session', description: 'Mine is the nicer fish' },
        { type: 'image', url: rnd_312219279, title: '', description: '' },
        { type: 'image', url: rnd_337366375, title: '', description: '' },
        { type: 'image', url: rnd_75640906, title: 'Greet The World with Open Arms', description: '' },
        { type: 'image', url: rnd_79750910, title: 'Hm', description: 'Catfish' },
        { type: 'image', url: rnd_916854534, title: '', description: '' },
      ],
    },
  ];

  // Track selected album and media index
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<number>(0);

  const openAlbum = (albumIdx: number) => {
    setSelectedAlbum(albumIdx);
    setSelectedMedia(0);
  };
  const closeAlbum = () => {
    setSelectedAlbum(null);
    setSelectedMedia(0);
  };
  const nextMedia = () => {
    if (selectedAlbum !== null) {
      const mediaArr = albums[selectedAlbum].media;
      setSelectedMedia((selectedMedia + 1) % mediaArr.length);
    }
  };
  const prevMedia = () => {
    if (selectedAlbum !== null) {
      const mediaArr = albums[selectedAlbum].media;
      setSelectedMedia(selectedMedia === 0 ? mediaArr.length - 1 : selectedMedia - 1);
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
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-light serif text-gray-800 mb-6">
            Our Gallery
          </h1>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Some moments of our journey together
          </p>
        </motion.div>
      </div>

      {/* Albums Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {albums.map((album, idx) => (
            <motion.div
              key={album.id}
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer sophisticated-hover"
              onClick={() => openAlbum(idx)}
            >
              <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl serif mb-2">{album.title}</h3>
                    <p className="text-sm opacity-90 mb-1">{album.description}</p>
                  </div>
                </div>
                <motion.div
                  className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Heart size={24} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Album Modal */}
      <AnimatePresence>
        {selectedAlbum !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-yellow-50/90 backdrop-blur-sm"
            onClick={closeAlbum}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-3xl max-h-[98vh] mx-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation - scrapbook themed buttons */}
              <button
                onClick={prevMedia}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-pink-200 border-2 border-pink-400 rounded-full shadow-lg hover:bg-pink-300 transition-colors text-pink-900 flex items-center justify-center"
                style={{ marginLeft: '1rem' }}
              >
                <ArrowLeft size={32} />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 bg-green-200 border-2 border-green-400 rounded-full shadow-lg hover:bg-green-300 transition-colors text-green-900 flex items-center justify-center"
                style={{ marginRight: '1rem' }}
              >
                <ArrowRight size={32} />
              </button>
              {/* Close button - scrapbook themed */}
              <button
                onClick={closeAlbum}
                className="absolute top-4 right-4 z-20 p-3 bg-yellow-200 border-2 border-yellow-400 rounded-full shadow-lg hover:bg-yellow-300 transition-colors text-yellow-900"
              >
                <X size={28} />
              </button>
              <div className="relative scrapbook-bg rounded-3xl overflow-visible shadow-2xl p-8 flex flex-col items-center justify-center w-full" style={{ backgroundColor: '#fffbe9' }}>
                {/* Decorative paper texture background */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")', backgroundRepeat: 'repeat' }} />
                {/* Polaroid frame with tape and rotation */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="relative polaroid-frame bg-white rounded-xl shadow-lg p-2 mb-4" style={{ transform: `rotate(${selectedMedia % 2 === 0 ? '-3deg' : '3deg'})`, minWidth: '340px', maxWidth: '500px' }}>
                    {/* Decorative tape */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-200 rounded rotate-[-8deg] shadow-md border border-yellow-300" />
                    {albums[selectedAlbum].media[selectedMedia].type === 'image' ? (
                      <img
                        src={albums[selectedAlbum].media[selectedMedia].url}
                        alt={
                          'title' in albums[selectedAlbum].media[selectedMedia]
                            ? (albums[selectedAlbum].media[selectedMedia] as any).title || ''
                            : ''
                        }
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover rounded-lg"
                        style={{ maxHeight: '600px', maxWidth: '450px' }}
                      />
                    ) : (
                      <video
                        src={albums[selectedAlbum].media[selectedMedia].url}
                        controls
                        preload="metadata"
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                        style={{ maxHeight: '600px', maxWidth: '450px' }}
                      />
                    )}
                  </div>
                  {/* Title/description below polaroid */}
                  <div className="text-center mt-2">
                    {'title' in albums[selectedAlbum].media[selectedMedia] && (albums[selectedAlbum].media[selectedMedia] as any).title && (
                      <h3 className="text-2xl serif text-pink-700 mb-2 italic drop-shadow-sm">
                        {(albums[selectedAlbum].media[selectedMedia] as any).title}
                      </h3>
                    )}
                    {'description' in albums[selectedAlbum].media[selectedMedia] && (albums[selectedAlbum].media[selectedMedia] as any).description && (
                      <p className="text-lg text-green-700 mb-2 script">
                        {(albums[selectedAlbum].media[selectedMedia] as any).description}
                      </p>
                    )}
                  </div>
                </div>
                {/* Optional: Add whimsical sticker/doodle */}
                <div className="absolute bottom-6 right-8 z-0 opacity-40 pointer-events-none">
                  <Heart size={48} className="text-pink-300" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mt-32"
      >
        <div className="elegant-card rounded-3xl p-16 text-center">
          <Heart className="text-yellow-600 mx-auto mb-8" size={48} />
          <h3 className="text-3xl serif text-gray-800 mb-6">Ready to make more memories with you</h3>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Cheers to many more memories to come...
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;