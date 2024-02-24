import { useRef, useState, useEffect } from "react";

const useAnguloDeRotacion = () => {
  const canvasRef = useRef(null);
  const [XY, setXY] = useState({ x: 0, y: 0 });
  const [container, setContainer] = useState({
    containerWidth: 0,
    containerHeight: 0,
  });
  const [anguloInicial, setAnguloInicial] = useState(null);
  const [anguloFinal, setAnguloFinal] = useState(null);
  const [isClicking, setIsClicking] = useState(false);

  const handleMouseDown = (event) => {
    setIsClicking(true);
    setAnguloInicial(null);
    setAnguloFinal(null);
    handleMouseMove(event); // Iniciar el movimiento del círculo inmediatamente al hacer clic
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - container.containerWidth / 2;
    const mouseY = -(event.clientY - rect.top) + container.containerHeight / 2;
    setXY({
      x: mouseX,
      y: mouseY,
    });
    setAnguloInicial(Math.atan2(mouseY, mouseX));
  };

  const handleMouseMove = (event) => {
    if (isClicking) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left - container.containerWidth / 2;
      const mouseY =
        -(event.clientY - rect.top) + container.containerHeight / 2;
      //esto está poniendo la posicion del mouse haciendo click
      setXY({
        x: mouseX,
        y: mouseY,
      });
      setAnguloFinal(Math.atan2(mouseY, mouseX));
    }
  };

  const handleMouseUp = () => {
    setIsClicking(false);
    setAnguloFinal(Math.atan2(XY.y, XY.x));
  };

  useEffect(() => {
    // Obtener el ancho y la altura del contenedor
    const canvas = canvasRef.current;
    if (typeof canvas.clientWidth === "number") {
      setContainer((state) => ({
        ...state,
        containerWidth: canvas.clientWidth,
      }));
    }
    if (typeof canvas.clientHeight === "number") {
      setContainer((state) => ({
        ...state,
        containerHeight: canvas.clientHeight,
      }));
    }
  }, []);

  return {
    canvasRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    XY,
    container,
    anguloInicial,
    anguloFinal,
  };
};

export default useAnguloDeRotacion;
