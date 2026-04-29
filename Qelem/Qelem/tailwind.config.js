/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors matching the design
        'navy-dark': '#0a1f3d',
        'navy-blue': '#1a3a5c',
        'orange-primary': '#f59e0b',
      }
    },
  },
  plugins: [],
}
