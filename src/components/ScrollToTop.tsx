import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className="scroll-to-top"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0
      }}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        background: 'var(--gradient-primary)',
        border: 'none',
        borderRadius: '50%',
        color: 'white',
        fontSize: '1.5rem',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-primary)'
      }}
    >
      <span>↑</span>
    </motion.button>
  );
};

export default ScrollToTop;
