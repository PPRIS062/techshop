import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <div className="hero">

        <h1>Bienvenue chez TechShop ⚡</h1>

        <p>Les meilleurs accessoires informatiques au meilleur prix.</p>

        <Link to="/products" className="btn">
          Explorer les produits
        </Link>

      </div>

      <div className="home-section">

        <h2>🔥 Produits populaires</h2>

        <p>Claviers, souris, écrans et plus encore.</p>

      </div>

    </div>
  );
}

export default Home;