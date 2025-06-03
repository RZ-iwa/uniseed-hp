/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bff',
          dark: '#0056b3',
        },
        accent: {
          DEFAULT: '#00ffaa',
          dark: '#00cc88',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
