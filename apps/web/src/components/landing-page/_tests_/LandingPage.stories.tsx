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
    const webTagline = canvas.getAllByRole("heading", {level: 3});
    const mainHeading = canvas.getAllByRole("heading", {level: 1});
    const fakeDisclaimer = canvas.getByText(/Pre-Order/i)

    expect(webTagline[0]).toHaveTextContent(/We create technology/i);
    expect(mainHeading[0]).toHaveTextContent(/Finally know what your dog is actually thinking/i);
    expect(fakeDisclaimer).toBeVisible();
  },
};

export const AuroraCollarSummaryComponent: Story = {
  render: () => (<>
    <MemoryRouter initialEntries={["/landing-page"]}>
      <LandingPage />
    </MemoryRouter>
  </>),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const auroraCollarHeading = canvas.getAllByRole("heading", {level: 1});
    const paragraph1 = canvas.getByText(/Look, we get it/i)
    const paragraph2 = canvas.getByText(/NeuroWoof/i);
    const CtaButton = canvas.getByRole("button", { name: /your dignity/i });

    expect(auroraCollarHeading[1]).toHaveTextContent(/The AuroraCollar/i);
    expect(paragraph1).toBeVisible();
    expect(paragraph2).toBeVisible();
    expect(CtaButton).toBeVisible();

  }
}