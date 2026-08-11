/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC', // Slate Off-White
        primary: '#0F172A', // Deep Slate
        secondary: '#475569', // Muted Slate
        card: '#FFFFFF', // Pure White
        border: '#E2E8F0', // Border color
        accent: '#2563EB', // Cobalt Blue
      }
    },
  },
  plugins: [],
}
