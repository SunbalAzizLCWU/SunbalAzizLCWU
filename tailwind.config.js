/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#111415",
        "outline": "#879487",
        "surface-variant": "#333537",
        "error-container": "#93000a",
        "surface-container-lowest": "#0c0e10",
        "secondary": "#c8c6c5",
        "on-error-container": "#ffdad6",
        "outline-variant": "#3e4a3f",
        "primary-fixed-dim": "#66dd8b",
        "tertiary-fixed": "#dde4e6",
        "secondary-container": "#474746",
        "surface-container": "#1e2021",
        "error": "#ffb4ab",
        "surface-container-highest": "#333537",
        "on-secondary-container": "#b7b5b4",
        "on-secondary-fixed": "#1c1b1b",
        "inverse-on-surface": "#2f3132",
        "on-primary-fixed": "#00210c",
        "tertiary-fixed-dim": "#c1c8ca",
        "surface-tint": "#66dd8b",
        "tertiary-container": "#acb3b5",
        "on-background": "#e2e2e4",
        "primary": "#6ee591",
        "on-surface": "#e2e2e4",
        "on-tertiary-container": "#3e4548",
        "surface-dim": "#111415",
        "on-tertiary": "#2b3234",
        "inverse-primary": "#006d36",
        "primary-fixed": "#83fba5",
        "on-surface-variant": "#bdcabc",
        "on-primary-fixed-variant": "#005227",
        "tertiary": "#c7ced1",
        "secondary-fixed": "#e5e2e1",
        "inverse-surface": "#e2e2e4",
        "on-primary-container": "#005025",
        "primary-container": "#50c878",
        "surface-container-high": "#282a2c",
        "surface": "#111415",
        "secondary-fixed-dim": "#c8c6c5",
        "on-secondary-fixed-variant": "#474746",
        "on-primary": "#003919",
        "on-error": "#690005",
        "surface-bright": "#37393b",
        "on-tertiary-fixed-variant": "#41484a",
        "surface-container-low": "#1a1c1d",
        "on-secondary": "#313030",
        "on-tertiary-fixed": "#161d1f"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "unit": "8px",
        "container-max": "1280px",
        "gutter": "24px",
        "margin-mobile": "20px",
        "margin-desktop": "64px"
      },
      fontFamily: {
        "code-display": ["JetBrains Mono", "monospace"],
        "label-caps": ["JetBrains Mono", "monospace"],
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-md": ["Montserrat", "sans-serif"],
        "headline-lg": ["Montserrat", "sans-serif"],
        "headline-lg-mobile": ["Montserrat", "sans-serif"],
        "headline-xl": ["Montserrat", "sans-serif"]
      },
      fontSize: {
        "code-display": ["14px", { lineHeight: "1.5", letterSpacing: "0.05em", fontWeight: "500" }],
        "label-caps": ["12px", { lineHeight: "1", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-xl": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }]
      },
      maxWidth: {
        "container-max": "1280px"
      }
    }
  },
  plugins: [],
}
