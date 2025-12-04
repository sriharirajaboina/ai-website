/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom1: "0px 4px 4px 0px rgba(0,0,0,0.25)",
        innerCustom: "inset 0px 0px 6px 3px rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
}
