import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  
  const stats = [
    { value: '500+', label: 'Projects Completed', icon: '📈', trend: '+45% YoY' },
    { value: '98%', label: 'Client Satisfaction', icon: '👥', trend: '+12% vs last year' },
    { value: '15+', label: 'Industry Awards', icon: '🏆', trend: '5 in 2024' },
  ];

  const words = ["Transform", "Elevate", "Dominate", "Scale", "Innovate"];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  const wordVariants = {
    enter: { y: -30, opacity: 0 },
    center: { y: 0, opacity: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
    exit: { y: 30, opacity: 0, transition: { duration: 0.3 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, type: "spring", stiffness: 100 } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 60%)`,
        }}
        transition={{ duration: 0.1 }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />
      
      {/* Floating Particles with Enhanced Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -200, -400],
              x: [null, Math.random() * 200 - 100, Math.random() * 400 - 200],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/30 to-blue-300/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-300/20 to-blue-400/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <motion.span
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium shadow-sm"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="relative flex h-2 w-2"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </motion.span>
              Digital Excellence • AI-Powered
            </motion.span>
          </motion.div>
          
          {/* Animated Heading */}
          <div className="mb-6 min-h-[180px] md:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentWord}
                variants={wordVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  {words[currentWord]}
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Your Digital Presence
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We craft data-driven digital strategies that elevate brands, 
            drive engagement, and deliver measurable results with precision.
          </motion.p>
          
          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(59,130,246,0)", "0px 0px 20px rgba(59,130,246,0.5)", "0px 0px 0px rgba(59,130,246,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Start Your Journey</span>
              <motion.svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-300 text-blue-600 rounded-full font-medium hover:border-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all"
            >
              View Our Work
            </motion.button>
          </motion.div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-5xl mb-4"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full"
                >
                  ↑ {stat.trend}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 group"
        >
          <span className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center group-hover:border-blue-500 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 group-hover:bg-blue-600"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;