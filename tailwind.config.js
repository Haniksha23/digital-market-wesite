/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a5c0fc',
          400: '#819ef9',
          500: '#667eea',
          600: '#5a6fd8',
          700: '#4c5bb5',
          800: '#3e4a93',
          900: '#333d77',
        },
        secondary: {
          500: '#764ba2',
        },
        dark: '#0a0a0a'
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.3)',
        glow: '0 0 20px rgba(102,126,234,0.5)'
      },

      backgroundImage: {
        'gradient-main': 'linear-gradient(to right, #667eea, #764ba2)',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'zoom-in': 'zoomIn 0.4s ease forwards',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(40px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          from: { transform: 'scale(0.9)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}