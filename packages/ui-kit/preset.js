/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "brand-color": "var(--brand-color)",
      },
    },
  },
};
