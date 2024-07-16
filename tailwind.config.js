/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3CAE5C',
        secondary: '#052435',
        white: '#FFFFFF',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      borderRadius: {
        'lg': '80px',
        'md': '40px',
        'sm': '10px',
      },
    },
  },
  plugins: [],
}
