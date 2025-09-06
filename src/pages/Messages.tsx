import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Quote, Heart, Feather } from 'lucide-react';

const Messages = () => {
  const [showForm, setShowForm] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "In your eyes, I found my home. In your heart, I found my love. In your soul, I found my mate. With you, I am whole, complete, and utterly content.",
      author: "Your Devoted Love",
      date: "December 15, 2024",
      style: "elegant",
    },
    {
      id: 2,
      text: "You are the poetry I never knew how to write and the song I never knew how to sing. You complete the symphony of my life.",
      author: "Forever Yours",
      date: "December 10, 2024",
      style: "romantic",
    },
    {
      id: 3,
      text: "Every sunrise with you feels like the first. Every sunset, a promise of tomorrow. You are my constant in a world of change.",
      author: "Your Eternal Admirer",
      date: "December 5, 2024",
      style: "poetic",
    },
    {
      id: 4,
      text: "They say home is where the heart is. I never understood that until I met you. Now I know that home isn't a place—it's a person. It's you.",
      author: "Your Heart's Keeper",
      date: "November 28, 2024",
      style: "intimate",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        author: "Anonymous Admirer",
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        style: ['elegant', 'romantic', 'poetic', 'intimate'][Math.floor(Math.random() * 4)],
      };
      setMessages([message, ...messages]);
      setNewMessage('');
      setShowForm(false);
    }
  };

  const getMessageStyle = (style: string) => {
    const styles = {
      elegant: 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200',
      romantic: 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200',
      poetic: 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200',
      intimate: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200',
    };
    return styles[style as keyof typeof styles] || styles.elegant;
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
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-light serif text-gray-800 mb-6">
            Love Letters
          </h1>
          <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Words from the heart, written with love
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Add Message Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mb-16"
        >
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center space-x-3 px-8 py-4 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-500 rounded-none font-medium tracking-wider mx-auto"
          >
            <Feather size={20} />
            <span>WRITE A LETTER</span>
            <Heart size={20} />
          </button>
        </motion.div>

        {/* Message Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="mb-16"
            >
              <div className="elegant-card rounded-3xl p-12 border-2 border-yellow-200">
                <div className="flex items-center justify-center mb-8">
                  <Quote className="text-yellow-600 mr-4" size={32} />
                  <h3 className="text-3xl serif text-gray-800">Pour Your Heart Out</h3>
                  <Quote className="text-yellow-600 ml-4 transform rotate-180" size={32} />
                </div>
                
                <form onSubmit={handleSubmit}>
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Let your heart speak..."
                    className="w-full h-48 p-8 border-2 border-gray-200 rounded-2xl resize-none script text-xl text-gray-700 placeholder-gray-400 bg-white focus:border-yellow-400 focus:outline-none transition-colors leading-relaxed"
                    required
                  />
                  
                  <div className="flex justify-end space-x-4 mt-8">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-8 py-3 border-2 border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors rounded-none"
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gray-800 text-white hover:bg-gray-900 transition-colors rounded-none font-medium tracking-wider"
                    >
                      SEND WITH LOVE
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Messages */}
        <div className="space-y-12">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 60, rotate: Math.random() * 2 - 1 }}
              animate={{ opacity: 1, y: 0, rotate: Math.random() * 2 - 1 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ 
                scale: 1.02, 
                rotate: 0,
                transition: { duration: 0.3 }
              }}
              className={`
                relative p-12 rounded-3xl border-2 transform shadow-lg hover:shadow-xl transition-all duration-500
                ${getMessageStyle(message.style)}
                ${index % 2 === 0 ? 'ml-0 mr-8' : 'ml-8 mr-0'}
              `}
              style={{
                transform: `rotate(${Math.random() * 1.5 - 0.75}deg)`,
              }}
            >
              {/* Paper texture overlay */}
              <div className="absolute inset-0 opacity-5 rounded-3xl" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                   }} 
              />
              
              <div className="relative">
                <Quote className="text-gray-400 mb-6" size={32} />
                <p className="script text-2xl md:text-3xl leading-relaxed text-gray-800 mb-8">
                  {message.text}
                </p>
                
                <div className="flex justify-between items-end pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Heart className="text-red-400 fill-current" size={20} />
                    <span className="script text-xl text-gray-700">
                      {message.author}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 italic">
                    {message.date}
                  </span>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 opacity-20">
                <div className="w-8 h-8 border-2 border-gray-400 rounded-full" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-20">
                <div className="w-6 h-6 bg-gray-400 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <Feather className="text-gray-400 mx-auto mb-8" size={64} />
            <h3 className="text-3xl serif text-gray-600 mb-6">
              No letters yet
            </h3>
            <p className="text-xl text-gray-500">
              Be the first to write a beautiful love letter
            </p>
          </motion.div>
        )}

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24 py-16"
        >
          <div className="elegant-card rounded-3xl p-12 max-w-2xl mx-auto">
            <Quote className="text-yellow-600 mx-auto mb-6" size={48} />
            <blockquote className="text-2xl script text-gray-700 leading-relaxed mb-6">
              "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
            </blockquote>
            <cite className="text-gray-500 italic">— Lao Tzu</cite>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Messages;