import React from "react";
import { useState } from "react";
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Latest from "./Latest";
import Difference from "./differencs";
import Help from "./help";
import Accessories from "./accessories";
import Loudclear from "./loudclear";
import Experience from "./experience";
import Savings from "./savings";
import Footer from "./Footer";

function App(){

  const [active, setActive] = useState("");
  return(
    <>
      <Navbar active={active} setActive={setActive}/>
      <div className={active ? "main-content-blur" : "main-content"}>
        <Hero />
        <Latest />
        <Difference />
        <Help/>
        <Accessories />
        <Loudclear />
        <Experience />
        <Savings/>
        <Footer />
      </div>
    </>
  )
}

export default App;