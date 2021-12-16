module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "1/4": "25vh",
        "1/2": "50vh",
        "3/4": "75vh",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "odd", "hover", "focus"],
      translate: ["active"],
    },
  },
  plugins: [],
};
