import React from "react";
import "./App.css";

import cards1 from "./assets/savings/cards1.jpg";

function Savings() {
  return (
    <section className="savings">
      <h2>
        Savings and offers. <span>Exclusive deals, special stores and more.</span>
      </h2>

      <div className="savings-cards">
        <div className="card">
          <div className="card-text">
            <p className="tag">EDUCATION</p>
            <h4 className="card-title">
              Save on a new Mac, iPad and Apple Watch with education pricing.<sup>±</sup>
            </h4>
          </div>

          <div className="card-img-wrapper">
            <img src={cards1} alt="Education pricing" className="card-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Savings;