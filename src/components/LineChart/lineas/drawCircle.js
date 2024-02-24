const drawCircle = (ctx, centerX, centerY, radius) => {
  // Iniciar el trazado del círculo
  ctx.beginPath();

  // Dibujar el círculo
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  // Establecer el estilo de línea del círculo
  ctx.setLineDash([]);
  // Establecer el color de borde del círculo
  ctx.strokeStyle = "white"; // Puedes cambiar el color según necesites

  // Establecer el grosor de línea del círculo
  ctx.lineWidth = 1; // Puedes ajustar el grosor según necesites

  // Dibujar el borde del círculo
  ctx.stroke();
};
export default drawCircle;
