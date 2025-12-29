import styled from "styled-components";
import { SharedButton } from "@pips90/ui";

export const StyledAuroraCollarSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 0.15rem solid #f7a781;
  gap: 2rem;
  width: 100%;
  margin-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    align-items: left;
    text-align: left;
  }
`;

export const StyledSummaryImage = styled.img`
  width: 40%;
  height: auto;
  max-width: 360px;

  @media (max-width: 768px) {
    width: 70%;
    max-width: 280px;
    margin: 0 auto;
  }
`;

export const StyledSummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
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

  @media (max-width: 768px) {
    /* Make the CTA larger and more tappable on mobile */
    font-size: 1.05rem;
    height: 4.25rem;
    padding: 0 1.25rem;
    min-width: 64%;
    display: inline-block;
    text-align: center;
  }

  /* Tablet (e.g. iPad Air) — slightly larger touch target than desktop */
  @media (max-width: 915px) and (min-width: 769px) {
    font-size: 1.1rem;
    height: 4rem;
    padding: 0 1rem;
    min-width: 48%;
    display: inline-block;
    text-align: center;
  }
`;

export const StyledMainHeading = styled.h1`
  font-size: clamp(1rem, 2.5vw, 2rem);
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
  margin-top: 0rem;
  color: #e49681;
  max-width: 22ch;
  margin-right: auto;
  line-height: 1.15;

  span {
    font-weight: 600;
  }
`;

export const StyledPLines = styled.h3`
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  font-family: "Times New Roman", Times, serif;
  font-weight: 300;
  margin-top: 0rem;
  margin-bottom: 0rem;
  color: #f7a781;
  text-align: left;

  @media (max-width: 768px) {
    text-align: left;
  }
`;
