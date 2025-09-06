import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ArrowLeft, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      title: 'First Date',
      description: 'The beginning of our beautiful story',
      location: 'Downtown Café',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1816654/pexels-photo-1816654.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      title: 'Beach Sunset',
      description: 'Golden hour with my golden girl',
      location: 'Malibu Beach',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1024988/pexels-photo-1024988.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      title: 'City Lights',
      description: 'Dancing under the stars',
      location: 'Rooftop Terrace',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      title: 'Cozy Evening',
      description: 'Home is wherever you are',
      location: 'Our Place',
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      title: 'Morning Coffee',
      description: 'Perfect mornings together',
      location: 'Kitchen Counter',
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1024989/pexels-photo-1024989.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      title: 'Adventure',
      description: 'Exploring the world hand in hand',
      location: 'Mountain Trail',
    },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
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

      {/* Gallery Grid */}
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
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer sophisticated-hover"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl serif mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90 mb-1">{image.description}</p>
                    <p className="text-xs opacity-70 uppercase tracking-wider">{image.location}</p>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors text-white"
              >
                <ArrowLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors text-white"
              >
                <ArrowRight size={24} />
              </button>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors text-white"
              >
                <X size={24} />
              </button>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] md:aspect-[16/10]">
                  <img
                    src={images[selectedImage].url}
                    alt={images[selectedImage].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl serif text-gray-800 mb-3">
                    {images[selectedImage].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">
                    {images[selectedImage].description}
                  </p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    {images[selectedImage].location}
                  </p>
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
          <h3 className="text-3xl serif text-gray-800 mb-6">Add New Memories</h3>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Upload more beautiful moments to our collection
          </p>
          <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-500 rounded-none font-medium tracking-wider">
            CHOOSE PHOTOS
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;