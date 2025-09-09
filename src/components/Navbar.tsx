// import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Camera, Calendar, Music, BookOpen } from 'lucide-react';

interface NavbarProps {
  navbarTextColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ navbarTextColor }) => {
  const navItems = [
    { path: '/', label: 'Home', icon: Heart },
    { path: '/gallery', label: 'Gallery', icon: Camera },
    { path: '/letter', label: 'Letter', icon: BookOpen },
    { path: '/countdown', label: 'Countdown', icon: Calendar },
    { path: '/playlist', label: 'Playlist', icon: Music },

  ];

  const location = useLocation();
  // Map routes to text and bar color classes
  const routeColors: Record<string, { text: string; bar: string }> = {
    '/': { text: 'text-white', bar: 'bg-gray-800' },
    '/gallery': { text: 'text-gray-900', bar: 'bg-white' },
    '/letter': { text: 'text-gray-900', bar: 'bg-white' },
    '/countdown': { text: 'text-gray-900', bar: 'bg-white' },
    '/playlist': { text: 'text-gray-900', bar: 'bg-white' },

    '/messages': { text: 'text-gray-900', bar: 'bg-white' },
  };
  // Use dynamic color for Home page if prop is provided
  let textColorClass = routeColors[location.pathname]?.text || 'text-white';
  let barColorClass = routeColors[location.pathname]?.bar || 'bg-gray-800';
  if (location.pathname === '/' && navbarTextColor) {
    textColorClass = navbarTextColor;
    barColorClass = navbarTextColor === 'text-white' ? 'bg-gray-800' : 'bg-white';
  }
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`glass-morphism rounded-2xl px-6 py-3 ${textColorClass}`}>
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <Heart className="text-yellow-600" size={20} />
              <h1 className={`text-lg font-bold serif ${textColorClass}`}>
                Our Story
              </h1>
            </motion.div>

            <div className="flex space-x-1 overflow-x-auto">
              {navItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm whitespace-nowrap ${textColorClass} ${isActive
                      ? `${barColorClass} shadow-lg`
                      : 'hover:bg-white/10 hover:shadow-md'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={16} />
                      <span className="font-medium hidden sm:inline">{label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className={`absolute inset-0 rounded-lg -z-10 ${barColorClass}`}
                          initial={false}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;