/** @type {import('tailwindcss').Config} */
const preset = {
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

module.exports = { preset };
