import React from "react";
import CardExp from "./CardExp";
import { useState, useRef, useEffect } from "react";

const CardsExpSlider = () => {
  const cards = [
    {
      title1: "FullStack",
      title2: "Codelens",
      title3: "Diciembre 2024 - Actualidad 2025",
      description:
        "Colaboro como fullstack, trabajando en equipo con otros desarrolladores en diversos proyectos. Me adapto a las necesidades del proyecto, desempeñando roles tanto en frontend como en backend, aplicando tecnologías como React, C#, .NET y MySQL. Esta experiencia me ha permitido fortalecer mis habilidades técnicas y de trabajo en equipo en un entorno colaborativo.",
    },
    {
      title1: "FullStack2",
      title2: "Codelens",
      title3: "Diciembre 2024 - Actualidad 2025",
      description:
        "Colaboro como fullstack, trabajando en equipo con otros desarrolladores en diversos proyectos. Me adapto a las necesidades del proyecto, desempeñando roles tanto en frontend como en backend, aplicando tecnologías como React, C#, .NET y MySQL. Esta experiencia me ha permitido fortalecer mis habilidades técnicas y de trabajo en equipo en un entorno colaborativo.",
    },
    {
      title1: "FullStack3",
      title2: "Codelens",
      title3: "Diciembre 2024 - Actualidad 2025",
      description:
        "Colaboro como fullstack, trabajando en equipo con otros desarrolladores en diversos proyectos. Me adapto a las necesidades del proyecto, desempeñando roles tanto en frontend como en backend, aplicando tecnologías como React, C#, .NET y MySQL. Esta experiencia me ha permitido fortalecer mis habilidades técnicas y de trabajo en equipo en un entorno colaborativo.",
    },
    {
      title1: "FullStack4",
      title2: "Codelens",
      title3: "Diciembre 2024 - Actualidad 2025",
      description:
        "Colaboro como fullstack, trabajando en equipo con otros desarrolladores en diversos proyectos. Me adapto a las necesidades del proyecto, desempeñando roles tanto en frontend como en backend, aplicando tecnologías como React, C#, .NET y MySQL. Esta experiencia me ha permitido fortalecer mis habilidades técnicas y de trabajo en equipo en un entorno colaborativo.",
    },
  ];

  const exp = cards;
  const lengthExp = cards.length;
  const [currentCard, setCurrentCard] = useState(0);

  const rightHandler = () => {
    if (currentCard < lengthExp - 1) {
      setCurrentCard(currentCard + 1);
    }
    // else {
    //   setCurrentCard(0);
    // }
  };

  const leftHandler = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
    // else {
    //   setCurrentCard(lengthExp - 1);
    // }
  };

  return (
    <div className="flex-container-column">
      <div className="felx-container-row exp-slider">
        <CardExp
          title1={exp[currentCard].title1}
          title2={exp[currentCard].title2}
          title3={exp[currentCard].title3}
          description={exp[currentCard].description}
        />
      </div>
      <div className="right-arrow">
        <button onClick={rightHandler}>
          <img src="/public/imgs/right-arrow.svg" />
        </button>
      </div>
      <div className="left-arrow ">
        <button onClick={leftHandler}>
          <img src="/public/imgs/left-arrow.svg" />
        </button>
      </div>
    </div>
  );
};

export default CardsExpSlider;
