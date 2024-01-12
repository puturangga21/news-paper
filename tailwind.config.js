/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        darkHover: "#0E1216",
      },
    },
    fontFamily: {
      display: ["Graphik", "Inter"],
    },
  },
  plugins: [],
};
