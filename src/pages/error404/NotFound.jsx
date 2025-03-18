import React, { useContext } from "react";
import "./notFound.css";
import { TranslationContext } from "/src/context/TranslationContext.jsx";

const NotFound = () => {
  const { section404 } = useContext(TranslationContext);

  return (
    <div className="error-container">
      <div>
        <div className="msj-container">
          <h1>{section404.title}</h1>
          <p>{section404.subTitle}</p>
          <p>{section404.paragraf}</p>
        </div>
        <div className="button-container">{section404.btn}</div>
      </div>
      {/* <img src={errorImg} alt="Error 404" className="bg-image" /> */}
    </div>
  );
};

export default NotFound;
