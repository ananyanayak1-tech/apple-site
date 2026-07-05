import React from "react";
import './App.css';

import cardd1 from './assets/difference/cardd1.png';
import cardd2 from './assets/difference/cardd2.png';
import cardd3 from './assets/difference/cardd3.png';
import cardd4 from './assets/difference/cardd4.png';
import cardd5 from './assets/difference/cardd5.png';
import cardd6 from './assets/difference/cardd6.png';

function Difference() {
  // 2. Define the product/difference cards array
  const cards = [
    {
      id: 1,
      image: cardd1,
      alt: "No Cost EMI and Instant Cashback"
    },
    {
      id: 2,
      image: cardd2,
      alt: "Exchange your smartphone"
    },
    {
      id: 3,
      image: cardd3,
      alt: "Customise your Mac"
    },
    {
      id: 4,
      image: cardd4,
      alt: "Make them yours engraving"
    },
    {
    id: 5,
      image: cardd5,
      alt: "Make them yours engraving" 
    },
    {
        id: 6,
      image: cardd6,
      alt: "Make them yours engraving"
    }
  ];

  return (
    <section className="difference-section">
      <h2>
        The Apple Store difference.{" "}
        <span>Even more reasons to shop with us.</span>
      </h2>

      <div className="difference-slider-wrapper">
        <div className="difference-cards">
          {cards.map((card) => (
            <div key={card.id} className="diff-card">
              <img 
                src={card.image} 
                alt={card.alt} 
                className="diff-card-img" 
              />
            </div>
          ))}
        </div>

        {/* Optional Right Navigation Arrow */}
        <button className="diff-arrow-right" aria-label="Next">
          ‹
        </button>
      </div>
    </section>
  );
}

export default Difference;