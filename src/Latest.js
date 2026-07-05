import React from "react";
import './App.css';

import card1 from './assets/latest/card1.jpg';
import card2 from './assets/latest/card2.jpg';
import card3 from './assets/latest/card3.jpg';
import card4 from './assets/latest/card4.jpg';
import card5 from './assets/latest/card5.jpg';
import card6 from './assets/latest/card6.jpg';
import card7 from './assets/latest/card7.jpg';
import card8 from './assets/latest/card8.jpg';
import card9 from './assets/latest/card9.jpg';
import card10 from './assets/latest/card10.jpg';
import card11 from './assets/latest/card11.jpg';
import card12 from './assets/latest/card12.jpg';
import card13 from './assets/latest/card13.jpg';

function Latest(){

    const products = [
        {
            tag : "",
            title: "iPhone 17 Pro",
            subtitle: "All Out Pro",
            price: "From ₹134900.00 Footnote †",
            image: card1,
            text: "white"
        },
        {
            tag : "NEW",
            title: "MacBook Neo",
            subtitle: "Light. Speed.",
            price: "From ₹79990.00 Footnote †",
            image: card2,
            text: "dark"
        },
        {
            tag : "",
            title: "iPhone 17e",
            subtitle: "Capabilities packed.",
            price: "From ₹59990.00 Footnote †",
            image: card3,
            text: "dark"
        },
        {
            tag : "",
            title: "AirPods Max 2",
            subtitle: "Pure soundscape.",
            price: "From ₹59900.00 Footnote †",
            image: card4,
            text: "dark"
        },
        {
            tag : "",
            title: "MacBook Pro",
            subtitle: "Mind-blowing. Head-turning.",
            price: "From ₹169900.00 Footnote †",
            image: card5,
            text: "white"
        },
        {
            tag : "",
            title: "MacBook Air",
            subtitle: "Lean. Clean. M-powered machine.",
            price: "From ₹99900.00 Footnote †",
            image: card6,
            text: "white"
        },
        {
            tag : "",
            title: "ipad Air",
            subtitle: "Fresh Air.",
            price: "From ₹59900.00 Footnote †",
            image: card7,
            text: "white"
        },
        {
            tag : "",
            title: "Apple Watch Series 11",
            subtitle: "Thinner. Even more to love.",
            price: "From ₹41900.00 Footnote †",
            image: card8,
            text: "dark" // Changed to dark in case text was invisible against white background
        },
        {
            tag : "",
            title: "iphone 17",
            subtitle: "A total powerhouse.",
            price: "From ₹79990.00 Footnote †",
            image: card9,
            text: "dark" 
        },
        {
            tag : "",
            title: "iphone Air",
            subtitle: "Impossibly thin.",
            price: "From ₹89990.00 Footnote †",
            image: card10,
            text: "dark" 
        },
        {
            tag : "",
            title: "Studio display",
            subtitle: "Something beautiful to see.",
            price: "From ₹159900.00 Footnote †",
            image: card11,
            text: "dark" // Changed to dark
        },
        {
            tag : "",
            title: "Studio Display XDR",
            subtitle: "Pro power.",
            price: "From ₹459900.00 Footnote †",
            image: card12,
            text: "white" // Changed to dark
        },
        {
            tag : "",
            title: "Apple Watch SE 3",
            subtitle: "A great deal to love.",
            price: "From ₹24900.00 Footnote †",
            image: card13,
            text: "dark" // Changed to dark
        },
    ];

    return(
        <section className="latest">
            <h2>The latest. <span>Take a look at what’s new right now.</span></h2>
            <div className="slider-wrapper">
                <div className="cards">
                    {
                        products.map((item, index) => (
                            /* Added dynamic key prop here */
                            <div key={index} className={`card ${item.text}`} style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="overlay">
                                    {
                                        item.tag ? (
                                            <p className="tag">{item.tag}</p>
                                        ) : (
                                            <div className="space"/>
                                        )
                                    }
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Latest;