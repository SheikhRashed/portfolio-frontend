/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "rs-",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'primary': ['Roboto', 'sans-serif'],
      'secondary': ['Open Sans', 'sans-serif']
    },
    container: {
      center: true,
      padding: '12px'
    },
    extend: {

      colors: {
        'dark': '#1D242B',
        'white': '#FAFAFA',
        'primary': '#0077C0',
        'secondary': '#C7EEFF',
      }
    },
  },
  plugins: [],
}