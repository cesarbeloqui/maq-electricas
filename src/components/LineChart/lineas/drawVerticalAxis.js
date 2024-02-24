// verticalAxis.js

const drawVerticalAxis = (ctx, containerWidth, containerHeight, centerX) => {
  // Calcular las coordenadas y el tamaño de las puntas de flecha
  const arrowSize = 20;
  const arrowSpacing = 3;

  // Establecer el estilo de línea punteada
  ctx.setLineDash([15, 5]); // Configurar la línea punteada (5 píxeles de línea, 5 píxeles de espacio)
  ctx.strokeStyle = "white"; // Color de la línea
  ctx.lineWidth = 0.5; // Grosor de la línea

  // Dibujar la línea punteada vertical
  ctx.beginPath();
  ctx.moveTo(centerX, 0); // Iniciar en el centro superior del contenedor
  ctx.lineTo(centerX, containerHeight); // Terminar en el centro inferior del contenedor
  ctx.stroke();

  // Dibujar flecha en el extremo superior de la línea vertical
  ctx.beginPath();
  ctx.moveTo(centerX - arrowSpacing, arrowSize);
  ctx.lineTo(centerX, 0);
  ctx.lineTo(centerX + arrowSpacing, arrowSize);
  ctx.closePath(); // Cerrar el camino para formar un triángulo
  ctx.fillStyle = "white"; // Establecer el color de relleno
  ctx.fill(); // Rellenar la flecha con el color rojo

  // Dibujar flecha en el extremo inferior de la línea vertical
  ctx.beginPath();
  ctx.moveTo(centerX - arrowSpacing, containerHeight - arrowSize);
  ctx.lineTo(centerX, containerHeight);
  ctx.lineTo(centerX + arrowSpacing, containerHeight - arrowSize);
  ctx.closePath(); // Cerrar el camino para formar un triángulo
  ctx.fill(); // Rellenar la flecha
};

export default drawVerticalAxis;
