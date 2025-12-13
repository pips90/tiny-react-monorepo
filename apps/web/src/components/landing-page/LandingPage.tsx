import { SharedButton } from "@pips90/ui";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  //   const navigate = useNavigate();
  return (
    <StyledLandinPageContainer>
      <div>
        <h2 style={{ textAlign: "center", color: "lightskyblue" }}>NavBar</h2>
      </div>
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
      <div>
        <h2 style={{ textAlign: "center", color: "lightskyblue" }}>Footer</h2>
      </div>
    </StyledLandinPageContainer>
  );
};

const StyledLandingPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  margin: 1rem 1rem 0rem 1rem;
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
  flex-direction: row;
  justify-content: center;
  padding: 0 1rem 0 1rem;
  text-align: center;
  margin: 0 24rem 0 24rem;
`;

const StyledTagLine = styled.h3`
font-size: 2rem;
font-family: "Times New Roman", Times, serif;
font-weight: 300;
margin-bottom: 0rem;
color: #f7a781;
span {
  font-style: italic;
}
`;

const StyledDisclaimer = styled.p`
font-size: 1rem;
font-family: "Times New Roman", Times, serif;
font-weight: 300;
color: #f7a781;

`;

const StyledMainHeading = styled.h1`
  font-size: 4rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
  margin-top: 0rem;
  color: #f7a781;

  span {
    font-style: italic;
    font-weight: 600;
  }
`;
