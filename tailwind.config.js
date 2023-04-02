/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: '#8c8fde',
        'light-violet': '#b8b5ff',
      },
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
