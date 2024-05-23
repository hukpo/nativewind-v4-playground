/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui-kit/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@hukpo/ui-kit/preset").preset],
};
