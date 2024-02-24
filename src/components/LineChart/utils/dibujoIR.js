import drawArrow from "../lineas/drawArrow";

const dibujoIR = (ctx , texto, coordenadasInicialIR, I1, R2, color) => {
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
    },
    color
  );
  const coordenadasFinalIR = {
    x: coordenadasInicialIR.x,
    y: coordenadasInicialIR.y - I1 * R2,
  };
  return coordenadasFinalIR;
};

export default dibujoIR;
