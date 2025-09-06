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
      className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
          Messages
        </h1>
        <div className="w-24 h-px bg-yellow-600 mx-auto mb-8"></div>
        <p className="text-2xl text-gray-600 mb-8">
          🚧 This section is under construction 🚧
        </p>
        <p className="text-lg text-gray-500">
          I'll work on this side later i beg🙏
        </p>
      </div>
    </motion.div>
  );
};

export default Messages;