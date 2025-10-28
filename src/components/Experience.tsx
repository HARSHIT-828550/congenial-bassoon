import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-number">02.</span>
            EXPERIENCES
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="experience-timeline" ref={ref}>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-dot"></div>
              <motion.div
                className="timeline-content"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="timeline-header">
                  <h3>{experience.title}</h3>
                  <span className="timeline-period">{experience.period}</span>
                </div>
                <h4>{experience.company}</h4>
                <p>{experience.description}</p>
                <div className="timeline-tags">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
