import { render } from "@testing-library/react";
import { AuroraTrademark } from "../AuroraTrademark";

describe("AuroraTrademark", () => {
    it("should render children with trademark symbol", () => {
        const { getByText } = render(<AuroraTrademark>Test</AuroraTrademark>)
        expect(getByText(/tm/i)).toBeInTheDocument();
});
})