import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,ts,tsx}',
    './components/**/*.{vue,ts,tsx}',
    './pages/**/*.{vue,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#e8856a',
          dark: '#f09880',
        },
        mint: {
          DEFAULT: '#7ec8a4',
          dark: '#95d4b5',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        pulse_dot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.4s ease-in-out',
        pulse_dot: 'pulse_dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
