/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
        colors: {
            'blu': '#1e90ff',
            'orng': '#f7b633',
            'drkblu': '#070d59',
            'lghtblu': '#5893d4',
            'lght': '#defcfc',
            'grn': '#65c6c4',
        },
        fontFamily: {
            'sans': ['Nunito', 'sans-serif'],
        },
    },
  },
}