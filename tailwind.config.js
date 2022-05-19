module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "first-view": "url('/7fb0b9f.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}