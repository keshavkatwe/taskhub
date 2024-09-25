import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      display1: "48px",
      display2: "40px",
      display3: "32px",
      display4: "26px",
      display5: "22px",
      display6: "18px",
      display7: "16px",
      h1: "48px",
      h2: "32px",
      h3: "28px",
      h4: "24px",
      h5: "20px",
      h6: "18px",
      "body-large": "16px",
      "body-medium": "14px",
      "body-small": "12px",
      "body-x-small": "10px",
    },
    colors: {
      "background-white": "var(--background-white)",
      "background-grey": "var(--background-grey)",
      "text-black": "var(--text-black)",
      "text-gray1": "var(--text-gray1)",
      "text-gray2": "var(--text-gray2)",
      "text-gray3": "var(--text-gray3)",
      "text-white": "var(--text-white)",
      "line-dotted1": "var(--line-dotted1)",
      "line-dotted2": "var(--line-dotted2)",
      "line-field": "var(--line-field)",
      "line-container": "var(--line-container)",
    },
  },
  plugins: [],
};
export default config;
