/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lg2: "1200px",
      lg3: "1236px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        shootingLight: "url(/assets/shootinglight.jpg)",
      },
      colors: {
        gold: "#A78236",
        purple: "#28285B",
        darkPink: "#F72289",
        ewalletColor: "#1661F4",
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
1236;
