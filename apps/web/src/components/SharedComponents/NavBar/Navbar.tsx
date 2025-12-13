import { StyledNavFooterHeading } from "../SharedStyles/SharedStyles";
import { StyledNavBar } from "./styles/StyledNavbar";

export const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledNavFooterHeading
        style={{ textAlign: "center", color: "lightskyblue" }}
      >
        NavBar
      </StyledNavFooterHeading>
    </StyledNavBar>
  );
};
