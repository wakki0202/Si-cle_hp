module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "first-view": "url('/7fb0b9f.jpg')",
        "service1": "url('/AnyConv.com__c1c829ecfc37ef1d27b2c57ed62dc35d_t.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
