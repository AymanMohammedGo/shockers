/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      headerSize: "850px",
      lg: "960px",
      xl: "1200px",
      xxl: "1400px",
      xxxl: "1600px",
      xlgl: "2000px",
      xlxl: "2500px",
      FHD125: "1500px", // 1920*1080 125% => 1536px
      FHD110: "1700px", // 1920*1080 110% => 1745px
      FHD100: "1900px", // 1920*1080 100% => 1920px
    },
    extend: {
      colors: {
        shockersAEC: {
          DEFAULT: "#242424",
        },
        shockersAECYellow: {
          DEFAULT: "#ffcf01",
        },
        baytuna: {
          DEFAULT: "#93c5ac",
        },
        yard: {
          DEFAULT: "#B9D988",
        },
        deca: {
          DEFAULT: "#17b9b5",
        },
        yMarketing: {
          DEFAULT: "#052460",
        },
        shocky: {
          DEFAULT: "#0c123e",
        },
        shockyRed: {
          DEFAULT: "#d4de25",
        },
        primary: {
          DEFAULT: "#e4e4e4",
        },
        seconds: {
          DEFAULT: "#252424",
        },
        borderColor: {
          DEFAULT: "#aeaeae",
        },
        shockerYellow: {
          DEFAULT: "#ffcf01",
        },
      },
    },
  },
  fontFamily: {
    custom: ["Shockers", "sans-serif"],
  },

  plugins: [],
};
