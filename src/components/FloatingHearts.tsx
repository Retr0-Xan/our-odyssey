import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingElements = () => {
  const [elements, setElements] = useState<{ id: number; x: number; y: number; type: string; size: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const types = ['✦', '◆', '○', '✧', '❋', '✱'];
      const newElement = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        type: types[Math.floor(Math.random() * types.length)],
        size: Math.random() * 20 + 15,
      };
      
      setElements(prev => [...prev, newElement]);
      
      setTimeout(() => {
        setElements(prev => prev.filter(el => el.id !== newElement.id));
      }, 20000);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <AnimatePresence>
        {elements.map((element) => (
          <motion.div
            key={element.id}
            initial={{ 
              x: element.x, 
              y: element.y, 
              opacity: 0, 
              scale: 0,
              rotate: 0 
            }}
            animate={{
              y: -300,
              opacity: [0, 0.4, 0.6, 0.4, 0],
              scale: [0, 1, 1.2, 1, 0],
              rotate: [0, 180, 360],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 20,
              ease: "linear",
              times: [0, 0.1, 0.5, 0.9, 1],
            }}
            className="absolute text-yellow-600/30"
            style={{ 
              fontSize: `${element.size}px`,
              fontFamily: 'serif',
              filter: 'blur(0.5px)'
            }}
          >
            {element.type}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingElements;