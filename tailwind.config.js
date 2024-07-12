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
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#e4e4e4",
        },
        seconds: {
          DEFAULT: "#2c2926",
        },
        borderColor: {
          DEFAULT: "#aeaeae",
        },
        shockerYellow: {
          DEFAULT: "#fdcf00",
        },
       
      },
    },
  },
  fontFamily: {
    custom: ["Shockers", "sans-serif"],
  },

  plugins: [],
};
