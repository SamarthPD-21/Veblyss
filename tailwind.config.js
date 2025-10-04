/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#792727',
        secondary: '#368581',
        background: '#FFECE0',
        card: '#FAF9F7'
      }
    }
  },
  plugins: []
}
