import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CreditCard from "../Components/CreditCard";

const Hero = () => {
  const Navigate = useNavigate();
  return (
    <React.StrictMode>
      <div className="full">
        <h1 className="title">
          <span className="silver-gradient ">Manage Your</span>{" "}
          <span className="green-gradient">Finance</span>
        </h1>
        <div className="Hero">
          <p className="description silver-gradient">
          Feeling overwhelmed by your finances? You're not alone. Juggling bills, tracking expenses, and planning for the future can feel like an insurmountable task. But managing your money doesn't have to be a chore that leaves you stressed and confused.

This app is your trusted companion, designed to be more than just a financial tool.{" "}
          </p>
          <CreditCard />
          {/* <img src={card} alt="SLSAC" className="logo" /> */}
          {/* <button className='goButton'>Click Me</button> */}
          <Button
            variant="light"
            className="goButton"
            onClick={() => Navigate("/core")}
          >
            Let's goo
          </Button>{" "}
        </div>
        {/* <div className='bgImages'>
        <img src={Green} alt="Green" className='green'/>
        <img src={Green} alt="Green" className='green2'/>
      </div> */}
      </div>
    </React.StrictMode>
  );
};

export default Hero;
