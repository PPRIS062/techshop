import { useState } from "react";

function Confirmation() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="confirmation">

      <h1>Merci pour votre commande 🎉</h1>

      <p>Votre paiement a été confirmé.</p>

      <h3>Comment était votre expérience ?</h3>

      <div>
        {[1,2,3,4,5].map((n) => (
          <span
            key={n}
            onClick={() => setRating(n)}
            style={{ fontSize: "25px", cursor: "pointer", color: n <= rating ? "gold" : "gray" }}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        placeholder="Laissez un commentaire..."
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={() => alert("Merci pour votre feedback !")}>
        Envoyer
      </button>

    </div>
  );
}

export default Confirmation;