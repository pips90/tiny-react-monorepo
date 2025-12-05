import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof App> = {
  title: "Pages/App",
  component: App,
};

export default meta;

type Story = StoryObj<typeof App>;

export const Default: Story = {
  render: () => <App />,
   play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const webTagline = canvas.getByRole("main", );
    const webTitle = canvas.getByText('Welcome to BarkWeaver.');
    const webSubTitle = canvas.getByText('A home for the AuraCollar journey. More pages, stories, and science are coming soon.')
    await userEvent.click(canvas.getByText("Explore BarkWeaver"));
    expect(canvas.getByText("Explore BarkWeaver")).toBeVisible();
    expect(webTagline).toHaveTextContent('BarkWeaver');
    expect(webTitle).toBeVisible();
    expect(webSubTitle).toBeVisible();
  },
};
