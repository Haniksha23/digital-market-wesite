import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const services = [
    { icon: '🔍', title: 'SEO Optimization', description: 'Dominate search rankings with advanced SEO strategies.', color: 'from-blue-500 to-blue-400', features: ['Keyword Research', 'Backlink Building', 'Technical SEO'], stats: '+250% Organic Traffic', delay: 0 },
    { icon: '📱', title: 'Social Media', description: 'Build communities and drive engagement across all platforms.', color: 'from-blue-500 to-blue-400', features: ['Content Strategy', 'Community Management', 'Paid Ads'], stats: '500K+ Engagements', delay: 0.1 },
    { icon: '📈', title: 'Growth Marketing', description: 'Data-driven campaigns that accelerate user acquisition.', color: 'from-blue-500 to-blue-400', features: ['A/B Testing', 'Conversion Optimization', 'Retention'], stats: '300% ROI Avg', delay: 0.2 },
    { icon: '📊', title: 'Analytics', description: 'Actionable insights that optimize performance.', color: 'from-blue-500 to-blue-400', features: ['Real-time Data', 'Custom Dashboards', 'Reporting'], stats: '99.9% Accuracy', delay: 0.3 },
    { icon: '📧', title: 'Email Marketing', description: 'Personalized campaigns that nurture leads.', color: 'from-blue-500 to-blue-400', features: ['Automation', 'Segmentation', 'Analytics'], stats: '45% Open Rate', delay: 0.4 },
    { icon: '🎬', title: 'Content Creation', description: 'Compelling content that tells your brand story.', color: 'from-blue-500 to-blue-400', features: ['Video Production', 'Copywriting', 'Animation'], stats: '1M+ Views', delay: 0.5 },
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Services That Drive
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Real Results</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-300 mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to your business goals
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-blue-100 cursor-pointer"
            >
              <div className="p-8">
                <div className="relative mb-6">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-md group-hover:shadow-xl transition-all"
                  >
                    <span className="text-5xl">{service.icon}</span>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={hoveredCard === index ? { scale: 1 } : { scale: 0 }}
                    className="absolute -inset-2 bg-blue-400 rounded-2xl blur-xl -z-10 opacity-30"
                  />
                </div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors"
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={hoveredCard === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: idx * 0.05 }}
                      className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={hoveredCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  className="mb-4"
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-medium`}>
                    🏆 {service.stats}
                  </div>
                </motion.div>
                
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-12 text-white relative overflow-hidden cursor-pointer"
          >
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -50, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl mb-4"
              >
                🚀
              </motion.div>
              <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-blue-100 mb-8">Let's discuss your unique requirements</p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:shadow-xl transition-all"
              >
                Get a Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;