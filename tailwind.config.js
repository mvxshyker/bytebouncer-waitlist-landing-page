/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bb-black': '#0A0A0A',
        'bb-dark': '#111111',
        'bb-card': '#161616',
        'bb-border': '#222222',
        'bb-gray': '#888888',
        'bb-lime': '#BEFF00',
        'bb-lime-dark': '#9ACC00',
        'bb-red': '#FF3B3B',
        'bb-red-dim': '#CC2F2F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.2s forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'data-drop': 'dataDrop 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(190, 255, 0, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(190, 255, 0, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        dataDrop: {
          '0%': { transform: 'translateY(-20px)', opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateY(400px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
