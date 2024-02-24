import "./App.css";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3b4453",
      }}
    >
      <h1 style={{ color: "white" }}>Triangulo de Kapp</h1>
      <LineChart />
    </div>
  );
}

export default App;
