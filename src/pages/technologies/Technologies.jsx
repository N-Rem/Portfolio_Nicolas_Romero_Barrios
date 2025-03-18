import React, { useContext } from "react";
import "./technologies.css";
import SliderTech from "/src/component/sliderTech/SliderTech.jsx";
import { TranslationContext } from "/src/context/TranslationContext.jsx";

const Technologies = () => {
  const { sectionTech } = useContext(TranslationContext);

  return (
    <div id="tech" className="tech-container flex-container-column">
      <div className="content-tech-container flex-container-column">
        <h2>{sectionTech.title}</h2>
        <p>{sectionTech.paragraf1}</p>
        <p>{sectionTech.paragraf2}</p>
        <p>{sectionTech.paragraf3}</p>
        <p>{sectionTech.paragraf4}</p>
      </div>
      <SliderTech />
    </div>
  );
};

export default Technologies;
