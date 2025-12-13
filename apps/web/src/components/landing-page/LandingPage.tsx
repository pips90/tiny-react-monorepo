import { SharedButton } from "@pips90/ui";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  //   const navigate = useNavigate();
  return (
    <StyledLandinPageContainer>
      <StyledNavBar>
        <StyledNavFooterHeading style={{ textAlign: "center", color: "lightskyblue" }}>NavBar</StyledNavFooterHeading>
      </StyledNavBar>
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
            *Results may include excessive food demands and existential
            commentary
          </StyledDisclaimer>
        </StyledLandingPageContent>
      </StyledLandingPageContentContainer>
      <StyledFooter>
        <StyledNavFooterHeading style={{ textAlign: "center", color: "lightskyblue" }}>Footer</StyledNavFooterHeading>
      </StyledFooter>
    </StyledLandinPageContainer>
  );
};

const StyledLandingPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 640px;
  margin: 1.5rem auto 0;

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 1024px) {
    max-width: 960px;
  }
`;

const StyledPreOrderBtn = styled(SharedButton)`
  border-radius: 9999px;
  font-size: 1.5rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: 300;
  color: #f7a781;
  height: 3.5rem;
  border: 0.15rem solid #f7a781;
  background: #fff6f0;

  /* TODO: Add this 'transform' to SharedButton as it should have this base functionality */
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`;
const StyledLandinPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #fff6f0;
  min-height: 100vh;
  width: 100%;
`;

const StyledLandingPageContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1.25rem 2rem;
  text-align: center;
`;

const StyledTagLine = styled.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-family: "Times New Roman", Times, serif;
  font-weight: 300;
  margin-bottom: 0rem;
  color: #f7a781;

  span {
    font-style: italic;
  }
`;

const StyledDisclaimer = styled.p`
  font-size: clamp(0.875rem, 1.6vw, 1rem);
  font-family: "Times New Roman", Times, serif;
  font-weight: 300;
  color: #f7a781;
`;

const StyledMainHeading = styled.h1`
  font-size: clamp(2.25rem, 4vw, 3rem);
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
  margin-top: 0rem;
  color: #f7a781;
  max-width: 22ch;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  line-height: 1.15;

  span {
    font-style: italic;
    font-weight: 600;
  }
`;

const StyledNavBar = styled.div`
text-align: center;
h2 {
  color: lightskyblue;
  }
`
const StyledFooter = styled.div`
text-align: center;
h2 {
  color: lightskyblue;
  }
`

const StyledNavFooterHeading = styled.h2``
