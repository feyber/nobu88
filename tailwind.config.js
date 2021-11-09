const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: "#ffdf00",
        golden: "#FFD700",
        brgold: "#FFE55C",
        litegold: "#FFED8A",
        bgnobu: "#262626",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
