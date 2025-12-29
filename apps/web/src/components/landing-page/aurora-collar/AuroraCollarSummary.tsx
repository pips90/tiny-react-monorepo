import { SharedButton } from "@pips90/ui";
import { AuroraTrademark } from "../../SharedComponents/AuroraTrademark/AuroraTrademark";

export const AuroraCollarSummary = () => {
  return (
    <div>
      <h1 className="brand">
        <AuroraTrademark>The AuraCollar</AuroraTrademark>
      </h1>
      <p>Look, we get it. You've been wondering why Mr. Fluffington stares at the wall for 45 minutes straight. Spoiler alert: he's judging your life choices.</p>
      <p>Our patented <AuroraTrademark>NeuroWoof</AuroraTrademark> technology uses advanced AI, quantum bark-entanglement, and like, a bunch of really expensive sensors to decode your dogs's innermost thoughts. Is it scientifically valid? Who cares! Does it work? Define "work."</p>
      <SharedButton buttonText={"$499.99 + your dignity"} size={"medium"} onClick={() => console.log("CTA Clicked: Kiss your dignity goodbye!!!!")} />
    </div>
  );
};




