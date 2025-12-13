import { Navbar } from "../SharedComponents/NavBar/Navbar";
import { Footer } from "../SharedComponents/Footer/Footer";
import { LandingPageContent } from "./LandingPageContent";
import { StyledLandinPageContainer } from "./styles/StyledLandingPage";

export const LandingPage = () => {
  return (
    <StyledLandinPageContainer>
      <Navbar />
      <LandingPageContent />
      <Footer />
    </StyledLandinPageContainer>
  );
};
