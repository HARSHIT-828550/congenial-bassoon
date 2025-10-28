import React from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/portfolioData';

const Hero: React.FC = () => {
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
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              fontSize: '1.2rem',
              fontWeight: '500'
            }}
          >
            <motion.span
              className="wave-emoji"
              animate={{ 
                rotate: [0, 25, -15, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: '1.8rem' }}
            >
              👋
            </motion.span>
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {heroData.greeting}
            </motion.span>
            <motion.div
              style={{
                width: '3px',
                height: '20px',
                background: 'linear-gradient(45deg, #ff6b9d, #00f2fe)',
                borderRadius: '2px',
                marginLeft: '0.5rem'
              }}
              animate={{ 
                scaleY: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.2' }}
          >
            <motion.span 
              style={{ color: 'var(--text-light)' }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              This is 
            </motion.span>
            <motion.span 
              className="highlight" 
              style={{ color: '#ff6b9d' }}
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: ['0 0 0px #ff6b9d', '0 0 20px #ff6b9d', '0 0 0px #ff6b9d']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {heroData.name}
            </motion.span>
            <motion.span 
              style={{ color: 'var(--text-light)' }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              , I'm a 
            </motion.span>
            <motion.span 
              style={{ color: '#00f2fe' }}
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: ['0 0 0px #00f2fe', '0 0 20px #00f2fe', '0 0 0px #00f2fe']
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              Professional Software Developer.
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
              color: 'var(--text-light)',
              maxWidth: '500px'
            }}
          >
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {heroData.description}
            </motion.span>
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}
          >
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Projects Done', value: '10+' },
              { label: 'Happy Clients', value: '100%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  background: 'rgba(255, 107, 157, 0.1)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 107, 157, 0.2)',
                  minWidth: '120px'
                }}
                whileHover={{ 
                  scale: 1.05,
                  background: 'rgba(255, 107, 157, 0.2)',
                  borderColor: '#ff6b9d'
                }}
                animate={{ 
                  y: [0, -5, 0],
                  boxShadow: [
                    '0 4px 15px rgba(255, 107, 157, 0.1)',
                    '0 8px 25px rgba(255, 107, 157, 0.2)',
                    '0 4px 15px rgba(255, 107, 157, 0.1)'
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.3 
                }}
              >
                <motion.div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#ff6b9d',
                    marginBottom: '0.5rem'
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.5)',
                borderColor: '#00f2fe'
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: ['0 4px 15px rgba(102, 126, 234, 0.3)', '0 8px 25px rgba(102, 126, 234, 0.5)', '0 4px 15px rgba(102, 126, 234, 0.3)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                background: 'transparent',
                border: '2px solid #667eea',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                CONTACT ME
              </motion.span>
              <motion.span 
                style={{ fontSize: '1.2rem' }}
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👤
              </motion.span>
            </motion.a>
            <motion.a
              href="/Harshit_Rajput_NET_Developer_Resume.pdf"
              className="btn btn-secondary"
              download="Harshit_Rajput_NET_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.6)',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #00f2fe 100%)'
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                background: [
                  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                DOWNLOAD CV
              </motion.span>
              <motion.span 
                style={{ fontSize: '1.2rem' }}
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                📄
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem'
            }}
          >
            {heroData.socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotate: -10,
                  boxShadow: '0 8px 25px rgba(255, 107, 157, 0.6)'
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: 0
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #ff6b9d, #ff8fab)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)',
                  border: '2px solid transparent',
                  backgroundClip: 'padding-box'
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {link.icon}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-code"
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ 
            scale: 1.02,
            rotateY: -5,
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)'
          }}
          style={{
            background: 'var(--card-bg)',
            borderRadius: '1rem',
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Code Editor Header */}
          <div style={{
            background: '#2d3748',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <motion.div 
                style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              ></motion.div>
              <motion.div 
                style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca3f' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </div>
            <div style={{ 
              color: 'var(--text-light)', 
              fontSize: '0.9rem', 
              marginLeft: '1rem',
              fontFamily: 'monospace'
            }}>
              coder.js
            </div>
          </div>

          {/* Code Content */}
          <motion.div 
            style={{
              padding: '2rem',
              fontFamily: 'monospace',
              fontSize: '1rem',
              lineHeight: '1.6',
              background: '#1a202c',
              color: '#e2e8f0',
              position: 'relative'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.pre 
              style={{ margin: 0, whiteSpace: 'pre-wrap', position: 'relative' }}
              animate={{ 
                background: [
                  'linear-gradient(90deg, transparent 0%, rgba(0, 242, 254, 0.1) 50%, transparent 100%)',
                  'linear-gradient(90deg, transparent 0%, rgba(0, 242, 254, 0.2) 50%, transparent 100%)',
                  'linear-gradient(90deg, transparent 0%, rgba(0, 242, 254, 0.1) 50%, transparent 100%)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
{`const coder = {
  name: 'Harshit Rajput',
  skills: ['React', 'Angular', 'C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'Ocelot API Gateway'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`}
            </motion.pre>
          </motion.div>
        </motion.div>

        
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </section>
  );
};

export default Hero;

