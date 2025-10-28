import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements: React.FC = () => {
  return (
    <div className="background-elements">
      {/* Enhanced floating shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-shape"
          style={{
            position: 'absolute',
            width: 60 + i * 20,
            height: 60 + i * 20,
            background: `linear-gradient(45deg, 
              rgba(255, 107, 157, ${0.1 + i * 0.05}), 
              rgba(0, 242, 254, ${0.1 + i * 0.05})
            )`,
            borderRadius: i % 2 === 0 ? '50%' : '20%',
            left: `${20 + i * 15}%`,
            top: `${20 + i * 10}%`,
            filter: 'blur(2px)',
            zIndex: -1
          }}
          animate={{
            y: -30,
            x: 15,
            rotate: 180,
            scale: 1.2,
            opacity: 0.5
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      {/* Animated grid lines */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(90deg, transparent 0%, rgba(0, 242, 254, 0.1) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(255, 107, 157, 0.1) 50%, transparent 100%)
          `,
          backgroundSize: '100px 100px',
          zIndex: -1
        }}
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px', '0px 0px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: i % 2 === 0 ? '#ff6b9d' : '#00f2fe',
            borderRadius: '50%',
            left: `${10 + i * 10}%`,
            top: `${10 + i * 8}%`,
            zIndex: -1
          }}
          animate={{
            y: -50,
            x: 25,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}

      {/* Pulsing orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, 
              rgba(${i % 2 === 0 ? '255, 107, 157' : '0, 242, 254'}, 0.1) 0%, 
              transparent 70%
            )`,
            borderRadius: '50%',
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
            zIndex: -1
          }}
          animate={{
            scale: 1.3,
            opacity: 0.2,
            rotate: 90
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
          }}
        />
      ))}

      {/* Gradient overlays */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.05) 0%, rgba(255, 107, 157, 0.05) 100%)',
          zIndex: -1
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: -1
        }}
        animate={{ 
          y: -20,
          rotate: 5
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(255, 107, 157, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: -1
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </div>
  );
};

export default BackgroundElements;
