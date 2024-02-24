// horizontalAxis.js

const drawHorizontalAxis = (ctx, containerWidth, containerHeight, centerY) => {
  // Calcular las coordenadas y el tamaño de las puntas de flecha
  const arrowSize = 20;
  const arrowSpacing = 3;

  // Establecer el estilo de línea punteada
  ctx.setLineDash([15, 5]); // Configurar la línea punteada (5 píxeles de línea, 5 píxeles de espacio)
  ctx.strokeStyle = "white"; // Color de la línea
  ctx.lineWidth = 0.5; // Grosor de la línea

  // Dibujar la línea punteada horizontal
  ctx.beginPath();
  ctx.moveTo(0, centerY); // Iniciar en el centro izquierdo del contenedor
  ctx.lineTo(containerWidth, centerY); // Terminar en el centro derecho del contenedor
  ctx.stroke();

  // Dibujar flecha en el extremo izquierdo de la línea horizontal
  ctx.beginPath();
  ctx.moveTo(arrowSize, centerY - arrowSpacing);
  ctx.lineTo(0, centerY);
  ctx.lineTo(arrowSize, centerY + arrowSpacing);
  ctx.closePath(); // Cerrar el camino para formar un triángulo
  ctx.fillStyle = "white"; // Establecer el color de relleno
  ctx.fill(); // Rellenar la flecha

  // Dibujar flecha en el extremo derecho de la línea horizontal
  ctx.beginPath();
  ctx.moveTo(containerWidth - arrowSize, centerY - arrowSpacing);
  ctx.lineTo(containerWidth, centerY);
  ctx.lineTo(containerWidth - arrowSize, centerY + arrowSpacing);
  ctx.closePath(); // Cerrar el camino para formar un triángulo
  ctx.fill(); // Rellenar la flecha
  return arrowSize;
};

export default drawHorizontalAxis;
