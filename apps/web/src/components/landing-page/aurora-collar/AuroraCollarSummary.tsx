import { SharedButton } from "@pips90/ui";
import { AuroraTrademark } from "../../SharedComponents/AuroraTrademark/AuroraTrademark";
import AuroraCollarImage from "../../../assets/website-images/AuroraCollar.png";
import styled from "styled-components";

export const AuroraCollarSummary = () => {
  return (
    <StyledAuroraCollarSummaryContainer>
      <StyledSummaryImage src={AuroraCollarImage}></StyledSummaryImage>
      <StyledSummaryContent>
        <StyledMainHeading className="brand">
          <AuroraTrademark>The AuraCollar</AuroraTrademark>
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

export const StyledAuroraCollarSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  margin-top: 8rem;
`;

export const StyledSummaryImage = styled.img`
  width: 40%;
  height: auto;
`;

export const StyledSummaryContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledPreOrderBtn = styled(SharedButton)`
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

export const StyledMainHeading = styled.h1`
  font-size: clamp(2rem, 2vw, 1rem);
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
  margin-top: 0rem;
  color: #e49681;
  max-width: 22ch;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.15;

  span {
    font-weight: 600;
  }
`;

export const StyledPLines = styled.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-family: "Times New Roman", Times, serif;
  font-weight: 300;
  margin-top: 0rem;
  margin-bottom: 0rem;
  color: #f7a781;
  text-align: left;
`;
