// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          gray: '#1e1e1e',      // Dark Gray
          navy: '#112230',      // Deep Navy
          midnight: '#112331',  // Midnight Blue
          slate: '#112231',     // Slate Blue
          steel: '#122331',     // Steel Blue
          charcoal: '#122433',  // Charcoal Blue
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #112230 0%, #1e1e1e 50%, #122433 100%)',
        'gradient-radial': 'radial-gradient(circle at center, #122331 0%, #1e1e1e 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(17, 34, 48, 0.5)',
        'glow-lg': '0 0 40px rgba(17, 34, 48, 0.5)',
      }
    },
  },
  plugins: [],
}
