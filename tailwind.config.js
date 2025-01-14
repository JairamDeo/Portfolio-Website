/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          light: "#5bc0de",
          DEFAULT: "#17a2b8",
          dark: "#007b8f",
        }, 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        // Add Poppins as a custom font
      },
      textColor: {
        gradient: {
          red: "bg-gradient-to-r from-red-500 to-pink-500",
          cyan: "bg-gradient-to-r from-cyan-500 to-blue-500",
          orange: "bg-gradient-to-r from-orange-400 to-red-500",
          yellow: "bg-gradient-to-r from-yellow-400 to-orange-400",
          green: "bg-gradient-to-r from-green-500 to-teal-400",
          purple: "bg-gradient-to-r from-purple-500 to-indigo-500",
          teal: "bg-gradient-to-r from-teal-400 to-blue-400",
        },
      },
    },
  },
  plugins: [],
}