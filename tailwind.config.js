/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      logo: ['cookie'],
      main: ['Inter'],
      mono: ['Space Mono'],
    },
    extend: {},
  },
  plugins: [],
};
