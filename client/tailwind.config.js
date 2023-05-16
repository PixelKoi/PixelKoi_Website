/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
