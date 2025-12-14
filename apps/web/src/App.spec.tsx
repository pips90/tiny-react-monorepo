import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("renders the landing content", async () => {
    render(
      <BrowserRouter >
        <App />
      </BrowserRouter>
    );
    const ctaBtn = screen.getByRole("button", {
      name: /Explore BarkWeaver/i,
    });
    expect(ctaBtn).toBeVisible();
    expect(screen.getByText(/Welcome to BarkWeaver/i)).toBeVisible();
    expect(
      screen.getByText(/AuraCollar journey. More pages, stories, and/i)
    ).toBeVisible();
    await userEvent.click(ctaBtn);
    expect(screen.getByText(/Finally know/i)).toBeVisible();
  });
});
