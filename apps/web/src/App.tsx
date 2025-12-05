import { SharedButton } from "@pips90/ui";
import styled from "styled-components";

function App() {
  return (
    <Page>
      <Content>
        <Tagline>BarkWeaver</Tagline>
        <Title>Welcome to BarkWeaver.</Title>
        <Subtitle>
          A home for the AuraCollar journey. More pages, stories, and science
          are coming soon.
        </Subtitle>
        <Actions>
          <SharedButton
            buttonText="View the roadmap"
            size="large"
            onClick={() => console.log("Roadmap clicked")}
          />
        </Actions>
      </Content>
    </Page>
  );
}

const Page = styled.main`
  min-height: 100vh;
  background: radial-gradient(circle at 20% 20%, #f3f6ff, #f9fbff 40%, #ffffff);
  color: #111827;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

const Content = styled.section`
  max-width: 960px;
  text-align: center;
  display: grid;
  gap: 16px;
  padding: 96px 0;
`;

const Tagline = styled.p`
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6b7280;
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(36px, 5vw, 48px);
  line-height: 1.1;
`;

const Subtitle = styled.p`
  margin: 0 auto;
  max-width: 640px;
  color: #4b5563;
  font-size: 18px;
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export default App;
