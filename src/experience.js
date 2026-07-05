import React from "react";
import "./App.css";

import carde1 from "./assets/experience/carde1.jpg";
import carde2 from "./assets/experience/carde2.png";
import carde3 from "./assets/experience/carde3.jpg";
import carde4 from "./assets/experience/carde4.jpg";
import carde5 from "./assets/experience/carde5.jpg";
import carde6 from "./assets/experience/carde6.jpg";
import carde7 from "./assets/experience/carde7.jpg";

function Experience() {
  const experienceCards = [
    {
      id: 1,
      tag: "",
      title: "Apple Intelligence.",
      subtitle: "Create, communicate and get things done effortlessly.²",
      image: carde1,
      gradientTitle: true
    },
    {
      id: 2,
      tag: "TODAY AT APPLE",
      title: "Join the fun at Apple Camp",
      subtitle: "Create a helpful superhero in a free session on iPad. For kids aged 6–10.",
      image: carde2
    },
    {
      id: 3,
      tag: "CONTINUITY",
      title: "Powerful alone. Superpowered together.",
      subtitle: "",
      image: carde3
    },
    {
      id: 4,
      tag: "APPLE STORE APP",
      title: "Put your bow on it.",
      subtitle: "Make the gift unmistakably theirs with a personalised message created especially for them.",
      image: carde4
    },
    {
      id: 5,
      tag: "",
      title: "Four Apple services. One easy subscription.",
      subtitle: "",
      image: carde5
    },
    {
      id: 6,
      tag: "",
      title: "We've got you covered.",
      subtitle: "AppleCare+ now comes with unlimited repairs for accidental damage protection.",
      image: carde6
    },
    {
      id: 7,
      tag: "HOME",
      title: "See how one app can control your entire home.",
      subtitle: "",
      image: carde7
    }
  ];

  return (
    <section className="experience">
      <h2>
        The Apple experience. <span>Do even more with Apple products and services.</span>
      </h2>

      <div className="slider-wrapper">
        <button className="arrow left" aria-label="Previous">
          ‹
        </button>

        <div className="cards">
          {experienceCards.map((card) => (
            <div key={card.id} className="card">
              <div className="card-text">
                {card.tag && <p className="tag">{card.tag}</p>}
                <h4 className={`card-title ${card.gradientTitle ? "gradient" : ""}`}>
                  {card.title}
                </h4>
                {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}
              </div>

              <div className="card-img-wrapper">
                <img src={card.image} alt={card.title} className="card-img" />
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" aria-label="Next">
          ›
        </button>
      </div>
    </section>
  );
}

export default Experience;