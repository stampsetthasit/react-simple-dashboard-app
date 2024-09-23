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
    },
  },
  plugins: [],
};
