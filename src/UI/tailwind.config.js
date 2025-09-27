module.exports = {
  content: [
    "./src*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          primary: 'var(--theme-primary)',
          'primary-light': 'var(--theme-primary-light)',
          'primary-dark': 'var(--theme-primary-dark)',
          secondary: 'var(--theme-secondary)',
          accent: 'var(--theme-accent)',
          background: 'var(--theme-background)',
          'background-secondary': 'var(--theme-background-secondary)',
          surface: 'var(--theme-surface)',
          text: 'var(--theme-text)',
          'text-secondary': 'var(--theme-text-secondary)',
          border: 'var(--theme-border)',
        },
        'dark': {
          gray: '#1e1e1e',
          navy: '#112230',
          midnight: '#112331',
          slate: '#112231',
          steel: '#122331',
          charcoal: '#122433',
        }
      },
      backgroundImage: {
        'theme-gradient': 'var(--theme-gradient)',
        'gradient-dark': 'linear-gradient(135deg, #112230 0%, #1e1e1e 50%, #122433 100%)',
        'gradient-radial': 'radial-gradient(circle at center, #122331 0%, #1e1e1e 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'theme-switch': 'themeSwitch 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        themeSwitch: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0.95)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      boxShadow: {
        'theme-glow': '0 0 20px rgba(var(--theme-primary), 0.3)',
        'theme-glow-lg': '0 0 40px rgba(var(--theme-primary), 0.4)',
        'glow': '0 0 20px rgba(17, 34, 48, 0.5)',
        'glow-lg': '0 0 40px rgba(17, 34, 48, 0.5)',
      },
      backdropBlur: {
        'theme': 'blur(12px)',
      }
    },
  },
  plugins: [],
}
