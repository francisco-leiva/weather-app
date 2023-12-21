/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        'dailyforecast-sm': '7rem repeat(4, 1fr)',
        'dailyforecast-md': '9rem repeat(4, 1fr)'
      }
    },
  },
  plugins: [],
};
