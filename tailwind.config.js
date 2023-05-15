/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Gotham Rounded"]
    },
    fontWeight: {
      light: "300",
      normal: "350",
      medium: "400"
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        controllo: {
          primary: "#AD8BB4",
          neutral: "#E1E7F3",
          "base-100": "#3C4168",
          success: "#53A142",
          warning: "#CC9621",
          error: "#C14138"
        }
      }
    ]
  }
}
