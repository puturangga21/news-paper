/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        darkPrimary: "#1D2939",
        darkHover: "#0E1216",
        textDesc: "#475467",
      },
    },
    fontFamily: {
      display: ["Graphik"],
    },
  },
  plugins: [],
};
