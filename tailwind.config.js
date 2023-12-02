/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        gold: "#A78236",
        purple: "#28285B",
        darkPink: "#F72289",
        ewalletColor: "#1661F4",
        egift: "#1661F4",
        carrRegionColor: "#08358E",
        restaurantsColor: "#F6A913",
        demColor: "#0C8BE8",
        renColor: "#FF5D01",
        lightColor: "#F1F1F1",
      },
    },
  },
  plugins: [],
};

