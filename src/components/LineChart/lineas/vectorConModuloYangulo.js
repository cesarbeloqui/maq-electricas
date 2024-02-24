import drawArrow from "./drawArrow";

const vectorConModuloYangulo = (
  ctx,
  centerX,
  centerY,
  modulo,
  angulo,
  text,
  color
) => {
  const tensionX = modulo * Math.cos(angulo - Math.PI);
  const tensionY = modulo * Math.sin(angulo);

  return drawArrow(
    ctx,
    centerX,
    centerY,
    centerX - tensionX,
    centerY - tensionY,
    text,
    color
  );
};

export default vectorConModuloYangulo;
