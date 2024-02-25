import { useState } from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  InputAdornment,
  TextField,
  ThemeProvider,
  Tooltip,
} from "@mui/material";
import darkTheme from "./theme";
import HechoPorC from "./components/HechoPorC/HechoPorC";
import TituloNota from "./components/TituloNota/TituloNota";
import styled from "styled-components";
function radianesAGrados(radianes) {
  return radianes * (180 / Math.PI);
}
function gradosARadianes(grados) {
  return grados * (Math.PI / 180);
}

function App() {
  const initialState = [
    { label: "Tensión 1", value: 500 * 0.8, setState: null },
    { label: "Fi1", value: (41 + 90) * (Math.PI / 180), setState: null },
    { label: "I1", value: 600 * 0.8, setState: null },
    { label: "R2", value: 0.16 * 0.8, setState: null },
    { label: "R1", value: 0.16 * 0.8, setState: null },
    { label: "Xd1", value: 0.32 * 0.8, setState: null },
    { label: "Xd2", value: 0.32 * 0.8, setState: null },
  ];
  const [tension1, setTension1] = useState(500 * 0.8);
  const [fi1, setFi1] = useState(gradosARadianes(130));
  console.log(fi1);
  const [I1, setI1] = useState(600 * 0.8);
  const [R2, setR2] = useState(0.128);
  const [R1, setR1] = useState(0.16 * 0.8);
  const [Xd1, setXd1] = useState(0.32 * 0.8);
  const [Xd2, setXd2] = useState(0.32 * 0.8);
  return (
    <ThemeProvider theme={darkTheme}>
      <DivStilado>
        <TituloNota />
        <HechoPorC />
        <Box
          component="form"
          style={{
            position: "absolute",
            top: "20rem",
            left: "2rem",
            width: "8rem",
          }}
        >
          <Tooltip
            title="Los valores de tensión no se refieren a voltios, sino a unidades de longitud."
            placement="right"
          >
            <TextField
              label="Tensión 1"
              margin="dense"
              variant="outlined"
              type="number"
              size="small"
              fullWidth
              value={tension1}
              onChange={(e) => setTension1(e.target.value)}
            />
          </Tooltip>
          <TextField
            label="Fi1"
            variant="outlined"
            type="number"
            size="small"
            margin="dense"
            fullWidth
            value={(parseFloat(radianesAGrados(fi1)) - 90).toFixed(2)}
            InputProps={{
              shrink: true,
              endAdornment: <InputAdornment position="end">deg</InputAdornment>,
              inputProps: { step: 1 },
            }}
            onChange={(e) =>
              setFi1(gradosARadianes(parseFloat(e.target.value) + 90))
            }
          />
          <Tooltip
            title="Los valores de tensión no se refieren a voltios, sino a unidades de longitud."
            placement="right"
          >
            <TextField
              label="I1"
              variant="outlined"
              type="number"
              size="small"
              margin="dense"
              fullWidth
              value={I1}
              onChange={(e) => setI1(e.target.value)}
            />
          </Tooltip>
        </Box>
        <LineChart
          tension1={tension1}
          fi1={fi1}
          setFi1={setFi1}
          I1={I1}
          R2={R2}
          R1={R1}
          Xd1={Xd1}
          Xd2={Xd2}
        />
      </DivStilado>
    </ThemeProvider>
  );
}

const DivStilado = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #3b4453;
`;

export default App;
