import React from "react";
import { Navbar } from "./Components";
import { Hero, Core, AboutUs, Trust } from "./Pages";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import bgElement from "./assets/Green.png";

const App = () => {
  return (
    <Router>
      <div className="container1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/core" element={<Core />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="trust" element={<Trust />} />
        </Routes>
        <img src={bgElement} alt="bgElemnt" className="bgElement" />
        <img src={bgElement} alt="bgElemnt2" className="bgElement2" />

      </div>
      
    </Router>
  );
};

export default App;
