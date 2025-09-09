import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Letter from './pages/Letter';
import Countdown from './pages/Countdown';
import Playlist from './pages/Playlist';

// import Map from './pages/Map';
import Calendar from './pages/Calendar';
import Messages from './pages/Messages';
import FloatingElements from './components/FloatingHearts';
import './App.css';

function AppContent() {
  const location = useLocation();
  const [navbarTextColor, setNavbarTextColor] = useState('text-white');

  useEffect(() => {
    // Always scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'auto' });
    if (location.pathname === '/') {
      const onScroll = () => {
        if (window.scrollY > window.innerHeight * 0.8) {
          setNavbarTextColor('text-gray-900');
        } else {
          setNavbarTextColor('text-white');
        }
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    } else {
      setNavbarTextColor('');
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 relative overflow-hidden">
      <FloatingElements />
      <Navbar navbarTextColor={location.pathname === '/' ? navbarTextColor : undefined} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/countdown" element={<Countdown />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;