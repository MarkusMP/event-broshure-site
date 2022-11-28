module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "#3AAFA9",
        secondary: "#2B7A78",
        light: "#DEF2F1",
        white: "#FEFFFF",
        dark: "#17252A",
        grey: "#D5D5D5",
        black: "#121212",
        transparent: "transparent",
      },
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
