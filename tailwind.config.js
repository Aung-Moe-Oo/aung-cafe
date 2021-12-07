module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/img/hero.jpg')",
        shop: "url('/img/shop.jpg')",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
