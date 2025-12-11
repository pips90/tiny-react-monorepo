import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders the landing content", async () => {
    const logger = jest.spyOn(console, "log").mockImplementation(() => {})
    render(<App />);
    const ctaBtn = screen.getByRole('button', {name: /Explore BarkWeaver/i});
    expect(ctaBtn).toBeVisible();
    expect(screen.getByText(/Welcome to BarkWeaver/i)).toBeVisible();
    expect(
      screen.getByText(/AuraCollar journey. More pages, stories, and/i),
    ).toBeVisible();
    await userEvent.click(ctaBtn);
  expect(logger).toHaveBeenCalledWith("CTA clicked");

  });
});
