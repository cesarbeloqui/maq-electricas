import {
  Box,
  InputAdornment,
  TextField,
  ThemeProvider,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import HechoPorC from "./HechoPorC/HechoPorC";
import LineChart from "./LineChart/index";
import TituloNota from "./TituloNota/TituloNota";
import styled from "styled-components";

function radianesAGrados(radianes) {
  return radianes * (180 / Math.PI);
}
function gradosARadianes(grados) {
  return grados * (Math.PI / 180);
}

const DiagramaDeKapp = () => {
  const [tension1, setTension1] = useState(500 * 0.8);
  const [fi1, setFi1] = useState(gradosARadianes(130));
  const [I1, setI1] = useState(600 * 0.8);
  const [R2, setR2] = useState(0.128);
  const [R1, setR1] = useState(0.16 * 0.8);
  const [Xd1, setXd1] = useState(0.32 * 0.8);
  const [Xd2, setXd2] = useState(0.32 * 0.8);
  return (
    <>
      <DivStilado2>
        <TituloNota
          titulo="Atencion"
          cuerpo="Esta aplicacion solo funciona desde la pc"
        />
      </DivStilado2>
      <DivStilado>
        <TituloNota
          titulo="Triangulo de Kapp"
          cuerpo="Nota: Para rotar el objeto V1, simplemente haz clic en cualquier parte y
          arrastra el cursor. Si arrastras hacia arriba, V1 rotará en sentido de
          las manecillas del reloj; mientras que si arrastras hacia abajo, rotará
          en sentido contrario a las manecillas del reloj."
        />
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
            title="Los valores de corriente no se refieren a amperes, sino a unidades de longitud."
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
    </>
  );
};

const DivStilado = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #3b4453;
  /* Media Query para ocultar en dispositivos con un ancho máximo de 768px (típicamente dispositivos móviles) */
  @media (max-width: 768px) {
    display: none;
  }
`;
const DivStilado2 = styled.div`
  display: none;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #3b4453;
  /* Media Query para ocultar en dispositivos con un ancho máximo de 768px (típicamente dispositivos móviles) */
  @media (max-width: 768px) {
    display: flex;
  }
`;
export default DiagramaDeKapp;
