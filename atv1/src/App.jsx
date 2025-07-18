import burgerImg from "./assets/Imagem-Esquerda.png"
//import burger from "./assets/imagem.png";
import './App.css'; 

function App() {
  return (
    <div className="pag">
      <header className="cabecalho">
        <p>🍔 {`BOCA CHEIA`}</p>
      </header>

      <section className="destaque">
        <img src={burgerImg} alt="Hambúrguer" />

        <div className="texto">
          <h2>O MELHOR HAMBÚRGUER DA SUA VIDA!</h2>
          <p>Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...</p>
            <button>VER CARDÁPIO</button>
        </div>
      </section>

      <section className="cardapio">
        <h2>CARDÁPIO</h2>

        <div className="item-cardapio">
          <img src={burgerImg} alt="Hambúrguer" />
          <div>
            <h3><b>HAMBURGUER TAL</b></h3>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>

        <div className="item-cardapio">
          <img src={burgerImg} alt="Hambúrguer" />
          <div>
            <h3><b>HAMBURGUER TAL</b></h3>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>

        <div className="item-cardapio">
          <img src={burgerImg} alt="Hambúrguer" />
          <div>
            <h3><b>HAMBURGUER TAL</b></h3>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;