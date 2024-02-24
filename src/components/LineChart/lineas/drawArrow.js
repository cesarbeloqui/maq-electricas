const drawArrow = (ctx, startX, startY, endX, endY, membrete, color) => {
  // Calcular la dirección de la flecha
  const angle = Math.atan2(endY - startY, endX - startX);

  ctx.strokeStyle = color ? color : "white"; // Color de la línea (ahora blanco)

  // Dibujar la línea principal de la flecha
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  // Calcular el tamaño y el espaciado de la punta de flecha
  const arrowSize = 20;
  const arrowSpacing = 3;

  // Dibujar flecha en el extremo de la línea
  ctx.beginPath();
  ctx.moveTo(
    endX + arrowSize * Math.cos(angle - arrowSpacing),
    endY + arrowSize * Math.sin(angle - arrowSpacing)
  );
  ctx.lineTo(endX, endY);
  ctx.lineTo(
    endX + arrowSize * Math.cos(angle + arrowSpacing),
    endY + arrowSize * Math.sin(angle + arrowSpacing)
  );
  ctx.closePath(); // Cerrar el camino para formar un triángulo
  ctx.fillStyle = color ? color : "white"; // Establecer el color de relleno
  ctx.fill(); // Rellenar la flecha

  // Dibujar el texto cerca de la punta de la flecha
  ctx.fillStyle = color ? color : "white"; // Establecer el color del texto
  ctx.font = "14px Arial"; // Establecer la fuente y el tamaño del texto
  const textX = endX + membrete.posicionX; // Ajustar la posición del texto
  const textY = endY - membrete.posicionY; // Ajustar la posición del texto
  ctx.fillText(membrete.text, textX, textY); // Dibujar el texto
};
export default drawArrow;
