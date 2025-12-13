import { SmallButton, MediumButton, LargeButton } from "./StyledSharedButton";

export interface SharedButtonProps {
  buttonText: string;
  size: "small" | "medium" | "large";
  onClick: () => void;
  className?: string;
}

export const SharedButton = ({
  buttonText,
  size,
  onClick,
  className,
}: SharedButtonProps) => {
  if (size === "small") {
    return <SmallButton className={className} onClick={onClick}>{buttonText}</SmallButton>;
  } else if (size === "medium") {
    return <MediumButton className={className} onClick={onClick}>{buttonText}</MediumButton>;
  }
  return <LargeButton className={className} onClick={onClick}>{buttonText}</LargeButton>;
};
