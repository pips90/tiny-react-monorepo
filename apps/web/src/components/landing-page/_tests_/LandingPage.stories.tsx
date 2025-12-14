import type { Meta, StoryObj } from "@storybook/react";
import { LandingPage } from "../LandingPage";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof LandingPage> = {
  title: "Pages/LandingPage",
  component: LandingPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  }
};

export default meta;

type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  render: () => (
    <MemoryRouter initialEntries={["/landing-page"]}>
      <LandingPage />
    </MemoryRouter>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const webTagline = canvas.getByRole("heading", {level: 3});
    const mainHeading = canvas.getByRole("heading", {level: 1});
    const fakeDisclaimer = canvas.getByText(/Pre-Order/i)
    
    expect(webTagline).toHaveTextContent(/We create technology/i);
    expect( mainHeading).toHaveTextContent(/Finally know what your dog is actually thinking/i);
    expect(fakeDisclaimer).toBeVisible();
  },
};
