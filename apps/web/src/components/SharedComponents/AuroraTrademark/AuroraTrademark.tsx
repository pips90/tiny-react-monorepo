import { TmStyle } from "./styles/StyledAuroraTrademark";

export function AuroraTrademark({ children }: { children: React.ReactNode }) {
  return (
    <span>
      {children}
      <TmStyle>tm</TmStyle>
    </span>
  );
}