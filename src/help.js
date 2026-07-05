import React from "react";
import "./App.css";

// Import all 6 card background images in order
import cardh1 from "./assets/help/cardh1.jpg";
import cardh2 from "./assets/help/cardh2.jpg";
import cardh3 from "./assets/help/cardh3.jpg";
import cardh4 from "./assets/help/cardh4.jpg";
import cardh5 from "./assets/help/cardh5.jpg";
import cardh6 from "./assets/help/cardh6.jpg";
import cardh7 from "./assets/help/cardh7.png";

function Help() {
  const helpCards = [
    {
      id: 1,
      tag: "",
      title: "Shop with a Specialist over video",
      subtitle: "Choose your next device in a guided, one-way video session.",
      image: cardh1,
      textColor: "dark"
    },
    {
      id: 2,
      tag: "APPLE SPECIALIST",
      title: "Shop one on one with a Specialist online.",
      subtitle: "",
      image: cardh2,
      textColor: "dark"
    },
    {
      id: 3,
      tag: "Today at Apple",
      title: "Explore Apple Intelligence",
      subtitle: "Come and try it for yourself in a free session at the Apple Store.",
      image: cardh3,
      textColor: "dark"
    },
    {
      id: 4,
      tag: "Today at Apple",
      title: "Join free sessions at your Apple Store.",
      subtitle: "Learn about the latest features and how to go further with your Apple devices.",
      image: cardh4,
      textColor: "dark"
    },
    {
      id: 5,
      tag: "SMALL BUSINESS",
      title: "From enterprise to small business, we’ll work with you.¹",
      subtitle: "",
      image: cardh5,
      textColor: "white" // This card has a dark background, making text white
    },
    {
      id: 6,
      tag: "PERSONAL SETUP",
      title: "Set up your new device with help from a Specialist.",
      subtitle: "Let us guide you through data transfer, the latest features and more, in an online, one-to-one session.",
      image: cardh6,
      textColor: "dark"
    },
    {
        id: 7,
        tag: "",
        title: "",
        subtitle: "",
        image: cardh7,
        textColor: "dark"
    }
  ];

  return (
    <section className="help-section">
      <h2>
        Help is here. <span>Whenever and however you need it.</span>
      </h2>

      <div className="help-slider-wrapper">
        <div className="help-cards">
          {helpCards.map((card) => (
            <div
              key={card.id}
              className={`help-card ${card.textColor}`}
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="help-overlay">
                {card.tag && <p className="help-tag">{card.tag}</p>}
                <h3>{card.title}</h3>
                {card.subtitle && <p className="help-subtitle">{card.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Slider Control Arrow */}
        <button className="help-arrow-right" aria-label="Next">
          ‹
        </button>
      </div>
    </section>
  );
}

export default Help;