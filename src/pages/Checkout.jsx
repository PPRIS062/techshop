import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {

  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const { clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    card: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const next = () => setStep(step + 1);

  const back = () => setStep(step - 1);

  const finish = () => {
    clearCart();   // 🔥 vide le panier après achat
    navigate("/confirmation");
  };

  return (
    <div className="checkout">

      <div className="steps">
        <div className={step >= 1 ? "active" : ""}>Panier</div>
        <div className={step >= 2 ? "active" : ""}>Infos</div>
        <div className={step >= 3 ? "active" : ""}>Paiement</div>
        <div className={step >= 4 ? "active" : ""}>Confirmation</div>
      </div>

      {step === 1 && (
        <div>
          <h2>Votre panier</h2>
          <p>Vérifiez vos articles avant de continuer.</p>

          <button onClick={next}>
            Continuer
          </button>
        </div>
      )}

      {step === 2 && (
        <div>

          <h2>Informations personnelles</h2>

          <input
            name="name"
            placeholder="Nom"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            name="address"
            placeholder="Adresse"
            onChange={handleChange}
          />

          <button onClick={back}>
            Retour
          </button>

          <button onClick={next}>
            Continuer
          </button>

        </div>
      )}

      {step === 3 && (
        <div>

          <h2>Paiement</h2>

          <input
            name="card"
            placeholder="Numéro de carte"
            onChange={handleChange}
          />

          <button onClick={back}>
            Retour
          </button>

          <button onClick={finish}>
            Payer
          </button>

        </div>
      )}

    </div>
  );
}

export default Checkout;