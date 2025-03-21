import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      display1: "48px",
      display2: "40px",
      display3: "32px",
      display4: "26px",
      display5: [
        "22px",
        {
          lineHeight: "24px",
        },
      ],
      display6: "18px",
      display7: "16px",
      h1: "48px",
      h2: "32px",
      h3: "28px",
      h4: "24px",
      h5: "20px",
      h6: "18px",
      "body-large": [
        "16px",
        {
          lineHeight: "22px",
        },
      ],
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
      "gray-50": "var(--gray-50)",
      "gray-100": "var(--gray-100)",
      "gray-200": "var(--gray-200)",
      "gray-300": "var(--gray-300)",
      "gray-400": "var(--gray-400)",
      "gray-500": "var(--gray-500)",
      "gray-600": "var(--gray-600)",
      "gray-700": "var(--gray-700)",
      "gray-800": "var(--gray-800)",
      "gray-900": "var(--gray-900)",
      "blue-500": "var(--blue-500)",
      "blue-600": "var(--blue-600)",
    },
    extend: {
      dropShadow: {
        xs: "0px 1px 2px rgba(24, 35, 34, 0.05)",
        "primary-button": [
          "0px 0px 0px 1px #0025AD",
          "0px 4px 12px -2px rgba(0, 27, 126, 0.72)",
          "0px 0px 0px 4px #D3DCFF",
        ],
      },
      borderRadius: {
        "br-20": "20px",
        "br-16": "16px",
        "br-8": "8px",
      },
    },
  },
  plugins: [],
};
export default config;
