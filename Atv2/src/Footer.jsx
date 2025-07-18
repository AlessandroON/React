function Footer(props) {
  return (
    <footer>
      <hr />
      <p>Contato: {props.nome} - {props.telefone}</p>
    </footer>
  );
}

export default Footer;
