import { StyledNavFooterHeading } from "../SharedStyles/SharedStyles";
import { StyledFooter } from "./styles/StyledFooter";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledNavFooterHeading
        style={{ textAlign: "center", color: "lightskyblue" }}
      >
        Footer
      </StyledNavFooterHeading>
    </StyledFooter>
  );
};
