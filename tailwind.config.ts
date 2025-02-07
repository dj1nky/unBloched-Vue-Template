/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "280px",
      xs: "325px",
      sm: "480px",
      smd: "600px",
      md: "770px",
      lg: "976px",
      xl: "1280px",
      xxl: "1440px",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      dark: "#191A19",
      light: "#D8E9A8",
      "dark-blue": "#222831",
      "dark-green": "#1E5128",
      "light-green": "#52AA41",
      teal: "#00ADB5",
      grey: "#64787F",
      maroon: "#B83B5E",
      purple: "#6A2C70",
    },
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
