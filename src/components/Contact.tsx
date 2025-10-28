import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { contactInfo } from '../data/portfolioData';
import type { FormData } from '../types';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const onSubmit = async (_data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setNotification({
        message: 'Thank you for your message! I will get back to you soon.',
        type: 'success'
      });
      reset();
      setIsSubmitting(false);
      
      // Hide notification after 5 seconds
      setTimeout(() => setNotification(null), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-number">06.</span>
            CONTACT
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-content" ref={ref}>
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Get In Touch</h3>
            <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="contact-details">
              <motion.div
                className="contact-item"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <span>{contactInfo.email}</span>
                </div>
              </motion.div>
              
              <motion.div
                className="contact-item"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="contact-icon">📱</span>
                <div>
                  <strong>Phone</strong>
                  <span>{contactInfo.phone}</span>
                </div>
              </motion.div>
              
              <motion.div
                className="contact-item"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <span>{contactInfo.location}</span>
                </div>
              </motion.div>
            </div>

            <div className="social-links">
              {contactInfo.socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              style={{ marginTop: '2rem' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="/Harshit_Rajput_NET_Developer_Resume.pdf"
                download="Harshit_Rajput_NET_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary download-cv-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download CV</span>
                <span>📄</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Send me a message</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address'
                    }
                  })}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && <span className="error">{errors.message.message}</span>}
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <span className="btn-icon">🚀</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {notification && (
          <motion.div
            className={`notification notification-${notification.type}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            style={{
              position: 'fixed',
              top: '100px',
              right: '20px',
              background: notification.type === 'success' ? '#10b981' : '#ef4444',
              color: 'white',
              padding: '1rem 1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              zIndex: 10000,
              maxWidth: '400px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>{notification.type === 'success' ? '✅' : '❌'}</span>
              <span>{notification.message}</span>
              <button
                onClick={() => setNotification(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  marginLeft: '0.5rem'
                }}
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
