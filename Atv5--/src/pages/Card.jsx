import { Link } from "react-router-dom";

export default function Card({ id, title, image }) {
  return (
    <Link to={`/item/${id}`} className="card">
      <div className="card-content">
        <span className="destaque">DESTAQUE</span>
        <img src={image} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
}
