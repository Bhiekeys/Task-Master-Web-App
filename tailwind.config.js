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
        customGreen400: '#469173B2',
        customGreen500: '#05462CB2',
        customPink: '#FFE2B8',
        lightBlack: '#00000033',
        lightBlack100: '#00000080',
        lightBlack200: '#00000066',
        customGray: '#B8B2B24D',
        customGray100: '#B6B5B5',
        customGray200: '#B6B5B50D',
        customRed: '#FE3944',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        kadwa: ['Kadwa', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
