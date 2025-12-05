import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // show violations in the panel only; bump to "error" for CI enforcement
      test: "todo",
    },
  },
};

export default preview;
