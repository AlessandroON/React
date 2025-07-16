import { Link } from "react-router-dom";

export default function Card({ id, title, image }) {
  return (
    <Link to={`/item/${id}`}>

      <div>

        <h2>{title}</h2>
        <img src={image} alt={title} width="300" />

      </div>

    </Link>
  );
}
