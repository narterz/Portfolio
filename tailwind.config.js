/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        encodeSans: ['Encode Sans', 'sans-serif'],
      },
      screens: {
        xsm: "320px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px"
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: "marquee2 25s linear infinite",
        blob: "blob 5s ease-in-out infinite"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        blob: {
          "0%": { 'border-radius': "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { 'border-radius': "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "100%": { 'border-radius': "60% 40% 30% 70% / 60% 30% 70% 40%" }
        }
      },
      fontSize: {
        xxl: "5rem",
        husky: '4rem',
        xlg: "3rem",
        lg: "2.25rem",
        md: "1.5rem",
        norm: "1.3rem",
        sm: "1.225rem",
        xsm: "1rem",
        xxsm: "0.925rem"
      },
      fontWeight: {
        light: 200,
        regular: 400,
        bold: 600
      },
      colors: {
        primary: "#493894",
        primaryLight: "#7054EF",
        primaryDark: "#211F29",
        secondary: "#EBA208",
        darkerWhite: "#E9E4FB"
      },
    },
  }, 
  plugins: [
    require('@tailwindcss/typography'), 
  ],
}


