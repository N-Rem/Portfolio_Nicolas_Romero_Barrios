import React,{useContext} from "react";
import "./experience.css";
import CardExp from "/src/component/cardExp/CardExp.jsx";
import CardsExpSlider from "/src/component/cardExp/cardsExpSlider.jsx";

import { TranslationContext } from "/src/context/TranslationContext.jsx";

const Experience = () => {
    const { sectionExpTitle, sectionExp} = useContext(TranslationContext);
  
  return (
    <div className="exp-container flex-container-column">
      <h2 id="exp">{sectionExpTitle}</h2>
      <CardsExpSlider />
    </div>
  );
};

export default Experience;
