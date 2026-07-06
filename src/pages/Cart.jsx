import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Calcul du total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">

      <h1>🛒 Mon panier</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Votre panier est vide</h2>

          <p>
            Découvrez nos produits et ajoutez vos articles préférés.
          </p>

          <button onClick={() => navigate("/products")}>
            Voir les produits
          </button>
        </div>
      ) : (
        <>
          <div className="cart-list">

            {cart.map((item, index) => (
              <div className="cart-item" key={index}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-info">
                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <h4>{item.price}$</h4>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Supprimer
                </button>

              </div>
            ))}

          </div>

          <div className="cart-summary">

            <h2>Total : {total.toFixed(2)} $</h2>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Passer au paiement
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;