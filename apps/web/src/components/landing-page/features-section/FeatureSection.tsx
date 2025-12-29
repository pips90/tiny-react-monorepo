import { FeaturedItem } from "./FeaturedItem";
import paralyzed from "../../../assets/icons/paralyzed.png";
import volume from "../../../assets/icons/volume.png";
import love from "../../../assets/icons/love.png";
import power from "../../../assets/icons/power.png";
import {
  StyledMainHeading,
  StyledPLines,
  StyledFeatureRow,
  StyledFeatureSectionContainer,
} from "./styles/StyledFeatureSection";

export const FeatureSection = () => {
  return (
    <StyledFeatureSectionContainer>
      <StyledMainHeading>Features that will blow your mind</StyledMainHeading>
      <StyledPLines>(and your savings account)</StyledPLines>
      <StyledFeatureRow>
        <FeaturedItem
          icon={paralyzed}
          title="Mind Reading Technology"
          description="Spoiler: They're thinking about snacks. Always snacks. But now you'll know WHICH snacks."
        />
        <FeaturedItem
          icon={volume}
          title="Real Time Translation"
          description="Instant translation of barks, whines, and those weird grunting sounds they make at 3am."
        />
        <FeaturedItem
          icon={love}
          title="Emotion Detection"
          description="Finally understand if they love YOU or just love that you have opposable thumbs that can open treat bags."
        />
        <FeaturedItem
          icon={power}
          title="48-Hour Battery"
          description="Lasts longer than your dog's attention span. Barely."
        />
      </StyledFeatureRow>
    </StyledFeatureSectionContainer>
  );
};
