import React from "react";
import './App.css';

import carda1 from './assets/accessories/carda1.jpg';
import carda2 from './assets/accessories/carda2.jpg';
import carda3 from './assets/accessories/carda3.jpg';
import carda4 from './assets/accessories/carda4.jpg';
import carda5 from './assets/accessories/carda5.jpg';
import carda6 from './assets/accessories/carda6.jpg';
import carda7 from './assets/accessories/carda7.jpg';
import carda8 from './assets/accessories/carda8.jpg';
import carda10 from './assets/accessories/carda10.jpg';
import carda11 from './assets/accessories/carda11.jpg';
import carda12 from './assets/accessories/carda12.jpg';

function Accessories() {
  const colorSwatches = ["#f4c2c2", "#f6e2c4", "#e8e259", "#3a3a3c", "#b5602f", "#6d7a8c"];

  const products = [
    {
      id: 1,
      tag: "New",
      title: "iPhone 17 Pro Silicone Case with MagSafe – Bright Guava",
      price: "MRP ₹4900.00 (Incl. of all taxes)",
      image: carda2,
      colors: colorSwatches
    },
    {
      id: 2,
      tag: "New",
      title: "Crossbody Strap - Bright Guava",
      price: "MRP ₹5900.00 (Incl. of all taxes)",
      image: carda3,
      colors: colorSwatches
    },
    {
      id: 3,
      tag: "",
      title: "MagSafe Charger (1m)",
      price: "MRP ₹4500.00 (Incl. of all taxes)",
      image: carda4,
      colors: []
    },
    {
      id: 4,
      tag: "New",
      title: "iPhone 17e Clear Case with MagSafe",
      price: "MRP ₹4900.00 (Incl. of all taxes)",
      image: carda5,
      colors: []
    },
    {
      id: 5,
      tag: "",
      title: "46mm Clementine Sport Band - M/L",
      price: "MRP ₹4500.00 (Incl. of all taxes)",
      image: carda6,
      colors: colorSwatches
    },
    {
      id: 6,
      tag: "",
      title: 'Magic Keyboard for iPad Air 13" (M4) - US English - Black',
      price: "MRP ₹29900.00 (Incl. of all taxes)",
      image: carda7,
      colors: ["#ffffff", "#1d1d1f"]
    },
    {
      id: 7,
      tag: "",
      title: "iPhone Air MagSafe Battery",
      price: "MRP ₹11900.00 (Incl. of all taxes)",
      image: carda8,
      colors: []
    },
    {
      id: 8,
      tag: "",
      title: "iPhone Air Bumper - Tan",
      price: "MRP ₹3900.00 (Incl. of all taxes)",
      image: carda10,
      colors: ["#a8b8d8", "#c9a688", "#b0b0b0", "#1d1d1f"]
    },
    {
      id: 9,
      tag: "",
      title: "20W USB-C Power Adapter",
      price: "MRP ₹2190.00 (Incl. of all taxes)",
      image: carda11,
      colors: []
    }
  ];

  return (
    <section className="accessories-section">
      <h2>
        Accessories. <span>Essentials that pair perfectly with your favourite devices.</span>
      </h2>

      <div className="accessories-slider-wrapper">
        <button className="acc-arrow-left" aria-label="Previous">
          ‹
        </button>

        <div className="accessories-cards">
          {/* Intro card */}
          <div className="acc-card intro-card">
            <h3>Here and wow.</h3>
            <p>The accessories you love.<br />In a fresh mix of colours.</p>
            <img src={carda1} alt="Accessories collection" className="acc-card-img" />
          </div>

          {/* Product cards */}
          {products.map((product) => (
            <div key={product.id} className="acc-card">
              <div className="acc-img-wrapper">
                <img src={product.image} alt={product.title} className="acc-card-img" />
              </div>

              {product.colors.length > 0 && (
                <div className="acc-colors">
                  {product.colors.slice(0, 6).map((color, index) => (
                    <span
                      key={index}
                      className="acc-color-dot"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                  {product.colors.length > 6 && <span className="acc-color-more">+</span>}
                </div>
              )}

              {product.tag && <p className="acc-tag">{product.tag}</p>}
              <h4 className="acc-title">{product.title}</h4>
              <p className="acc-price">{product.price}</p>
            </div>
          ))}

          {/* Explore all card */}
          <div className="acc-card explore-card">
            <h3>Explore all accessories.</h3>
            <img src={carda12} alt="Explore all accessories" className="explore-img" />
          </div>
        </div>

        <button className="acc-arrow-right" aria-label="Next">
          ›
        </button>
      </div>
    </section>
  );
}

export default Accessories;