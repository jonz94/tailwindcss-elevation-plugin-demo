/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /^elevation/,
    },
  ],
  plugins: [require('./plugins/elevation')],
}
