import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof App> = {
  title: "Pages/App",
  component: App,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof App>;

export const Default: Story = {
  render: () => (
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const webTagline = canvas.getByRole("main");
    const webTitle = canvas.getByText("Welcome to BarkWeaver.");
    const webSubTitle = canvas.getByText(
      "A home for the AuraCollar journey. More pages, stories, and science are coming soon."
    );
    expect(canvas.getByText("Explore BarkWeaver")).toBeVisible();
    expect(webTagline).toHaveTextContent("BarkWeaver");
    expect(webTitle).toBeVisible();
    expect(webSubTitle).toBeVisible();
    await userEvent.click(canvas.getByText("Explore BarkWeaver"));
    expect(canvas.getByText("Landing Page")).toBeVisible();
  },
};
