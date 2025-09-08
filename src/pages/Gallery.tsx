import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ArrowLeft, ArrowRight } from 'lucide-react';

const Gallery = () => {
  // Album structure: cover, title, description, media[]
  const albums = [
    {
      id: 1,
      title: 'First Date',
      description: 'Our first official date memories',
      cover: '/src/assets/albums/first date/20240909_121005.jpg',
      media: [
        { type: 'image', url: '/src/assets/albums/first date/20240909_121005.jpg', title: 'Our First Date', description: 'Miss these your glasses' },
        { type: 'image', url: '/src/assets/albums/first date/20240909_121008.jpg', title: '', description: 'We were so happy before the churros came 🙄' },
        { type: 'image', url: '/src/assets/albums/first date/Snapchat-1123126089.jpg', title: 'Skinnnnn', description: '' },
        { type: 'image', url: '/src/assets/albums/first date/Snapchat-188329827.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/first date/Snapchat-283777194.jpg', title: 'Veins Popping', description: '' },
        { type: 'image', url: '/src/assets/albums/first date/Snapchat-690853652.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/first date/Snapchat-871769054.jpg', title: 'This is all you know', description: '' },
      ],
    },
    {
      id: 2,
      title: 'Art Gallery Date',
      description: 'Ft. Kanta Wig',
      cover: '/src/assets/albums/art date/Snapchat-337729128.jpg',
      media: [
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1071229453.jpg', title: 'It\'s the lips for me', description: '' },
        { type: 'video', url: '/src/assets/albums/art date/Snapchat-1173644644.mp4', title: 'By force Video', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1184203243.jpg', title: '👍', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1198843755.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1199493870.jpg', title: '', description: 'We should go here again' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1203038165.jpg', title: 'There was NOTHING on the floor', description: 'Posing with art.' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1211211887.jpg', title: 'Okkkkkkk', description: '👯' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-122066854.jpg', title: '', description: '' },
        { type: 'video', url: '/src/assets/albums/art date/Snapchat-1223133338.mp4', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1267739832.jpg', title: 'Kanta wig in the wind', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1361525375.jpg', title: 'The art behind the art', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1386991570.jpg', title: 'Our Favorite Pose', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-166754221.jpg', title: '', description: 'I don\'t know what we were trying to do here.' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1755864904.jpg', title: 'Scared Victim Shot', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1762553618.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1767278430.jpg', title: 'Full Vex', description: 'Please don\'t beat me' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-183391550.jpg', title: 'Hm', description: 'Hm' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-184717893.jpg', title: '', description: '' },
        { type: 'video', url: '/src/assets/albums/art date/Snapchat-617585777.mp4', title: 'Moody Maame', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1889480375.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1981462126.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-1992287904.jpg', title: 'Good Cop Bad Cop', description: 'We all know who the good cop is' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-337729128.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-388811311.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-597037957.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-607715139.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-617538490.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-632865432.jpg', title: '👍', description: '👍' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-704270314.jpg', title: 'Your second best angle', description: '' },
        { type: 'image', url: '/src/assets/albums/art date/Snapchat-865463239.jpg', title: 'Fin', description: '' },
      ],
    },
    {
      id: 3,
      title: 'Rooftop Date',
      description: 'Our Spot',
      cover: '/src/assets/albums/rooftop date/20250329_152446.jpg',
      media: [
        { type: 'image', url: '/src/assets/albums/rooftop date/20250329_145520.jpg', title: '', description: 'Lowkey one of my favorites' },
        { type: 'image', url: '/src/assets/albums/rooftop date/20250329_142252.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/rooftop date/20250329_152446.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/rooftop date/20250329_152710.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/rooftop date/20250517_163811.jpg', title: 'Epic Fail', description: 'But like i tear o' },
        { type: 'image', url: '/src/assets/albums/rooftop date/Snapchat-1412665655.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/rooftop date/Snapchat-1565705203.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/rooftop date/Snapchat-1571863218.jpg', title: '', description: '' },
      ],
    },
    {
      id: 4,
      title: 'Randoms',
      description: 'Random moments and memories',
      cover: '/src/assets/albums/randoms/Snapchat-2012772674.jpg',
      media: [
        { type: 'image', url: '/src/assets/albums/randoms/20250214_171922.jpg', title: '"Beautiful"', description: '' },
        { type: 'image', url: '/src/assets/albums/randoms/20250214_172017.jpg', title: '', description: '' },
        { type: 'video', url: '/src/assets/albums/randoms/Snapchat-103123124.mp4', title: 'Random Video', description: 'A random video moment.' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-1037530612.jpg', title: 'Birthday Princess', description: '' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-1941345676.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-1967554179.jpg', title: 'Cute', description: '' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-1976865519.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-2012772674.jpg', title: '', description: '' },
        { type: 'video', url: '/src/assets/albums/randoms/Snapchat-2017212395.mp4', title: 'Random Clip', description: 'A random video clip.' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-2048073210.jpg', title: 'First art Session', description: 'Mine is the nicer fish' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-312219279.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-337366375.jpg', title: '', description: '' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-450103072.jpg', title: 'Sage Appreciation Picture', description: '' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-75640906.jpg', title: 'Greet The World with Open Arms', description: '' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-79750910.jpg', title: 'Hm', description: 'Catfish' },
        { type: 'image', url: '/src/assets/albums/randoms/Snapchat-916854534.jpg', title: '', description: '' },
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
            A curated collection of moments that define our journey together
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
                        className="w-full h-full object-cover rounded-lg"
                        style={{ maxHeight: '600px', maxWidth: '450px' }}
                      />
                    ) : (
                      <video
                        src={albums[selectedAlbum].media[selectedMedia].url}
                        controls
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