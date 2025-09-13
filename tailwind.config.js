/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
      },
      animation: {
        marquee: 'marquee 80s linear infinite',
      },
      colors: {
        blu: "#b6e1e0",
        orng: "#f7b633",
        drkblu: "#0d1b2a",
        nvy: "#1b263b",
        lghtnvy: "#778da9",
        lght: "#defcfc",
        grn: "#65c6c4",
        gry: "#3f3f3f",
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
    },
  },
};
