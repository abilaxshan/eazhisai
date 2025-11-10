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
        sans: ['"Noto Sans Tamil"', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
