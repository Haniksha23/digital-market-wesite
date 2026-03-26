import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus('success');
      setTimeout(() => setSubscribeStatus(null), 3000);
      setEmail('');
    }
  };

  const footerLinks = {
    'Company': ['About', 'Careers', 'Blog', 'Press'],
    'Services': ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
    'Resources': ['Documentation', 'Help Center', 'Case Studies', 'Guides'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  Digital Insights
                </span>
              </h4>
              <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest trends and tips.</p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white"
                  required
                />
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                  {subscribeStatus === 'success' ? 'Subscribed! 🎉' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Digital Agency
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Crafting digital experiences that inspire, engage, and deliver measurable results.
              </p>
              <div className="flex gap-4">
                {['𝕏', 'in', '📷', 'f'].map((icon, index) => (
                  <a key={index} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all text-xl">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            
            {Object.entries(footerLinks).map(([category, links], index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">© {currentYear} Digital Agency. All rights reserved.</p>
              <button onClick={scrollToTop} className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-sm">Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;