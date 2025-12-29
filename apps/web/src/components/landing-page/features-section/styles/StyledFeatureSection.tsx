import styled from "styled-components";

export const StyledMainHeading = styled.h1`
  font-size: clamp(3.5rem, 4vw, 3.5rem);
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
  color: #e49681;
  width: 100%;
  margin-bottom: 0px;
  margin-right: auto;
  margin-left: auto;
  line-height: 1.15;

  span {
    font-weight: 800;
  }
`;

export const StyledPLines = styled.h3`
  font-size: clamp(2rem, 2.5vw, 2rem);
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
  margin-top: 0px;

  margin-right: auto;
  margin-left: auto;
  color: #f7a781;
  text-align: left;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const StyledFeatureSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.15rem solid #f7a781;
  border-bottom: 0.15rem solid #f7a781;
  width: 100%;
`;

export const StyledFeatureRow = styled.div`
display: flex;
flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;

  > * {
    box-sizing: border-box;
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0.5rem;
  }

   /* Stack features to full width on smaller viewports */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    > * {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 0.5rem 0;
    }
`;

export const StyledFeaturedItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;