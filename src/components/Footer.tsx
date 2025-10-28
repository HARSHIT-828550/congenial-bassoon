import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>© Developer Portfolio by <span className="highlight">Harshit Rajput</span></p>
          <div className="footer-links">
            {['home', 'about', 'projects', 'contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
