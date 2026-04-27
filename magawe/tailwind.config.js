/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d6b8fc",
        dark: "#4c3a63",
        light: "#f6f2ff",
        soft: "#ede4ff"
      },
    },
  },
  plugins: [],
}

