/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        'lobster': ['Lobster', 'cursive']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
