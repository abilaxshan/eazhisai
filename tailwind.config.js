/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
        accent: '#6366F1',
        highlight: '#FBBF24',
      },
      fontFamily: {
        // Primary: Poppins for English/Latin UI; fallback to Noto Sans Tamil for Tamil glyphs
        sans: ['Poppins', '"Noto Sans Tamil"', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
