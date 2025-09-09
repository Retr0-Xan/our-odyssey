import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Letter from './pages/Letter';
import Countdown from './pages/Countdown';
import Playlist from './pages/Playlist';

// import Map from './pages/Map';
import Calendar from './pages/Calendar';
import Login from './pages/Login';
import FloatingElements from './components/FloatingHearts';
import './App.css';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [navbarTextColor, setNavbarTextColor] = useState('text-white');
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem('odyssey_logged_in') === 'true';
  });

  // Redirect to login on initial load if not logged in
  useEffect(() => {
    if (!loggedIn && location.pathname !== '/login') {
      navigate('/login', { replace: true });
    }
  }, [loggedIn, location.pathname, navigate]);

  // Listen for login/logout events
  useEffect(() => {
    const handler = () => {
      setLoggedIn(localStorage.getItem('odyssey_logged_in') === 'true');
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

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
      {location.pathname !== '/login' && loggedIn && (
        <Navbar navbarTextColor={location.pathname === '/' ? navbarTextColor : undefined} onLogout={() => {
          localStorage.setItem('odyssey_logged_in', 'false');
          setLoggedIn(false);
          navigate('/login');
        }} />
      )}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/login" element={<Login onLogin={() => {
            localStorage.setItem('odyssey_logged_in', 'true');
            setLoggedIn(true);
            navigate('/');
          }} />} />
          {loggedIn && <Route path="/" element={<Home />} />}
          {loggedIn && <Route path="/gallery" element={<Gallery />} />}
          {loggedIn && <Route path="/letter" element={<Letter />} />}
          {loggedIn && <Route path="/countdown" element={<Countdown />} />}
          {loggedIn && <Route path="/playlist" element={<Playlist />} />}
          {loggedIn && <Route path="/calendar" element={<Calendar />} />}
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