import React, { useState } from "react";
import './App.css';

import left from './assets/left-arrow.png';
import right from './assets/right-arrow.png';

const messages = [
    "Get up to 6 months of No Cost EMI Footnote ◊ plus up to ₹10000.00 instant cashback Footnote ∆ on selected products with eligible cards. See offers",
    "Now you can buy Apple Watch with education savings. Footnote ± Learn more."
];

function NavbarMessage(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
    };

    return(
        <div className="nav-message">
            <img src={left} onClick={handlePrev} style={{ cursor: 'pointer' }} alt="Previous"/>
            <div className="msg">
                <p>{messages[currentIndex]}</p>
                <div className="plus">
                    <p>+</p>
                </div>
            </div>
            <img src={right} onClick={handleNext} style={{ cursor: 'pointer' }} alt="Next"/>
        </div>
    )
}

export default NavbarMessage;