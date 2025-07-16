import { useParams } from "react-router-dom";

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
      launch:"2025",
      diretor: "James Gunn",
      publisher:"DC Studios/Warner Bros. Pictures",
  }
}

export default function Items() {
  const { id} = useParams();
  const item = items[id];

  if (!item) {
    return <p>Filme não encontrado.</p>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} width="300" height="300" />
      <p><strong>Descrição:</strong> {item.description}</p>
      <p><strong>Lançamento:</strong> {item.launch}</p>
      <p><strong>Direção:</strong> {item.diretor}</p>
      <p><strong>Distribuidora:</strong> {item.publisher}</p>
    </div>
  );
}
