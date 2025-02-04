/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0D0B1F',
          lighter: '#1C1E2A'
        },
        primary: {
          DEFAULT: '#8758FF',
          hover: '#7040FF'
        },
        secondary: {
          DEFAULT: '#FF58F9',
          hover: '#FF40F5'
        }
      },
      animation: {
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slideLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-right': 'slideRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow': 'spin 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 2s infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { 
            transform: 'translateY(50px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-100px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        slideLeft: {
          '0%': { 
            transform: 'translateX(100px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1 !important'
          }
        },
        slideRight: {
          '0%': { 
            transform: 'translateX(-100px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1 !important'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(20deg)' },
          '100%': { transform: 'translateX(200%) skewX(20deg)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
      }
    }
  },
  plugins: []
};