/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        smoothGray: {
          light: "#F5F5F5",
          DEFAULT: "#EEEEEE",
        },
        brand: {
          DEFAULT: "#3167EB",
          dark: "#00164E",
        },
      },
    },
  },
  plugins: [],
};
