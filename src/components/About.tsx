import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutData } from '../data/portfolioData';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-number">01.</span>
            ABOUT ME
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="about-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <motion.h3 
            style={{ 
              fontSize: '1.5rem', 
              color: 'var(--primary-color)', 
              marginBottom: '1rem',
              position: 'relative'
            }}
            animate={{ 
              scale: [1, 1.05, 1],
              textShadow: ['0 0 0px #00f2fe', '0 0 20px #00f2fe', '0 0 0px #00f2fe']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Who I am?
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #ff6b9d, #00f2fe)',
                borderRadius: '2px'
              }}
              animate={{ 
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.h3>
        </motion.div>

        <div className="about-content" ref={ref}>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ 
              fontSize: '2rem', 
              color: 'var(--primary-color)', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Harshit Rajput
            </h3>
            <p>{aboutData.description}</p>
            <div className="about-stats">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="image-container">
                     <motion.img
                       src="/Harshit-portfolio/profile-image.jpg"
                       alt="Harshit Rajput - .NET Developer"
                       className="about-profile-image"
                       loading="lazy"
                       decoding="async"
                       whileHover={{ scale: 1.05 }}
                       transition={{ duration: 0.3 }}
                       style={{
                         width: '100%',
                         height: '100%',
                         objectFit: 'cover',
                         borderRadius: '1rem',
                         filter: 'grayscale(20%) contrast(1.1)',
                         transition: 'filter 0.3s ease'
                       }}
                       animate={{
                         filter: ['grayscale(20%) contrast(1.1)', 'grayscale(0%) contrast(1.2)', 'grayscale(20%) contrast(1.1)']
                       }}
                     />
              <motion.div
                className="image-overlay"
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.8), rgba(0, 242, 254, 0.8))',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <motion.div
                  className="play-button"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    fontSize: '3rem',
                    color: 'white',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  👨‍💻
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
