import "./App.css";
import { SharedButton } from "@pips90/ui";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <SharedButton
          buttonText="Small Button"
          size="medium"
          onClick={() => console.log("Small btn Clicked")}
        />
        <SharedButton
          buttonText="Medium Button"
          size="medium"
          onClick={() => console.log("Medium btn Clicked")}
        />
        <SharedButton
          buttonText="Large Button"
          size="large"
          onClick={() => console.log("Large btn Clicked")}
        />
      </div>
    </>
  );
}

export default App;
