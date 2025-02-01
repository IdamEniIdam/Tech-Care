/** @type {import('tailwindcss').Config} */
/*eslint-env node*/

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          brand_color: "#04B287",
          darkGreen: "#003C3C",
          yellow: "#D68E02",
        },
        secGreen: "#00C896",
        brand25: "#EEFCFF",
        brand50: "#D6F4F9",
        brand100: "#BEEBF3",
        brand200: "#8FDAE8",
        brand500: "#00A7C5",
        brand600: "#00869E",
        brand700: "#025B6B",
        gray25: "#FCFCFD",
        gray100: "#F2F4F7",
        gray200: "#EAECF0",
        gray300: "#D0D5DD",
        gray400: "#98A2B3",
        gray500: "#667085",
        gray600: "#475467",
        gray700: "#344054",
        gray900: "#1E1F1F",
        grayTwo: "#B0BABF",
        success600: "#039855",
        secondaryOne: "#F76659",
        fontFamily: {
          Inter: ["Lato, sans-serif"],
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".underline-primary": {
          "text-decoration-color": theme("colors.primary.brand_color"),
        },
      };

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    },
  ],
};
