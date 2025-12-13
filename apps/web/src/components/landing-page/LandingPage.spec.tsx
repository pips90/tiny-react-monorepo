import { BrowserRouter } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("LandingPage", () => {
  it("should render landing page with expected content", async () => {
    const onClickMock = jest.spyOn(console, "log").mockImplementation(() => {});
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );

    const preorderBtn = screen.getByRole("button", { name: /Pre-Order/i });
    await userEvent.click(preorderBtn);
    expect(onClickMock).toHaveBeenCalledWith("Let's Waste our $$$$");
  });
});
