/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './node_modules/@rnr/**/*.{ts,tsx,js,jsx}',],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ffefed",
          100: "#ffcfc6",
          200: "#ffb7aa",
          300: "#ff9684",
          400: "#ff826c",
          500: "#ff6347",
          600: "#e85a41",
          700: "#b54632",
          800: "#8c3627",
          900: "#6b2a1e"
        },
        neutral: {
          40: "#D6D6D6",
          50: "#e9eaeb",
          100: "#babdc1",
          900: "#0d1217"
        }
      }
    },
  },
  plugins: [],
}

