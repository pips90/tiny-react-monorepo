import { BrowserRouter } from "react-router-dom";
import { LandingPage } from "../LandingPage";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("AuroraCollarSummary", () => {
    it("should render AuroraCollarSummary component", async () => {
      const onClickMock = jest.spyOn(console, "log").mockImplementation(() => {});
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
      const preorderBtn = screen.getByRole("button", { name: /your dignity/i });
          await userEvent.click(preorderBtn);
          expect(onClickMock).toHaveBeenCalledWith("CTA Clicked: Kiss your dignity goodbye!!!!");
    });
});