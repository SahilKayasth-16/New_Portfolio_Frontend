/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FBBF24', // Amber 400
          DEFAULT: '#F59E0B', // Amber 500
          dark: '#D97706', // Amber 600
        },
        secondary: {
          light: '#7C3AED', // Violet 600
          DEFAULT: '#5B21B6', // Violet 800
          dark: '#4C1D95', // Violet 900
        },
        dark: {
          100: '#1F2937',
          200: '#111827',
          300: '#030712',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
