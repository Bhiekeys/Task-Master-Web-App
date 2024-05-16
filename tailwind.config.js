/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGreen: '#469173',
        customGreen100: '#05462C',
        customPink: '#FFE2B8',
      },
    },
  },
  plugins: [],
};

