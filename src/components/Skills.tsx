import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-number">03.</span>
            SKILLS
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-content" ref={ref}>
          <div className="skills-categories">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.h3
                  style={{
                    fontSize: '1.2rem',
                    color: '#00f2fe',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    position: 'relative'
                  }}
                  animate={{ 
                    textShadow: ['0 0 0px #00f2fe', '0 0 10px #00f2fe', '0 0 0px #00f2fe']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {category.category}
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '40px',
                      height: '2px',
                      background: 'linear-gradient(90deg, #ff6b9d, #00f2fe)',
                      borderRadius: '1px'
                    }}
                    animate={{ 
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.h3>
                <div className="skill-items" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={inView ? { 
                        opacity: 1, 
                        scale: 1, 
                        rotate: 0
                      } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.3 + skillIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        rotate: -5,
                        boxShadow: '0 8px 25px rgba(0, 242, 254, 0.3)',
                        background: 'linear-gradient(135deg, #00f2fe, #ff6b9d)'
                      }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        background: 'rgba(0, 242, 254, 0.1)',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(0, 242, 254, 0.2)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        minWidth: '120px',
                        justifyContent: 'center'
                      }}
                    >
                      <motion.span 
                        className="skill-icon"
                        style={{ fontSize: '1.2rem' }}
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.3 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <motion.span 
                        className="skill-name"
                        style={{ 
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          color: 'var(--text-light)'
                        }}
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: skillIndex * 0.1 }}
                      >
                        {skill.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
