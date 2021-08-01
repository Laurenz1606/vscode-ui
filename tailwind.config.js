module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        lightertext: "#CCCCCC",
        lighttext: "#C4C4C4",
        text: "#858582",
        lighter: "#3C3C3C",
        light: "#333333",
        normal: "#252526",
        dark: "#1E1E1E"
      }, 
      green: {
        normal: "#16825D"
      }, 
      blue: {
        normal: "#007ACC"
      },
      white: "#FFFFFF"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
