// Gallery image imports for preloading
import firstDateCover from './pages/assets/albums/first date/20240909_121005.jpg';
import firstDateImg1 from './pages/assets/albums/first date/20240909_121005.jpg';
import firstDateImg2 from './pages/assets/albums/first date/20240909_121008.jpg';
import firstDateImg3 from './pages/assets/albums/first date/Snapchat-1123126089.jpg';
import firstDateImg4 from './pages/assets/albums/first date/Snapchat-188329827.jpg';
import firstDateImg5 from './pages/assets/albums/first date/Snapchat-283777194.jpg';
import firstDateImg6 from './pages/assets/albums/first date/Snapchat-690853652.jpg';
import firstDateImg7 from './pages/assets/albums/first date/Snapchat-871769054.jpg';
import artGalleryCover from './pages/assets/albums/art date/Snapchat-337729128.jpg';
import artImg1 from './pages/assets/albums/art date/Snapchat-1071229453.jpg';
import artImg2 from './pages/assets/albums/art date/Snapchat-1184203243.jpg';
import artImg3 from './pages/assets/albums/art date/Snapchat-1198843755.jpg';
import artImg4 from './pages/assets/albums/art date/Snapchat-1199493870.jpg';
import artImg5 from './pages/assets/albums/art date/Snapchat-1203038165.jpg';
import artImg6 from './pages/assets/albums/art date/Snapchat-1211211887.jpg';
import artImg7 from './pages/assets/albums/art date/Snapchat-122066854.jpg';
import artImg8 from './pages/assets/albums/art date/Snapchat-1267739832.jpg';
import artImg9 from './pages/assets/albums/art date/Snapchat-1361525375.jpg';
import artImg10 from './pages/assets/albums/art date/Snapchat-1386991570.jpg';
import artImg11 from './pages/assets/albums/art date/Snapchat-166754221.jpg';
import artImg12 from './pages/assets/albums/art date/Snapchat-1755864904.jpg';
import artImg13 from './pages/assets/albums/art date/Snapchat-1762553618.jpg';
import artImg14 from './pages/assets/albums/art date/Snapchat-1767278430.jpg';
import artImg15 from './pages/assets/albums/art date/Snapchat-183391550.jpg';
import artImg16 from './pages/assets/albums/art date/Snapchat-184717893.jpg';
import artImg17 from './pages/assets/albums/art date/Snapchat-1889480375.jpg';
import artImg18 from './pages/assets/albums/art date/Snapchat-1981462126.jpg';
import artImg19 from './pages/assets/albums/art date/Snapchat-1992287904.jpg';
import artImg20 from './pages/assets/albums/art date/Snapchat-337729128.jpg';
import artImg21 from './pages/assets/albums/art date/Snapchat-388811311.jpg';
import artImg22 from './pages/assets/albums/art date/Snapchat-597037957.jpg';
import artImg23 from './pages/assets/albums/art date/Snapchat-607715139.jpg';
import artImg24 from './pages/assets/albums/art date/Snapchat-617538490.jpg';
import artImg25 from './pages/assets/albums/art date/Snapchat-632865432.jpg';
import artImg26 from './pages/assets/albums/art date/Snapchat-704270314.jpg';
import artImg27 from './pages/assets/albums/art date/Snapchat-865463239.jpg';
import rooftopCover from './pages/assets/albums/rooftop date/20250329_152446.jpg';
import rooftopImg1 from './pages/assets/albums/rooftop date/20250329_145520.jpg';
import rooftopImg2 from './pages/assets/albums/rooftop date/20250329_142252.jpg';
import rooftopImg3 from './pages/assets/albums/rooftop date/20250329_152446.jpg';
import rooftopImg4 from './pages/assets/albums/rooftop date/20250329_152710.jpg';
import rooftopImg5 from './pages/assets/albums/rooftop date/20250517_163811.jpg';
import rooftopImg6 from './pages/assets/albums/rooftop date/Snapchat-1412665655.jpg';
import rooftopImg7 from './pages/assets/albums/rooftop date/Snapchat-1565705203.jpg';
import rooftopImg8 from './pages/assets/albums/rooftop date/Snapchat-1571863218.jpg';
import randomsCover from './pages/assets/albums/randoms/Snapchat-2012772674.jpg';
import rnd_20250214_171922 from './pages/assets/albums/randoms/20250214_171922.jpg';
import rnd_20250214_172017 from './pages/assets/albums/randoms/20250214_172017.jpg';
import rnd_1037530612 from './pages/assets/albums/randoms/Snapchat-1037530612.jpg';
import rnd_1941345676 from './pages/assets/albums/randoms/Snapchat-1941345676.jpg';
import rnd_1967554179 from './pages/assets/albums/randoms/Snapchat-1967554179.jpg';
import rnd_1976865519 from './pages/assets/albums/randoms/Snapchat-1976865519.jpg';
import rnd_2048073210 from './pages/assets/albums/randoms/Snapchat-2048073210.jpg';
import rnd_312219279 from './pages/assets/albums/randoms/Snapchat-312219279.jpg';
import rnd_337366375 from './pages/assets/albums/randoms/Snapchat-337366375.jpg';
import rnd_75640906 from './pages/assets/albums/randoms/Snapchat-75640906.jpg';
import rnd_79750910 from './pages/assets/albums/randoms/Snapchat-79750910.jpg';
import rnd_916854534 from './pages/assets/albums/randoms/Snapchat-916854534.jpg';
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
            // Preload gallery images after login
            const galleryImages = [
              firstDateCover, firstDateImg1, firstDateImg2, firstDateImg3, firstDateImg4, firstDateImg5, firstDateImg6, firstDateImg7,
              artGalleryCover, artImg1, artImg2, artImg3, artImg4, artImg5, artImg6, artImg7, artImg8, artImg9, artImg10, artImg11, artImg12, artImg13, artImg14, artImg15, artImg16, artImg17, artImg18, artImg19, artImg20, artImg21, artImg22, artImg23, artImg24, artImg25, artImg26, artImg27,
              rooftopCover, rooftopImg1, rooftopImg2, rooftopImg3, rooftopImg4, rooftopImg5, rooftopImg6, rooftopImg7, rooftopImg8,
              randomsCover, rnd_20250214_171922, rnd_20250214_172017, rnd_1037530612, rnd_1941345676, rnd_1967554179, rnd_1976865519, rnd_2048073210, rnd_312219279, rnd_337366375, rnd_75640906, rnd_79750910, rnd_916854534
            ];
            galleryImages.forEach(src => {
              if (src) {
                const img = new window.Image();
                img.src = src;
              }
            });
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