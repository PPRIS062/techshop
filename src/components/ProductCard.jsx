import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">

      {product.promotion && (
        <div className="badge">Promo 🔥</div>
      )}

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.price}$</p>

      <Link to={`/product/${product.id}`} className="btn-small">
        Voir détails
      </Link>

    </div>
  );
}

export default ProductCard;