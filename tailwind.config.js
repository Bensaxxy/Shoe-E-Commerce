/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Kumbh Sans",
    },
    colors: {
      primary: "hsl(26, 100%, 55%)",
      secondary: "hsl(25, 100%, 94%)",
      veryDarkBlue: "hsl(220, 13%, 13%)",
      DarkGrayishBlue: "hsl(219, 9%, 45%)",
      GrayishBlue: "hsl(220, 14%, 75%)",
      LightGrayishBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "3rem" },
    },
  },
  plugins: [],
};
