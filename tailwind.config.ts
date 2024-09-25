import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      display1:"48px",
      display2:"40px",
      display3:"32px",
      display4:"26px",
      display5:"22px",
      display6:"18px",
      display7:"16px",
      h1:"48px",
      h2:"32px",
      h3:"28px",
      h4:"24px",
      h5:"20px",
      h6:"18px",
      "body-large":"16px",
      "body-medium":"14px",
      "body-small":"12px",
      "body-x-small":"10px"
    }
  },
  plugins: [],
};
export default config;
