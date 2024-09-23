/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue-primary": "#02BCC8",
        "light-blue-secondary": "#015C62",
        "gray-primary": "#9A9A9A",
        "red-primary": "#C80202",
      },
      screens: {
        xs: "480px",
        "xs-max": { max: "480px " },
        sm: "640px",
        "sm-max": { max: "640px" },
        md: "768px",
        "md-max": { max: "768px" },
        lg: "1024px",
        "lg-max": { max: "1024px" },
        xl: "1280px",
        "xl-max": { max: "1280px" },
        "2xl": "1536px",
        "2xl-max": { max: "1536px" },
      },
    },
  },
  plugins: [],
};
