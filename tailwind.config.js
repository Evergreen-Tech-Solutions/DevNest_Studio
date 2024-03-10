/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
        colors: {
            'blu': '#b6e1e0',
            'orng': '#f7b633',
            'drkblu': '#070d59',
            'lghtblu': '#2b4353',
            'lght': '#defcfc',
            'grn': '#65c6c4',
        },
        fontFamily: {
            'sans': ['Nunito', 'sans-serif'],
        },
    },
  },
}