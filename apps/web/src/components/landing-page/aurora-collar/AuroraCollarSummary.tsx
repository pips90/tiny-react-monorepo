
import { AuroraTrademark } from "../../SharedComponents/AuroraTrademark/AuroraTrademark";
import AuroraCollarImage from "../../../assets/website-images/AuroraCollar.png";
import { StyledMainHeading, StyledPreOrderBtn, StyledAuroraCollarSummaryContainer, StyledPLines, StyledSummaryContent, StyledSummaryImage } from "./styles/StyledAuroraCollarSummary";

export const AuroraCollarSummary = () => {
  return (
    <StyledAuroraCollarSummaryContainer>
      <StyledSummaryImage src={AuroraCollarImage}></StyledSummaryImage>
      <StyledSummaryContent>
        <StyledMainHeading className="brand">
          <AuroraTrademark>The AuroraCollar</AuroraTrademark>
        </StyledMainHeading>
        <StyledPLines>
          Look, we get it. You've been wondering why Mr. Fluffington stares at
          the wall for 45 minutes straight. Spoiler alert: he's judging your
          life choices.
        </StyledPLines>
        <StyledPLines>
          Our patented <AuroraTrademark>NeuroWoof</AuroraTrademark> technology
          uses advanced AI, quantum bark-entanglement, and like, a bunch of
          really expensive sensors to decode your dogs's innermost thoughts. Is
          it scientifically valid? Who cares! Does it work? Define "work."
        </StyledPLines>
        <StyledPreOrderBtn
          buttonText={"$499.99 + your dignity"}
          size={"small"}
          onClick={() =>
            console.log("CTA Clicked: Kiss your dignity goodbye!!!!")
          }
        />
      </StyledSummaryContent>
    </StyledAuroraCollarSummaryContainer>
  );
};


