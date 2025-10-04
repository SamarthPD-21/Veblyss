/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/app/components/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx,css}'
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
