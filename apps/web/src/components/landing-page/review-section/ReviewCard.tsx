import styled from "styled-components";

export interface ReviewCardProps {
    description?: string;
    name?: string;
    dogInfo?: DogInfoProps[];
}

export interface DogInfoProps {
    dogName: string;
    dogBreed: string;
}

export const ReviewCard = ({ description, name, dogInfo }: ReviewCardProps) => {
    // description = "This is a fantastic product! My dog loves it and I couldn't be happier.";
    // name = "Jane Doe";
    // dogInfo = [{ dogName: "Buddy", dogBreed: "Golden Retriever" }];
    return(
        <StyledReviewCard>
            <StyledTagLine>"{description}"</StyledTagLine>
            <StyledMainHeading>{name}</StyledMainHeading>
            {dogInfo && dogInfo.map((dog, index) => (
                <StyledDisclaimer key={index}>Owner of '{dog.dogName}'('{dog.dogBreed}')</StyledDisclaimer>
            ))}
        </StyledReviewCard>
    )
}

export const StyledReviewCard = styled.div`
display: flex;
flex-direction: column;
border-radius: 1rem;
gap: .5rem;
background-color: white;
padding: 2rem;
min-width: 15rem;
max-width: 15rem;
align-items: flex-start;

  /* subtle base shadow */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 160ms ease, box-shadow 160ms ease;

  /* popout on hover/focus */
  &:hover,
  &:focus-within {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledTagLine = styled.h3`
  font-size: 1rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: 300;
  margin-bottom: 0rem;
  color: #f7a781;
  font-style: italic;
  text-align: left;
`;

export const StyledMainHeading = styled.h1`
  font-size: 2rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
  margin-top: 1rem;
  color: #e49681;
  max-width: 22ch;
  margin-right: auto;
  line-height: 1.15;
  margin-bottom: 0rem;
  align-text: left;

  span {
    font-style: italic;
    font-weight: 600;
  }
`;

export const StyledDisclaimer = styled.p`
  font-size: 1rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: 300;
  color: #f7a781;
  margin-top: 0rem;
    text-align: left;
`;