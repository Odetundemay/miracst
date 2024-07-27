/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./schemas/**/*.{js,ts}", // Add this line to include your schemas directory
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
}

