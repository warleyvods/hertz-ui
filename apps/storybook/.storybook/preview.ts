import type { Preview } from "@storybook/react";
import "@hertz-ui/react/styles.css";
// import "@hertz-ui/react/styles/globals.css";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
