/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink-light': '#fff0f0', // Light pink for background and border
        'custom-pink': '#FF6A6A',        // Main button text color
        'custom-pink-dark': '#FFA6A6',   // Darker pink for hover effect
        'custom-pink-active': '#ffdeda',  // Active button background color
      },
    },
  },
  plugins: [],
}

