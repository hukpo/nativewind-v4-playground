const fontSize = {
  micro: ["9px", "15px"],
  mini: ["11px", "17px"],
  small: ["13px", "18px"],
  base: ["15px", "20px"],
  medium: ["18px", "23px"],
  large: ["22px", "29px"],
  xLarge: ["25px", "34px"],
  xxLarge: ["32px", "44px"],
  xxxLarge: ["38px", "48px"],
};

/** @type {import('tailwindcss').Config} */
const preset = {
  content: [],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize,
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",

        primary: "var(--primary)",
        "primary-active": "var(--primary-active)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-active": "var(--secondary-active)",
        "secondary-foreground": "var(--secondary-foreground)",

        input: "var(--input)",
        "input-foreground": "var(--input-foreground)",

        destructive: "var(--destructive)",
        "destructive-active": "var(--destructive-active)",
        "destructive-foreground": "var(--destructive-foreground)",

        warning: "var(--warning)",

        success: "var(--success)",
        "success-foreground": "var(--success-foreground)",

        border: "var(--border)",
        ring: "var(--ring)",

        button: "var(--button)",
        "button-foreground": "var(--button-foreground)",
        "button-active": "var(--button-active)",
        "button-active-foreground": "var(--button-active-foreground)",
      },
    },
  },
};

module.exports = { preset, fontSize };
