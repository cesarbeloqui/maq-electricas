const TituloNota = ({ titulo, cuerpo }) => {
  return (
    <div className="rotulo">
      <h1>{titulo}</h1>
      <p>
        {cuerpo}
      </p>
    </div>
  );
};

export default TituloNota;
