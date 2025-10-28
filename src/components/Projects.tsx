import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-number">04.</span>
            PROJECTS
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-grid" ref={ref}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}
              style={{
                background: 'var(--card-bg)',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                position: 'relative',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="project-image">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="project-overlay"
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-links">
                    <motion.a
                      href={project.liveUrl}
                      className="project-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🔗 Live Demo
                    </motion.a>
                    <motion.a
                      href={project.codeUrl}
                      className="project-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      📁 Code
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {project.achievements && project.achievements.length > 0 && (
                  <div className="project-achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {project.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.3 + achievementIndex * 0.1 }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="project-tools">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tool"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="project-role">{project.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
