import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import BackgroundElements from './components/BackgroundElements';

// Lazy load non-critical components
const Experience = React.lazy(() => import('./components/Experience'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'var(--background-color)',
        color: 'var(--text-light)'
      }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{
            width: '50px',
            height: '50px',
            border: '3px solid var(--primary-color)',
            borderTop: '3px solid transparent',
            borderRadius: '50%'
          }}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <BackgroundElements />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
          <Education />
        </Suspense>
        <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  );
};

export default App;
