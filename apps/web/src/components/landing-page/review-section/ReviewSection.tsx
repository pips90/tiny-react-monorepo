import styled from "styled-components";
import { ReviewCard } from "./ReviewCard"

export const reviews = [
    { description: "This is a fantastic product! My dog loves it and I couldn't be happier.", 
        name: "Jane Doe", 
        dogInfo: [
            { dogName: "Buddy", dogBreed: "Golden Retriever" 

            }
        ] 
    },
    { description: "The AuroraCollar has changed our walks for the better. Highly recommend to all dog owners!", 
        name: "John Smith", 
        dogInfo: [
            { dogName: "Max", dogBreed: "German Shepherd" }
        ] 
    },
    { description: "A must-have for any dog owner. The quality and design are top-notch.", 
        name: "Emily Johnson",
        dogInfo: [
            { dogName: "Luna", dogBreed: "Labrador Retriever" }
        ] 
    }
]

export const ReviewSection = () => {
    return (
        <StyledReviewSection>
            {reviews.map((review, index) => (
                <ReviewCard key={index} description={review.description} name={review.name} dogInfo={review.dogInfo} />
            ))}
        </StyledReviewSection>
    )
}

export const StyledReviewSection = styled.div`
display: flex;
flex-direction: row;
min-width: 10rem;
gap: 2rem;

   /* Stack features to full width on smaller viewports */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    > * {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 2rem;
      margin: .5rem;
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