/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./docs/**/*.mdx"],
  theme: {
    extend: {},
  },
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: { preflight: false },
  plugins: [],
};
