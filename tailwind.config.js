/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        controllo: {
          primary: "#AD8BB4",
          neutral: "#2C3048",
          "base-100": "#3C4168",
          success: "#53A142",
          warning: "#CC9621",
          error: "#C14138"
        }
      }
    ]
  }
}
