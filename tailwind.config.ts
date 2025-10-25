import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // This is important!
  theme: {
    extend: {
      colors: {
        dark: "#171717",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
