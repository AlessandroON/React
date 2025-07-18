function Noticia(props) {
  return (
    <div className="noticia">
      {props.imagem && <img src={props.imagem} alt="Imagem da notícia" />}
      <span className="categoria">{props.categoria}</span>
      <h2>{props.titulo}</h2>
      <p className="data">{props.data}</p>
    </div>
  );
}

export default Noticia;
