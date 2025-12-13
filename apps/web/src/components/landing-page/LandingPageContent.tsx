import {
  StyledLandingPageContentContainer,
  StyledLandingPageContent,
  StyledTagLine,
  StyledMainHeading,
  StyledPreOrderBtn,
  StyledDisclaimer,
} from "./styles/StyledLandingPageContent";
// import { useNavigate } from "react-router-dom";

export const LandingPageContent = () => {
  //   const navigate = useNavigate();
  return (
    <StyledLandingPageContentContainer>
      <StyledLandingPageContent>
        <StyledTagLine>
          We create <span>technology</span> that understands.
        </StyledTagLine>
        <StyledMainHeading>
          Finally know what your dog is <span>actually</span> thinking.
        </StyledMainHeading>
        <StyledPreOrderBtn
          buttonText="Pre-Order Now"
          size="small"
          // onClick={() => navigate("/landing-page")}
          onClick={() => console.log("Let's Waste our $$$$")}
        />
        <StyledDisclaimer>
          *Results may include excessive food demands and existential commentary
        </StyledDisclaimer>
      </StyledLandingPageContent>
    </StyledLandingPageContentContainer>
  );
};
