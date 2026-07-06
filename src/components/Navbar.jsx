import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">

      <div className="logo">TechShop</div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/">Accueil</Link>
        <Link to="/products">Produits</Link>
        <Link to="/cart">Panier ({cart.length})</Link>
      </div>

    </nav>
  );
}

export default Navbar;