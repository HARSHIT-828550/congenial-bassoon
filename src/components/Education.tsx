import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../data/portfolioData';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-number">05.</span>
            EDUCATIONS
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="education-timeline" ref={ref}>
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-item"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="education-icon"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {edu.icon}
              </motion.div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <span className="education-duration">{edu.duration}</span>
                <p>{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
