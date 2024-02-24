import "./App.css";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3b4453",
      }}
    >
      <div className="rotulo">
        <h1>
          Triangulo de Kapp
        </h1>
        <p>
          Nota: Para rotar el objeto V1, simplemente haz clic en cualquier parte y arrastra el cursor. Si arrastras hacia arriba, V1 rotará en sentido de las manecillas del reloj; mientras que si arrastras hacia abajo,
          rotará en sentido contrario a las manecillas del reloj.
        </p>
      </div>
      <div className="rotulo2">
        <h3>
          Hecho por: Beloqui Cesar
        </h3>
      </div>
      <LineChart />
    </div>
  );
}

export default App;
