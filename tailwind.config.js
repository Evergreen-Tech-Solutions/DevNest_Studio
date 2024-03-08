/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: [],
  theme: {
    extend: {
        colors: {
            'primary': '#4C51BF',
            'secondary': '#0FA9E6',
            'danger': '#FF5B5B',
            'light': '#F3F4F6',
            'dark': '#1F2937',
            'bg': '#F9FAFB',
        },
        fontFamily: {
            'sans': ['Nunito', 'sans-serif'],
        },
    },
  },
}