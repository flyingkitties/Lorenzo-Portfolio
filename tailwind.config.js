const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwindcss'),
    require('autoprefixer'),
  ],

  theme: {
    extend: {
      gridTemplateRows: {
        hScreen: 'repeat(2, minmax(1fr))',
      },
    },
  },
};
