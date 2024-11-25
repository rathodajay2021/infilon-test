/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-display": { max: "1920px" },
        laptop: { max: "1440px" },
        tablet: { max: "768px" },
        mobile: { max: "450px" },
      },
      backgroundImage: {
        waves: "url('Assets/Images/Element.png')",
        "charts-img": "url('Assets/Images/Image-container.png')",
        logo: "url('Assets/Icons/logo.png')"
      },
      colors: {
        primary: {
          DEFAULT: "#043873",
          200: "#4F9CF9"
        },
        golden:{
          DEFAULT: "#FFE492"
        }
      },
    },
  },
  plugins: [],
};
