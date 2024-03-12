/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(244, 239, 233)",
        mainColor: "rgb(50, 74, 117)",
      },

      height: {
        headerHeight: "75px",
      },

      fontFamily: {
        montserrat: ["Montserrat"],
        openSans: ["Open Sans"],
        kyiv: ["Kyiv"],
      },

      screens: {
        mobile: "460px",
        tablet: "768px",
        laptop: "1024px",
        largeDesktop: "1200px",
      },
    },
  },
  plugins: [],
};
