import { useRef, useEffect } from "react";
import drawVerticalAxis from "./lineas/drawVerticalAxis";
import drawHorizontalAxis from "./lineas/drawHorizontalAxis";
import drawCircle from "./lineas/drawCircle";
import drawArrow from "./lineas/drawArrow";
import vectorConModuloYangulo from "./lineas/vectorConModuloYangulo";
import useAnguloDeRotacion from "../utils/useAnguloDeRotacion";
import { useState } from "react";
import dibujoCaidaDeTension from "./utils/dibujoCaidaDeTension";
import {
  transformarCenterX,
  transformarCenterY,
} from "./utils/tranformarACentro";
import dibujoIR from "./utils/dibujoIR";
import dibujojIX from "./utils/dibujojIX";

const LineChart = ({ tension1, fi1, setFi1, I1, R2, R1, Xd1, Xd2 }) => {
  const {
    canvasRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
    anguloInicial,
    anguloFinal,
    cursorType,
  } = useAnguloDeRotacion();

  useEffect(() => {
    if (anguloFinal !== null && anguloInicial !== null) {
      setFi1(parseFloat((fi1 + anguloFinal - anguloInicial).toFixed(2)));
    }
  }, [anguloFinal, anguloFinal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Obtener el ancho y la altura del contenedor
    const containerWidth = canvas.clientWidth;
    const containerHeight = canvas.clientHeight;

    // Limpiar el lienzo y dibujar el fondo
    ctx.clearRect(0, 0, containerWidth, containerHeight);
    ctx.fillStyle = "#212830"; // Color de fondo
    ctx.fillRect(0, 0, containerWidth, containerHeight); // Dibujar el fondo

    //Definicion del centro de coordenadas
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    //definicion del eje vertical
    drawVerticalAxis(ctx, containerWidth, containerHeight, centerX);
    //DEfinicion del eje horizontal
    drawHorizontalAxis(ctx, containerWidth, containerHeight, centerY);

    //Definicion del circulo de tension
    drawCircle(ctx, centerX, centerY, tension1, "#ff3232");
    //Dibujar Tensión V1
    vectorConModuloYangulo(
      ctx,
      centerX,
      centerY,
      tension1,
      fi1,
      {
        text: "V₁",
        posicionX: 5,
        posicionY: 5,
      },
      "#ff3232"
    );

    // Dibujo caida de tension

    const { centerVeqX, centerVeqY } = dibujoCaidaDeTension(
      ctx,
      centerX,
      centerY,
      fi1,
      R1,
      R2,
      Xd1,
      Xd2,
      I1,
      tension1,
      "#FFFF00"
    );
    const coordenadasInicialIR = {
      x: transformarCenterX(centerX, centerVeqX),
      y: transformarCenterY(centerY, centerVeqY),
    };
    //Dibujo -I1R2'
    const coordenadasFinalI1R2 = dibujoIR(
      ctx,
      "-I1R2",
      coordenadasInicialIR,
      I1,
      R2,
      "#00FFFF"
    );
    //Dibujo -jI1Xd2'
    const coordenadasFinaljIX = dibujojIX(
      ctx,
      {
        text: "-jI1Xd2'",
        posicionX: 5,
        posicionY: -25,
      },
      coordenadasFinalI1R2,
      I1,
      Xd2,
      "#FFA500"
    );

    //Dibujo I1R1
    const coordenadasFinalI1R1 = dibujoIR(
      ctx,
      "I1R1",
      coordenadasFinaljIX,
      I1,
      R1,
      "#00FFFF"
    );
    //Dibujo jI1Xd1
    const coordenadasFinaljI1Xd1 = dibujojIX(
      ctx,
      {
        text: "jI1Xd1'",
        posicionX: 20,
        posicionY: 10,
      },
      coordenadasFinalI1R1,
      I1,
      Xd2,
      "#FFA500"
    );
    // Dibujo V2
    drawArrow(
      ctx,
      centerX,
      centerY,
      transformarCenterX(centerX, centerVeqX),
      transformarCenterY(centerY, centerVeqY),
      {
        text: "V₂'",
        posicionX: 5,
        posicionY: 5,
      },
      "#FF00FF"
    );
    //Definicion del circulo de tension 2
    drawCircle(
      ctx,
      centerX + I1 * (Xd1 + Xd2),
      centerY + I1 * (R1 + R2),
      tension1,
      "#FF00FF"
    );
    //Dibujar Tensión I1
    const I1angle = 90 * (Math.PI / 180);
    vectorConModuloYangulo(
      ctx,
      centerX,
      centerY,
      I1,
      I1angle,
      {
        text: "I₁",
        posicionX: 10,
        posicionY: -20,
      },
      "green"
    );
  }, [tension1, fi1, setFi1, I1, R2, R1, Xd1, Xd2]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <canvas
        style={{ cursor: cursorType }}
        ref={canvasRef}
        width="1300vw"
        height="1000vw"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
        onTouchMove={handleMouseMove}
        onTouchCancel={handleMouseLeave}
      />
    </div>
  );
};

export default LineChart;
