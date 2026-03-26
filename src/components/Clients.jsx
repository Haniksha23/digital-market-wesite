import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Clients = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const brands = [
    { name: 'TechCorp', logo: 'https://placehold.co/200x80/4B5563/ffffff?text=TECHCORP', industry: 'Technology', rating: 4.8 },
    { name: 'InnovateLabs', logo: 'https://placehold.co/200x80/4B5563/ffffff?text=INNOVATE', industry: 'Research', rating: 4.9 },
    { name: 'FutureStack', logo: 'https://placehold.co/200x80/4B5563/ffffff?text=FUTURE', industry: 'SaaS', rating: 4.7 },
    { name: 'DigitalMind', logo: 'https://placehold.co/200x80/4B5563/ffffff?text=DIGITAL', industry: 'Marketing', rating: 4.9 },
    { name: 'CreativeHub', logo: 'https://placehold.co/200x80/4B5563/ffffff?text=CREATIVE', industry: 'Design', rating: 5.0 },
    { name: 'Visionary', logo: 'https://placehold.co/200x80/4B5563/ffffff?text=VISION', industry: 'Consulting', rating: 4.8 },
    { name: 'Nexus', logo: 'https://placehold.co/200x80/4B5563/ffffff?text=NEXUS', industry: 'Finance', rating: 4.6 },
    { name: 'Elevate', logo: 'https://placehold.co/200x80/4B5563/ffffff?text=ELEVATE', industry: 'Retail', rating: 4.9 },
  ];

  const testimonials = [
    { 
      text: "They transformed our digital presence completely. Outstanding results! The team's dedication and expertise exceeded all expectations.", 
      author: "Sarah Johnson", 
      role: "CEO, TechCorp",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    },
    { 
      text: "The team's expertise in SEO and content strategy is unmatched. Our organic traffic increased by 250% in just 6 months.", 
      author: "Michael Chen", 
      role: "Marketing Director, InnovateLabs",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    { 
      text: "Best investment we made for our brand this year. Their creative approach and strategic thinking delivered amazing ROI.", 
      author: "Emily Rodriguez", 
      role: "Founder, FutureStack",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const stats = [
    { label: 'Active Clients', value: '500+', icon: '🏢', trend: '+28%', description: 'Growing monthly' },
    { label: 'Countries Served', value: '25+', icon: '🌍', trend: '+5', description: 'Global presence' },
    { label: 'Success Rate', value: '98%', icon: '📈', trend: '+12%', description: 'Client satisfaction' },
    { label: 'Retention Rate', value: '95%', icon: '❤️', trend: '+8%', description: 'Loyal clients' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium mb-4 shadow-lg"
          >
            Trusted Partners Worldwide
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mt-6 mb-4"
          >
            Loved by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              500+ Brands
            </span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700 max-w-2xl mx-auto font-medium"
          >
            Join the industry leaders who trust us with their digital success
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group text-center p-6 rounded-2xl bg-white border-2 border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className="text-5xl mb-3"
              >
                {stat.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-base font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="inline-flex items-center gap-1 text-sm font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                ↑ {stat.trend}
              </div>
              
              {/* Tooltip */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 pointer-events-none"
              >
                <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                  {stat.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo Strip */}
        <div className="relative mb-20">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden py-8 bg-white/80 rounded-2xl shadow-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              animate={{ x: isPaused ? 0 : [-1920, 0] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
              className="flex gap-16 items-center"
            >
              {[...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 group relative"
                >
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="h-14 w-auto transition-all duration-500"
                  />
                  
                  {/* Hover Tooltip */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 pointer-events-none whitespace-nowrap"
                  >
                    <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <span>{brand.name}</span>
                      <span className="text-yellow-300">★ {brand.rating}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
                What Our Clients Say
              </span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mt-4"
            >
              Real Stories,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Real Results
              </span>
            </motion.h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 group"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8 text-7xl text-blue-200 group-hover:text-blue-300 transition-colors">
                  "
                </div>
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10 font-medium">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden ring-2 ring-blue-300">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-xs text-blue-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-12 overflow-hidden shadow-2xl">
            {/* Animated Background */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 100, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, -100, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"
            />
            
            <div className="relative z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block text-6xl mb-4"
              >
                🚀
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join These Brands?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Start your journey with us and see why 500+ brands trust us with their digital presence
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-2xl transition-all inline-flex items-center gap-2 text-lg"
              >
                Become a Partner
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;