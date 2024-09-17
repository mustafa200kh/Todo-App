/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        sm: "567px",
        md: "767px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      backgroundImage: {
        "desktop-light": "url('/src/assets/images/desktop-light.jpg')",
        "desktop-dark": "url('/src/assets/images/desktop-dark.jpg')",
        "mobile-light": "url('/src/assets/images/mobile-light.jpg')",
        "mobile-dark": "url('/src/assets/images/mobile-dark.jpg')",
      },
      colors: {
        bgDarkColorMain: "#181824",
        bgDarkColorSecond: "#25273c",
        textDarkMain: "#c1c3da",
        textDarkSecond: "#5c5e77",
      },
    },
  },
  plugins: [],
};
