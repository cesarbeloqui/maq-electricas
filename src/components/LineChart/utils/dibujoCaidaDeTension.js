import drawArrow from "../lineas/drawArrow";
import { transformarCenterX, transformarCenterY } from "./tranformarACentro";

const dibujoCaidaDeTension = (
  ctx,
  centerX,
  centerY,
  fi1,
  R1,
  R2,
  Xd1,
  Xd2,
  I1,
  tension1
) => {
  const VeqY = I1 * (R1 + R2);
  const VeqX = -I1 * (Xd1 + Xd2);

  const V1x = tension1 * Math.cos(fi1);

  const V1y = tension1 * Math.sin(fi1);

  const centerVeqX = V1x - VeqX;
  const centerVeqY = V1y - VeqY;
  drawArrow(
    ctx,
    transformarCenterX(centerX, centerVeqX),
    transformarCenterY(centerY, centerVeqY),
    transformarCenterX(centerX, V1x),
    transformarCenterY(centerY, V1y),
    {
      text: "Vmaq",
      posicionX: 50,
      posicionY: -25,
    }
  );
  return { centerVeqX, centerVeqY };
};

export default dibujoCaidaDeTension;
