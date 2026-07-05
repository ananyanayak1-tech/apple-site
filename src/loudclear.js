import React from "react";
import "./App.css";

import cardl1 from "./assets/loudandclear/cardl1.jpg";
import cardl2 from "./assets/loudandclear/cardl2.jpg";
import cardl3 from "./assets/loudandclear/cardl3.jpg";
import cardl4 from "./assets/loudandclear/cardl4.jpg";
import cardl5 from "./assets/loudandclear/cardl5.jpg";
import cardl6 from "./assets/loudandclear/cardl6.jpg";
import cardl7 from "./assets/loudandclear/cardl7.jpg";
import cardl8 from "./assets/loudandclear/cardl8.jpg";
import cardl9 from "./assets/loudandclear/cardl9.jpg";

function LoudAndClear() {
  const loudCards = [
    {
      id: 1,
      tag: "",
      title: "Get 3 months of Apple Music free.",
      subtitle: "Included with the purchase of selected Apple devices.*",
      image: cardl1,
      textColor: "dark"
    },
    {
      id: 2,
      tag: "",
      title: "AirPods Max 2 - Midnight",
      subtitle: "MRP ₹67900.00 (Incl. of all taxes)",
      image: cardl2,
      textColor: "dark"
    },
    {
      id: 3,
      tag: "Free Engraving",
      title: "AirPods Pro 3",
      subtitle: "MRP ₹25900.00 (Incl. of all taxes)",
      image: cardl3,
      textColor: "dark"
    },
    {
      id: 4,
      tag: "Free Engraving",
      title: "AirPods 4 with Active Noise Cancellation",
      subtitle: "MRP ₹17900.00 (Incl. of all taxes)",
      image: cardl4,
      textColor: "dark"
    },
    {
      id: 5,
      tag: "",
      title: "Powerbeats Pro 2 – Electric Orange",
      subtitle: "MRP ₹29900.00 (Incl. of all taxes)",
      image: cardl5,
      textColor: "dark"
    },
    {
      id: 6,
      tag: "",
      title: "HomePod - Midnight",
      subtitle: "MRP ₹44900.00 (Incl. of all taxes)",
      image: cardl6,
      textColor: "dark"
    },
    {
      id: 7,
      tag: "",
      title: "HomePod mini - Orange",
      subtitle: "MRP ₹15900.00 (Incl. of all taxes)",
      image: cardl7,
      textColor: "dark"
    },
    {
      id: 8,
      tag: "",
      title: "Beats Solo 4 – Cloud Pink",
      subtitle: "MRP ₹22900.00 (Incl. of all taxes)",
      image: cardl8,
      textColor: "dark"
    },
    {
      id: 9,
      tag: "",
      title: "Beats Pill – Statement Red",
      subtitle: "MRP ₹16900.00 (Incl. of all taxes)",
      image: cardl9,
      textColor: "dark"
    }
  ];

  return (
    <section className="loud">
      <h2>
        Loud and clear. <span>Unparalleled choices for rich, high-quality sound.</span>
      </h2>

      <div className="slider-wrapper">
        <div className="cards">
          {loudCards.map((card, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={card.id}
                className={`card ${card.textColor} ${isFirst ? "card-first" : ""}`}
              >
                {isFirst && (
                  <div className="overlay">
                    <h3>{card.title}</h3>
                    {card.subtitle && <p>{card.subtitle}</p>}
                  </div>
                )}

                <div className="card-img-wrapper">
                  <img src={card.image} alt={card.title} className="card-img" />
                </div>

                {!isFirst && (
                  <div className="overlay">
                    {card.tag && <p className="tag">{card.tag}</p>}
                    <h3>{card.title}</h3>
                    {card.subtitle && <p>{card.subtitle}</p>}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button className="arrow right" aria-label="Next">
          ›
        </button>
      </div>
    </section>
  );
}

export default LoudAndClear;