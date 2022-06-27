/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        'primary': '#6eff94',
        'secondary': '#6e8bff',
        'warning' : '#eeff6e',
        'error' : '#ff6e84',
      },
    },
  },
  plugins: [],
};
