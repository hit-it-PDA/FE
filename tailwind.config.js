/* @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {},
      colors: {
        main_yellow: "#FFDE71",
        input_color: "#D9D9D9",
        progress_color: "#F3F3F3",
        invest_text: "#FF9900",
        main: "#375AFF",
        sub: "#E8ECFF",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".accent-customYellow": {
          accentColor: "#FFDE71",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
