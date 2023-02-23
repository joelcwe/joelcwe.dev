const config = {
  content: ["./src/**/*.{html,js,svelte,ts}",
  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        logo: ['Sharpie']
      }
    }
  },

  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ],

  darkMode: 'class',
};

module.exports = config;