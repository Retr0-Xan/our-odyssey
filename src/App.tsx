import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Gallery from './pages/Gallery';
import Letter from './pages/Letter';
import Countdown from './pages/Countdown';
import Playlist from './pages/Playlist';
import Quiz from './pages/Quiz';
import Map from './pages/Map';
import Calendar from './pages/Calendar';
import Messages from './pages/Messages';
import FloatingElements from './components/FloatingHearts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 relative overflow-hidden">
        <FloatingElements />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/countdown" element={<Countdown />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/map" element={<Map />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;