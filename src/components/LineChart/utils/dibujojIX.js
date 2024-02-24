import drawArrow from "../lineas/drawArrow";
import { transformarCenterX, transformarCenterY } from "./tranformarACentro";

const dibujojIX = (ctx, texto, coordenadasFinalIR, I1, Xd2) => {
  const coordenadasFinaljIX = {
    x: transformarCenterX(coordenadasFinalIR.x, -I1 * Xd2),
    y: transformarCenterY(coordenadasFinalIR.y, 0),
  };
  drawArrow(
    ctx,
    coordenadasFinalIR.x,
    coordenadasFinalIR.y,
    coordenadasFinaljIX.x,
    coordenadasFinaljIX.y,
    texto
  );
  return coordenadasFinaljIX;
};
export default dibujojIX;
