import styled from "styled-components";

export const StyledFeaturedItemRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const StyledIcon = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  flex: 0 0 auto;
  padding: 1rem;
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  flex: 0 0 auto;
`;

export const StyledFeaturedItemColumn = styled.div`
display: flex;
flex-direction: column;
`;

export const StyledMainHeading = styled.h1`
  font-size: clamp(.5rem, 2.0vw, 1.5rem);
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
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
  margin-top: 0px;
  margin-bottom: 0px;
  color: #f7a781;
  text-align: left;

  @media (max-width: 768px) {
    text-align: left;
  }
`;