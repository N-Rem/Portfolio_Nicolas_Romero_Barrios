import React, { useContext } from "react";
import "./about.css";
import ButtonCv from "/src/component/buttons/ButtonCv.jsx";
import { TranslationContext } from "/src/context/TranslationContext.jsx";

const About = () => {
  const { textLanguage, sectionAbout } = useContext(TranslationContext);
 
  // const cvNRB  = t("about.cvFile");
  const cvNicolasRomeroBarrios = `Nicolás-Romero-Barrios-cv-${textLanguage.toLowerCase()}`;
  const cvRout = `/public/cvs/Nicolás-Romero-Barrios-cv-${textLanguage.toLowerCase()}.pdf`;

    return (
    <div className="flex-container-column">
      <h2 id="about">{sectionAbout.title}</h2>
      <div className="about-container flex-container-row">
        <div className="photo-container">
          <img alt="my-photo" src="/public/imgs/photo-redona.svg" />
        </div>
        <div className="content-container flex-container-column">
          <p>{sectionAbout.paragraf1}</p>
          <p> {sectionAbout.paragraf2}
          </p>
          <p className="pharagraf-machin">
          {sectionAbout.paragraf3}</p>
        </div>
      </div>
      <div className="buttonCv-container flex-container-column">
        <p>
        {sectionAbout.invitation}
        </p>
        <a href={cvRout} download={cvNicolasRomeroBarrios}>
          <ButtonCv text={sectionAbout.btnCv} />
        </a>
      </div>
    </div>
  );
};

export default About;
