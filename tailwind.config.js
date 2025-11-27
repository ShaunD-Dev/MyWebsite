/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",         // Look at HTML files in the root (like index.html)
    "./src/**/*.{html,js}", // Look inside src for any HTML or JS files
    "./SubPages/**/*.{html,js}" // Optional: scan SubPages folder too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
