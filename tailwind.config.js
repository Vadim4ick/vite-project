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
      padding: {
        headerHeight: "75px",
      },

      gridTemplateColumns: {
        travelPopular: "485px 1fr",
        travelPopularReverse: "1fr 485px",

        travelPopularTablet: "385px 1fr",
        travelPopularReverseTablet: "1fr 385px",

        someOfTheHotels: "repeat(auto-fit, minmax(240px, 1fr));",
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
