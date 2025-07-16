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


];

export default function Home() {
  return (
    <div>
      <h1>Catálogo de Filmes</h1>
      <div style={{ display: "flex", gap: "50px" }}>

        {items.map((item) => (
          <Card key={item.id} {...item} />))}

      </div>
    </div>
  );
}
