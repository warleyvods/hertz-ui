const sharedConfig = require("@hertz-ui/tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  presets: [require("./shadcn-preset.js")],
};
