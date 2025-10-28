import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            setActiveSection(sectionId || 'home');
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: isScrolled ? 'rgba(13, 18, 36, 0.98)' : 'rgba(13, 18, 36, 0.95)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            textShadow: '0 0 20px #00f2fe'
          }}
          animate={{
            textShadow: ['0 0 0px #00f2fe', '0 0 10px #00f2fe', '0 0 0px #00f2fe']
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            style={{ 
              textDecoration: 'none',
              color: '#00f2fe',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}
            whileHover={{ scale: 1.05 }}
          >
            Harshit Rajput
          </motion.a>
        </motion.div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
              whileHover={{ 
                scale: 1.1, 
                y: -3,
                color: '#00f2fe',
                textShadow: '0 0 10px #00f2fe'
              }}
              whileTap={{ scale: 0.9 }}
              animate={activeSection === item.id ? {
                color: '#00f2fe',
                textShadow: '0 0 15px #00f2fe',
                scale: [1, 1.05, 1]
              } : {}}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #00f2fe, #ff6b9d)',
                    borderRadius: '1px'
                  }}
                  layoutId="activeIndicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <motion.div
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
