import React, { useContext } from "react";
import "./notFound.css";
import { TranslationContext } from "/src/context/TranslationContext.jsx";
import ButtonCv from "/src/component/buttons/ButtonCv.jsx";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const { section404 } = useContext(TranslationContext);
  const navigate = useNavigate();
  
    return (
    <div className="error-container flex-container-column">
      <div>
        <div className="msj-container flex-container-column">
          <h1>{section404.title}</h1>
          <p>{section404.subTitle}</p>
          <p>{section404.paragraf}</p>
          <ButtonCv text={section404.btn} onButtonHandler={() => navigate('/')} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
