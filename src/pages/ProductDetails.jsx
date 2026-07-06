import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Produit introuvable</h2>;

  return (
    <div className="details-container">

      <div className="details-card">

        <img src={product.image} />

        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <h2>{product.price}$</h2>

        <button onClick={() => addToCart(product)}>
          Ajouter au panier
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;