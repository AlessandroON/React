import { useParams } from "react-router-dom";
//import './Item.css';

const items = {
  "1": {
    title: "DeadPool",
    image: "https://upload.wikimedia.org/wikipedia/pt/3/3b/Deadpool_2016.jpg",
    description: "Um cara busca curar sua doença, mas acaba ficando diferente...",
    launch: "2016",
    diretor: "Tim Miller",
    publisher: "20th Century Fox / Marvel Entertainment",
  },
  "2": {
    title: "Batman Cavaleiro das Trevas",
    image: "https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg",
    description: "The Dark Knight faz parte da série de filmes Batman de Nolan, sendo uma continuação de Batman Begins, de 2005.",
    launch: "2008",
    diretor: "Christopher Nolan",
    publisher: "Warner Bros. Pictures",
  },
  "3": {
    title: "Superman ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFWwoCfxB2LkqeTklokw_S4umZeFPHMGy4w&s",
    description: "Trinta anos após ser enviado à Terra por seus pais, Jor-El e Lara, para escapar da destruição de Krypton, Kal-El — agora conhecido como Superman",
    launch: "2025",
    diretor: "James Gunn",
    publisher: "DC Studios/Warner Bros. Pictures",
  },
  "4": {
    title: "Como Treinar o Seu Dragão ",
    image: "https://image.tmdb.org/t/p/w500/1azTyARpXTtspi28K9rcMIDaHFB.jpg",
    description: "Na acidentada ilha de Berk, onde vikings e dragões convivem em constante conflito, vive Soluço (Mason Thames), um jovem imaginativo e subestimado pelo pai, o Chefe Stoico (Gerard Butler). Diferente de seus conterrâneos, Soluço não possui habilidade para caçar dragões, mas busca provar seu valor",
    launch: "2025",
    diretor: "Dean DeBlois",
    publisher: "Universal Pictures",
  },
  "5": {
    title: "Dexter: Ressurreição",
    image: "https://image.tmdb.org/t/p/w500/wG6GBTreXHoBhxsFY4vVSQtYey5.jpg",
    description: "Depois de ser baleado por seu filho Harrison, Dexter acorda do coma e descobre que ele está desaparecido. Ele o procura em Nova York para se reconciliar, mas Batista chega com perguntas do passado.",
    launch: "2025",
    diretor: "James Manos, Jr.",
    publisher: "	CBS Television Distribution",
  },

}

export default function Items() {
  const { id } = useParams();
  const item = items[id];

  if (!item) {
    return <p className="nao-encontrado">Filme não encontrado.</p>;
  }

  return (
    <div className="item-detalhe">
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} className="imagem-detalhe" />
      <div className="info-detalhe">
        <p><strong>Descrição:</strong> {item.description}</p>
        <p><strong>Lançamento:</strong> {item.launch}</p>
        <p><strong>Direção:</strong> {item.diretor}</p>
        <p><strong>Distribuidora:</strong> {item.publisher}</p>
      </div>
    </div>
  );
}
