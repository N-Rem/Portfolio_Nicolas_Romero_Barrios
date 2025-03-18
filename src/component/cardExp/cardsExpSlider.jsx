import React from "react";
import CardExp from "./CardExp";
import { useState, useRef, useEffect, useContext } from "react";
import { TranslationContext } from "/src/context/TranslationContext.jsx";

const CardsExpSlider = () => {
  const { sectionExp } = useContext(TranslationContext);
  const lengthExp = sectionExp.length;
  const [currentCard, setCurrentCard] = useState(0);

  const rightHandler = () => {
    if (currentCard < lengthExp - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const leftHandler = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  return (
    <div className="flex-container-column">
      <div className="felx-container-row exp-slider">
        <CardExp
          title1={sectionExp[currentCard].title1}
          title2={sectionExp[currentCard].title2}
          title3={sectionExp[currentCard].title3}
          description={sectionExp[currentCard].description}
        />
      </div>
      {//botones para agregar mas experiensas...
      
      /* <div className="right-arrow">
        <button onClick={rightHandler}>
          <img src="/public/imgs/right-arrow.svg" />
        </button>
      </div>
      <div className="left-arrow ">
        <button onClick={leftHandler}>
          <img src="/public/imgs/left-arrow.svg" />
        </button>
      </div> */}
    </div>
  );
};

export default CardsExpSlider;
