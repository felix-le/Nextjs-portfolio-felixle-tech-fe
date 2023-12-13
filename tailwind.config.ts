import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#6c2e1f",
      black: "#000",
      white: "#fff",
      red: "#dc2626",
      green: "#059669",
      secondary: "#348efe",
      brand: {
        react: "#087EBF",
        typescript: "#3178c6",
        next: "#0070F3",
        node: "#026e00",
        expressjs: "#690",
      },
      yellow: {
        100: "#FFF8D4",
        200: "#FFF0AA",
        300: "#FEE97F",
        400: "#FEE254",
        500: "#FED929",
        600: "#EBC401",
        700: "#B19301",
        800: "#766201",
        900: "#3B3100",
      },
      neutral: {
        50: "#F1F1F1",
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#808080",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#000",
      },
      // ...defaultTheme.colors
    },
    fontSize: {
      base: ["16px", "1.49"],
      lg: ["20px", "1.58"],
      xl: ["24px", "1"],
      "2xl": ["32px", "1.32"],
      "3xl": ["36px", "1.25"],
      "4xl": ["48px", "1"],
      "5xl": ["56px", "1"],
      "6xl": ["64px", "1"],
      "7xl": ["98px", "1"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },
    borderRadius: {
      DEFAULT: "0",
      xs: "2px",
      md: "3px",
      lg: "12px",
      xl: "24px",
    },
    corePlugins: {
      container: false,
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
        title: ["Clear Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      flexShrink: {
        0: "0",
        1: "1",
        2: "2",
        unset: "unset",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
    function ({
      addComponents,
      addUtilities,
      theme,
    }: {
      addComponents: any;
      addUtilities: any;
      theme: any;
    }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "540px",
            padding: 0,
          },
          "@screen md": {
            maxWidth: "680px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1280px",
          },
        },
        ".container-expanded": {
          maxWidth: "100%",
          // paddingLeft: "1rem",
          // paddingRight: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen lg": {
            maxWidth: "calc(100% - 88px)",
          },
        },
        ".card-service": {
          "text-orientation": "mixed",
          "writing-mode": "vertical-lr",
        },
      }),
        addUtilities({
          ".text-highlight": {
            background: theme("colors.primary"),
            padding: `${theme("space[0.5]")} 0`, //  ${theme("space[1]")}
            fontStyle: "italic",
          },
        });
    },
  ],
};
