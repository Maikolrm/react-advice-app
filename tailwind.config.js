module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: { manrope: ["Manrope"] },
      colors: {
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "grayish-blue-dark": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)"
      }
    }
  },
  plugins: []
}
