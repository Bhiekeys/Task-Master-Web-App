/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGreen: '#469173',
        customGreen100: '#05462C',
        customGreen200: '#4691734D',
        customGreen300: '#005231',
        customPink: '#FFE2B8',
        lightBlack: '#00000033',
        lightBlack100: '#00000080',
        customGray: '#B8B2B24D',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

