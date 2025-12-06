import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the landing content", () => {
    render(<App />);
    expect(screen.getByText(/Welcome to BarkWeaver/i)).toBeInTheDocument();
    expect(
      screen.getByText(/AuraCollar journey. More pages, stories, and/i),
    ).toBeInTheDocument();
  });
});
