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
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1400px",
      xxxl: "1600px",
      xlgl: "2000px",
      xlxl: "2500px",
    },

    extend: {
      colors: {
        shockersAEC: {
          DEFAULT: "#252424",
        },
        shockersAECYellow: {
          DEFAULT: "#fdcf00",
        },
        baytuna: {
          DEFAULT: "#c01f4a",
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
          DEFAULT: "#25325C",
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
