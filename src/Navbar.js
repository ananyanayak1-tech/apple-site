import React from "react";
import './App.css';

import logo from './assets/apple-logo.png';
import search from './assets/search.png';
import bag from './assets/bag.png';
import DropdownMenu from "./DropdownMenu";
import NavbarMessage from "./NavbarMessage";

function Navbar({active, setActive}){

    const menuData = {
        Store:{
            "Shop": ["Shop the Latest","Mac","iPad","iPhone","Apple Watch", "AirPods", "Accessories"],
            "Quick Links": ["Find a store","Order Status","Apple Trade In", "Ways to Buy", "Personal Setup"],
            "Shop Special Stores": ["Education" ,"Business"]
        },
        Mac:{
            "Explore Mac": ["Explore All Mac","Macbook Neo","iPad","iPhone","Apple Watch", "AirPods", "Accessories"],
            "Shop Mac": ["Shop Mac","Mac Accessories","Apple Trade In", "Ways to Buy", "Personal Setup"],
            "More from Mac": ["Mac Support" ,"Apple care"]
        },
        iPad:{
            "Explore iPad": ["Explore All iPad","iPad Pro","iPad Air","iPad Mini","Apple Pencil", "Keyboards", "Accessories"],
            "Shop iPad": ["Shop iPad", "iPad Accessories", "Ways to Buy", "Personal Setup"],
            "More from iPad": ["iPad Support", "AppleCare", "iPadOS 27 Preview", "Apple Intelligence and Siri", "Apple Creator Studio", "Apps by Apple", "iCloud+", "Education"]
        },
        iPhone:{
            "Explore iPhone": ["Explore All iPhone", "iPhone 17 Pro" ,"iPhone Air", "iPhone 17", "iPhone 17e", "iPhone 16"],
            "Shop iPhone": ["iPhone Accessories", "Apple Trade In", "iPhone Support", "AppleCare", "iOS 27 Preview","Apple Intelligence and Siri", "Ways to Buy", "Personal Setup"],
            "More from iPhone": ["Apps by Apple", "iPhone Privacy","Better with Mac", "iCloud+", "Wallet"]
        },
        Watch:{
            "Explore Watch": ["Explore All Apple Watch", "Apple Watch Series 11", "Apple Watch SE 3", "Apple Watch Ultra 3", "Apple Watch Nike"],
            "Shop Watch": ["Shop Apple Watch Apple Watch Straps", "Apple Watch Accessories", "Ways to Buy", "Personal Setup"],
            "More from Watch": ["Apple Watch Support AppleCare" ,"watchOS 27 Preview","Apple Watch For Your Kids","Apps by Apple","Apple Fitness+", "Education"]
        },
        AirPods:{
            "Explore AirPods": ["Explore All AirPods", "AirPods Pro 3", "AirPods 3", "AirPods Max 2"],
            "Shop AirPods": ["Shop AirPods", "AirPods Accessories", "Ways to Buy", "Personal Setup"],
            "More from AirPods": ["AirPods Support", "AppleCare", "AirPods Privacy", "Apple Intelligence and Siri", "Apps by Apple"]
        },
        "TV & Home":{
            "Explore TV & Home": ["Explore All TV & Home", "Apple TV 4K", "Apple TV HD", "HomePod 2", "HomePod mini"],
            "Shop TV & Home": ["Shop Apple TV", "Shop HomePod", "Apple TV Accessories", "HomePod Accessories", "Ways to Buy", "Personal Setup"],
            "More from TV & Home": ["Apple TV Support", "HomePod Support", "AppleCare", "tvOS 27 Preview", "Apple Intelligence and Siri", "Apps by Apple"]
        },
        Entertainment:{
            "Explore Entertainment": ["Apple One", "Apple Music", "Apple TV+", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books"],
            "Shop Entertainment": ["Shop Apple Music", "Shop Apple TV+", "Shop Apple Arcade", "Shop Apple Fitness+", "Shop Apple News+", "Shop Apple Podcasts", "Shop Apple Books"],
            "More from Entertainment": ["Apple One Support", "Apple Music Support", "Apple TV+ Support", "Apple Arcade Support", "Apple Fitness+ Support", "Apple News+ Support", "Apple Podcasts Support", "Apple Books Support"]  
        },
        Accessories:{
            "Explore Accessories": ["Explore All Accessories", "AirTag", "Apple Pencil", "Apple Watch Straps", "MagSafe Charger", "MagSafe Battery Pack"],
            "Shop Accessories": ["Shop AirTag", "Shop Apple Pencil", "Shop Apple Watch Straps", "Shop MagSafe Charger", "Shop MagSafe Battery Pack"],
            "More from Accessories": ["Accessories Support", "AppleCare", "Apple Intelligence and Siri", "Apps by Apple"]
        },
        Support:{
            "Explore Support": ["Explore All Support", "AppleCare", "Apple One Support", "Apple Music Support", "Apple TV+ Support", "Apple Arcade Support", "Apple Fitness+ Support", "Apple News+ Support"],
            "Shop Support": ["Shop AppleCare", "Shop Apple One", "Shop Apple Music", "Shop Apple TV+", "Shop Apple Arcade", "Shop Apple Fitness+", "Shop Apple News+", "Shop Apple Podcasts", "Shop Apple Books"],
            "More from Support": ["Support for Mac", "Support for iPad", "Support for iPhone", "Support for Watch", "Support for AirPods", "Support for TV & Home", "Support for Entertainment", "Support for Accessories"]
        }

}

    const menu = [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "Entertainment",
        "Accessories",
        "Support"
    ]

    return(
        <div className="nav-wrapper" onMouseLeave={() => setActive("")}>
    
        <nav className="navbar">
            <img src={logo} className="nav-icon" alt="Apple logo"/>
            {
               menu.map((item)=>(
                 <p key={item} 
                    onMouseEnter={() => setActive(item)}>
                    {item}
                  </p>
               ))
            }

            <img src={search} className="nav-btn" alt="Search"/>
            <img src={bag} className="nav-btn" alt="Bag"/>
        </nav>

        <div onMouseDown={() => setActive("")}/> 
        { 
            !active && ( <NavbarMessage/>)
        }
        {
            active && ( <DropdownMenu data={menuData[active]}/>)
        }
       
        </div>
    )
}

export default Navbar;