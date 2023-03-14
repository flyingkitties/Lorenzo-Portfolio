/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "bg-texture": "url('/public/images/grayWall.jpg')",
        "bg-whiteTexture": "url('/public/images/whiteBgTexture.jpg')",
      }),
    },
  },
  plugins: [],
};
