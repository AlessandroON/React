import Card from "./Card";

const items = [
  {
    id: 1,
    title: "DeadPool",
    image: "https://upload.wikimedia.org/wikipedia/pt/3/3b/Deadpool_2016.jpg",
  },
  {
    id: 2,
    title: "Batman Cavaleiro das Trevas",
    image: "https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg",
  },
  {
    id: 3,
    title: "Superman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFWwoCfxB2LkqeTklokw_S4umZeFPHMGy4w&s",
  },
  {
    id: 4,
    title: "Como Treinar o Seu Dragão",
    image: "https://image.tmdb.org/t/p/w500/1azTyARpXTtspi28K9rcMIDaHFB.jpg",
  },
  {
    id: 5,
    title: "Dexter: Ressurreição",
    image: "https://image.tmdb.org/t/p/w500/wG6GBTreXHoBhxsFY4vVSQtYey5.jpg",
  }

];

export default function Home() {
  return (
    <div className="home">
      <h1 className="titulo">Lançamentos PatatiFlix </h1>
      <div className="card-container">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
