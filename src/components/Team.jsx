import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
      bio: '15+ years of digital marketing expertise',
      expertise: ['Leadership', 'Strategy', 'Brand Development'],
      social: { linkedin: '#', twitter: '#', email: 'sarah@agency.com' }
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Award-winning creative strategist',
      expertise: ['Creative Direction', 'Brand Identity', 'Campaign Strategy'],
      social: { linkedin: '#', twitter: '#', email: 'michael@agency.com' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Strategy',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Data-driven marketing specialist',
      expertise: ['Data Analytics', 'Market Research', 'Growth Strategy'],
      social: { linkedin: '#', twitter: '#', email: 'emily@agency.com' }
    },
    {
      name: 'David Kim',
      role: 'Tech Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'AI and automation expert',
      expertise: ['AI Integration', 'Automation', 'Tech Innovation'],
      social: { linkedin: '#', twitter: '#', email: 'david@agency.com' }
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
            Meet The Team
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Minds Behind Your
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Success</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-300 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate experts dedicated to your digital growth
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedMember(member)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-blue-100"
            >
              <div className="relative overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-2 bg-white rounded-full hover:bg-blue-600 transition-colors group">
                    <svg className="w-5 h-5 text-gray-900 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-blue-600 transition-colors group">
                    <svg className="w-5 h-5 text-gray-900 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.337-12.18c0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 mb-3">{member.role}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold mb-1 text-blue-600">{selectedMember.name}</h3>
                  <p className="text-gray-500 mb-4">{selectedMember.role}</p>
                  <p className="text-gray-600 mb-4">{selectedMember.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button onClick={() => setSelectedMember(null)} className="mt-6 text-blue-600 hover:text-blue-700">
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;