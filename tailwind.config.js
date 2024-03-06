import { colors } from "./src/theme/colors";
import { fontFamily } from "./src/theme/fontFamily";
import { fontSize } from "./src/theme/size";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
    },
  },
  plugins: [],
};
