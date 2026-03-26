import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    { icon: '✨', title: 'Innovation First', description: 'Cutting-edge solutions that set new industry standards', stat: '95%', statLabel: 'Faster Innovation' },
    { icon: '🚀', title: 'Growth Focused', description: 'Data-driven strategies that scale your business', stat: '300%', statLabel: 'Avg. Growth Rate' },
    { icon: '🎯', title: 'Precision Marketing', description: 'Targeted campaigns that reach the right audience', stat: '98%', statLabel: 'Target Accuracy' },
  ];
  
  const whyChoose = [
    { icon: '⚡', title: 'Fast Execution', description: 'Agile methodology for rapid results', color: 'bg-blue-50', hoverColor: 'hover:bg-blue-100' },
    { icon: '❤️', title: 'Dedicated Support', description: '24/7 expert assistance when you need it', color: 'bg-blue-50', hoverColor: 'hover:bg-blue-100' },
    { icon: '🛡️', title: 'Transparent Process', description: 'Clear communication and honest reporting', color: 'bg-blue-50', hoverColor: 'hover:bg-blue-100' },
  ];

  const achievements = [
    { value: '500+', label: 'Projects Completed', trend: '+45%', icon: '📊' },
    { value: '98%', label: 'Client Satisfaction', trend: '+12%', icon: '😊' },
    { value: '50+', label: 'Expert Team', trend: 'Growing', icon: '👥' },
    { value: '24/7', label: 'Support Available', trend: 'Always', icon: '🕐' },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4"
          >
            Who We Are
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Crafting{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-300 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from passion, driven by innovation — we help brands tell their 
            stories in the digital age with creativity and precision.
          </p>
        </motion.div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                <span className="text-5xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    {feature.stat}
                  </div>
                  <div className="text-xs text-gray-500">{feature.statLabel}</div>
                </div>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-blue-400 group-hover:text-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Why Choose Us Section */}
        <div className="relative mb-28">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl transform rotate-1 scale-105 blur-2xl opacity-10" />
          <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-xl border border-blue-100">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-4"
              >
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-medium text-blue-700">Why Partners Trust Us</span>
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                What Makes Us
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Different</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We combine creativity, technology, and strategy to deliver exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`${item.color} ${item.hoverColor} rounded-2xl p-8 text-center group cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg`}
                >
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform">
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">
                {achievement.value}
              </div>
              <div className="text-sm text-gray-600 mb-2">{achievement.label}</div>
              <div className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <span>↑</span>
                {achievement.trend}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;