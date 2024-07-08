import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom":
          "linear-gradient(to bottom, black 40%, gray 90%, lightgray 100%)",
        "gradient-opacity":
          "linear-gradient(to bottom, rgba(135, 206, 235, 0.6), rgba(152, 251, 152, 0.6))",
      },
      colors: {
        whiteSmoke: "#F5F5F5",
        blueSky: "#87ceeb",
        blueTeal: "#5FA5B6",
        blueDeep: "#5a9bcf",
        grayLighter: "#e0e0e0",
        grayLight: "#ccc",
        greenLight: "#98FB98",
        grayMedium: "#777777",
        grayDark: "#212529",
        grayOpac70: "rgba(51, 51, 51, 0.7)",
        blackOpac15: "rgba(0, 0, 0, 0.15)",
        blueHover: "#4DA6E2",
        orange: "#FFDAB9",
        skin: {
          "100": "#FFF5EB",
          "200": "#FFDBAC",
          "300": "#FFC880",
          "400": "#FFB75D",
        },
      },
      borderRadius: {
        "20": "20px",
        "54": "54px",
      },
      boxShadow: {
        blue: "0px 6px 4px 0px rgba(90, 155, 207, 1)",
        blackOpac17: "0 0.5rem 1rem rgba(0, 0, 0, 0.175)",
      },
      height: {
        "0.25": "1px",
      },
      minHeight: {
        "400": "400px",
        "11/12": "90%",
      },
      width: {
        "90": "90%",
        "95": "95%",
        "96": "96%",
        "600":"600px",
      },
      minWidth: {
        "10": "10rem",
      },

      padding: {
        "5px": "5px",
        "20px": "20px",
      },
      margin: {
        "48": "48px",
        "52": "52px",
        "92": "92px",
        "121": "121px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
export default config;
