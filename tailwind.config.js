/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        azure: {
          DEFAULT: '#007BFF',
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#007BFF',
          600: '#0062CC',
          700: '#004A99',
          800: '#003166',
          900: '#001933',
        },
        silver: {
          DEFAULT: '#C0C0C0',
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D0D0D0',
          300: '#C0C0C0',
          400: '#A0A0A0',
          500: '#808080',
          600: '#606060',
          700: '#404040',
          800: '#2A2A2A',
          900: '#1A1A1A',
        },
        vault: {
          dark: '#0A0A0F',
          card: '#0D0D14',
          border: '#1A1A2E',
          light: '#F8F9FC',
          'card-light': '#FFFFFF',
          'border-light': '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out',
        'data-flow': 'data-flow 3s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 20px rgba(0, 123, 255, 0.3), 0 0 40px rgba(0, 123, 255, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 123, 255, 0.5), 0 0 60px rgba(0, 123, 255, 0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'data-flow': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
