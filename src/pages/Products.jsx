import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [promo, setPromo] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchCategory = category === "All" || p.category === category;

    const matchPrice =
      price === "All" ||
      (price === "low" && p.price < 50) ||
      (price === "mid" && p.price >= 50 && p.price < 150) ||
      (price === "high" && p.price >= 150);

    const matchPromo = !promo || p.promotion === true;

    return matchCategory && matchPrice && matchPromo;
  });

  return (
    <div className="products-page">

      <h1>Nos produits</h1>

      {/* Filtres */}
      <div className="filters">

        <div>
          <h3>Catégorie</h3>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="All">Tous</option>
            <option value="Clavier">Clavier</option>
            <option value="Souris">Souris</option>
            <option value="Écran">Écran</option>
            <option value="Casque">Casque</option>
            <option value="Webcam">Webcam</option>
            <option value="Ordinateur">Ordinateur</option>
          </select>
        </div>

        <div>
          <h3>Prix</h3>
          <select onChange={(e) => setPrice(e.target.value)}>
            <option value="All">Tous</option>
            <option value="low">-50$</option>
            <option value="mid">50$ - 150$</option>
            <option value="high">150$+</option>
          </select>
        </div>

        <div>
          <h3>Promotion</h3>
          <label>
            <input
              type="checkbox"
              onChange={(e) => setPromo(e.target.checked)}
            />
            Seulement promotions
          </label>
        </div>

      </div>

      {/* Produits */}
      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default Products;