import React from "react";
import { useRef, useState } from "react";
import './App.css';

import mac from './assets/hero/mac.png';
import iphone from './assets/hero/iphone.png';
import accessories from './assets/hero/accessories.png';
import airpods from './assets/hero/airpods.png';
import airtag from './assets/hero/airtag.png';
import apple_tv from './assets/hero/apple_tv.png';
import apple_watch from './assets/hero/apple_watch.png';
import homepod from './assets/hero/homepod.png';
import ipad from './assets/hero/ipad.png';

import left_arrow from './assets/left-arrow.png';
import right_arrow from './assets/right-arrow.png';

function Hero(){

    const products = [
        {
            name: "Mac",
            image: mac
        },
        {
            name: "iPhone",
            image: iphone
        },
        {
            name: "iPad",
            image: ipad
        },
        {
            name: "Apple Watch",
            image: apple_watch
        },
        {
            name: "AirPods",
            image: airpods
        },
        {
            name: "AirTag",
            image: airtag
        },
        {
            name: "Apple TV 4k",
            image: apple_tv
        },
        {
            name: "HomePod",
            image: homepod
        },
        {
            name: "Accessories",
            image: accessories
        }

    ]

    const sliderRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);

    const checkScroll = () => {
        const slider = sliderRef.current;
        setShowLeft(slider.scrollLeft > 10);
    }

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -200,
            behavior : "smooth"
        });
        setTimeout(checkScroll, 300);
    }

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 200,
            behavior : "smooth"
        })
    }

    return(
        <section className="hero">
            <div className="hero-top">
                <div>
                    <h1>Store</h1>
                </div>
                <div>
                    <h2>The best way to buy the products you love.</h2>
                    <p>Connect with a Specialist</p>
                    <p>Find an Apple Store</p>
                </div>
            </div>
            <div className="slider-wrapper">
                {
                    showLeft && 
                    <button className="arrow left" onClick={scrollLeft}>
                        <img src={left_arrow} alt="left arrow"/>
                    </button>
                }
                <div className="slider" ref={sliderRef} onScroll={checkScroll}>
                    {
                        products.map((item) => (
                            <div className="product">
                                <img src={item.image} alt={item.name}/>
                                <p>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
                <button className="arrow right" onClick={scrollRight}>
                    <img src={right_arrow} alt="left arrow"/>
                </button>
            </div>
        </section>
    )
}

export default Hero;