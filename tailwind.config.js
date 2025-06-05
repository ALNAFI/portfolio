/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#facc15',
        dark: '#0f172a',
        darkMode: 'class',
        offwhite: '#f6f5f3',

      },
    },
  },
  plugins: [],
};
