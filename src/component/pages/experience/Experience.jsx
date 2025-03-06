import React from "react";
import "./experience.css";
import CardExp from "../../cardExp/CardExp";
import CardsExpSlider from "../../cardExp/cardsExpSlider";

const Experience = () => {
  

  return (
    <div className="exp-container flex-container-column">
      <h2 id="Exp">Experiencia</h2>
      <CardsExpSlider />
    </div>
  );
};

export default Experience;
