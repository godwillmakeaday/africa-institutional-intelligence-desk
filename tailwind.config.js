/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        inkdeep: "#06111C",
        ink: "#0A1826",
        navy: "#102434",
        navyhi: "#1A3851",
        charcoal: "#1B232E",
        parchment: "#F1ECE1",
        parchhi: "#F7F3EA",
        paper: "#FCFBF6",
        gold: "#B08A43",
        goldhi: "#C8A35A",
        goldhaze: "#D8C49A",
        rule: "#24384A",
        // Risk system — used ONLY for risk signalling
        risklow: "#5C7488",
        riskmed: "#A9772B",
        riskhigh: "#9C3F2C",
        riskstrat: "#6E548F",
      },
      fontFamily: {
        serif: ['"Spectral"', "Georgia", "serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.26em",
        wider4: "0.34em",
      },
      maxWidth: {
        desk: "1280px",
        prose2: "64ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,24,38,0.04), 0 12px 30px -22px rgba(10,24,38,0.22)",
        lift: "0 2px 4px rgba(10,24,38,0.05), 0 24px 48px -28px rgba(10,24,38,0.32)",
      },
      fontSize: {
        "display-xl": ["clamp(2.6rem, 5.2vw, 4.1rem)", { lineHeight: "1.04", letterSpacing: "-0.018em" }],
        "display-l": ["clamp(2.1rem, 3.6vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
      },
    },
  },
  plugins: [],
};
