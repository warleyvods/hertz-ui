/** @type {import('tailwindcss').Config} */
const sharedConfig = require("@hertz-ui/tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "../../packages/react/src/components/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
