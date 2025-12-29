import {
  StyledMainHeading,
  StyledPLines,
  StyledFeaturedItemRow,
  StyledIcon,
  StyledIconWrapper,
  StyledFeaturedItemColumn,
} from "./styles/StyledFeaturedItem";

export interface FeaturedItemProps {
  title: string;
  description: string;
  icon?: string | React.ReactNode;
}

export const FeaturedItem = ({
  title,
  description,
  icon,
}: FeaturedItemProps) => {
  return (
    <StyledFeaturedItemRow>
      {icon &&
        (typeof icon === "string" ? (
          <StyledIcon src={icon} alt={title} />
        ) : (
          <StyledIconWrapper>{icon}</StyledIconWrapper>
        ))}
      <StyledFeaturedItemColumn>
        <StyledMainHeading>{title}</StyledMainHeading>
        <StyledPLines>{description}</StyledPLines>
      </StyledFeaturedItemColumn>
    </StyledFeaturedItemRow>
  );
};
