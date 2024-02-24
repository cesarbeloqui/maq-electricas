import drawArrow from "../lineas/drawArrow";
import { transformarCenterX, transformarCenterY } from "./tranformarACentro";

const dibujoIR = (ctx , texto, coordenadasInicialIR, I1, R2) => {
  drawArrow(
    ctx,
    coordenadasInicialIR.x,
    coordenadasInicialIR.y,
    coordenadasInicialIR.x,
    coordenadasInicialIR.y - I1 * R2,
    {
      text: texto,
      posicionX: 5,
      posicionY: -25,
    }
  );
  const coordenadasFinalIR = {
    x: coordenadasInicialIR.x,
    y: coordenadasInicialIR.y - I1 * R2,
  };
  return coordenadasFinalIR;
};

export default dibujoIR;
