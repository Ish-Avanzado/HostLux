/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        homeBanner: "url(../dist/img/banner.jpg)",
        blueOverlay:
          "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(1,18,191,0.9) 100%)",
        pricing: "url(../dist/img/pricing-bg.jpg)",
        bgcategory: "url(../dist/img/category.jpg)",
        bgfeature: "url(../dist/img/feature_bg.jpg)",
        bgProved: "url(../dist/img/proved-bg.jpg)",
      },
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        darkblue: "#041341",
        lightblue: "#1388ff",
        orange: "#fd872f",
        blue: "#0f5fff",
        darkgray: "#636363",
        asul: "#000e52",
        masul: "#0f58ff",
        bggray: "#f3f6fd",
        buttonDarkBlue: "#1060ff",
        buttonLightBlue: "#1384ff",
        buttonDarkOrange: "#ff630c",
        buttonLightOrange: "#fe940d",
      },
      animation: {
        onebounce: "bounce 0.5s 1",
      },
    },
  },
  plugins: [],
};
